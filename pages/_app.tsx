import React, { useEffect, useState } from "react";
import globalStyles from "../styles/global";
import { darkTheme } from "../stitches";
import { ThemeProvider } from "next-themes";

export default function CanopyApp({ Component, pageProps }) {
  globalStyles();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      {mounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}
