import { globalCss } from "@stitches/react";

const defaults = {
  body: {
    margin: 0,
    padding: 0,
    fontWeight: "400",
    backgroundColor: "$slate2",
  },

  html: {
    fontFamily: "$book",
    fontSize: "17.5px",
    fontWeight: "500",
    fontSmooth: "always",
    webKitFontSmothing: "antialiased",
    mozOsxFontSmoth: "grayscale",
    paddingTop: "61.25px",
  },

  p: {
    fontFamily: "$book",
    lineHeight: "1.47em",
  },

  dl: {
    dt: {
      fontWeight: "800",
      paddingBottom: "$gr1",
    },
    dd: {
      marginInlineStart: "0",
      paddingBottom: "$gr4",
      lineHeight: "1.47em",
    },
  },
};

const globalStyles = globalCss({
  ...defaults,
});

export default globalStyles;
