import { indigoA } from "@radix-ui/colors";
import { styled } from "@/src/styles/stitches";

const SearchInput = styled("input", {
  transition: "$canopyAll",
  cursor: "select",
  fontSize: "$gr3",
  fontFamily: "$sans",
  fontWeight: "500",
  color: "$slate12",
  backgroundColor: "$slate2",
  padding: "0 $gr3 0 calc($gr4 + $gr2)",
  border: "1px solid $slate6",
  borderRadius: "2rem",
  height: "calc($gr4 + $gr1 * 2)",
  flexGrow: "1",
  position: "absolute",
  right: "0",
  width: "calc(100% - ($gr3 + $gr4 + $gr2))",
  zIndex: "0",

  "&:active, &:focus": {
    color: "$indigo12",
    backgroundColor: "$indigo4",
    outline: "none",
    flexShrink: "1",
    border: "1px solid $indigo7",
    boxShadow: `inset 1px 1px 1px ${indigoA.indigoA4}`,
  },
});

const SearchSubmit = styled("button", {
  padding: "0 $gr3",
  height: "calc($gr4 + $gr1 * 2)",
  fontSize: "$gr3",
  fontWeight: "500",
  fontFamily: "$sans",
  borderRadius: "2rem ",
  backgroundColor: "transparent",
  color: "$slate9",
  cursor: "pointer",
  transition: "$canopyAll",
  zIndex: "1",
  border: "none",

  "&:hover, &:focus": {
    color: "$indigo11",
    opacity: "1",
  },
});

const SearchForm = styled("form", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  cursor: "select",
  margin: "0 $gr4",
  flexGrow: "1",
  flexShrink: "1",
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
    color: "$slate9",
    marginLeft: "$gr2",
    position: "relative",
    zIndex: "1",
    transition: "$canopyAll",
  },

  "&:focus-within": {
    svg: {
      color: "$indigo9",
    },

    [`> ${SearchSubmit}`]: {
      color: "$indigo11",
    },
  },
});

export { SearchForm, SearchInput, SearchSubmit };
