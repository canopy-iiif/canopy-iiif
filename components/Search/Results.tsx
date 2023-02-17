import React, { useCallback, useEffect, useRef, useState } from "react";
import Grid from "@/components/Grid/Grid";
import usePageResults from "@/hooks/usePageResults";

interface SearchResultsProps {
  pages: any;
  query: any;
}

const SearchResults: React.FC<SearchResultsProps> = ({ pages, query }) => {
  const [page, setPage] = useState(0);
  const { data, loading, more } = usePageResults(pages, page, query);

  useEffect(() => setPage(0), [query]);

  const observer = useRef<IntersectionObserver>();
  const loadMore = useCallback(
    (node: HTMLElement) => {
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
      {data.map((item: any, index) =>
        data.length === index + 1 ? (
          <span
            ref={data.length === index + 1 ? loadMore : undefined}
            key={item.id}
          >
            <Grid.Item item={item} />
          </span>
        ) : (
          <span key={item.id}>
            <Grid.Item item={item} />
          </span>
        )
      )}
    </Grid>
  );
};

export default SearchResults;
