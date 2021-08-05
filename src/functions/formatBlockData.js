import getMediaByID from "@/pesayetu/functions/getMediaByID";

/**
 * Format and retrieve expanded block data.
 *
 * @param  {Array} blocks Basic block data.
 * @return {Array}        Formatted block data.
 */
export default async function formatBlockData(blocks) {
  if (!blocks || !blocks.length) {
    return [];
  }

  return Promise.all(
    blocks.map(async (block) => {
      const { name, attributes, innerBlocks, saveContent } = block;
      switch (name) {
        case "acf/acf-media-text":
          // Retrieve additional image meta.
          attributes.data.imageMeta = await getMediaByID(
            attributes?.data?.image
          );
          break;

        case "core/image":
          // Retrieve additional image meta.
          attributes.imageMeta = await getMediaByID(attributes?.id);
          break;

        default:
          break;
      }

      const innerBlocksFormatted = await formatBlockData(innerBlocks);

      return {
        name,
        attributes,
        content: saveContent,
        innerBlocks: innerBlocksFormatted,
      };
    })
  );
}
