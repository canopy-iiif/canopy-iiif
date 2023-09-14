import { globalCss } from "@stitches/react";

export const rem = 17;
export const headerHeight = 59.5;

const defaults = {
  body: {
    margin: 0,
    padding: 0,
    fontWeight: "400",
    backgroundColor: "$slate1",
  },

  html: {
    fontFamily: "$sans",
    fontSize: `${17}px`,
    fontWeight: "500",
    fontSmooth: "always",
    webKitFontSmothing: "antialiased",
    mozOsxFontSmoth: "grayscale",
    paddingTop: `${headerHeight}px`,
  },

  "a, a:visited": {
    color: "$indigo11",
  },

  p: {
    fontFamily: "$sans",
    lineHeight: "1.55em",
  },

  "ul, ol": {
    fontFamily: "$sans",
    lineHeight: "1.55em",

    li: {
      paddingBottom: "$gr1",
    },
  },

  dl: {
    dt: {
      fontWeight: "400",
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
