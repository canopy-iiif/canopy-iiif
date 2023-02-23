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
import { useSearchParams } from "next/navigation";
import useElementPosition from "@/hooks/useElementPosition";
import { useSearchState } from "@/context/search";
import { headerHeight } from "@/styles/global";
import { Summary } from "@samvera/nectar-iiif";

const Search = () => {
  const searchParams: URLSearchParams = useSearchParams();

  const [pages, setPages] = useState<string[]>([]);
  const [params, setParams] = useState<URLSearchParams>();

  const searchHeaderRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useElementPosition(searchHeaderRef);

  const {
    searchDispatch,
    searchState: { searchHeaderFixed, searchSummary },
  } = useSearchState();

  useEffect(() => {
    setPages([]);
    setParams(new URLSearchParams(searchParams.toString()));
  }, [searchParams]);

  useEffect(
    () =>
      searchDispatch({
        searchHeaderFixed: scrollPosition > -headerHeight,
        type: "updateSearchHeaderFixed",
      }),
    [searchDispatch, scrollPosition]
  );

  useEffect(() => {
    if (typeof params !== "undefined") {
      searchDispatch({
        searchParams: params,
        type: "updateSearchParams",
      });

      axios.get(`/api/search`, { params }).then((result) => {
        setPages(result.data.items.map((item: any) => item.id));

        result.data.summary &&
          searchDispatch({
            type: "updateSearchSummary",
            searchSummary: result.data.summary,
          });
      });
    }
  }, [params, searchDispatch]);

  return (
    <Layout>
      <SearchHeaderStyled ref={searchHeaderRef} isFixed={searchHeaderFixed}>
        <SearchHeaderFloat>
          <Container containerType="wide">
            {searchSummary && (
              <Summary
                as="span"
                id="canopy-search-summary"
                summary={searchSummary}
              />
            )}
            <Facets />
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
