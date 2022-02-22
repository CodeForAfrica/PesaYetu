// Query partial: retrieve pagination info for archive.
const archivePageInfo = `
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
    offsetPagination {
      total
    }
  }
`;

export default archivePageInfo;
