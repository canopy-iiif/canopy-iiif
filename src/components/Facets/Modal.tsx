import * as Accordion from "@radix-ui/react-accordion";

import { Dialog, Flex, IconButton } from "@radix-ui/themes";

import { ButtonStyled } from "../Shared/Button/Button.styled";
import { FacetsModalContentInner as ContentInner } from "./Modal.styled";
import { Cross2Icon } from "@radix-ui/react-icons";
import FACETS from "@.canopy/facets.json";
import Facet from "./Facet";
import { LocaleString } from "@hooks/useLocale";
import React from "react";
import { useFacetsState } from "@context/facets";
import { useRouter } from "next/router";

const FacetsModal = () => {
  const { facetsState, facetsDispatch } = useFacetsState();
  const { facetsActive } = facetsState;
  const router = useRouter();

  const handleClearAll = () => {
    FACETS.forEach((facet: any) => facetsActive.delete(facet.slug));
    facetsDispatch({
      type: "updateFacetsActive",
      facetsActive: facetsActive,
    });
    handleViewResults();
  };

  const handleViewResults = () => {
    router.push({ pathname: "/search", query: facetsActive.toString() });
  };

  return (
    <Dialog.Content>
      <ContentInner>
        <Flex mb="3" align="center" justify="between" asChild>
          <header>
            <Dialog.Title as="h3" mb="0" size="4">
              <span>{LocaleString("searchFilter")}</span>
            </Dialog.Title>
            <Dialog.Close aria-label={LocaleString("searchFilterClose")}>
              <IconButton variant="soft" size="2" style={{ cursor: "pointer" }}>
                <Cross2Icon />
              </IconButton>
            </Dialog.Close>
          </header>
        </Flex>
        <div>
          <Accordion.Root type="single" collapsible={true}>
            {FACETS.map((facet: any) => (
              <Facet {...facet} key={facet.slug} />
            ))}
          </Accordion.Root>
        </div>
        <Flex mt="5" style={{ justifyContent: "space-between" }} asChild>
          <footer>
            <Dialog.Close>
              <ButtonStyled variant="soft" onClick={handleClearAll}>
                {LocaleString("searchFilterClear")}
              </ButtonStyled>
            </Dialog.Close>
            <Dialog.Close>
              <ButtonStyled onClick={handleViewResults}>
                {LocaleString("searchFilterSubmit")}
              </ButtonStyled>
            </Dialog.Close>
          </footer>
        </Flex>
      </ContentInner>
    </Dialog.Content>
  );
};

export default FacetsModal;
