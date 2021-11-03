import { gql } from "@apollo/client";

const queryReusableBlocks = gql`
  query GET_REUSABLE_BLOCK($id: ID!) {
    reusableBlock(id: $id, idType: DATABASE_ID) {
      blocksJSON
      slug
    }
  }
`;

export default queryReusableBlocks;
