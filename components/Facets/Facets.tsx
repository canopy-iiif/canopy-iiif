import { FacetsStyled } from "./Facets.styled";
import React, { useState } from "react";
import FacetsModal from "./Modal";
import FacetsActivate from "./Activate";
import { FacetsProvider, useFacetsState } from "@/context/facets";
import { useSearchState } from "@/context/search";

const Facets = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { facetsDispatch } = useFacetsState();
  const { searchDispatch, searchState } = useSearchState();
  const { headerVisible } = searchState;

  const handleDialogChange = () => {
    if (!isModalOpen)
      facetsDispatch({
        type: "updateFacetsModal",
        facetsModal: {},
      });

    searchDispatch({
      type: "updateHeaderVisible",
      headerVisible: !headerVisible,
    });

    setIsModalOpen(!isModalOpen);
  };

  return (
    <FacetsStyled open={isModalOpen} onOpenChange={handleDialogChange}>
      <FacetsActivate />
      <FacetsModal />
    </FacetsStyled>
  );
};

const FacetsWrapper = () => (
  <FacetsProvider>
    <Facets />
  </FacetsProvider>
);

export default FacetsWrapper;
