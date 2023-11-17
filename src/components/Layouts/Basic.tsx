import {
  AsideFixedContent,
  AsideStyled,
  ContentStyled,
  ContentWrapper,
} from "@components/Shared/Content.styled";
import { useEffect, useState } from "react";

import Container from "@components/Shared/Container";
import FrontMatterContext from "@src/context/front-matter";
import Layout from "@components/layout";
import { LayoutFrontMatter } from "@src/customTypes/content";
import Nav from "@components/Nav/Nav";
import { NavigationItem } from "@customTypes/navigation";
import { getSlug } from "@lib/build/slug";
import { renderToStaticMarkup } from "react-dom/server";

const LayoutsBasic = ({ content, frontMatter }: LayoutFrontMatter) => {
  // @ts-ignore
  const navItems = process.env.CANOPY_CONFIG.navigation[
    frontMatter.navigation
  ] as NavigationItem[];
  const [subNavigation, setSubNavigation] = useState<NavigationItem[]>();

  useEffect(() => {
    const html = document.createElement("html");
    html.innerHTML = renderToStaticMarkup(content);
    const h2 = Object.values(html.getElementsByTagName("h2")).map((element) => {
      const { textContent } = element;
      return {
        path: `#${getSlug(textContent)}`,
        text: textContent ? textContent : "",
      };
    });
    setSubNavigation(h2);
  }, [content]);

  return (
    <Layout>
      <FrontMatterContext.Provider value={frontMatter}>
        <Container containerType="wide">
          <ContentWrapper aside={true}>
            {frontMatter.navigation && (
              <AsideStyled>
                <AsideFixedContent>
                  <Nav
                    items={navItems}
                    subNavigation={subNavigation}
                    orientation="vertical"
                  />
                </AsideFixedContent>
              </AsideStyled>
            )}
            <ContentStyled>{content}</ContentStyled>
          </ContentWrapper>
        </Container>
      </FrontMatterContext.Provider>
    </Layout>
  );
};

export default LayoutsBasic;
