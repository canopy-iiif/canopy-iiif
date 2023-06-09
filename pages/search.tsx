import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Shared/Container";
import Facets from "@/components/Facets/Facets";
import Layout from "@/components/layout";
import {
  SearchHeaderFloat,
  SearchHeaderStyled,
} from "@/components/Search/Header.styled";
import SearchResults from "@/components/Search/Results";
import { useSearchParams } from "next/navigation";
import useElementPosition from "@/hooks/useElementPosition";
import { useCanopyState } from "@/context/canopy";
import { headerHeight } from "@/styles/global";
import { Summary } from "@samvera/nectar-iiif";
import { LocaleString } from "@/hooks/useLocale";
import { searchRequest } from "@/services/search/request";

const Search = () => {
  const searchParams: URLSearchParams = useSearchParams();

  const [pages, setPages] = useState<string[]>([]);
  const [params, setParams] = useState<URLSearchParams>();

  const searchHeaderRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useElementPosition(searchHeaderRef);

  const {
    canopyDispatch,
    canopyState: { config, searchHeaderFixed, searchSummary },
  } = useCanopyState();

  useEffect(() => {
    setPages([]);
    setParams(new URLSearchParams(searchParams.toString()));
  }, [searchParams]);

  useEffect(
    () =>
      canopyDispatch({
        searchHeaderFixed: scrollPosition > -headerHeight,
        type: "updateSearchHeaderFixed",
      }),
    [canopyDispatch, scrollPosition]
  );

  useEffect(() => {
    if (typeof params !== "undefined") {
      canopyDispatch({
        searchParams: params,
        type: "updateSearchParams",
      });

      const flexSearch = config?.search?.flexSearch;
      const baseUrl = config?.baseUrl;

      const { items, summary } = searchRequest({
        params,
        baseUrl,
        flexSearch,
      });

      setPages(items.map((item: any) => item.id));
      summary &&
        canopyDispatch({
          type: "updateSearchSummary",
          searchSummary: summary,
        });
    }
  }, [config, params, canopyDispatch]);

  return (
    <Layout>
      <SearchHeaderStyled ref={searchHeaderRef} isFixed={searchHeaderFixed}>
        <SearchHeaderFloat>
          <Container containerType="wide">
            {searchSummary && (
              <span id="canopy-search-summary">
                <Summary as="span" summary={searchSummary} />{" "}
                {LocaleString("searchResults")}
              </span>
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
