import { styled } from "@/stitches";

const SearchForm = styled("form", {
  margin: "0 $gr3",
});

const SearchInput = styled("input", {
  padding: "$gr1 $gr2",
  fontSize: "$gr4",
  fontFamily: "$sans",
  fontWeight: "300",
  borderRadius: "3px",
  color: "$indigo12",
  backgroundColor: "$indigo4",
  border: "none",
  transition: "$all",
  outline: "none",

  "&:active, &:focus": {
    color: "$indigo12",
    backgroundColor: "$indigo1",
    outline: "2px solid $indigo11",
    boxShadow: "1px 1px 6px #fff2",
  },
});

const SearchSubmit = styled("input", {
  padding: "$gr1 $gr2",
  fontSize: "$gr4",
  fontFamily: "$serif",
  fontWeight: "300",
  backgroundColor: "transparent",
  color: "$slate1",
  border: "none",
  cursor: "pointer",
  display: "none",
});

export { SearchForm, SearchInput, SearchSubmit };
