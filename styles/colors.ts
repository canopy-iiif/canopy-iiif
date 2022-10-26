import {
  indigo,
  indigoA,
  indigoDark,
  indigoDarkA,
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
} from "@radix-ui/colors";

const dark = {
  ...indigoDark,
  ...indigoDarkA,
  ...mauveDark,
  ...mauveDarkA,
};

const light = {
  ...indigo,
  ...indigoA,
  ...mauve,
  ...mauveA,
};

export { dark, light };
