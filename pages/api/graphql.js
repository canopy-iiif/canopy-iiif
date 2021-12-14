import { ApolloServer, gql } from "apollo-server-micro";
import { makeExecutableSchema } from "@graphql-tools/schema";
import ManifestAPI from "./manifest";

export const typeDefs = gql`
  type Query {
    manifests: [Manifest]
  }
  type Manifest {
    id: String
    label: String
    slug: String
    type: String
  }
`;

const sample = [
  {
    id: "this",
    label: "joseph",
    slug: "joseph",
    type: "Manifest",
  },
  {
    id: "that",
    label: "matron",
    slug: "matron",
    type: "Manifest",
  },
  {
    id: "other",
    label: "grizzly bear ferocious",
    slug: "grizzly-bear-ferocious",
    type: "Manifest",
  },
];

const resolvers = {
  Query: {
    manifests(parent, args, context) {
      return sample;
    },
    // manifests: async (_, __, { dataSources }) => {
    //   return dataSources.manifestAPI.getManifests();
    // },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const apolloServer = new ApolloServer({
  schema,
  // dataSources: () => {
  //   return { manifestAPI: new ManifestAPI() };
  // },
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
