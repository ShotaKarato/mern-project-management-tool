import { gql, useQuery } from "@apollo/client";

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export const useClients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);
  return { data, loading, error };
};
