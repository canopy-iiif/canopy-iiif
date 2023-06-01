// @ts-nocheck

import { useEffect, useState } from "react";
import { useCanopyState } from "@/context/canopy";
import { searchRequest } from "@/services/search/request";

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
      const flexSearch = config?.search?.flexSearch;
      const url = config?.url;

      searchRequest({
        params,
        url,
        flexSearch,
      }).then((collection: any) => {
        setData((prevResults) => [...prevResults, ...collection.items]);
        setMore(pages.length > page);
        setLoading(false);
      });
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
