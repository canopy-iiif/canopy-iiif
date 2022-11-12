import { styled } from "@/stitches";

const SearchForm = styled("form", {
  margin: "0 $gr4",
  display: "flex",
  flexGrow: "1",
  position: "relative",
  borderRadius: "3px",
});

const SearchInput = styled("input", {
  padding: "$gr1 $gr2",
  fontSize: "$gr3",
  fontFamily: "$book",
  fontWeight: "500",
  borderRadius: "3px",
  color: "$indigo12",
  backgroundColor: "$slate2",
  border: "1px solid $slate6",
  transition: "$all",
  outline: "none",
  flexGrow: "1",

  "&:active, &:focus": {
    color: "$indigo12",
    backgroundColor: "$indigo3",
    outline: "2px solid $indigo11",
    boxShadow: "1px 1px 6px #fff2",
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

export { SearchForm, SearchInput, SearchSubmit };
