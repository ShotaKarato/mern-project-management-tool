import { gql, useQuery } from "@apollo/client";

const GET_PROJECT = gql`
  query GetProject($id: String) {
    project(id: $id) {
      id
      name
      description
      status
      clientId
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
const useProject = (id) => {
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });
  return { data, loading, error };
};
export default useProject;
