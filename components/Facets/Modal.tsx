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
import Button from "../Shared/Button/Button";
import Facet from "./Facet";
import FACETS from "@/.canopy/facets";
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const FacetsModal: React.FC = () => {
  return (
    <Portal>
      <Overlay />
      <Content>
        <ContentInner>
          <ContentHeader>
            <ContentTitle asChild>
              <span>Filter</span>
            </ContentTitle>
            <ContentClose>
              <Cross2Icon />
            </ContentClose>
          </ContentHeader>
          <ContentBody>
            <ScrollArea.Root>
              <ScrollArea.Viewport>
                <Accordion.Root type="single" collapsible={true}>
                  {FACETS.map((facet: any) => (
                    <Facet {...facet} key={facet.slug} />
                  ))}
                </Accordion.Root>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar orientation="vertical">
                <ScrollArea.Thumb />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner />
            </ScrollArea.Root>
          </ContentBody>
          <ContentFooter>
            <Button buttonType="transparent">Clear all</Button>
            <Button buttonType="primary">View 26 Results</Button>
          </ContentFooter>
        </ContentInner>
      </Content>
    </Portal>
  );
};

export default FacetsModal;
