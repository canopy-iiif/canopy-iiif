import React, { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Main from "./Shared/Main";
import Footer from "./Footer/Footer";
import BaseTag from "@/components/Metatag/Basetag";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BaseTag />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
