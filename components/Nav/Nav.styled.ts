import { styled } from "../../stiches.config";
const Wrapper = styled("nav", {
  padding: "2rem 2rem 1rem",
  margin: "auto",
  position: "relative",
  zIndex: "1",

  a: {
    fontWeight: "350",
    fontSize: "1.5rem",
    display: "inline-flex",
    marginRight: "1rem",
    color: "$mauve11",
    textDecoration: "none",

    [`&:hover`]: {
      color: "$indigo11",
    },

    [`&.active`]: {
      fontWeight: "650",
      color: "$mauve12",
    },
  },
});

export { Wrapper };
