import useSWR from "swr";
import dynamic from "next/dynamic";
import { gql } from "@apollo/client";
import { client, getGraphQL } from "../api/graphql";
import Layout from "../../components/layout";

const ReactMediaPlayer = dynamic(() => import("@nulib/react-media-player"), {
  ssr: false,
});

export default function Manifest({ id, label }) {
  return (
    <Layout>
      <h1>{label}</h1>
      <ReactMediaPlayer manifestId={id} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { loading, error, data } = await client.query({
    query: gql`
      query GetManifestBySlug {
        getManifest(slug: "${slug}") { id, label }
      }
    `,
  });

  if (!data) return null;

  return {
    props: { ...data.getManifest },
  };
}

export async function getStaticPaths() {
  const { loading, error, data } = await client.query({
    query: gql`
      query AllManifests {
        allManifests {
          slug
        }
      }
    `,
  });

  const paths = data.allManifests.map((item) => ({
    params: { ...item },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
