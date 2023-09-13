import { FacetsStyled } from "./Facets.styled";
import React, { useEffect, useState } from "react";
import FacetsModal from "./Modal";
import FacetsActivate from "./Activate";
import { FacetsProvider, useFacetsState } from "@/context/facets";
import { useCanopyState } from "@/context/canopy";
import { useRouter } from "next/router";

const Facets = () => {
  const { asPath } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { facetsDispatch } = useFacetsState();
  const { canopyDispatch, canopyState } = useCanopyState();
  const { headerVisible, searchParams } = canopyState;

  useEffect(() => {
    facetsDispatch({
      type: "updateFacetsActive",
      facetsActive: searchParams,
    });
  }, [searchParams, facetsDispatch]);

  const handleDialogChange = () => {
    setIsModalOpen(!isModalOpen);
    canopyDispatch({
      type: "updateHeaderVisible",
      headerVisible: !headerVisible,
    });
  };

  useEffect(() => {
    setIsModalOpen(false);
    canopyDispatch({
      type: "updateHeaderVisible",
      headerVisible: true,
    });
  }, [asPath, canopyDispatch]);

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
