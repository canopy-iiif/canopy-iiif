import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import Layout from "../components/layout";
import Grid from "../components/Grid/Grid";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import { InView } from "react-intersection-observer";

const RESULT_LIMIT = 20;
const RESULT_OFFSET = 0;

export default function Index({ manifests }) {
  /**
   * @todo make section a component with an isFluid variant and default at max-width 1280
   */

  const [limit, setLimit] = useState(RESULT_LIMIT);
  const [offset, setOffset] = useState(RESULT_OFFSET);
  const [results, setResults] = useState();

  useEffect(() => {
    const data = fetchData(offset);
    if (data)
      data.then((response) => {
        setResults(response.manifests);
      });
  }, []);

  const handleLoadMore = async () => {
    const newOffset = limit + offset;
    const data = fetchData(newOffset);

    if (data && results)
      data.then((response) => {
        setResults(results.concat(response.manifests));
        setOffset(newOffset);
      });
  };

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
        }}
      >
        <Nav />
        <Grid>
          {results &&
            results.map((result, i) => {
              return <Grid.Item data={result} key={result.id} />;
            })}
          <InView as="div" onChange={(inView, entry) => handleLoadMore()}>
            <Grid.LoadMore handleLoadMore={handleLoadMore} />
          </InView>
        </Grid>
      </section>
    </Layout>
  );
}
