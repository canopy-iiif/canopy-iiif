import { CanopyEnvironment, CanopyLocale } from "@/types/canopy";
import { CanopyProvider, defaultState } from "../context/canopy";
import React, { useEffect, useState } from "react";
import { getDefaultLang, getLocale } from "@/hooks/useLocale";

import { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { ObjectLiteral } from "@/types";
import { ThemeProvider } from "next-themes";
import { buildDefaultSEO } from "@/lib/seo";
import { darkTheme } from "../styles/stitches";
import globalStyles from "../styles/global";

interface CanopyAppProps extends AppProps {
  pageProps: ObjectLiteral;
}

export default function CanopyAppProps({
  Component,
  pageProps,
}: CanopyAppProps) {
  globalStyles();

  const config = process.env.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const { locales, theme } = config;
  const seo = pageProps.seo ? pageProps.seo : buildDefaultSEO(config);

  const [locale, setLocale] = useState<CanopyLocale>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !locale) {
      (async () => {
        const defaultLang = getDefaultLang(locales);
        const defaultLocale = await getLocale(locales, defaultLang);
        setLocale(defaultLocale as CanopyLocale);
      })();
    }
  }, [locale, locales, mounted]);

  return (
    <>
      <NextSeo {...seo} />
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
    </>
  );
}
