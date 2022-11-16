import React from "react";
import Header from "@/components/Header/Header";
import Main from "./Shared/Main";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
