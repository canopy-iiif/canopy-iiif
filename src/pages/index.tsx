import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import Button from "../components/Shared/Button/Button";
import { ButtonWrapper } from "../components/Shared/Button/Button.styled";
import { CanopyEnvironment } from "@/types/canopy";
import Container from "@/components/Shared/Container";
import FACETS from "@/.canopy/facets.json";
import Heading from "../components/Shared/Heading/Heading";
import Hero from "@/components/Hero/Hero";
import { HeroWrapper } from "../components/Hero/Hero.styled";
import Layout from "@/components/layout";
import { LocaleString } from "@/hooks/useLocale";
import React from "react";
import Related from "../components/Related/Related";
import { canopyManifests } from "@/lib/constants/canopy";
import { createCollection } from "../lib/iiif/constructors/collection";
import { getRelatedFacetValue } from "../lib/iiif/constructors/related";
import { useCanopyState } from "@/context/canopy";

interface IndexProps {
  featuredItem: any;
  collections: string[];
}

const Index: React.FC<IndexProps> = ({ featuredItem, collections }) => {
  const { canopyState } = useCanopyState();
  const {
    config: { baseUrl },
  } = canopyState;

  const hero = {
    ...featuredItem,
    items: featuredItem.items.map((item: any) => {
      return {
        ...item,
        homepage: [
          {
            id: `${baseUrl}/works/`,
            type: "Text",
            label: item.label,
          },
        ],
      };
    }),
  };

  return (
    <Layout>
      <HeroWrapper>
        <Hero collection={hero} />
      </HeroWrapper>
      <Container>
        <Heading as="h2">About Canopy</Heading>
        <div>
          <p>
            <strong>Canopy IIIF</strong> is a purely{" "}
            <a href="https://iiif.io/">IIIF</a> sourced site generator using
            Next.js. Canopy is an experimental application that will standup a
            browseable and searchable digital collections style site entirely
            from a{" "}
            <a href="https://iiif.io/api/presentation/3.0/#51-collection">
              IIIF Collection
            </a>{" "}
            and the resources it references.
          </p>
          <ButtonWrapper>
            <Button href="/about" buttonType="primary">
              Read More &nbsp;
              <ArrowRightIcon />
            </Button>
            <Button
              href="https://github.com/canopy-iiif/canopy-iiif"
              buttonType="secondary"
            >
              View Code &nbsp;
              <GitHubLogoIcon />
            </Button>
          </ButtonWrapper>
        </div>
        <Related
          collections={collections}
          title={LocaleString("homepageHighlightedWorks")}
        />
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const manifests = canopyManifests();

  // @ts-ignore
  const { featured, metadata, baseUrl } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;

  const randomFeaturedItem =
    manifests[Math.floor(Math.random() * manifests.length)];
  const featuredItem = await createCollection(
    featured ? featured : [randomFeaturedItem.id]
  );

  const collections = FACETS.map((facet) => {
    const value = getRelatedFacetValue(facet.label);
    return `${baseUrl}/api/facet/${facet.slug}/${value.slug}.json?sort=random`;
  });

  return {
    props: { metadata, featuredItem, collections },
    revalidate: 3600,
  };
}

export default Index;
