import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Hero from "@/components/Hero/Hero";
import Slider from "@/app/Viewer/Slider";
import { createCollection } from "../services/iiif/constructors/collection";
import { HeroWrapper } from "../components/Hero/Hero.styled";

export default function Index({ metadata, hero }) {
  const [baseUrl, setBaseUrl] = useState("");
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
          {/* {metadata.map((label) => (
            <Slider
              collectionId={`${baseUrl}/api/iiif/metadata/${label}`}
              key={`${baseUrl}/api/iiif/metadata/${label}`}
            />
          ))} */}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const featured = process.env.featured as any as string[];
  const metadata = process.env.metadata as any as string[];

  const hero = await createCollection(featured);

  return {
    props: { metadata, hero },
  };
}
