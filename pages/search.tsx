import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "./api/graphql";
import Layout from "../components/layout";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import { InView } from "react-intersection-observer";
import { map as lodashMap, groupBy as lodashGroupBy } from "lodash";
import { useRouter } from "next/router";
import Grid from "../components/Grid/Grid";

const RESULT_LIMIT = 20;

export default function Index({ manifests, metadata }) {
  // const router = useRouter();
  // const filter = Object.getOwnPropertyNames(router.query);
  // const pluck = metadata
  //   .filter((result) => {
  //     return Object.getOwnPropertyNames(router.query).includes(result.label);
  //   })
  //   .map((item) => {
  //     return item.data.filter((term) => {
  //       if (term.value === router.query[filter[0]]) return term.values;
  //     });
  //   })[0][0]
  //   .values.map((manifest) => {
  //     return manifest.manifestId;
  //   });

  // console.log(pluck);

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
              return <Grid.Item data={result} key={result.id} />;
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
            zIndex: "0",
          }}
        >
          <Grid.LoadMore handleLoadMore={handleLoadMore} />
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
        Subject: metadata(label: "Subject") {
          manifestId
          label
          value
        }
        Date: metadata(label: "Date") {
          manifestId
          label
          value
        }
      }
    `,
  });

  const { manifests } = data;

  if (!data) return null;

  const METADATA_LABELS = process.env.metadata as any as string[];

  const metadata = METADATA_LABELS.map((string) => {
    const values = data[string];
    return {
      label: string,
      data: lodashMap(lodashGroupBy(values, "value"), (values, value) => ({
        value,
        values,
      })),
    };
  });

  return {
    props: { manifests, metadata },
  };
}
