import React, { createContext, useContext, useReducer } from "react";
import { FacetsContextStore } from "@/types/context/facets";

type Action = {
  type: "updateFacetsActive";
  facetsActive: any;
};
type Dispatch = (action: Action) => void;
type State = FacetsContextStore;
type FacetsProviderProps = {
  children: React.ReactNode;
  initialState?: FacetsContextStore;
};

const defaultState: FacetsContextStore = {
  facetsActive: [],
};

const FacetsStateContext = createContext<
  { facetsState: State; facetsDispatch: Dispatch } | undefined
>(undefined);

function facetsReducer(state: State, action: Action) {
  switch (action.type) {
    case "updateFacetsActive": {
      return {
        ...state,
        facetsActive: action.facetsActive,
      };
    }
  }
}

function FacetsProvider({
  initialState = defaultState,
  children,
}: FacetsProviderProps) {
  const [state, dispatch] = useReducer(facetsReducer, initialState);
  const value = { facetsDispatch: dispatch, facetsState: state };
  return (
    <FacetsStateContext.Provider value={value}>
      {children}
    </FacetsStateContext.Provider>
  );
}

function useFacetsState() {
  const context = useContext(FacetsStateContext);
  if (context === undefined) {
    throw new Error("useFacetsState must be used within a FacetsProvider");
  }
  return context;
}

export { FacetsProvider, useFacetsState };
