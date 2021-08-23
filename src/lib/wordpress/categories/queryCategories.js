import { gql } from "@apollo/client";

import categoriesPostFields from "@/pesayetu/lib/wordpress/_query-partials/categoriesPostFields";

// Query: retrieve all categories.
const queryCategories = gql`
  query GET_CATEGORIES(
    $order: OrderEnum = DESC
  ) {
    ${categoriesPostFields}
  }
`;

export default queryCategories;
