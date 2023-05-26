import Layout from "@/components/layout";
import Viewer from "@/components/Viewer/Viewer";
// import Related from "@/components/Related/Related";
import WorkInner from "@/components/Work/Inner";
import MANIFESTS from "@/.canopy/manifests.json";
import Container from "@/components/Shared/Container";
import { Manifest } from "@iiif/presentation-3";
import { fetch } from "@iiif/vault-helpers/fetch";
import { NextSeo } from "next-seo";


interface WorkProps {
  manifest: Manifest;
}

export default function Work({ manifest }: WorkProps) {
  const { id } = manifest;
  const config = process.env.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const titleTemplate = `${config.label.none[0]} | %s`;

  return (
    <>
      <NextSeo
        titleTemplate={titleTemplate}
        defaultTitle={config.label.none[0]}
        additionalLinkTags={
          [
            {
              rel: 'icon',
              href: '/images/favicon.ico',
            }
          ]
        }
      />
      <Layout>
        <Viewer id={id} />
        <Container>
          <WorkInner manifest={manifest} />
          {/* <Related collections={collections} /> */}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const { id } = MANIFESTS.find((item) => item.slug === params.slug) as any;
  const manifest = await fetch(id);

  /**
   * scrub the manifest of any provider property
   */
  delete manifest.provider;

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
