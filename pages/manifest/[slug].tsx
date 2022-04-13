import { gql } from "@apollo/client";
import { client } from "../api/graphql";
import Layout from "../../components/layout";
import Viewer from "../../components/Viewer/Viewer";
import { Vault } from "@iiif/vault";
import {
  Label,
  Metadata,
  RequiredStatement,
  Summary,
} from "@samvera/nectar-iiif";

export default function Manifest({ manifest }) {
  const { id, label, metadata, requiredStatement, summary } = manifest;

  return (
    <Layout>
      <section
        style={{
          maxWidth: "1280px",
          margin: "auto",
          position: "relative",
        }}
      >
        <Viewer manifestId={id} />
        <Label label={label} as="h1" />
        {summary && <Summary summary={summary} />}
        {metadata && <Metadata metadata={metadata} />}
        {requiredStatement && (
          <RequiredStatement requiredStatement={requiredStatement} />
        )}
      </section>
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

  const { id } = data.getManifest;
  const vault = new Vault();
  const manifest = await vault
    .loadManifest(id)
    .then((data) => data)
    .catch((error) => {
      console.error(`Manifest ${id} failed to load: ${error}`);
    });

  return {
    props: { manifest },
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
