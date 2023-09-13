import {
  AsideFixedContent,
  AsideStyled,
  ContentStyled,
  ContentWrapper,
} from "@/components/Shared/Content.styled";
import { ReactElement, useEffect, useState } from "react";

import Container from "@/components/Shared/Container";
import Layout from "@/components/layout";
import Nav from "@/components/Nav/Nav";
import { NavigationItem } from "@/types/navigation";
import { getSlug } from "@/lib/build/slug";
import { renderToStaticMarkup } from "react-dom/server";

const LayoutsBasic = ({
  content,
  navigation,
}: {
  content: ReactElement;
  navigation?: NavigationItem[];
}) => {
  // @ts-ignore
  const navItems = process.env.CANOPY_CONFIG.navigation[
    navigation
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
      <Container containerType="wide">
        <ContentWrapper aside={true}>
          {navigation && (
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
    </Layout>
  );
};

export default LayoutsBasic;
