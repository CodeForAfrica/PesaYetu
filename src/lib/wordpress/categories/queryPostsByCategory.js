import { gql } from '@apollo/client';

import defaultPageData from '@/pesayetu/lib/wordpress/_query-partials/defaultPageData';
import seoPostFields from '@/pesayetu/lib/wordpress/_query-partials/seoPostFields';
import {
  archivePostFragment,
  archivePosts,
} from '@/pesayetu/lib/wordpress/posts/queryPostsArchive';

// Query: retrieve posts category archive.
const queryPostsByCategory = gql`
  query GET_POSTS_BY_CATEGORY(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
    $id: ID!
    $idType: CategoryIdType = SLUG
  ) {
    ${defaultPageData}
    category(id: $id, idType: $idType) {
      ${seoPostFields}
      ${archivePosts}
    }
  }
  ${archivePostFragment}
`;

export default queryPostsByCategory;
