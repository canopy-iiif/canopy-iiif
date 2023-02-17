import React, { useEffect, useState } from "react";
import Container from "@/components/Shared/Container";
import Facets from "@/components/Facets/Facets";
import Heading from "@/components/Shared/Heading/Heading";
import { InternationalString } from "@iiif/presentation-3";
import Layout from "@/components/layout";
import { SearchHeaderStyled } from "@/components/Search/Header.styled";
import SearchResults from "@/components/Search/Results";
import { Summary } from "@samvera/nectar-iiif";
import axios from "axios";
import { getActiveFacets } from "@/services/facet/facets";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { query } = router;

  const [pages, setPages] = useState<string[]>([]);
  const [params, setParams] = useState();
  const [summary, setSummary] = useState<InternationalString>();

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
        <SearchHeaderStyled>
          <Heading as="h2">
            {summary && <Summary summary={summary} as="span" />}
          </Heading>
          <Facets />
        </SearchHeaderStyled>
        <SearchResults pages={pages} query={params} />
      </Container>
    </Layout>
  );
};

export default Search;
