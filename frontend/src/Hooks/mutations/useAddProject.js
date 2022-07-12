import { gql, useQuery } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation AddProject($name: String!, $description: String!, $clientId: ID!) {
    addProject(name: $name, description: $description, clientId: $clientId) {
      id
      clientId
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

export const useAddProject = (name, description, clientId) => {
  const [addProject] = useQuery(ADD_PROJECT, {
    variables: {
      name,
      description,
      clientId,
    },
    update(cache, { data: { addProject } }) {},
  });

  return { addProject };
};
