import Container from "@/components/Shared/Container";
import Layout from "@/components/layout";
import { ReactNode } from "react";
import {
  AsideStyled,
  ContentStyled,
  ContentWrapper,
} from "../Shared/Content.styled";
import Nav from "../Nav/Nav";

const LayoutsBasic = ({
  content,
  navigation,
}: {
  content: ReactNode;
  navigation?: string;
}) => {
  // @ts-ignore
  const navItems = process.env.CANOPY_CONFIG.navigation[navigation];

  return (
    <Layout>
      <Container containerType="wide">
        <ContentWrapper aside={true}>
          {navigation && (
            <AsideStyled>
              <Nav items={navItems} orientation="vertical" />
            </AsideStyled>
          )}
          <ContentStyled>{content}</ContentStyled>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default LayoutsBasic;
