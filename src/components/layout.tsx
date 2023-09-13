import React, { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Main from "./Shared/Main";
import Footer from "./Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
