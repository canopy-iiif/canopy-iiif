import { styled } from "@styles/stitches";

const SliderStyled = styled("div", {
  marginBottom: "$gr5",

  button: {
    svg: {
      filter: "unset",
    },
  },

  "@xs": {
    "& > div > div": {
      alignItems: "center",
      textAlign: "center",

      "& > div": {
        "&:last-child": {
          paddingTop: "$gr2",
        },
      },
    },
  },

  [`& .clover-slider-header-label`]: {
    fontSize: "$gr4 !important",
    fontFamily: "$sans",
    letterSpacing: "-0.01em",
  },

  [`& a.clover-slider-header-homepage`]: {
    color: "var(--accent-11)",
    textDecoration: "none",
  },

  [`& .clover-slider-header-summary`]: {
    display: "block",
    fontSize: "$gr2 !important",
    fontWeight: "500 !important",
    color: "var(--gray-11)",
  },

  ".swiper-slide": {
    a: {
      "> div": {
        borderRadius: "3px",
        overflow: "hidden",
      },
    },
  },

  figure: {
    "> div": {
      borderRadius: "3px",
      overflow: "hidden",
      boxShadow: "var(--shadow-3)",
    },
  },

  figcaption: {
    margin: "$gr1 0",

    "> span": {
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "3",
      overflow: "hidden",
      whiteSpace: "normal",
      fontWeight: "400",
      fontSize: "$gr3",
      lineHeight: "1.38em",
      fontFamily: "$sans",
      textDecoration: "none !important",
    },
  },

  [`& a figcaption, & a:visited figcaption`]: {
    color: "var(--gray-12)",
  },

  [`& a:hover figcaption, & a:focus figcaption`]: {
    color: "var(--accent-11)",
  },
});

export { SliderStyled };
