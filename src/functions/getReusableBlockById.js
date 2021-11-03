import queryReusableBlocks from "@/pesayetu/lib/wordpress/blocks/queryReusableBlocks";
import { initializeWpApollo } from "@/pesayetu/lib/wordpress/connector";

/**
 * Retrieve reusable block  by ID.
 *
 * @param  {number} id The blocks's database ID.
 * @return {object}    Object containing Apollo client instance and post data or error object.
 */
export default async function getReusableBlockById(id) {
  // No ID? Bail...
  if (!id) {
    return {};
  }

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo();

  // Execute query.
  const reusableBlock = await apolloClient
    .query({
      query: queryReusableBlocks,
      variables: {
        id,
      },
    })
    .then((blockObj) => {
      const block = {};
      block.name = blockObj?.data?.reusableBlock?.slug;
      const blocksJSON = blockObj?.data?.reusableBlock?.blocksJSON;
      if (blocksJSON) {
        block.blocks = JSON.parse(blocksJSON);
      }
      return block ?? null;
    })
    .catch((error) => {
      return {
        isError: true,
        message: error.message,
      };
    });

  return reusableBlock;
}
