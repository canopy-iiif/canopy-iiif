// @ts-nocheck

import { useEffect, useState } from "react";
import axios from "axios";
import { useCanopyState } from "@/context/canopy";
import { staticSearchRequest } from "@/services/search/static";

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
      const isStatic = config?.static;
      const flexSearch = config?.search?.flexSearch;
      const url = config?.url;
      const params = new URL(pages[page]).searchParams;

      const data = isStatic
        ? staticSearchRequest({
            params,
            url,
            flexSearch,
          })
        : axios.get(pages[page]).then((result) => result.data);

      data.then(async (collection: any) => {
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
