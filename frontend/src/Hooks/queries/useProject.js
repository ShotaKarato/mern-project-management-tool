import { gql, useQuery } from "@apollo/client";

export const GET_PROJECT = gql`
  query GetProject($id: String) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
export const useProject = (id) => {
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });
  return { data, loading, error };
};
