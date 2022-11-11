import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import Grid from "@/components/Grid/Grid";
import Container from "@/components/Shared/Container";
import { useRouter } from "next/router";
import usePageResults from "@/hooks/usePageResults";
import axios from "axios";

const Results = ({ pages, query }) => {
  const [page, setPage] = useState(0);
  const { data, error, loading, more } = usePageResults(pages, page, query);

  useEffect(() => setPage(0), [query]);

  const observer = useRef();
  const loadMore = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && more)
          setPage((prevPage) => prevPage + 1);
      });
      if (node) observer.current.observe(node);
    },
    [loading, more]
  );

  return (
    <Grid>
      {data.map((result, index) => {
        if (data.length === index + 1) {
          return (
            <span ref={data.length === index + 1 && loadMore} key={result.id}>
              <Grid.Item data={result} />
            </span>
          );
        } else {
          return (
            <span key={result.id}>
              <Grid.Item data={result} />
            </span>
          );
        }
      })}
    </Grid>
  );
};

const Search = () => {
  const router = useRouter();
  const { q } = router.query;

  const [pages, setPages] = useState<string[]>([]);
  const [query, setQuery] = useState<string | undefined>();

  useEffect(() => {
    setPages([]);
    const params = new URLSearchParams();
    if (q) params.append("q", q as string);
    q ? setQuery(params.toString()) : setQuery("");
  }, [q]);

  useEffect(() => {
    if (query !== undefined)
      axios
        .get(`/api/search?${query}`)
        .then((result) => setPages(result.data.items.map((item) => item.id)));
  }, [query]);

  return (
    <Layout>
      <Container containerType="wide">
        <Results pages={pages} query={query} />
      </Container>
    </Layout>
  );
};

export default Search;
