import getMenus from "@/pesayetu/functions/menus/getMenus";
import replaceMultisitePrefix from "@/pesayetu/functions/replaceMultisitePrefix";
import formatDefaultSeoData from "@/pesayetu/functions/seo/formatDefaultSeoData";
import { postTypes } from "@/pesayetu/lib/wordpress/_config/postTypes";
import queryPostsByCategory from "@/pesayetu/lib/wordpress/categories/queryPostsByCategory";
import { initializeWpApollo } from "@/pesayetu/lib/wordpress/connector";
import queryPostsByTag from "@/pesayetu/lib/wordpress/tags/queryPostsByTag";

/**
 * Retrieve post taxnomy archive.
 *
 * @param  {string}  taxonomy   WP taxonomy type slug.
 * @param  {string}  taxonomyId WP taxonomy term slug.
 * @param  {string}  postType   WP post type.
 * @param  {string}  orderBy    Order by: field.
 * @param  {string}  order      Order by: direction.
 * @param  {string}  cursor     Start/end cursor for pagination.
 * @param  {boolean} getNext    Whether to retrieve next set of posts (true) or previous set (false).
 * @param  {number}  perPage    Number of posts per page.
 * @return {object}             Object containing Apollo client instance and post archive data or error object.
 */
export default async function getPostTypeTaxonomyArchive(
  taxonomy,
  taxonomyId,
  offset = 0,
  size = 9,
  postType = "post",
  orderBy = "DATE",
  order = "DESC"
) {
  // Define single post query based on taxonomy.
  const postTypeQuery = {
    category: queryPostsByCategory,
    tag: queryPostsByTag,
  };

  // Retrieve taxonomy query.
  const query = postTypeQuery?.[taxonomy] ?? null;

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo();

  // Set up return object.
  const response = {
    apolloClient,
    posts: null,
    pagination: null,
    error: false,
    errorMessage: null,
  };

  // If no query is set for given taxonomy, return error message.
  if (!query) {
    return {
      apolloClient,
      error: true,
      errorMessage: `Taxonomy \`${taxonomy}\` archives are not supported.`,
    };
  }

  // Determine query variables.
  const variables = {
    id: taxonomyId,
    offset: parseInt(offset, 10),
    size: parseInt(size, 10),
    orderBy,
    order,
  };

  // Execute query.
  await apolloClient
    .query({ query, variables })
    .then(async (archive) => {
      const { homepageSettings, siteSeo, menus, categories, ...archiveData } =
        archive.data;

      response.categories = categories;
      // Retrieve menus.
      response.menus = await getMenus(menus);

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({ homepageSettings, siteSeo });

      const data = archiveData?.[taxonomy] ?? null;

      // Get post type plural name.
      const pluralName = postTypes?.[postType]?.pluralName;

      // Retrieve archive SEO.
      const archiveSeo = data?.seo;

      // Retrieve posts by post type.
      const { pageInfo, edges: posts } = data?.[pluralName] ?? {};

      // Set error props if data not found.
      if (!posts || !pageInfo) {
        response.error = true;
        response.errorMessage = `An error occurred while trying to retrieve data for ${taxonomyId} ${taxonomy} archive.`;

        return null;
      }

      // Flatten posts array to include inner node post data.
      response.posts = posts.map((post) => post.node);

      // Use final breadcrumb as alternative canonical URL.
      const breadcrumb =
        archiveSeo?.breadcrumbs &&
        archiveSeo.breadcrumbs.length > 0 &&
        archiveSeo.breadcrumbs.slice(-1)[0]?.url;

      // Manually create fallback taxonomy canonical URL.
      const fallback = `${response.defaultSeo?.openGraph?.url ?? ""}/${
        postTypes?.[postType]?.route
      }/${taxonomy}/${taxonomyId}`;

      const postsPageBlocks = (
        homepageSettings?.postsPage?.blocks ?? []
      ).concat(JSON.parse(homepageSettings?.postsPage?.blocksJSON) ?? []);
      // Structure archive SEO & blocks.
      const canonical = new URL(
        archiveSeo?.canonical ?? breadcrumb ?? fallback
      );
      canonical.pathname = replaceMultisitePrefix(canonical?.pathname);

      response.post = {
        seo: {
          ...archiveSeo,
          title:
            archiveSeo?.title ??
            `${taxonomyId} - ${response.defaultSeo?.openGraph?.siteName ?? ""}`,
          metaDesc: archiveSeo?.metaDesc ?? "",
          canonical: canonical.toString(),
          metaRobotsNofollow: archiveSeo?.metaRobotsNofollow ?? "follow",
          metaRobotsNoindex: archiveSeo?.metaRobotsNoindex ?? "index",
        },
        blocks: postsPageBlocks,
      };

      // Extract pagination data.
      response.pagination = pageInfo;
      return null;
    })
    .catch((error) => {
      response.error = true;
      response.errorMessage = error.message;
    });

  return response;
}
