import React, { ReactNode } from "react";

import Footer from "./Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "./Shared/Main";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
