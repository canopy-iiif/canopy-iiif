import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import { SearchForm, SearchInput } from "./Search.styled";
import { useSearchState } from "../../context/search";

const Search = () => {
  const { searchState, searchDispatch } = useSearchState();
  const { searchQuery, searchVisible } = searchState;

  const router = useRouter();
  const [query, setQuery] = useState<string>(searchQuery);
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const search = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/works",
      query: {
        q: query,
      },
    });
    searchDispatch({ type: "updateQuery", searchQuery: query });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchFocus = (e: FocusEvent) =>
    e.type === "focus" ? setSearchFocus(true) : setSearchFocus(false);

  useEffect(() => {
    if (router) {
      const { q } = router.query;
      if (q && search.current) search.current.value = q as string;
      setQuery(q as string);
    }
  }, [router]);

  useEffect(() => search?.current?.focus(), [searchVisible]);

  return (
    <SearchForm onSubmit={handleSubmit} isVisible={searchVisible}>
      <SearchInput
        onChange={handleSearchChange}
        onFocus={handleSearchFocus}
        onBlur={handleSearchFocus}
        placeholder="Find works..."
        ref={search}
      />
    </SearchForm>
  );
};

export default Search;
