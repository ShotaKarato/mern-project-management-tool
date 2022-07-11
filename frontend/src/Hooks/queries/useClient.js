import { gql, useQuery } from "@apollo/client";

export const GET_CLIENT = gql`
  query GetClient($id: String) {
    client(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export const useClient = (id) => {
  const { data, loading, error } = useQuery(GET_CLIENT, {
    variables: {
      id,
    },
  });
  return { data, loading, error };
};
