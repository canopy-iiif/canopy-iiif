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

const dark = {
  ...indigoDark,
  ...indigoDarkA,
  ...slateDark,
  ...slateDarkA,
};

const light = {
  ...indigo,
  ...indigoA,
  ...slate,
  ...slateA,
};

export { dark, light };
