import { CanopyEnvironment } from "@customTypes/canopy";
import Container from "@components/Shared/Container";
import FACETS from "@.canopy/facets.json";
import Layout from "@components/layout";
import MANIFESTS from "@.canopy/manifests.json";
import { Manifest } from "@iiif/presentation-3";
import { type NavigationItem } from "@src/customTypes/navigation";
import Related from "@components/Related/Related";
import Viewer from "@components/Viewer/Viewer";
import WorkInner from "@components/Work/Inner";
import { buildManifestSEO } from "@lib/seo";
import { fetch } from "@iiif/vault-helpers/fetch";
import { getReferencingContent } from "@src/lib/content/reference/server";
import { shuffle } from "lodash";

interface WorkProps {
  manifest: Manifest;
  related: any;
  referencingContent: NavigationItem[];
}

export default function Work({
  manifest,
  referencingContent,
  related,
}: WorkProps) {
  const { id } = manifest;

  return (
    <Layout>
      <Viewer iiifContent={id} />
      <Container>
        <WorkInner
          manifest={manifest}
          referencingContent={referencingContent}
        />
        <Related collections={related} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const { url, basePath } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const baseUrl = basePath ? `${url}${basePath}` : url;

  const { id, index } = MANIFESTS.find(
    (item) => item.slug === params.slug
  ) as any;
  const manifest = (await fetch(id)) as Manifest;

  /**
   * build the seo object
   */
  const seo = await buildManifestSEO(manifest, `/works/${params.slug}`);
  const related = FACETS.map((facet) => {
    const value = shuffle(
      facet.values.filter((entry) => entry.docs.includes(index))
    );
    return `${baseUrl}/api/facet/${facet.slug}/${value[0]?.slug}.json?sort=random`;
  });

  /**
   * Find connected NextJS pages which reference this manifest
   */
  const referencingContent = await getReferencingContent({
    manifestId: manifest.id,
    // Directories in which to look for markdown files with frontmatter content
    srcDir: ["content"],
  });

  /**
   * scrub the manifest of any provider property
   */
  delete manifest.provider;

  return {
    props: { manifest, related, seo, referencingContent },
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
