import Layout from "@/components/layout";
import Viewer from "@/components/Viewer/Viewer";
import Related from "@/components/Related/Related";
import WorkInner from "@/components/Work/Inner";
import MANIFESTS from "@/.canopy/manifests.json";
import { Vault } from "@iiif/vault";
import Container from "../../components/Shared/Container";

export default function Manifest({ manifest }) {
  const { id, label, metadata, requiredStatement, summary } = manifest;

  return (
    <Layout>
      <Viewer id={id} />
      <Container>
        <WorkInner manifest={manifest} />
        <section>
          <Related label={label} />
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { id } = MANIFESTS.find((item) => item.slug === params.slug);
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
  const paths = MANIFESTS.map((item) => ({
    params: { ...item },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
