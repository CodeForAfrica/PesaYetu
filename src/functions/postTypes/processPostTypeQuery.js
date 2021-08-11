import formatBlockData from "@/pesayetu/functions/formatBlockData";
import getMenus from "@/pesayetu/functions/menus/getMenus";
import formatDefaultSeoData from "@/pesayetu/functions/seo/formatDefaultSeoData";
import {
  createWpApolloClient,
  initializeWpApollo,
} from "@/pesayetu/lib/wordpress/connector";

/**
 * Retrieve single post.
 *
 * @param  {string}          postType  WP post type.
 * @param  {number | string} id        Post identifier.
 * @param  {object}          query     Post retrieval query.
 * @param  {object}          variables Query variables.
 * @param  {string}          preview   Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @return {object}                    Object containing Apollo client instance and post data or error object.
 */
export default async function processPostTypeQuery(
  postType,
  id,
  query,
  variables = {},
  preview = null
) {
  // Get/create Apollo instance.
  const apolloClient = preview
    ? createWpApolloClient(true)
    : initializeWpApollo();

  // Set up return object.
  const response = {
    apolloClient,
    error: false,
    errorMessage: null,
  };

  // If no query is set for given post type, return error message.
  if (!query) {
    return {
      apolloClient,
      error: true,
      errorMessage: `Post type \`${postType}\` is not supported.`,
    };
  }

  // Execute query.
  response.post = await apolloClient
    .query({ query, variables })
    .then((res) => {
      const { homepageSettings, siteSeo, menus, ...postData } = res.data;

      // Retrieve menus.
      response.menus = getMenus(menus);

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({ homepageSettings, siteSeo });

      // Retrieve post data.
      const post =
        postData?.[postType] ?? // Dynamic posts.
        postData?.additionalSettings?.additionalSettings?.[postType]; // Settings custom page.
      // Set error props if data not found.
      if (!post) {
        response.error = true;
        response.errorMessage = `An error occurred while trying to retrieve data for ${postType} "${id}."`;

        return null;
      }

      // Retrieve blocks from archive stories page
      return {
        ...post,
        commonBlockJSON: homepageSettings?.postsPage?.blocksJSON ?? null,
      };
    })
    .then(async (post) => {
      // Add slug/ID to post.
      const newPost = {
        ...post,
        slug: id,
      };

      if (preview === "basic" || !post || !post?.blocksJSON) {
        return post;
      }

      // Handle blocks.
      const { blocksJSON, commonBlockJSON } = newPost;

      const blocks = await formatBlockData(JSON.parse(blocksJSON) ?? []);

      const commonPostBlocks = await formatBlockData(
        JSON.parse(commonBlockJSON) ?? []
      );

      newPost.blocks = blocks.concat(commonPostBlocks);

      delete newPost.blocksJSON;
      delete newPost.commonBlockJSON;

      return newPost;
    })
    .catch((error) => {
      response.error = true;
      response.errorMessage = error.message;
      return null;
    });

  return response;
}
