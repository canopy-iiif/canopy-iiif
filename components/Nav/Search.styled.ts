import { styled } from "@/stitches";
import { indigo, slateA } from "@radix-ui/colors";

const SearchForm = styled("form", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  cursor: "select",

  svg: {
    color: "$indigo9",
    marginRight: "-$gr4",
    position: "relative",
    zIndex: "1",
  },
});

const SearchInput = styled("input", {
  cursor: "select",
  fontSize: "$gr3",
  fontFamily: "$book",
  fontWeight: "500",
  color: "transparent",
  backgroundColor: "transparent",
  padding: "0 $gr3 0 calc($gr4 + $gr2)",
  border: "none",
  transition: "$all",
  borderRadius: "1.618rem",
  height: "calc(($gr1 * 2) + $gr3)",
  outline: "1px solid transparent",
  width: "$gr5",

  "&:active, &:focus": {
    color: "$indigo12",
    backgroundColor: "$indigo4",
    outline: "2px solid $indigo9",
    border: "none",
    width: "$gr9",
  },
});

const SearchSubmit = styled("button", {
  padding: "$gr1 $gr3",
  fontSize: "$gr4",
  fontWeight: "800",
  fontFamily: "$bookTight",
  backgroundColor: "transparent",
  border: "none",
  color: "$indigo12",
  transition: "$all",
  position: "absolute",
  right: "0",
  zIndex: "-1",
  cursor: "select",

  "&:hover, &:focus": {
    color: "$indigo11",
  },
});

export { SearchForm, SearchInput, SearchSubmit };
