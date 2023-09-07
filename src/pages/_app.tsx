import "@radix-ui/themes/styles.css";
import "./globals.css";

import { Theme, ThemeOptions } from "@radix-ui/themes";

import { Inter } from "next/font/google";
import Layout from "./_layout";
import type { Metadata } from "next";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const theme: ThemeOptions = {
  appearance: "light",
  accentColor: "indigo",
  grayColor: "slate",
  panelBackground: "translucent",
  scaling: "110%",
  radius: "medium",
};

export default function CanopyAppProps({ Component, pageProps }) {
  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}