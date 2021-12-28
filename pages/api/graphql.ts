import { ApolloServer, gql } from "apollo-server-micro";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  getCollection,
  getAllManifests,
  getManifestBySlug,
  getCollectionItems,
} from "./iiif";

const typeDefs = gql`
  type Query {
    collections: [Collection]
    collectionItems: [CollectionItem]
    allManifests: [Manifest]
    getManifest(slug: ID): Manifest
  }

  type Collection {
    id: String!
    label: [String]
    items: [CollectionItem]
    collections: Int
    manifests: Int
    depth: Int
    parent: String
    slug: ID
  }

  type CollectionItem {
    id: String!
    label: [String]
    type: String
    parent: String
  }

  type Manifest {
    collectionId: ID
    id: String!
    label: [String]
    metadata: [Metadata]
    slug: ID
  }

  type Metadata {
    manifestId: ID
    label: [String]
    value: [String]
  }
`;

let tree = [];
const root = Promise.resolve(getCollection(0));
const collections = root.then((collection) => {
  tree = tree.concat([collection]);
  if (collection.collections > 0) {
    collection.items.forEach((child) => {
      if (child.type === "Collection") {
        const item = Promise.resolve(
          getCollection(collection.depth + 1, child.id, collection.id)
        );
        tree = tree.concat([item]);
      }
    });
  }
  return tree;
});

const resolvers = {
  Query: {
    collections: async (_, __, context) => {
      return collections;
    },
    collectionItems: async (_, __, context) => {
      return Promise.all(tree).then((values) => {
        let items = [];
        values.forEach((results) => {
          results.items.forEach((element) => {
            items.push(element);
          });
        });
        return items;
      });
    },
    allManifests: async (_, __, context) => {
      return getAllManifests();
    },
    getManifest: async (_, { slug }, context) => {
      return getManifestBySlug(slug);
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
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

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema }),
  ssrMode: true,
  ssrForceFetchDelay: 100,
});

export const getGraphQL = (query) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);
