import { styled } from "@/stiches.config";

const Content = styled("div", {
  padding: "1rem 0 0",

  h4: {
    margin: "0",
    fontWeight: "500",
    fontSize: "1rem",
    textDecoration: "none !important",
  },

  span: {
    display: "block",
    margin: "0.25rem 0 0",
    fontWeight: "300",
    fontSize: "0.8333rem",
    color: "$mauve10",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  width: "100%",
  position: "relative",

  a: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    color: "$mauve12",
    textDecoration: "none !important",
    transition: "all 200ms ease-in-out",

    [`&:hover, &:focus`]: {
      color: "$indigo11",

      figure: {
        transform: "scale3d(1.04, 1.04, 1.04)",
        boxShadow: "3px 3px 8px #0002",
      },
    },
  },
});

export { Content, Wrapper };
