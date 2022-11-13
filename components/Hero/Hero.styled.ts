import { styled } from "@/stitches";
import { indigo, indigoA, slate, slateA, slateDarkA } from "@radix-ui/colors";

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

    ".swiper-wrapper": {
      "&::before": {
        content: "",
        display: "flex",
        width: "100%",
        height: "300px",
        background: `linear-gradient(177deg, ${slateA.slateA12} 0%, ${slateA.slateA1} 30%)`,
        position: "absolute",
        zIndex: "1",
      },
    },

    ".swiper-button-prev, .swiper-button-next": {
      color: "$white",
    },

    ".swiper-pagination-bullet": {
      backgroundColor: "$white",
    },

    ".swiper-pagination-bullet-active": {
      backgroundColor: "$white",
    },

    ".swiper-slide": {
      display: "flex",
      backgroundColor: slate.slate12,

      figure: {
        width: "100%",
        position: "relative",
        margin: "0",
        padding: "0",

        "&::before": {
          content: "",
          display: "flex",
          width: "100%",
          height: "100%",
          background: `linear-gradient(7deg,  ${slateA.slateA12} 13%, ${slateA.slateA11} 30%, ${slateA.slateA1} 61.8%)`,
          position: "absolute",
          zIndex: "1",
          bottom: "0",
        },

        "img, video": {
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "0",
          top: "0",
          left: "0",
          objectFit: "cover",
        },

        figcaption: {
          position: "absolute",
          zIndex: "10",
          bottom: "$gr5",
          color: "$indigo1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: "$gr3",
          width: "$gr11",
          textAlign: "left",
          borderTop: `2px solid ${slateDarkA.slateA3}`,

          a: {
            color: `${indigo.indigo1} !important`,
            textDecoration: "none",
          },

          ".slide-label": {
            fontFamily: "$bookTight",
            fontSize: "$gr5",
            fontWeight: "500",
            display: "block",
            margin: "0 0 $gr1",
            lineHeight: "1.15em",
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
