import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import orderBy from "lodash/orderBy";
import Ribbon from "../components/Ribbon/Ribbon";

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
        <Nav />
        {metadata.map((result) => (
          <Ribbon label={result.label} key={result.label}>
            {result.values.map((data) => (
              <Ribbon.Item data={data} />
            ))}
          </Ribbon>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const METADATA_LABELS = process.env.metadata as any as string[];

  const metadataQueries = METADATA_LABELS.map((label) => {
    return `
      ${label}: metadata(label: "${label}") {
        manifestId
        value
      }
    `;
  });

  const { loading, error, data } = await client.query({
    query: gql`
      query Metadata {
        ${metadataQueries.join(",")}
      }
    `,
  });

  const metadata = METADATA_LABELS.map((string) => {
    const values = data[string];
    return {
      label: string,
      data: map(groupBy(values, "value"), (values, value) => ({
        value,
        values,
      })),
    };
  }).map((grouped) => {
    const values = orderBy(
      grouped.data.map((term) => {
        return {
          value: term.value,
          count: term.values.length,
          representative:
            term.values[Math.floor(Math.random() * term.values.length)]
              .manifestId,
        };
      }),
      "count",
      "desc"
    ).slice(0, 5);
    return {
      label: grouped.label,
      values,
    };
  });

  return {
    props: { metadata },
  };
}
