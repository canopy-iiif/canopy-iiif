import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import dynamic from "next/dynamic";

const BloomIIIF = dynamic(() => import("@samvera/bloom-iiif"), {
  ssr: false,
});

export default function Index({ metadata }) {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
    console.log(window.location);
    const { host, protocol } = window.location;
    const baseUrl = `${protocol}//${host}`;
    setBaseUrl(baseUrl);
  }, []);

  return (
    <Layout>
      <Hero />
      <section
        style={{
          maxWidth: "1280px",
          margin: "auto",
          position: "relative",
        }}
      >
        {metadata.map((label) => (
          <BloomIIIF collectionId={`${baseUrl}/api/iiif/metadata/${label}`} />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const metadata = process.env.metadata as any as string[];

  return {
    props: { metadata },
  };
}
