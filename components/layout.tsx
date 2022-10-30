import React from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
