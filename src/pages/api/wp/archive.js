import getPostTypeTaxonomyArchive from "@/pesayetu/functions/postTypes/getPostTypeTaxonomyArchive";

/**
 * Load more posts for an archive.
 *
 * @author WebDevStudios
 * @param {object} req Instance of http.IncomingMessage.
 * @param {object} res Instance of http.ServerResponse.
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
      cursor = null,
    } = req.query;

    const postsData = await getPostTypeTaxonomyArchive(
      taxonomy,
      taxonomyId,
      postType,
      orderBy,
      order,
      cursor
    );

    // Check for errors.
    if (postsData.error) {
      throw new Error(postsData.errorMessage);
    }

    // Remove Apollo client from return.
    delete postsData?.apolloClient;

    res.status(200).send(postsData);
  } catch (error) {
    res
      .status(error?.status || 500)
      .end(
        error?.message ||
          "An error occurred while attempting to load more posts"
      );
  }
}
