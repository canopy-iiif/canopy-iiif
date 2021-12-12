import { ApolloServer, gql } from "apollo-server-micro";

const getCollection = () => {
  return fetch("http://localhost:3000/iiif/collection/nez-perce.json", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => console.warn(error));
};

const typeDefs = gql`
  type Query {
    manifests: [User!]!
  }
  type User {
    label: String
  }
`;

// const thisThing = getCollection().then((response) => {
//   return response;
// });

const sample = [
  {
    label: "joseph",
  },
  {
    label: "matron",
  },
  {
    label: "grizzly bear ferocious",
  },
];

const resolvers = {
  Query: {
    manifests(parent, args, context) {
      return sample;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

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
