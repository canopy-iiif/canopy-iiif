import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { InView } from "react-intersection-observer";
import { map as lodashMap, groupBy as lodashGroupBy } from "lodash";
import Grid from "@/components/Grid/Grid";
import Container from "@/components/Shared/Container";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const { data, error } = useSWR("/api/search", fetcher);
  const [results, setResults] = useState([]);

  const handleLoadMore = async () => {};

  useEffect(() => {
    data && setResults(data?.items);
  }, [data]);

  return (
    <Layout>
      <Container containerType="wide">
        {/* <Filter /> */}
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
      </Container>
    </Layout>
  );
};

export default Search;
