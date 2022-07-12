import { gql, useQuery } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      status
    }
  }
`;

export const useProjects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  return { data, loading, error };
};
export default useProjects;
