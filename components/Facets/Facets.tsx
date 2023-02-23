import { FacetsStyled } from "./Facets.styled";
import React, { useEffect, useState } from "react";
import FacetsModal from "./Modal";
import FacetsActivate from "./Activate";
import { FacetsProvider, useFacetsState } from "@/context/facets";
import { useSearchState } from "@/context/search";
import { useRouter } from "next/router";

const Facets = () => {
  const { asPath } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { facetsDispatch } = useFacetsState();
  const { searchDispatch, searchState } = useSearchState();
  const { headerVisible, searchParams } = searchState;

  useEffect(() => {
    facetsDispatch({
      type: "updateFacetsActive",
      facetsActive: searchParams,
    });
  }, [searchParams, facetsDispatch]);

  const handleDialogChange = () => {
    setIsModalOpen(!isModalOpen);
    searchDispatch({
      type: "updateHeaderVisible",
      headerVisible: !headerVisible,
    });
  };

  useEffect(() => {
    setIsModalOpen(false);
    searchDispatch({
      type: "updateHeaderVisible",
      headerVisible: true,
    });
  }, [asPath, searchDispatch]);

  return (
    <FacetsStyled open={isModalOpen} onOpenChange={handleDialogChange}>
      <FacetsActivate />
      <FacetsModal handleSubmit={handleDialogChange} />
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
