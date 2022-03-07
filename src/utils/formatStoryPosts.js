export default function formatStoryPosts(posts) {
  return posts?.map(
    ({
      title,
      excerpt,
      uri,
      featuredImage,
      blocks: postBlocks,
      slug,
      imageProps,
      variant,
    }) => {
      const chartBlock = postBlocks?.find(
        (b) =>
          Object.hasOwnProperty.call(b, "name") &&
          b?.name === "lazyblock/insight-chart"
      );

      const image = featuredImage?.node?.sourceUrl ?? null;
      return {
        title,
        slug,
        description: excerpt?.replace(/<[^>]+>/g, "") ?? "",
        href: `/stories${uri}`,
        image,
        imageProps: imageProps ?? null,
        chart: chartBlock?.attributes?.chart ?? null,
        variant,
      };
    }
  );
}
