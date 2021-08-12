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
          slug
          uri
          title
          excerpt
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
