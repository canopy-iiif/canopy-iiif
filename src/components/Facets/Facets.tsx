import { FacetsProvider, useFacetsState } from "@context/facets";
import React, { useEffect } from "react";

import { Dialog } from "@radix-ui/themes";
import FacetsActivate from "./Activate";
import FacetsModal from "./Modal";
import { useCanopyState } from "@src/context/canopy";

const Facets = () => {
  const { facetsDispatch } = useFacetsState();
  const { canopyState } = useCanopyState();
  const { searchParams } = canopyState;

  useEffect(() => {
    facetsDispatch({
      type: "updateFacetsActive",
      facetsActive: searchParams,
    });
  }, [searchParams, facetsDispatch]);

  return (
    <Dialog.Root>
      <FacetsActivate />
      <FacetsModal />
    </Dialog.Root>
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
