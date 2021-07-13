// Query partial: retrieve author post fields.
const authorPostFields = `
  author {
    node {
      slug
      nickname
      firstName
      lastName
    }
  }
`;
export default authorPostFields;
