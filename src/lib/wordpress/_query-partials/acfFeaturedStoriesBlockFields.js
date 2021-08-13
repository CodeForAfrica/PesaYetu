// Query partial: retrieve pagination info for acf insightsstories blocks.
import featuredImagePostFields from "./featuredImagePostFields";
import lazyBlockInsightChartBlockFields from "./lazyBlockInsightChartBlockFields";

const acfFeaturedStoriesBlockFields = `
... on AcfFeaturedStoriesBlock {
  name
  attributes: featuredStories {
    featuredStory {
      news {
        ... on Post {
          title
          uri
          excerpt
          ${featuredImagePostFields}
        }
      }
      insights {
        ... on Post {
          id
          title
          uri
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

export default acfFeaturedStoriesBlockFields;
