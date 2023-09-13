import {
  indigo,
  indigoA,
  indigoDark,
  indigoDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA,
} from "@radix-ui/colors";

/**
 * influence bloom-iiif color tokens
 */
const bloomDark = {
  accent: `${indigoDark.indigo11} !important`,
  accentAlt: `${indigoDark.indigo9} !important`,
  secondary: `${indigoDark.indigo1} !important`,
};

const bloomLight = {
  accent: `${indigo.indigo11} !important`,
  accentAlt: `${indigo.indigo9} !important`,
  secondary: `${indigo.indigo1} !important`,
};

const dark = {
  ...indigoDark,
  ...indigoDarkA,
  ...slateDark,
  ...slateDarkA,
  ...bloomDark,
};

const light = {
  ...indigo,
  ...indigoA,
  ...slate,
  ...slateA,
  ...bloomLight,
};

export { dark, light };
