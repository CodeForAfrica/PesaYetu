import { gql } from "@apollo/client";

import authorPostFields from "@/pesayetu/lib/wordpress/_query-partials/authorPostFields";
import defaultPageData from "@/pesayetu/lib/wordpress/_query-partials/defaultPageData";
import featuredImagePostFields from "@/pesayetu/lib/wordpress/_query-partials/featuredImagePostFields";
import globalPostFields from "@/pesayetu/lib/wordpress/_query-partials/globalPostFields";
import lazyBlockInsightChartBlockFields from "@/pesayetu/lib/wordpress/_query-partials/lazyBlockInsightChartBlockFields";
import seoPostFields from "@/pesayetu/lib/wordpress/_query-partials/seoPostFields";
import tagsPostFields from "@/pesayetu/lib/wordpress/_query-partials/tagsPostFields";

// fragment to retrieve related stories
const relatedCategoryPostsFields = `
  categories {
    edges {
      node {
        name
        posts {
          nodes {
            title
            uri
            slug
            featuredImage {
              node {
                sourceUrl(size: $relatedStoriesImageSize)
              }
            }
            blocks {
              ${lazyBlockInsightChartBlockFields}
            }
            excerpt
          }
        }
      }
    }
  }
`;
// Fragment: retrieve single post fields.
const singlePostFragment = gql`
  fragment SinglePostFields on Post {
    ${globalPostFields}
    blocksJSON
    content
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
    ${tagsPostFields}
    ${relatedCategoryPostsFields}
  }
`;

// Query: retrieve post by specified identifier.
const queryPostById = gql`
  query GET_POST_BY_ID(
    $id: ID!
    $idType: PostIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
    $relatedStoriesImageSize: MediaItemSizeEnum = MEDIUM
  ) {
    ${defaultPageData}
    homepageSettings {
      postsPage {
        blocksJSON
      }
    }
    post(id: $id, idType: $idType) {
      ...SinglePostFields
    }
  }
  ${singlePostFragment}
`;

export default queryPostById;
