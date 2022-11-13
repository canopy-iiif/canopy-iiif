import { styled } from "@/stitches";

const SearchForm = styled("form", {
  backgroundColor: "$slate6",
  display: "flex",
  flexGrow: "1",
  position: "relative",
  zIndex: "0",
  transition: "$all",
  maxHeight: "0",
  overflow: "hidden",
  opacity: "0",

  variants: {
    isVisible: {
      true: {
        maxHeight: "500px",
        opacity: "1",
      },
    },
  },
});

const SearchInput = styled("input", {
  padding: "$gr3 $gr4",
  fontSize: "$gr4",
  fontFamily: "$book",
  fontWeight: "500",
  color: "$slate12",
  backgroundColor: "transparent",
  border: "none",
  transition: "$all",
  outline: "none",
  flexGrow: "1",

  "&:active, &:focus": {
    color: "$indigo11",
    backgroundColor: "$indigoA4",
  },
});

const SearchSubmit = styled("input", {
  padding: "$gr1 $gr2",
  marginLeft: "-$gr1",
  fontSize: "$gr3",
  fontWeight: "300",
  fontFamily: "$book",
  backgroundColor: "$indigo9",
  color: "$indigo3",
  border: "1px solid $indigo9",
  borderRadius: "5px",
  borderTopLeftRadius: "0",
  borderBottomLeftRadius: "0",
  cursor: "pointer",
  transition: "$all",
  position: "absolute",
  right: "0",
  top: "0",

  "&:hover, &:focus": {
    backgroundColor: "$indigo11",
    color: "$indigo1",
    boxShadow: "1px 1px 6px #0002",
  },
});

const SearchToggle = styled("a", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",

  svg: {
    marginRight: "$gr2",
    zIndex: "-1",
  },
});

export { SearchForm, SearchInput, SearchSubmit, SearchToggle };
