import { gql } from '@apollo/client';

import defaultPageData from '@/pesayetu/lib/wordpress/_query-partials/defaultPageData';

// Query: retrieve default SEO and other page data.
const queryDefaultPageData = gql`
  query GET_DEFAULT_PAGE_DATA {
    ${defaultPageData}
  }
`;

export default queryDefaultPageData;
