import { styled } from "@/stitches";
import { indigo, indigoA, slate, slateA } from "@radix-ui/colors";

const Content = styled("div", {
  padding: "$gr3 0 0",

  h4: {
    margin: "0",
    fontWeight: "600",
    fontSize: "$gr4",
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

const Wrapper = styled("div", {
  display: "flex",
  width: "100%",
  position: "relative",

  a: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    color: "$slate12",
    textDecoration: "none !important",
    transition: "$all",

    [`&:hover, &:focus`]: {
      color: "$indigo10",

      figure: {
        transform: "scale3d(1.03, 1.03, 1.03)",
        boxShadow: "3px 3px 8px #0002",
      },
    },
  },
});

export { Content, Wrapper };
