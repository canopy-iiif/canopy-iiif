import React from "react";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import orderBy from "lodash/orderBy";
import dynamic from "next/dynamic";

const BloomIIIF = dynamic(() => import("@samvera/bloom-iiif"), {
  ssr: false,
});

export default function Index({ metadata }) {
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
          <BloomIIIF
            collectionId={`http://localhost:5001/api/iiif/metadata/${label}`}
          />
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
