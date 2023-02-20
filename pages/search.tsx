import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Shared/Container";
import Facets from "@/components/Facets/Facets";
import Layout from "@/components/layout";
import {
  SearchHeaderFloat,
  SearchHeaderStyled,
} from "@/components/Search/Header.styled";
import SearchResults from "@/components/Search/Results";
import axios from "axios";
import { getActiveFacets } from "@/services/facet/facets";
import { useRouter } from "next/router";
import useElementPosition from "@/hooks/useElementPosition";
import { useSearchState } from "@/context/search";
import { headerHeight } from "@/styles/global";
import { Summary } from "@samvera/nectar-iiif";

const Search = () => {
  const router = useRouter();
  const { query } = router;

  const [pages, setPages] = useState<string[]>([]);
  const [params, setParams] = useState();

  const searchHeaderRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useElementPosition(searchHeaderRef);

  const {
    searchDispatch,
    searchState: { searchHeaderFixed, searchSummary },
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

        result.data.summary &&
          searchDispatch({
            type: "updateSearchSummary",
            searchSummary: result.data.summary,
          });
      });
  }, [params]);

  return (
    <Layout>
      <SearchHeaderStyled ref={searchHeaderRef} isFixed={searchHeaderFixed}>
        <SearchHeaderFloat>
          <Container containerType="wide">
            <Facets />
            {searchSummary && (
              <Summary
                as="span"
                id="canopy-search-summary"
                summary={searchSummary}
              />
            )}
          </Container>
        </SearchHeaderFloat>
      </SearchHeaderStyled>
      <Container containerType="wide">
        <SearchResults pages={pages} query={params} />
      </Container>
    </Layout>
  );
};

export default Search;
