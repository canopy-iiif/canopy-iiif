import { styled } from "@styles/stitches";

const SearchHeaderStyled = styled("div", {
  height: "$gr5",
  padding: "$gr4 0 $gr2",

  "@sm": {
    height: "$gr5",
    padding: "$gr3 0 $gr2",
  },

  "#canopy-search-summary": {
    position: "relative",
    display: "block",
    fontSize: "$gr3",
    color: "var(--gray-11)",
    fontWeight: "500",
    padding: "$gr2 0",

    "@sm": {
      fontSize: "$gr3",
    },
  },
});

export { SearchHeaderStyled };
