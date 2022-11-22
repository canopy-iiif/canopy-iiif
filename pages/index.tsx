import React, { useEffect, useState } from "react";
import FACETS from "@/.canopy/facets.json";
import Layout from "@/components/layout";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Viewer/Slider";
import { createCollection } from "../services/iiif/constructors/collection";
import { HeroWrapper } from "../components/Hero/Hero.styled";

export default function Index({ metadata, featured }) {
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
      <section>
        <div style={{ padding: "1rem 2rem" }}>
          {FACETS.map((facet) => (
            <Slider
              collectionId={`${baseUrl}/api/facet?label=${facet.slug}`}
              key={`${baseUrl}/api/facet?label=${facet.slug}`}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredItems = process.env.CANOPY_CONFIG.featured as any as string[];
  const metadata = process.env.CANOPY_CONFIG.metadata as any as string[];

  const featured = await createCollection(featuredItems);

  return {
    props: { metadata, featured },
  };
}
