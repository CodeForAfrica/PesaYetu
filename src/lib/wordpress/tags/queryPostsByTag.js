import { gql } from '@apollo/client';

import defaultPageData from '@/pesayetu/lib/wordpress/_query-partials/defaultPageData';
import seoPostFields from '@/pesayetu/lib/wordpress/_query-partials/seoPostFields';
import {
  archivePostFragment,
  archivePosts,
} from '@/pesayetu/lib/wordpress/posts/queryPostsArchive';

// Query: retrieve posts tag archive.
const queryPostsByTag = gql`
  query GET_POSTS_BY_TAG(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
    $id: ID!
    $idType: TagIdType = SLUG
  ) {
    ${defaultPageData}
    tag(id: $id, idType: $idType) {
      ${seoPostFields}
      ${archivePosts}
    }
  }
  ${archivePostFragment}
`;

export default queryPostsByTag;
