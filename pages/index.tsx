import React, { useEffect, useState } from "react";
import FACETS from "@/.canopy/facets.json";
import Layout from "@/components/layout";
import Hero from "@/components/Hero/Hero";
import Container from "@/components/Shared/Container";
import { createCollection } from "../services/iiif/constructors/collection";
import { HeroWrapper } from "../components/Hero/Hero.styled";
import Related from "../components/Related/Related";
import { getRelatedFacetValue } from "../services/iiif/constructors/related";
import Heading from "../components/Shared/Heading/Heading";
import Button from "../components/Shared/Button/Button";
import { ButtonWrapper } from "../components/Shared/Button/Button.styled";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { LocaleString } from "@/hooks/useLocale";
import { canopyManifests } from "@/services/constants/canopy";

interface IndexProps {
  featured: any;
  collections: string[];
}

const Index: React.FC<IndexProps> = ({ featured, collections }) => {
  const [baseUrl, setBaseUrl] = useState("");

  const hero = {
    ...featured,
    items: featured.items.map((item: any) => {
      return {
        ...item,
        thumbnail: [
          ...item.thumbnail.map((entry: any) => {
            return { ...entry, height: 1000, width: 1000 };
          }),
        ],
        homepage: [
          {
            id: `${baseUrl}/works/${item.homepage[0].id}`,
            type: "Text",
            label: item.label,
          },
        ],
      };
    }),
  };

  useEffect(() => {
    const { host, protocol } = window.location;
    const baseUrl = `${protocol}//${host}`;
    setBaseUrl(baseUrl);
  }, []);

  return (
    <Layout>
      <HeroWrapper>
        <Hero collection={hero} />
      </HeroWrapper>
      <Container>
        <Heading as="h2">About Maktaba وأنا أكتب</Heading>
        <div>
          <p>
            Fusce id velit ut tortor pretium viverra. وأنا أكتب{" "}
            <i>Suspendisse</i> in est ante in nibh mauris cursus.{" "}
            <a href="http://example.com">Mattis molestie</a> a iaculis at erat
            pellentesque adipiscing. وأنا أكتب Commodo ullamcorper a lacus
            vestibulum sed arcu non odio. In cursus turpis وأنا أكتب massa
            tincidunt dui ut ornare lectus.{" "}
            <a href="http://another-example.com">Sed velit dignissim</a> sodales
            ut eu sem. وأنا أكتب <i>Integer</i> eget aliquet nibh praesent
            tristique magna sit amet. Mi bibendum neque egestas congue quisque.
          </p>

          <ButtonWrapper>
            <Button href="/about" buttonType="primary">
              Read More &nbsp;
              <ArrowRightIcon />
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
  const featuredItems = process.env.CANOPY_CONFIG.featured as any as string[];

  // @ts-ignore
  const metadata = process.env.CANOPY_CONFIG.metadata as any as string[];

  const randomFeaturedItem =
    manifests[Math.floor(Math.random() * manifests.length)];
  const featured = await createCollection(
    featuredItems ? featuredItems : [randomFeaturedItem.id]
  );

  const collections = FACETS.map((facet) => {
    const value = getRelatedFacetValue(facet.label);
    return `/api/facet/${facet.slug}/${value.slug}?sort=random`;
  });

  return {
    props: { metadata, featured, collections },
    revalidate: 3600,
  };
}

export default Index;
