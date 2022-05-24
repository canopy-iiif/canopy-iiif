import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Hero from "@/components/Hero/Hero";
import BloomIIIF from "@samvera/bloom-iiif";

export default function Index({ metadata }) {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
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
        <div style={{ padding: "1rem 2rem" }}>
          {metadata.map((label) => (
            <BloomIIIF
              collectionId={`${baseUrl}/api/iiif/metadata/${label}`}
              key={`${baseUrl}/api/iiif/metadata/${label}`}
            />
          ))}
        </div>
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
