import { indigo, slate, slateA, slateDarkA } from "@radix-ui/colors";

import { ContainerStyled } from "../Shared/Container";
import { styled } from "@/src/styles/stitches";

/* eslint sort-keys: 0 */

const HeroStyled = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: "0",
  backgroundColor: slate.slate12,

  ".swiper": {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "unset",

    ".swiper-wrapper": {},

    ".swiper-button-prev, .swiper-button-next": {
      color: slate.slate1,
    },

    ".swiper-pagination-bullet": {
      backgroundColor: slateDarkA.slateA7,
      opacity: "1",
    },

    ".swiper-pagination-bullet-active": {
      backgroundColor: slate.slate1,
    },

    ".swiper-slide": {
      display: "flex",
      backgroundColor: slate.slate12,

      a: {
        display: "flex",
        color: `${slate.slate12}`,
        textDecoration: "none",

        "&:hover, &:focus": {
          color: `${indigo.indigo11}`,
        },
      },

      figure: {
        width: "100%",
        position: "relative",
        margin: "0",
        padding: "0",

        "img, video": {
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },

        "&::before": {
          backgroundColor: `$slate1`,
          opacity: "0.92",
          color: "transparent",
          width: "100%",
          padding: "$gr3 0",
          fontSize: "$gr5",
          lineHeight: "1.15em",
          position: "absolute",
          zIndex: "3",
          bottom: "0",
          left: "0",
          content: "-",
          boxShadow: `-1px -1px 2px  ${slateA.slateA3}`,
        },

        figcaption: {
          position: "absolute",
          zIndex: "4",
          bottom: "0",
          left: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          backgroundColor: `transparent`,
          width: "100%",
          color: "$slate12",

          [`> ${ContainerStyled}`]: {
            justifyContent: "flex-end",
          },

          ".slide-label": {
            padding: "$gr3 0",
            fontFamily: "$display",
            fontSize: "$gr5",
            fontWeight: "400",
            display: "flex",
            marginRight: "$gr2",
            transition: "$canopyAll",
            letterSpacing: "-0.01em",
          },
        },
      },
    },
  },
});

const HeroWrapper = styled("div", {
  height: "calc(100vh - 61.25px)",
  minHeight: "300px",
  maxHeight: "500px",
  backgroundColor: slate.slate12,
  position: "relative",
  zIndex: "1",
});

export { HeroStyled, HeroWrapper };
