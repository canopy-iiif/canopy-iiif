import "@radix-ui/themes/styles.css";

import { CanopyEnvironment, CanopyLocale } from "@customTypes/canopy";
import { CanopyProvider, defaultState } from "../context/canopy";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import React, { useEffect, useState } from "react";
import { dm_sans, dm_serif_display } from "@styles/theme/fonts";
import { getDefaultLang, getLocale } from "@hooks/useLocale";

import { AppProps } from "next/app";
import COLLECTIONS from "@.canopy/collections.json";
import { NextSeo } from "next-seo";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { buildDefaultSEO } from "@lib/seo";
import globalStyles from "@styles/global";

interface CanopyAppProps extends AppProps {
  pageProps: {
    [key: string]: any;
  };
}

export default function CanopyAppProps({
  Component,
  pageProps,
}: CanopyAppProps) {
  globalStyles();

  const config = process.env.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const root = COLLECTIONS.find((collection) => collection.depth === 0);
  const label = root?.label;

  const { locales, theme, vendor } = config;

  const radixTheme = {
    accentColor: theme.accentColor,
    grayColor: theme.grayColor,
    panelBackground: theme.panelBackground,
    radius: theme.radius,
    scaling: theme.scaling,
  };

  const seo = pageProps.seo
    ? pageProps.seo
    : buildDefaultSEO({
        ...config,
        label,
        pageTitle: pageProps?.pageTitle,
      });

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
      <style jsx global>{`
        html {
          --canopy-sans-font: ${dm_sans};
          --canopy-display-font: ${dm_serif_display};
        }
      `}</style>
      <NextSeo {...seo} />
      <ThemeProvider
        attribute="class"
        defaultTheme={theme.defaultTheme ? theme.defaultTheme : "light"}
      >
        {locale && (
          <CanopyProvider
            initialState={{
              ...defaultState,
              config: config,
              locale: locale,
            }}
          >
            {mounted && (
              <Theme {...radixTheme}>
                <Component {...pageProps} />
              </Theme>
            )}
          </CanopyProvider>
        )}
      </ThemeProvider>
      {vendor?.googleAnalytics && (
        <GoogleAnalytics {...vendor.googleAnalytics} />
      )}
      {vendor?.googleTagManager && (
        <GoogleTagManager {...vendor.googleTagManager} />
      )}
    </>
  );
}
