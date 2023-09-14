import { styled } from "@/src/styles/stitches";

const Content = styled("div", {
  padding: "$gr3 0 0",

  h4: {
    margin: "0",
    fontWeight: "400",
    fontSize: "$gr4",
    fontFamily: "$sans",
    textDecoration: "none !important",
  },

  span: {
    display: "block",
    margin: "0.25rem 0 0",
    fontWeight: "300",
    fontSize: "0.8333rem",
    color: "$slate10",
  },
});

const Placeholder = styled("div", {
  backgroundColor: "$slate6",
  width: "100%",
  height: "100%",
  overflowY: "hidden",
  borderRadius: "3px",
  transition: "$canopyAll",
});

const Wrapper = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "240px",
  position: "relative",

  a: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    color: "$slate12",
    textDecoration: "none !important",
    transition: "$canopyAll",

    [`&:hover, &:focus`]: {
      color: "$indigo10",

      [`${Placeholder}`]: {
        transform: "scale3d(1.02, 1.02, 1.02)",
        boxShadow: "3px 3px 8px #0002",
      },
    },
  },
});

export { Content, Placeholder, Wrapper };
