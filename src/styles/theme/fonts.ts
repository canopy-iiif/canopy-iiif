import { DM_Sans, DM_Serif_Display } from "next/font/google";

export const dm_sans = DM_Sans({ subsets: ["latin"] });
export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const sans = `var(--canopy-sans-font)`;
const display = `var(--canopy-display-font)`;

const fonts = {
  sans,
  display,
};

export default fonts;
