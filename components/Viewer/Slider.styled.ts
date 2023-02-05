import { styled } from "@/stitches";

const SliderStyled = styled("div", {
  marginBottom: "$gr5",

  [`& .bloom-header-label`]: {},

  [`& .bloom-header-summary`]: {
    display: "block",
    fontSize: "$gr3 !important",
  },

  figcaption: {
    "> span": {
      margin: "0",
      fontWeight: "400",
      fontSize: "$gr4",
      fontFamily: "$bookTight",
      textDecoration: "none !important",
    },
  },

  [`& a:hover figcaption, & a:focus figcaption`]: {
    color: "$indigo11",
  },
});

export { SliderStyled };
