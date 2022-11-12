import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import { SearchForm, SearchInput, SearchSubmit } from "./Search.styled";

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
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        onChange={handleSearchChange}
        placeholder="Find works..."
        ref={search}
      />
      <SearchSubmit value="Search" type="submit" />
    </SearchForm>
  );
};

export default Search;
