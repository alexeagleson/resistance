import gql from "graphql-tag";

export const GET_GREETING = gql`
  query MyQuery {
    characters {
      id
      name
    }
  }
`;
