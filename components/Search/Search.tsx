import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const search = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/works",
      query: {
        q: query,
      },
    });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  useEffect(() => {
    if (router) {
      const { q } = router.query;
      if (q && search.current) search.current.value = q as string;
      setQuery(q as string);
    }
  }, [router]);

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleSearchChange} placeholder="Search" ref={search} />
      <button>Search</button>
    </form>
  );
};

export default Search;
