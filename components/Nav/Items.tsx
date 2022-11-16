import Link from "next/link";
import { useRouter } from "next/router";
import { Highlight, Items } from "@/components/Nav/Nav.styled";
import { useSearchState } from "../../context/search";
import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { SearchForm, SearchInput, SearchSubmit } from "./Search.styled";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const NavItems = ({ items }) => {
  const router = useRouter();
  const { searchDispatch, searchState } = useSearchState();
  const { searchQuery, searchVisible } = searchState;

  const [query, setQuery] = useState<string>(searchQuery);
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const search = useRef<HTMLInputElement>(null);

  const [itemBoundingBox, setItemBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  /**
   * highlight positioning
   */
  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const repositionHighlight = (e, item) => {
    setItemBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedItem);
    setHighlightedItem(item);
  };

  const resetHighlight = () => setHighlightedItem(null);

  let highlightStyles = {};

  if (itemBoundingBox && wrapperBoundingBox) {
    highlightStyles = {
      transitionDuration: isHoveredFromNull ? "0ms" : "200ms",
      opacity: highlightedItem ? 0.25 : 0,
      width: `${itemBoundingBox.width}px`,
      transform: `translate(${
        itemBoundingBox.left - wrapperBoundingBox.left
      }px)`,
    };
  }

  /**
   * search handling
   */
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
    <Items ref={wrapperRef} onMouseLeave={resetHighlight}>
      <Highlight ref={highlightRef} css={highlightStyles} />
      {items.map((item) => (
        <>
          {item.type === "link" && (
            <Link
              href={item.path}
              key={item.path}
              className={router.pathname == item.path ? "active" : ""}
              onMouseOver={(ev) => repositionHighlight(ev, item)}
            >
              {item.text}
            </Link>
          )}
          {item.type === "search" && (
            <SearchForm onSubmit={handleSubmit} isFocused={searchFocus}>
              <MagnifyingGlassIcon />
              <SearchInput
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchFocus}
                ref={search}
              />
              <SearchSubmit
                type="submit"
                css={searchFocus ? { zIndex: 1 } : {}}
              >
                Search
              </SearchSubmit>
            </SearchForm>
          )}
        </>
      ))}
    </Items>
  );
};

export default NavItems;
