import { gr } from "../helpers/goldenRatio";

const sizes = {
  gr1: `calc(1rem / ${gr(2)})`, // 7.25765912227px
  gr2: `calc(1rem / ${gr(1)})`, // 11.7428924598px
  gr3: `1rem`, // 19px (base rem)
  gr4: `calc(1rem * ${gr(1)})`, // 30.742px
  gr5: `calc(1rem * ${gr(2)})`, // 49.740556px
  gr6: `calc(1rem * ${gr(3)})`, // 80.480219608px
  gr7: `calc(1rem * ${gr(4)})`,
  gr8: `calc(1rem * ${gr(5)})`,
  gr9: `calc(1rem * ${gr(6)})`,
  gr10: `calc(1rem * ${gr(7)})`,
  gr11: `calc(1rem * ${gr(8)})`,
  gr12: `calc(1rem * ${gr(9)})`,
};

export default sizes;
