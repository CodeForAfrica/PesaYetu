import { gql } from "@apollo/client";

import authorPostFields from "@/pesayetu/lib/wordpress/_query-partials/authorPostFields";
import categoriesPostFields from "@/pesayetu/lib/wordpress/_query-partials/categoriesPostFields";
import defaultPageData from "@/pesayetu/lib/wordpress/_query-partials/defaultPageData";
import featuredImagePostFields from "@/pesayetu/lib/wordpress/_query-partials/featuredImagePostFields";
import globalPostFields from "@/pesayetu/lib/wordpress/_query-partials/globalPostFields";
import seoPostFields from "@/pesayetu/lib/wordpress/_query-partials/seoPostFields";
import tagsPostFields from "@/pesayetu/lib/wordpress/_query-partials/tagsPostFields";

// Fragment: retrieve single post fields.
const singlePostFragment = gql`
  fragment SinglePostFields on Post {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
    ${tagsPostFields}
    ${categoriesPostFields}
  }
`;
// Query: retrieve post by specified identifier.
const queryPostById = gql`
  query GET_POST_BY_ID(
    $id: ID!
    $idType: PostIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    post(id: $id, idType: $idType) {
      ...SinglePostFields
    }
  }
  ${singlePostFragment}
`;

export default queryPostById;
