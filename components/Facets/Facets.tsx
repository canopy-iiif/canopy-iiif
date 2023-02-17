import { FacetsStyled } from "./Facets.styled";
import React, { useState } from "react";
import FacetsModal from "./Modal";
import FacetsActivate from "./Activate";
import { FacetsProvider, useFacetsState } from "@/context/facets";

const Facets: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { facetsDispatch } = useFacetsState();

  const handleDialogChange = () => {
    if (!isModalOpen)
      facetsDispatch({
        type: "updateFacetsModal",
        facetsModal: {},
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
