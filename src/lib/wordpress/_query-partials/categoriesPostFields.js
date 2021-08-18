// Query partial: retrieve categories post fields.
const categoriesPostFields = `
  categories (where: {orderby: NAME, order: $order}) {
    edges {
      node {
        slug
        name
      }
    }
  }
`;
export default categoriesPostFields;
