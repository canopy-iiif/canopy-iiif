import React, { useEffect, useState } from "react";
import globalStyles from "../styles/global";
import { darkTheme } from "../stitches";
import { ThemeProvider } from "next-themes";
import { SearchProvider } from "../context/search";

export default function CanopyApp({ Component, pageProps }) {
  globalStyles();

  const { theme } = process.env.CANOPY_CONFIG;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={theme?.defaultTheme ? theme?.defaultTheme : "light"}
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      <SearchProvider>{mounted && <Component {...pageProps} />}</SearchProvider>
    </ThemeProvider>
  );
}
