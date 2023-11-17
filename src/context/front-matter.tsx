import React from "react";

interface FrontMatterContextProps {
  referencedManifests?: string[];
}

const defaultValue: FrontMatterContextProps = {
  referencedManifests: [],
};

const FrontMatterContext =
  React.createContext<FrontMatterContextProps>(defaultValue);

export default FrontMatterContext;
