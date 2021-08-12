import getFrontendPage from "@/pesayetu/functions/postTypes/getFrontendPage";
import getPostTypeArchive from "@/pesayetu/functions/postTypes/getPostTypeArchive";
import getPostTypeById from "@/pesayetu/functions/postTypes/getPostTypeById";
import getPostTypeTaxonomyArchive from "@/pesayetu/functions/postTypes/getPostTypeTaxonomyArchive";
import { addApolloState } from "@/pesayetu/lib/apolloConfig";
import archiveQuerySeo from "@/pesayetu/lib/wordpress/_config/archiveQuerySeo";
import frontendPageSeo from "@/pesayetu/lib/wordpress/_config/frontendPageSeo";

/**
 * Retrieve static props by post type.
 *
 * @param  {string}  params      Post params (e.g., slug).
 * @param  {string}  postType    Post Type.
 * @param  {boolean} preview     Whether requesting preview of post.
 * @param  {object}  previewData Post preview data.
 * @return {object}              Object containing post props and revalidate setting.
 */
export default async function getPostTypeStaticProps(
  params,
  postType,
  preview = false,
  previewData = null
) {
  // Set revalidate length (seconds).
  const revalidate = 60 * 5;

  /* -- Handle Frontend-only routes. -- */
  if (Object.keys(frontendPageSeo).includes(postType)) {
    const { apolloClient, ...routeData } = await getFrontendPage(postType);

    return addApolloState(apolloClient, {
      props: {
        ...routeData,
      },
      revalidate,
    });
  }

  /* -- Fallback: return error if params missing. -- */
  if (!params) {
    return postType !== "404"
      ? {
          notFound: true,
        }
      : {
          revalidate,
        };
  }

  /* -- Handle dynamic archive display. -- */
  if (!Object.keys(params).length) {
    const { apolloClient, ...archiveData } = await getPostTypeArchive(postType);

    // Merge in query results as Apollo state.
    return addApolloState(apolloClient, {
      props: {
        ...archiveData,
        archive: true,
      },
      revalidate,
    });
  }

  /* -- Handle taxonomy archives. -- */
  if (
    Object.keys(archiveQuerySeo).includes(postType) &&
    params.slug.length === 2
  ) {
    const taxonomy = "category";
    const taxonomySlug = params.slug.pop(); // category slug ( insights or new )

    const { apolloClient, ...archiveData } = await getPostTypeTaxonomyArchive(
      taxonomy,
      taxonomySlug
    );

    // Merge in query results as Apollo state.
    return addApolloState(apolloClient, {
      props: {
        ...archiveData,
        archive: true,
      },
      revalidate,
    });
  }

  /* -- Handle individual posts. -- */

  // Handle catch-all routes.
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;

  /* -- Handle dynamic posts. -- */

  // Get post identifier (ID or slug).
  const postId = Number.isInteger(Number(slug)) ? Number(slug) : slug;

  // Check if preview mode is active and valid for current post (preview and post IDs or slugs match).
  const isCurrentPostPreview =
    preview &&
    (postId === previewData?.post?.id || postId === previewData?.post?.slug);

  // Check if viewing a draft post.
  const isDraft = isCurrentPostPreview && previewData?.post?.status === "draft";

  // Set query variables.
  const id = isDraft ? previewData.post.id : slug;
  const idType = isDraft ? "DATABASE_ID" : "SLUG";

  // Retrieve post data.
  const { apolloClient, error, ...postData } = await getPostTypeById(
    postType,
    id,
    idType,
    isCurrentPostPreview ? "full" : null
  );

  const props = {
    ...postData,
    error,
    preview: isCurrentPostPreview,
  };

  // Fallback to empty props if homepage not set in WP.
  if (slug === "/" && error) {
    props.post = null;
    props.error = false;
  }

  // Display 404 error page if error encountered.
  if (props.error) {
    return {
      notFound: true,
    };
  }

  // Merge in query results as Apollo state.
  return addApolloState(apolloClient, {
    props,
    revalidate,
  });
}
