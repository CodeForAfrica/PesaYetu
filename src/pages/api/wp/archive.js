import getPostTypeTaxonomyArchive from "@/pesayetu/functions/postTypes/getPostTypeTaxonomyArchive";
import formatStoryPosts from "@/pesayetu/utils/formatStoryPosts";
/**
 * Load more posts for category archive.
 *
 */
export default async function archive(req, res) {
  try {
    // Retrieve props from request query params.
    const {
      taxonomy = "category",
      taxonomyId,
      postType = "post",
      orderBy = "DATE",
      order = "DESC",
      offset = 0,
      size = 9,
    } = req.query;

    const postsData = await getPostTypeTaxonomyArchive(
      taxonomy,
      taxonomyId,
      postType,
      orderBy,
      order,
      offset,
      size
    );

    // Check for errors.
    if (postsData.error) {
      throw new Error(postsData.errorMessage);
    }

    // Remove Apollo client from return.
    delete postsData?.apolloClient;

    const result = await formatStoryPosts(postsData?.posts);

    res.status(200).send(result);
  } catch (error) {
    res
      .status(error?.status || 500)
      .end(
        error?.message ||
          "An error occurred while attempting to load more posts"
      );
  }
}
