export const dm_sans = "DM Sans, sans-serif";
export const dm_serif_display = "DM Serif Display, serif";

export const GoogleFontImport = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&family=DM+Serif+Display&display=swap"
      rel="stylesheet"
    ></link>
  </>
);

const sans = `var(--canopy-sans-font)`;
const display = `var(--canopy-display-font)`;

const fonts = {
  sans,
  display,
};

export default fonts;
