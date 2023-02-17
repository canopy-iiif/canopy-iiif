import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Shared/Container";
import Facets from "@/components/Facets/Facets";
import Heading from "@/components/Shared/Heading/Heading";
import { InternationalString } from "@iiif/presentation-3";
import Layout from "@/components/layout";
import {
  SearchHeaderFloat,
  SearchHeaderStyled,
} from "@/components/Search/Header.styled";
import SearchResults from "@/components/Search/Results";
import { Summary } from "@samvera/nectar-iiif";
import axios from "axios";
import { getActiveFacets } from "@/services/facet/facets";
import { useRouter } from "next/router";
import useElementPosition from "@/hooks/useElementPosition";
import { useSearchState } from "@/context/search";
import { headerHeight } from "@/styles/global";

const Search = () => {
  const router = useRouter();
  const { query } = router;

  const [pages, setPages] = useState<string[]>([]);
  const [params, setParams] = useState();
  const [summary, setSummary] = useState<InternationalString>();

  const searchHeaderRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useElementPosition(searchHeaderRef);

  const {
    searchDispatch,
    searchState: { searchHeaderFixed },
  } = useSearchState();

  useEffect(() => {
    const { q } = query;
    const facets = getActiveFacets(query);
    const params = new URLSearchParams();

    if (q) params.append("q", q as string);
    if (facets)
      facets.forEach((facet: any) =>
        params.append(facet.label, facet.value as string)
      );

    setPages([]);
    setParams(params as any);
  }, [query]);

  useEffect(
    () =>
      searchDispatch({
        searchHeaderFixed: scrollPosition > -headerHeight,
        type: "updateSearchHeaderFixed",
      }),
    [searchDispatch, scrollPosition]
  );

  useEffect(() => {
    if (typeof params !== "undefined")
      axios.get(`/api/search`, { params }).then((result) => {
        setPages(result.data.items.map((item: any) => item.id));
        setSummary(result.data.summary);
      });
  }, [params]);

  return (
    <Layout>
      <Container containerType="wide">
        <SearchHeaderStyled ref={searchHeaderRef} isFixed={searchHeaderFixed}>
          <SearchHeaderFloat>
            <Heading as="span">
              {summary && <Summary summary={summary} as="span" />}{" "}
            </Heading>
            <Facets />
          </SearchHeaderFloat>
        </SearchHeaderStyled>
        <SearchResults pages={pages} query={params} />
      </Container>
    </Layout>
  );
};

export default Search;
