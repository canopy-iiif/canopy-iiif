import { styled } from "@/stitches";

/* eslint sort-keys: 0 */

const HeroStyled = styled("div", {
  position: "absolute",
  width: "100%",
  height: "calc(100% + 156px)",
  marginTop: "-156px",
  zIndex: "0",
  backgroundColor: "$black",

  ".swiper": {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    position: "relative",

    ".swiper-wrapper": {
      "&::before": {
        content: "",
        display: "flex",
        width: "100%",
        height: "300px",
        background:
          "linear-gradient(173deg, $purple 0%, #4E2A84cc 19%, #0000 61.8%)",
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

      figure: {
        width: "100%",
        position: "relative",
        margin: "0",
        padding: "0",
        backgroundColor: "$black",

        "&::after": {
          content: "",
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(300deg, #000e 0%, #0006 38.2%, #0000 100%)",
          position: "absolute",
          zIndex: "0",
          bottom: "0",
        },

        "&::before": {
          content: "",
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(7deg, #000e 0%, #0000 61.8%)",
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
          opacity: "0.618",
        },

        figcaption: {
          position: "absolute",
          zIndex: "1",
          bottom: "$gr5",
          color: "$white",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textShadow: "2px 2px 2px #000",
          maxWidth: "$gr11",
          textAlign: "left",

          a: {
            color: "$white !important",
            textDecoration: "none",
          },

          ".slide-label": {
            fontFamily: "$displayBold",
            fontSize: "$gr7",
            display: "block",
            margin: "0 0 $gr1",
            lineHeight: "1em",
          },

          ".slide-summary": {
            fontFamily: "$sansLightItalic",
            fontSize: "$gr4",
            display: "block",
            color: "$black20",
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
export { HeroStyled };
