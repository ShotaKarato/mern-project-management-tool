const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
} = require("graphql");

// Mongoose models
const Client = require("../db/model/client.model");
const Project = require("../db/model/project.model");

// types
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve: async (parent, _) => {
        const client = await Client.findById(parent.clientId);
        return client;
      },
    },
  }),
});
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

// query
const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: async () => {
        const projects = await Project.find();
        return projects;
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const project = await Project.findById(args.id);
        return project;
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve: async (parent, args) => {
        const clients = await Client.find();
        return clients;
      },
    },
    client: {
      type: ClientType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: async (parent, args) => {
        const client = await Client.findById(args.id);
        return client;
      },
    },
  },
});

module.exports = {
  ProjectType,
  ClientType,
  query: RootQueryType,
};
