import { gql } from "@apollo/client";

import authorPostFields from "@/pesayetu/lib/wordpress/_query-partials/authorPostFields";
import defaultPageData from "@/pesayetu/lib/wordpress/_query-partials/defaultPageData";
import featuredImagePostFields from "@/pesayetu/lib/wordpress/_query-partials/featuredImagePostFields";
import globalPostFields from "@/pesayetu/lib/wordpress/_query-partials/globalPostFields";
import seoPostFields from "@/pesayetu/lib/wordpress/_query-partials/seoPostFields";

// Fragment: retrieve single page fields.
export const singlePageFragment = gql`
  fragment SinglePageFields on Page {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`;

// Query: retrieve page by specified identifier.
const queryPageById = gql`
  query GET_PAGE_BY_ID(
    $id: ID!
    $idType: PageIdType = URI
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    page(id: $id, idType: $idType) {
      ...SinglePageFields
      isPostsPage
    }
  }
  ${singlePageFragment}
`;

export default queryPageById;
