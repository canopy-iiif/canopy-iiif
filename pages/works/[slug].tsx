import Layout from "@/components/layout";
import Viewer from "@/components/Viewer/Viewer";
import Related from "@/components/Related/Related";
import WorkInner from "@/components/Work/Inner";
import FACETS from "@/.canopy/facets.json";
import MANIFESTS from "@/.canopy/manifests.json";
import Container from "@/components/Shared/Container";
import { Manifest } from "@iiif/presentation-3";
import { fetch } from "@iiif/vault-helpers/fetch";
import { shuffle } from "lodash";

interface WorkProps {
  manifest: Manifest;
  related: any;
}

export default function Work({ manifest, related }: WorkProps) {
  const { id } = manifest;

  return (
    <Layout>
      <Viewer id={id} />
      <Container>
        <WorkInner manifest={manifest} />
        <Related collections={related} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const { id, index } = MANIFESTS.find(
    (item) => item.slug === params.slug
  ) as any;
  const manifest = await fetch(id);

  const related = FACETS.map((facet) => {
    const value = shuffle(
      facet.values.filter((entry) => entry.docs.includes(index))
    );
    return `/api/facet/${facet.slug}/${value[0]?.slug}?sort=random`;
  });

  /**
   * scrub the manifest of any provider property
   */
  delete manifest.provider;

  return {
    props: { manifest, related },
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
