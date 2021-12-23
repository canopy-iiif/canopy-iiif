import { gql } from "@apollo/client";
import { client } from "../api/graphql";
import Layout from "../../components/layout";
import { getManifestById } from "../api/iiif";
import Viewer from "../../components/Viewer/Viewer";

export default function Manifest({ id, label }) {
  getManifestById(id).then((json) => {
    console.log(json);
  });
  return (
    <Layout>
      <h1>{label}</h1>
      <Viewer manifestId={id} />
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
