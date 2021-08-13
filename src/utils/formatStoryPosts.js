export default function formatStoryPosts(posts, featuredStory) {
  const fSlug = featuredStory?.slug?.split("/")?.pop();
  return posts
    ?.filter(({ slug }) => slug !== fSlug)
    .map(({ title, excerpt, uri, featuredImage, blocks: postBlocks }) => {
      const chartBlock = postBlocks?.find(
        (b) =>
          Object.hasOwnProperty.call(b, "name") &&
          b?.name === "lazyblock/insight-chart"
      );
      return {
        title,
        description: excerpt?.replace(/<[^>]+>/g, "") ?? "",
        href: uri,
        image: featuredImage?.node?.sourceUrl,
        ctaText: featuredStory?.ctaText,
        chart: chartBlock?.attributes?.chart,
      };
    });
}
