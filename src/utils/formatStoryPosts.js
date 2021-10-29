export default function formatStoryPosts(posts, featuredStory) {
  const fSlug = featuredStory?.slug?.split("/")?.pop();

  return posts
    ?.filter(({ slug }) => slug !== fSlug)
    .map(
      ({
        title,
        excerpt,
        uri,
        featuredImage,
        blocks: postBlocks,
        slug,
        imageProps,
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
          ctaText: featuredStory?.ctaText ?? "",
          chart: chartBlock?.attributes?.chart ?? null,
        };
      }
    );
}
