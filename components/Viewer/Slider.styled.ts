import { styled } from "@/stitches";

const SliderStyled = styled("div", {
  marginBottom: "$gr5",

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

  [`& .bloom-header-label`]: {
    fontSize: "$gr5 !important",
    fontWeight: "800 !important",
  },

  [`& .bloom-header-summary`]: {
    display: "block",
    fontSize: "$gr3 !important",
    color: "$slate11 ",
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
      boxShadow: "2px 2px 5px #0001",
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
      fontWeight: "500",
      fontSize: "$gr4",
      fontFamily: "$bookTight",
      textDecoration: "none !important",
    },
  },

  [`& a figcaption, & a:visited figcaption`]: {
    color: "$slate12",
  },

  [`& a:hover figcaption, & a:focus figcaption`]: {
    color: "$indigo11",
  },
});

export { SliderStyled };
