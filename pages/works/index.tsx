import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import Grid from "@/components/Grid/Grid";
import Container from "@/components/Shared/Container";
import useSWR from "swr";
import { useRouter } from "next/router";
import usePageResults from "@/hooks/usePageResults";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Results = ({ pages }) => {
  const [page, setPage] = useState(0);
  const { data, error, loading, more } = usePageResults(pages, page);

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
      {data &&
        data
          .filter((result) => result.id)
          .map((result, index) => {
            return <Grid.Item data={result} key={result.id} />;
          })}
      <span ref={loadMore}></span>
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
        <Results pages={pages} />
      </Container>
    </Layout>
  );
};

export default Search;
