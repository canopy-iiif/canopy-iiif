import { CanopyEnvironment } from "@customTypes/canopy";
import CanopyMDXRemote from "@src/components/MDX";
import Container from "@components/Shared/Container";
import FACETS from "@.canopy/facets.json";
import Hero from "@components/Hero/Hero";
import { HeroWrapper } from "../components/Hero/Hero.styled";
import Layout from "@components/layout";
import { LocaleString } from "@hooks/useLocale";
import { MDXRemoteSource } from "@customTypes/content";
import React from "react";
import Related from "../components/Related/Related";
import { canopyManifests } from "@lib/constants/canopy";
import { createCollection } from "../lib/iiif/constructors/collection";
import { getMarkdownContent } from "@src/lib/contentHelpers";
import { getRelatedFacetValue } from "../lib/iiif/constructors/related";

interface IndexProps {
  featuredItems: any;
  frontMatter: {
    [key: string]: any;
  };
  metadataCollections: string[];
  source: MDXRemoteSource;
}

const Index: React.FC<IndexProps> = ({
  featuredItems,
  frontMatter,
  metadataCollections,
  source,
}) => {
  return (
    <Layout>
      {frontMatter.showHero && (
        <HeroWrapper>
          <Hero collection={featuredItems} />
        </HeroWrapper>
      )}
      <Container>
        <div>
          <CanopyMDXRemote {...source} />
        </div>
        {frontMatter.showHighlighted && (
          <Related
            collections={metadataCollections}
            title={LocaleString("homepageHighlightedWorks")}
          />
        )}
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  // Get Front Matter and Markdown content from default content folder: /content/index.mdx
  const { frontMatter, source } = await getMarkdownContent({
    slug: "index",
    directory: "",
  });

  const pageTitle = frontMatter?.title ? frontMatter?.title : "Home";

  /**
   * Handle presentation logic below
   */

  const manifests = canopyManifests();

  // @ts-ignore
  const { featured, baseUrl } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;

  const randomFeaturedItem =
    manifests[Math.floor(Math.random() * manifests.length)];
  const featuredItems = await createCollection(
    featured ? featured : [randomFeaturedItem.id],
    baseUrl
  );

  const metadataCollections = FACETS.map((facet) => {
    const value = getRelatedFacetValue(facet?.label);
    return `${baseUrl}/api/facet/${facet?.slug}/${value?.slug}.json?sort=random`;
  });

  return {
    props: {
      metadataCollections,
      featuredItems,
      frontMatter,
      pageTitle,
      source,
    },
  };
}

export default Index;
