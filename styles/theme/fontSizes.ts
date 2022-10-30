import { gr } from "../helpers/goldenRatio";

const sizes = {
  gr1: "0.611rem",
  gr2: "0.722rem",
  gr3: "0.833rem",
  gr4: "1rem",
  gr5: `1.177rem`,
  gr6: `1.318rem`,
  gr7: `calc(1rem * ${gr(1)})`,
  gr8: `calc(1rem * ${gr(2)})`,
  gr9: `calc(1rem * ${gr(3)})`,
};

export default sizes;
