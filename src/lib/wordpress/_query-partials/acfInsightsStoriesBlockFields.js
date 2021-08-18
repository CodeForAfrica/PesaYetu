// Query partial: retrieve pagination info for acf insightsstories blocks.
import lazyBlockInsightChartBlockFields from "./lazyBlockInsightChartBlockFields";

const acfInsightsStoriesBlockFields = `
... on AcfInsightsStoriesBlock {
  name
  attributes: insightsStories {
    ctaText: ctatext
    overline
    title
    stories {
      story {
        ... on Post {
          id
          slug
          uri
          title
          excerpt
          blocks {
            ${lazyBlockInsightChartBlockFields}
          }
        }
      }
    }
  }
}
`;

export default acfInsightsStoriesBlockFields;
