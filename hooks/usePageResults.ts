import { useEffect, useState } from "react";
import axios from "axios";

const usePageResults = (pages, page) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);
  const [more, setMore] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    if (pages?.length > 0) {
      setLoading(true);
      setError(false);
      axios
        .get(pages[page])
        .then((result) => {
          setData((prevResults) => {
            return [...prevResults, ...result.data.items];
          });
          setLoading(false);
          setMore(pages.length > page);
        })
        .catch((error) => setError(error));
    }
  }, [pages, page]);

  return {
    data,
    error,
    loading,
    more,
  };
};

export default usePageResults;
