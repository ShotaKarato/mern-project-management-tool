import { gql, useQuery } from "@apollo/client";

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
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

const useProjects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  return { data, loading, error };
};
export default useProjects;
