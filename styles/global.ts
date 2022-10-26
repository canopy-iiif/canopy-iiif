import { indigo } from "@radix-ui/colors";
import { globalCss } from "@stitches/react";

const defaults = {
  [`*`]: {
    boxSizing: "border-box",
  },

  a: {
    color: "$indigo11",
    textDecoration: "underline",

    "&:hover": {
      color: "$indigo12",
    },
  },

  body: {
    margin: 0,
    padding: 0,
    color: "$indigo12",
    backgroundColor: "$indigo1",
    fontWeight: "400",
  },

  html: {
    fontFamily: "$sans",
    fontSize: "19px",
    fontSmooth: "always",
    webKitFontSmothing: "antialiased",
    mozOsxFontSmoth: "grayscale",
  },

  "p, li, blockquote": {
    lineHeight: "1.618em",
  },
};

const globalStyles = globalCss({
  ...defaults,
});

export default globalStyles;
