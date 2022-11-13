import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Highlight, Items } from "@/components/Nav/Nav.styled";
import Search from "../Search/Search";
import { SearchToggle } from "../Search/Search.styled";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useSearchState } from "../../context/search";

const NavItems = ({ items }) => {
  const { searchDispatch, searchState } = useSearchState();
  const [itemBoundingBox, setItemBoundingBox] = React.useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState(null);
  const [highlightedItem, setHighlightedItem] = React.useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true);

  const highlightRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

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

  const router = useRouter();

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
            <SearchToggle
              key="search"
              className={router.pathname == item.path ? "active" : ""}
              onMouseOver={(ev) => repositionHighlight(ev, item)}
              onClick={() =>
                searchDispatch({
                  type: "updateVisible",
                  searchVisible: !searchState.searchVisible,
                })
              }
            >
              <MagnifyingGlassIcon />
              {item.text}
            </SearchToggle>
          )}
        </>
      ))}
    </Items>
  );
};

export default NavItems;
