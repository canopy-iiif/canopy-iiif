import * as Accordion from "@radix-ui/react-accordion";
import {
  FacetsModalClose as ContentClose,
  FacetsModalContent as Content,
  FacetsModalContentBody as ContentBody,
  FacetsModalContentFooter as ContentFooter,
  FacetsModalContentHeader as ContentHeader,
  FacetsModalContentInner as ContentInner,
  FacetsModalOverlay as Overlay,
  FacetsModalPortal as Portal,
  FacetsModalTitle as ContentTitle,
} from "./Modal.styled";
import Facet from "./Facet";
import FACETS from "@/.canopy/facets";
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ButtonStyled } from "../Shared/Button/Button.styled";
import { useFacetsState } from "@/context/facets";
import { useRouter } from "next/router";
import { LocaleString } from "@/hooks/useLocale";

interface FacetsModalProps {
  handleSubmit: () => void;
}

const FacetsModal: React.FC<FacetsModalProps> = ({ handleSubmit }) => {
  const { facetsState, facetsDispatch } = useFacetsState();
  const { facetsActive } = facetsState;
  const router = useRouter();

  const handleClearAll = () => {
    FACETS.forEach((facet: any) => facetsActive.delete(facet.slug));
    facetsDispatch({
      type: "updateFacetsActive",
      facetsActive: facetsActive,
    });
  };

  const handleViewResults = () => {
    router.push({ pathname: "/search", query: facetsActive.toString() });
    handleSubmit();
  };

  return (
    <Portal>
      <Overlay />
      <Content>
        <ContentInner>
          <ContentHeader>
            <ContentTitle asChild>
              <span>{LocaleString("searchFilter")}</span>
            </ContentTitle>
            <ContentClose aria-label={LocaleString("searchFilterClose")}>
              <Cross2Icon />
            </ContentClose>
          </ContentHeader>
          <ContentBody>
            <Accordion.Root type="single" collapsible={true}>
              {FACETS.map((facet: any) => (
                <Facet {...facet} key={facet.slug} />
              ))}
            </Accordion.Root>
          </ContentBody>
          <ContentFooter>
            <ButtonStyled buttonType="transparent" onClick={handleClearAll}>
              {LocaleString("searchFilterClear")}
            </ButtonStyled>
            <ButtonStyled buttonType="primary" onClick={handleViewResults}>
              {LocaleString("searchFilterSubmit")}
            </ButtonStyled>
          </ContentFooter>
        </ContentInner>
      </Content>
    </Portal>
  );
};

export default FacetsModal;
