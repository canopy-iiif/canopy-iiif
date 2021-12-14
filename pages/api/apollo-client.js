import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./graphql";

const schema = makeExecutableSchema({ typeDefs });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema }),
  ssrMode: true,
  ssrForceFetchDelay: 100,
});
