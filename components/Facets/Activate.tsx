import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

const FacetsActivate: React.FC = () => {
  return (
    <Dialog.Trigger asChild>
      <button>Filters</button>
    </Dialog.Trigger>
  );
};

export default FacetsActivate;
