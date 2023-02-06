import { styled } from "@/stitches";
import {
  indigo,
  indigoDarkA,
  slate,
  slateA,
  slateDarkA,
} from "@radix-ui/colors";
import { ContainerStyled } from "../Shared/Container";

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

        figcaption: {
          position: "absolute",
          zIndex: "3",
          bottom: "0",
          left: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          backgroundColor: `${slateDarkA.slateA12}`,
          boxShadow: `inset -3px -3px 8px  ${slateA.slateA4}`,
          width: "100%",

          [`> ${ContainerStyled}`]: {
            justifyContent: "flex-end",
          },

          ".slide-label": {
            padding: "$gr3 0",
            fontFamily: "$bookTight",
            fontSize: "$gr4",
            fontWeight: "800",
            display: "flex",
            marginRight: "$gr2",
            lineHeight: "1.15em",
            transition: "$all",
          },

          ".slide-summary": {
            fontFamily: "$book",
            fontSize: "$gr3",
            display: "block",
            color: "$slate3",
            lineHeight: "1.15em",
          },

          ".slide-see-also": {
            marginTop: "$gr2",
            fontSize: "$gr4",
            textShadow: "none",
            textTransform: "none",
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
