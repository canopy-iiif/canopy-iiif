import { styled } from "@/stitches";
import { indigoA } from "@radix-ui/colors";

const SearchForm = styled("form", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  cursor: "select",
  margin: "0 $gr4",
  flexGrow: "1",
  flexShrink: "1",
  maxWidth: "$gr10",
  width: "100%",
  justifyContent: "space-between",
  opacity: "1",

  "@sm": {
    maxWidth: "calc(100% - ($gr4 * 2))",
  },

  variants: {
    isFocused: {
      true: {
        svg: {
          color: "$indigo9",
        },
      },
    },
  },

  "&:hover input": {
    outlineColor: "$indigo7",
  },

  svg: {
    color: "$indigo8",
    marginLeft: "$gr2",
    position: "relative",
    zIndex: "1",
    transition: "$all",
  },
});

const SearchInput = styled("input", {
  transition: "$all",
  cursor: "select",
  fontSize: "$gr3",
  fontFamily: "$book",
  fontWeight: "500",
  color: "$slate12",
  backgroundColor: "$indigo3",
  padding: "0 $gr3 0 calc($gr4 + $gr2)",
  border: "none",
  borderRadius: "1.618rem",
  height: "calc(($gr1 * 2) + $gr3)",
  outline: "1px solid $indigo5",
  boxShadow: `inset 1px 1px 2px ${indigoA.indigoA4}`,
  flexGrow: "1",
  position: "absolute",
  right: "0",
  width: "calc(100% - ($gr3 + $gr4 + $gr2))",
  zIndex: "0",

  "&:active, &:focus": {
    color: "$indigo12",
    backgroundColor: "$indigo4",
    outline: "2px solid $indigo9",
    border: "none",
    flexShrink: "1",
    boxShadow: `2px 2px 5px ${indigoA.indigoA7}`,
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
  cursor: "pointer",
  transition: "$all",
  zIndex: "1",

  "&:hover, &:focus": {
    color: "$indigo11",
  },
});

export { SearchForm, SearchInput, SearchSubmit };
