import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import {
  FacetsModalContent as Content,
  FacetsModalContentBody as ContentBody,
  FacetsModalContentHeader as ContentHeader,
  FacetsModalContentInner as ContentInner,
  FacetsModalOverlay as Overlay,
  FacetsModalPortal as Portal,
} from "./Modal.styled";
import FACETS from "@/.canopy/facets";
import React from "react";
import Facet from "./Facet";

const FacetsModal: React.FC = () => {
  return (
    <Portal>
      <Overlay />
      <Content>
        <ContentInner>
          <ContentHeader>
            <Dialog.Title asChild>
              <span>Filter</span>
            </Dialog.Title>
            <Dialog.Close>Close</Dialog.Close>
          </ContentHeader>
          <ContentBody>
            <Accordion.Root type="single">
              {FACETS.map((facet: any) => (
                <Facet
                  {...facet}
                  key={facet.slug}
                  // activeValues={
                  //   activeFacets.find(
                  //     (entry: any) => entry.label === facet.slug
                  //   )?.value
                  // }
                />
              ))}
            </Accordion.Root>
            {/* <FacetSelect facet={facet} key={facet.slug} /> */}
          </ContentBody>
        </ContentInner>
      </Content>
    </Portal>
  );
};

export default FacetsModal;
