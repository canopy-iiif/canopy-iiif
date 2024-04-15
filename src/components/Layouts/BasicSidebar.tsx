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
import useNavigation from "@src/hooks/useNavigation";

const LayoutsBasicSidebar = ({ children, frontMatter }: LayoutFrontMatter) => {
  // path relative to the `content/` directory
  const navigationPath = frontMatter.navigation
    ? `${frontMatter.navigation}/`
    : undefined;

  const { navigation } = useNavigation({
    relativePath: navigationPath,
  });
  const [subNavigation, setSubNavigation] = useState<NavigationItem[]>();

  useEffect(() => {
    const html = document.createElement("html");
    html.innerHTML = renderToStaticMarkup(children);
    const h2 = Object.values(html.getElementsByTagName("h2")).map((element) => {
      const { textContent } = element;
      return {
        path: `#${getSlug(textContent)}`,
        text: textContent ? textContent : "",
      };
    });
    setSubNavigation(h2);
  }, [children]);

  return (
    <Layout>
      <FrontMatterContext.Provider value={frontMatter}>
        <Container containerType="wide">
          <ContentWrapper aside={Boolean(navigation)}>
            {frontMatter.navigation && (
              <AsideStyled>
                <AsideFixedContent>
                  {navigation && (
                    <Nav
                      items={navigation}
                      subNavigation={subNavigation}
                      orientation="vertical"
                    />
                  )}
                </AsideFixedContent>
              </AsideStyled>
            )}
            <ContentStyled>{children}</ContentStyled>
          </ContentWrapper>
        </Container>
      </FrontMatterContext.Provider>
    </Layout>
  );
};

export default LayoutsBasicSidebar;
