import React from "react";
import { FacetsContextStore, UrlFacets } from "@/types/context/facets";

type Action = {
  type: "updateFacetsModal";
  facetsModal: UrlFacets;
};
type Dispatch = (action: Action) => void;
type State = FacetsContextStore;
type FacetsProviderProps = {
  children: React.ReactNode;
  initialState?: FacetsContextStore;
};

export const defaultState: FacetsContextStore = {
  facetsModal: {},
};

const FacetsStateContext = React.createContext<
  { facetsState: State; facetsDispatch: Dispatch } | undefined
>(undefined);

function facetsReducer(state: State, action: Action) {
  console.log(`state`, state);
  console.log(`action`, action);
  switch (action.type) {
    case "updateFacetsModal": {
      return {
        ...state,
        facetsModal: action.facetsModal,
      };
    }
  }
}

function FacetsProvider({
  initialState = defaultState,
  children,
}: FacetsProviderProps) {
  const [state, dispatch] = React.useReducer(facetsReducer, initialState);
  const value = { facetsDispatch: dispatch, facetsState: state };
  return (
    <FacetsStateContext.Provider value={value}>
      {children}
    </FacetsStateContext.Provider>
  );
}

function useFacetsState() {
  const context = React.useContext(FacetsStateContext);
  if (context === undefined) {
    throw new Error("useFacetsState must be used within a FacetsProvider");
  }
  return context;
}

export { FacetsProvider, useFacetsState };
