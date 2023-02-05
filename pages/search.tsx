import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import Grid from "@/components/Grid/Grid";
import Container from "@/components/Shared/Container";
import { useRouter } from "next/router";
import usePageResults from "@/hooks/usePageResults";
import axios from "axios";
import { InternationalString } from "@iiif/presentation-3";
import { Summary } from "@samvera/nectar-iiif";
import Facets from "../components/Facets/Facets";
import { getActiveFacets } from "@/services/facet/facets";

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
      {data.map((item, index) => {
        if (data.length === index + 1) {
          return (
            <span ref={data.length === index + 1 && loadMore} key={item.id}>
              <Grid.Item item={item} />
            </span>
          );
        } else {
          return (
            <span key={item.id}>
              <Grid.Item item={item} />
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

  const [facets, setFacets] = useState([]);
  const [pages, setPages] = useState<string[]>([]);
  const [params, setParams] = useState();
  const [summary, setSummary] = useState<InternationalString>();

  useEffect(() => {
    const activeFacets = getActiveFacets(router.query);
    setFacets(activeFacets);
  }, [router.query]);

  useEffect(() => {
    setPages([]);
    const params = new URLSearchParams();
    if (q) params.append("q", q as string);
    if (facets)
      facets.forEach((facet) =>
        params.append(facet.label, facet.value as string)
      );
    setParams(params);
  }, [q, facets]);

  useEffect(() => {
    if (params !== undefined)
      axios.get(`/api/search`, { params }).then((result) => {
        setPages(result.data.items.map((item) => item.id));
        setSummary(result.data.summary);
      });
  }, [params]);

  return (
    <Layout>
      <Container containerType="wide">
        <div
          style={{
            padding: "1rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontWeight: "300", opacity: "0.5" }}>
            {summary && <Summary summary={summary} as="span" />}
          </h3>
          <Facets />
        </div>
        <Results pages={pages} query={params} />
      </Container>
    </Layout>
  );
};

export default Search;
