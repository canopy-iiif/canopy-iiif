import React, { useEffect, useState } from "react";
import globalStyles from "../styles/global";
import { darkTheme } from "../stitches";
import { ThemeProvider } from "next-themes";
import { CanopyProvider, defaultState } from "../context/canopy";
import { AppProps } from "next/app";
import { ObjectLiteral } from "@/types";
import { getDefaultLang, getLocale } from "@/hooks/useLocale";

interface CanopyAppProps extends AppProps {
  pageProps: ObjectLiteral;
}

export default function CanopyAppProps({
  Component,
  pageProps,
}: CanopyAppProps) {
  globalStyles();

  const config: any = process.env.CANOPY_CONFIG;
  const { locales, theme } = config;

  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState<any>();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted && !locale) {
      (async () => {
        const defaultLang = getDefaultLang(locales);
        const defaultLocale = await getLocale(locales, defaultLang);
        setLocale(defaultLocale);
      })();
    }
  }, [locale, locales, mounted]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={theme.defaultTheme ? theme.defaultTheme : "light"}
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      {locale && (
        <CanopyProvider
          initialState={{
            ...defaultState,
            config: config,
            locale: locale,
          }}
        >
          {mounted && <Component {...pageProps} />}
        </CanopyProvider>
      )}
    </ThemeProvider>
  );
}
