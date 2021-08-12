// Query partial: retrieve pagination info for acf insightsstories blocks.
const acfInsightsStoriesBlockFields = `
... on AcfInsightsStoriesBlock {
  name
  attributes: insightsStories {
    ctatext
    overline
    title
    stories {
      story {
        ... on Post {
          id
          uri
          title
          excerpt(format: RAW)
          blocks {
            ... on LazyblockInsightChartBlock {
              name
              attributes {
                chart
              }
            }
          }
        }
      }
    }
  }
}
`;

export default acfInsightsStoriesBlockFields;
