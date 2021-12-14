import Layout from "../../components/layout";
import { client } from "../api/apollo-client";
import { gql } from "@apollo/client";

export default function Manifest({ id }) {
  return <Layout>{id}</Layout>;
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}

export async function getStaticPaths() {
  const { loading, error, data } = await client.query({
    query: gql`
      query GetManifests {
        manifests {
          label
          id
        }
      }
    `,
  });

  const paths = data.manifests.map((item) => ({
    params: { ...item },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
