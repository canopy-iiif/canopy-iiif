import { ApolloServer, gql } from "apollo-server-micro";
import ManifestAPI from "./manifest";

const typeDefs = gql`
  type Query {
    manifests: [Manifest!]!
  }
  type Manifest {
    id: String
    label: String
    type: String
  }
`;

const resolvers = {
  Query: {
    manifests: async (_, __, { dataSources }) => {
      return dataSources.manifestAPI.getManifests();
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return { manifestAPI: new ManifestAPI() };
  },
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
