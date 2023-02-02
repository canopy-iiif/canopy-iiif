import React, { useEffect, useState } from "react";
import FACETS from "@/.canopy/facets.json";
import Layout from "@/components/layout";
import Hero from "@/components/Hero/Hero";
import Container from "@/components/Shared/Container";
import { createCollection } from "../services/iiif/constructors/collection";
import { HeroWrapper } from "../components/Hero/Hero.styled";
import Related from "../components/Related/Related";
import { getRelatedFacetValue } from "../services/iiif/constructors/related";

export default function Index({ metadata, featured, collections }) {
  const [baseUrl, setBaseUrl] = useState("");

  const hero = {
    ...featured,
    items: featured.items.map((item) => {
      return {
        ...item,
        thumbnail: [
          ...item.thumbnail.map((entry) => {
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
        <h2>About Canopy</h2>
        <div>
          <p>
            <strong>Canopy IIIF</strong> is a purely{" "}
            <a href="https://iiif.io/">IIIF</a> sourced site generator using
            Next.js. Canopy is an experimental application that will standup a
            browseable and searchable digital collections style site entirely
            from a <a href="https://iiif.io/">IIIF Collection</a> and the
            resources it references.
          </p>
          <a href="/about">Read More</a>
          <a href="https://github.com/mathewjordan/canopy-iiif">View Code</a>
        </div>
        <Related collections={collections} title="Highlighted Works" />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredItems = process.env.CANOPY_CONFIG.featured as any as string[];
  const metadata = process.env.CANOPY_CONFIG.metadata as any as string[];

  const featured = await createCollection(featuredItems);

  const collections = FACETS.map((facet) => {
    const value = getRelatedFacetValue(facet.label);
    return `/api/facet/${facet.slug}/${value.slug}`;
  });

  return {
    props: { metadata, featured, collections },
    revalidate: 3600,
  };
}
