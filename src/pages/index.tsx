import { CanopyEnvironment } from "@customTypes/canopy";
import CanopyMDXRemote from "@src/components/MDX";
import Container from "@components/Shared/Container";
import FACETS from "@.canopy/facets.json";
import Heading from "@src/components/Shared/Heading/Heading";
import Hero from "@components/Hero/Hero";
import { HeroWrapper } from "../components/Hero/Hero.styled";
import LayoutsBasic from "@src/components/Layouts/Basic";
import { MDXRemoteSource } from "@customTypes/content";
import React from "react";
import Related from "../components/Related/Related";
import { Section } from "@radix-ui/themes";
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
    <LayoutsBasic frontMatter={frontMatter}>
      <>
        {frontMatter.showHero && featuredItems && (
          <HeroWrapper>
            <Hero collection={featuredItems} />
          </HeroWrapper>
        )}
        <Container>
          <Section size="2">
            <CanopyMDXRemote source={source} />
          </Section>
          {frontMatter.showHighlighted && (
            <>
              <Heading as="h2">Highlighted Items</Heading>
              <Related collections={metadataCollections} />
            </>
          )}
        </Container>
      </>
    </LayoutsBasic>
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
  const featuredItems =
    (await createCollection(
      featured ? featured : [randomFeaturedItem.id],
      baseUrl
    )) || [];

  const metadataCollections = FACETS.map((facet) => {
    // @ts-ignore
    const value = getRelatedFacetValue(facet?.label);
    // @ts-ignore
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
