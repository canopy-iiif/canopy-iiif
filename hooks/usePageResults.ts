import { useEffect, useState } from "react";
import axios from "axios";

const usePageResults = (pages, page, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [more, setMore] = useState(false);

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
    pages.length > 0 &&
      axios
        .get(pages[page])
        .then((result) => {
          setData((prevResults) => [...prevResults, ...result.data.items]);
          setMore(pages.length > page);
          setLoading(false);
        })
        .catch((error) => setError(error));
  }, [pages, page]);

  return {
    data,
    error,
    loading,
    more,
  };
};

export default usePageResults;
