import { styled } from "../../stiches.config";
const Wrapper = styled("nav", {
  padding: "1rem 2rem",
  margin: "auto auto 1rem",
  position: "relative",
  zIndex: "1",
  backgroundColor: "$mauve2",
  boxShadow: "3px 3px 8px #0002",

  a: {
    fontSize: "1.25rem",
    display: "inline-flex",
    marginRight: "0.5rem",
    color: "$mauve12",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "2rem",
    fontWeight: "300",

    [`&:hover`]: {
      color: "$indigo11",
    },

    [`&.active`]: {
      color: "$mauve1",
      backgroundColor: "$indigo12",
      background: "linear-gradient(90deg, $indigo11 0%, $indigo10 100%)",
    },
  },
});

export { Wrapper };
