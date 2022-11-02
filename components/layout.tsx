import React from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Main from "./Main/Main";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <footer></footer>
    </>
  );
}
