import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import groupBy from "lodash/groupBy";
import map from "lodash/map";

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
        {metadata.map((result) => {
          return (
            <>
              <h2>{result.label}</h2>
              {result.data.map((value) => {
                return (
                  <>
                    <h4>{value.value}</h4>
                    {value.values.map((item) => {
                      return (
                        <>
                          <li>{item.manifestId}</li>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { loading, error, data } = await client.query({
    query: gql`
      query Metadata {
        Subject: metadata(label: "Subject") {
          manifestId
          value
        }
        Date: metadata(label: "Date") {
          manifestId
          value
        }
      }
    `,
  });

  if (!data) return null;

  const METADATA_LABELS = process.env.metadata as any as string[];

  const metadata = METADATA_LABELS.map((string) => {
    const values = data[string];
    return {
      label: string,
      data: map(groupBy(values, "value"), (values, value) => ({
        value,
        values,
      })),
    };
  });

  return {
    props: { metadata },
  };
}
