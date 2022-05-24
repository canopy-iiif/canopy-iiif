import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Highlight, Items } from "@/components/Nav/Nav.styled";

const NavItems = ({ items }) => {
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
      transitionDuration: isHoveredFromNull ? "0ms" : "100ms",
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
        <Link href={item.path} key={item.path}>
          <a
            className={router.pathname == item.path ? "active" : ""}
            onMouseOver={(ev) => repositionHighlight(ev, item)}
          >
            {item.text}
          </a>
        </Link>
      ))}
    </Items>
  );
};

export default NavItems;
