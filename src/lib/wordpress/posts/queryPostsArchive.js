import { gql } from "@apollo/client";

import archivePageInfo from "@/pesayetu/lib/wordpress/_query-partials/archivePageInfo";
import defaultPageData from "@/pesayetu/lib/wordpress/_query-partials/defaultPageData";
import featuredImagePostFields from "@/pesayetu/lib/wordpress/_query-partials/featuredImagePostFields";
import globalPostFields from "@/pesayetu/lib/wordpress/_query-partials/globalPostFields";
import lazyBlockInsightChartBlockFields from "@/pesayetu/lib/wordpress/_query-partials/lazyBlockInsightChartBlockFields";
import seoPostFields from "@/pesayetu/lib/wordpress/_query-partials/seoPostFields";

// Fragment: retrieve archive post fields.
export const archivePostFragment = gql`
  fragment ArchivePostFields on Post {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
    blocks {
      ${lazyBlockInsightChartBlockFields}
    }
  }
`;

// Query partial: retrieve archive fields.
export const archivePosts = `
  posts(
    first: $first
    last: $last
    after: $after
    before: $before
    where: {orderby: {field: $orderBy, order: $order}}
  ) {
    ${archivePageInfo}
    edges {
      node {
        ...ArchivePostFields
      }
    }
  }
`;

// Query: retrieve posts archive.
const queryPostsArchive = gql`
  query GET_POSTS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    ${defaultPageData}
    homepageSettings {
      postsPage {
        blocksJSON
        ${seoPostFields}
      }
    }
    ${archivePosts}
  }
  ${archivePostFragment}
`;

export default queryPostsArchive;
