import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { SearchForm, SearchInput, SearchSubmit } from "../Search/Search.styled";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { useSearchState } from "@/context/search";

const Search = () => {
  const router = useRouter();
  const { searchDispatch, searchState } = useSearchState();
  const { searchQuery } = searchState;

  const [query, setQuery] = useState<string>(searchQuery);
  const search = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        q: query,
      },
    });
    searchDispatch({ type: "updateSearchQuery", searchQuery: query });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (router) {
      const { q } = router.query;
      if (q && search.current) search.current.value = q as string;
      setQuery(q as string);
    }
  }, [router]);

  return (
    <SearchForm onSubmit={handleSubmit}>
      <MagnifyingGlassIcon />
      <SearchInput onChange={handleSearchChange} ref={search} />
      <SearchSubmit type="submit">Search</SearchSubmit>
    </SearchForm>
  );
};

export default Search;
