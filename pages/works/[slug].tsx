import { gql } from "@apollo/client";
import { client } from "@/pages/api/graphql";
import Layout from "@/components/layout";
import Viewer from "@/components/Viewer/Viewer";
import { Vault } from "@iiif/vault";
import {
  Label,
  Metadata,
  RequiredStatement,
  Summary,
} from "@samvera/nectar-iiif";
import Related from "@/components/Related/Related";

export default function Manifest({ manifest }) {
  const { id, label, metadata, requiredStatement, summary } = manifest;

  return (
    <Layout>
      <div style={{ padding: "1.31rem 0 0" }}>
        <Viewer manifestId={id} />
      </div>
      <section
        style={{
          maxWidth: "1280px",
          margin: "auto",
          position: "relative",
          padding: "1rem 0 0",
        }}
      >
        <div style={{ padding: "0 1.618rem 2rem" }}>
          <Label label={label} as="h1" />
          <Summary summary={summary} />
          <Metadata metadata={metadata} />
          <RequiredStatement requiredStatement={requiredStatement} />
        </div>
      </section>
      <section
        style={{
          maxWidth: "1280px",
          margin: "auto",
          position: "relative",
          padding: "0 1.618rem",
        }}
      >
        <Related label={label} />
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
