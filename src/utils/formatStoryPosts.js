import getImagePlaceholder from "@/pesayetu/functions/getImagePlaceholder";

export default async function formatStoryPosts(posts) {
  return Promise.all(
    posts?.map(
      async ({
        title,
        excerpt,
        uri,
        featuredImage,
        blocks: postBlocks,
        slug,
      }) => {
        const chartBlock = postBlocks?.find(
          (b) =>
            Object.hasOwnProperty.call(b, "name") &&
            b?.name === "lazyblock/insight-chart"
        );

        const image = featuredImage?.node?.sourceUrl ?? null;
        const imageProps = await getImagePlaceholder(image);
        return {
          title,
          slug,
          description: excerpt?.replace(/<[^>]+>/g, "") ?? "",
          href: `/stories${uri}`,
          image,
          imageProps: imageProps ?? null,
          chart: chartBlock?.attributes?.chart ?? null,
        };
      }
    ) ?? []
  );
}
