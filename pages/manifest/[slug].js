import Layout from "../../components/layout";
import { client, fetcher } from "../api/graphql";
import { gql } from "@apollo/client";
import useSWR from "swr";
import dynamic from "next/dynamic";

const ReactMediaPlayer = dynamic(() => import("@nulib/react-media-player"));

export default function Manifest({ slug }) {
  const { data, error } = useSWR(
    `{ getManifest(slug: "${slug}") { id, label } }`,
    fetcher
  );

  if (!data) return null;

  const { id, label } = data.getManifest;

  return (
    <Layout>
      <h1>{label}</h1>
      <ReactMediaPlayer manifestId={id} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: { ...params },
  };
}

export async function getStaticPaths() {
  const { loading, error, data } = await client.query({
    query: gql`
      query Manifests {
        manifests {
          slug
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
