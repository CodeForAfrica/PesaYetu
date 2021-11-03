// Query partial: retrieve pagination info for acf insightsstories blocks.
import lazyBlockInsightChartBlockFields from "./lazyBlockInsightChartBlockFields";

const acfFeaturedStoriesBlockFields = `
... on AcfFeaturedStoriesBlock {
  name
  attributes: featuredStories {
    ctaText: ctatext
    featuredStory {
      news {
        ... on Post {
          title
          uri
          slug
          excerpt
          featuredImage {
            node {
              altText
              sourceUrl(size: $featuredImageSize)
            }
          }
        }
      }
      insights {
        ... on Post {
          id
          title
          uri
          slug
          excerpt
          featuredImage {
            node {
              altText
              sourceUrl(size: $featuredImageSize)
            }
          }
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
