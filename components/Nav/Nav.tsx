import Link from "next/link";
import React from "react";
import { Highlight, Wrapper } from "./Nav.styled";
import { useRouter } from "next/router";

const Nav = () => {
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

  const highlightStyles = {};

  if (itemBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
    highlightStyles.opacity = highlightedItem ? 1 : 0;
    highlightStyles.width = `${itemBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      itemBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  const router = useRouter();

  const items = [
    { path: "/", text: "Browse" },
    { path: "/search", text: "Search" },
    { path: "/collections", text: "Collections" },
    { path: "/about", text: "About" },
  ];

  return (
    <Wrapper ref={wrapperRef} onMouseLeave={resetHighlight}>
      <Highlight ref={highlightRef} style={highlightStyles} />
      {items.map((item) => (
        <Link href={item.path} key={item.path}>
          <a
            className={router.pathname == item.path ? "active" : ""}
            onMouseOver={(ev) => repositionHighlight(ev, item)}
          >
            {item.text}
          </a>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Nav;
