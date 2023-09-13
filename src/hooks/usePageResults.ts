// @ts-nocheck

import { useEffect, useState } from "react";

import { searchRequest } from "@/lib/search/request";
import { useCanopyState } from "@/context/canopy";

const usePageResults = (pages: any, page: any, query: any) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [more, setMore] = useState(false);

  const {
    canopyState: { config },
  } = useCanopyState();

  const reset = () => {
    setData([]);
    setError(false);
    setLoading(true);
    setMore(false);
  };

  useEffect(() => reset(), [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    if (pages?.length > 0 && pages[page]) {
      const params = new URL(pages[page]).searchParams;
      const baseUrl = config?.baseUrl;
      const flexSearch = config?.search?.flexSearch;

      const { items } = searchRequest({
        params,
        baseUrl,
        flexSearch,
      });

      setData((prevResults) => [...prevResults, ...items]);
      setMore(pages.length > page);
      setLoading(false);
    }
  }, [config, pages, page]);

  return {
    data,
    error,
    loading,
    more,
  };
};

export default usePageResults;
