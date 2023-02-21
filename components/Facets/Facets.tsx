import { FacetsStyled } from "./Facets.styled";
import React, { useEffect, useState } from "react";
import FacetsModal from "./Modal";
import FacetsActivate from "./Activate";
import { FacetsProvider, useFacetsState } from "@/context/facets";
import { useSearchState } from "@/context/search";
import { getActiveFacets } from "@/services/facet/facets";

const Facets = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { facetsDispatch } = useFacetsState();
  const { searchDispatch, searchState } = useSearchState();
  const { headerVisible, searchParams } = searchState;

  useEffect(() => {
    facetsDispatch({
      type: "updateFacetsActive",
      facetsActive: getActiveFacets(searchParams),
    });
  }, [searchParams, facetsDispatch]);

  const handleDialogChange = () => {
    setIsModalOpen(!isModalOpen);
    searchDispatch({
      type: "updateHeaderVisible",
      headerVisible: !headerVisible,
    });
  };

  return (
    <FacetsStyled open={isModalOpen} onOpenChange={handleDialogChange}>
      <FacetsActivate />
      <FacetsModal />
    </FacetsStyled>
  );
};

const FacetsWrapper = () => {
  return (
    <FacetsProvider>
      <Facets />
    </FacetsProvider>
  );
};

export default FacetsWrapper;
