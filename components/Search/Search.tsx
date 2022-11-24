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
  const { searchQuery, searchVisible } = searchState;

  const [query, setQuery] = useState<string>(searchQuery);
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const search = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
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
    <SearchForm onSubmit={handleSubmit} isFocused={searchFocus}>
      <MagnifyingGlassIcon />
      <SearchInput
        onChange={handleSearchChange}
        onFocus={handleSearchFocus}
        onBlur={handleSearchFocus}
        ref={search}
      />
      <SearchSubmit type="submit" css={searchFocus ? { zIndex: 1 } : {}}>
        Search
      </SearchSubmit>
    </SearchForm>
  );
};

export default Search;
