import React, { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Main from "./Shared/Main";
import Footer from "./Footer/Footer";
import { NextSeo } from 'next-seo';
import { CanopyEnvironment } from "@/types/canopy";

const Layout = ({ children }: { children: ReactNode }) => {
  const config = process.env.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const titleTemplate = `${config.label.none[0]} | %s`;
  return (
    <>
      <NextSeo
        titleTemplate={titleTemplate}
        defaultTitle={config.label.none[0]}
        additionalLinkTags={
          [
            {
              rel: 'icon',
              href: '/images/favicon.ico',
            }
          ]
        }
      />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
