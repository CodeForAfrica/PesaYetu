// Query partial: retrieve pagination info for insight chart blocks.
const lazyBlockInsightChartBlockFields = `
  ... on LazyblockInsightChartBlock {
    name
    attributes {
      chart
    }
  }

`;

export default lazyBlockInsightChartBlockFields;
