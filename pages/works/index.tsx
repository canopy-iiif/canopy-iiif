import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Grid from "@/components/Grid/Grid";
import Container from "@/components/Shared/Container";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Results = ({ active }) => {
  const [results, setResults] = useState([]);
  const { data } = useSWR(active, fetcher);

  useEffect(() => {
    data && setResults((current) => [current, ...data?.items]);
  }, [data]);

  return (
    <Grid>
      {results &&
        results
          .filter((result) => result.id)
          .map((result, i) => {
            return <Grid.Item data={result} key={result.id} />;
          })}
    </Grid>
  );
};

const Search = () => {
  const router = useRouter();
  const { q } = router.query;

  const [pages, setPages] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const { data } = useSWR(`/api/search?${query}`, fetcher);

  useEffect(() => {
    const params = new URLSearchParams();
    if (q) params.append("q", q as string);
    q ? setQuery(params.toString()) : setQuery("");
  }, [q]);

  useEffect(() => {
    if (data) {
      const ids = data?.items.map((item) => item.id);
      setPages(ids);
    }
  }, [data]);

  return (
    <Layout>
      <Container containerType="wide">
        <Results active={pages} />
      </Container>
    </Layout>
  );
};

export default Search;
