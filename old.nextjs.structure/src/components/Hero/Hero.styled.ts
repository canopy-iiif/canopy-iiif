import { grayA, grayDark } from "@radix-ui/colors";

import { ContainerStyled } from "../Shared/Container";
import { styled } from "@styles/stitches";

/* eslint sort-keys: 0 */

const HeroStyled = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: "0",
  backgroundColor: "var(--gray-12)",

  ".swiper": {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "unset",

    ".swiper-wrapper": {},

    ".swiper-button-prev, .swiper-button-next": {
      color: "var(--gray-1)",
    },

    ".swiper-pagination-bullet": {
      backgroundColor: "var(--gray-a7)",
      opacity: "1",
    },

    ".swiper-pagination-bullet-active": {
      backgroundColor: "var(--gray-a1)",
    },

    ".swiper-slide": {
      display: "flex",
      backgroundColor: "var(--gray-6)",

      a: {
        display: "flex",
        color: "var(--gray-12)",
        textDecoration: "none",

        "&:hover, &:focus": {
          color: "var(--accent-11)",
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
          background: `linear-gradient(-2deg, ${grayA.grayA12} 30px, rgba(0, 0, 0, 0) 150px)`,
          color: "transparent",
          opacity: "0.92",
          width: "100%",
          height: "100%",
          padding: "$gr6 0 $gr3",
          fontSize: "$gr5",
          lineHeight: "1.15em",
          position: "absolute",
          zIndex: "3",
          bottom: "0",
          left: "0",
          content: "-",
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
          color: grayDark.gray12,

          [`> ${ContainerStyled}`]: {
            justifyContent: "flex-end",
          },

          ".slide-label": {
            padding: "$gr3 0",
            fontSize: "$gr3",
            display: "flex",
            fontWeight: "500",
            transition: "$canopyAll",
            textShadow: `2px 2x 5px var(--gray-a2)`,
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
  backgroundColor: "var(--gray-12)",
  position: "relative",
  zIndex: "1",
});

export { HeroStyled, HeroWrapper };
