import { styled } from "@styles/stitches";

const SearchForm = styled("form", {
  cursor: "select",
  margin: "0 $gr4",
  width: "100%",

  "@sm": {
    width: "calc(100% - ($gr4 * 2))",
  },

  "@xs": {
    margin: "0 $gr3",
    width: "calc(100% - ($gr3 * 2))",
  },

  "&:focus-within": {
    svg: {
      color: "var(--accent-11)",
    },
  },
});

export { SearchForm };
