import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import dynamic from "next/dynamic";
import GridItem from "../components/Grid/Item";
import GridLoadMore from "../components/Grid/LoadMore";
import { InView } from "react-intersection-observer";

const Grid = dynamic(() => import("../components/Grid/Grid"), {
  ssr: false,
});

const RESULT_LIMIT = 20;

export default function Index({ manifests }) {
  /**
   * @todo make section a component with an isFluid variant and default at max-width 1280
   */

  const [limit, setLimit] = useState(RESULT_LIMIT);
  const [offset, setOffset] = useState(0);
  const [results, setResults] = useState(manifests);

  /**
   * rewrite this w/ static props
   */
  // useEffect(() => {
  //   const data = fetchData(offset);
  //   if (data)
  //     data.then((response) => {
  //       setResults(response.manifests);
  //     });
  // }, []);

  const handleLoadMore = async () => {
    const newOffset = limit + offset;
    const data = fetchData(newOffset);

    if (data && results.length > 0)
      data.then((response) => {
        setResults(results.concat(response.manifests));
        setOffset(newOffset);
      });
  };

  /**
   * @param offset
   * @returns
   */
  const fetchData = async (offset) => {
    const { loading, error, data } = await client.query({
      query: gql`
        query Manifests {
          manifests(limit: ${RESULT_LIMIT}, offset: ${offset}) {
            id
            label
            slug
            metadata
            collectionId
          }
        }
      `,
    });
    if (data) return data;
  };

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
        <Grid>
          {results &&
            results.map((result, i) => {
              return <GridItem data={result} key={result.id} />;
            })}
        </Grid>
        <InView
          as="div"
          onChange={(inView, entry) => handleLoadMore()}
          style={{
            width: "100%",
            height: "50vh",
            position: "absolute",
            bottom: "0",
            left: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <GridLoadMore handleLoadMore={handleLoadMore} />
        </InView>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { loading, error, data } = await client.query({
    query: gql`
      query Manifests {
        manifests(limit: ${RESULT_LIMIT}, offset: 0) {
          id
          label
          slug
          metadata
          collectionId
        }
      }
    `,
  });

  if (!data) return null;

  return {
    props: { ...data },
  };
}
