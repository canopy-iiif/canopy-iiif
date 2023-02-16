import React, { useEffect, useState } from "react";
import globalStyles from "../styles/global";
import { darkTheme } from "../stitches";
import { ThemeProvider } from "next-themes";
import { SearchProvider } from "../context/search";
import { AppProps } from "next/app";
import { ObjectLiteral } from "@/types";

interface CanopyAppProps extends AppProps {
  pageProps: ObjectLiteral;
}

export default function CanopyAppProps({
  Component,
  pageProps,
}: CanopyAppProps) {
  globalStyles();

  // @ts-ignore
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
