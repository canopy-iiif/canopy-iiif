import { CanopyContextStore } from "@customTypes/context/canopy";
import { InternationalString } from "@iiif/presentation-3";
import React from "react";

type Action =
  | { type: "updateContentState"; iiifContentState: any }
  | { type: "updateHeaderVisible"; headerVisible: boolean }
  | { type: "updateLocale"; locale: any }
  | { type: "updateSearchHeaderFixed"; searchHeaderFixed: boolean }
  | { type: "updateSearchParams"; searchParams: URLSearchParams }
  | { type: "updateSearchSummary"; searchSummary: InternationalString };

type Dispatch = (action: Action) => void;
type State = CanopyContextStore;
type CanopyProviderProps = {
  children: React.ReactNode;
  initialState?: CanopyContextStore;
};

const defaultState: CanopyContextStore = {
  config: {},
  headerVisible: true,
  iiifContentState: "",
  locale: {},
  searchHeaderFixed: false,
  searchParams: new URLSearchParams(),
  searchSummary: { none: [""] },
};

const CanopyStateContext = React.createContext<
  { canopyState: State; canopyDispatch: Dispatch } | undefined
>(undefined);

function canopyReducer(state: State, action: Action) {
  switch (action.type) {
    case "updateContentState": {
      return {
        ...state,
        iiifContentState: action.iiifContentState,
      };
    }
    case "updateHeaderVisible": {
      return {
        ...state,
        headerVisible: action.headerVisible,
      };
    }
    case "updateLocale": {
      return {
        ...state,
        locale: action.locale,
      };
    }
    case "updateSearchHeaderFixed": {
      return {
        ...state,
        searchHeaderFixed: action.searchHeaderFixed,
      };
    }
    case "updateSearchParams": {
      return {
        ...state,
        searchParams: action.searchParams,
      };
    }
    case "updateSearchSummary": {
      return {
        ...state,
        searchSummary: action.searchSummary,
      };
    }
    default: {
      console.log(action);
      throw new Error(`Unhandled action type`);
    }
  }
}

function CanopyProvider({
  initialState = defaultState,
  children,
}: CanopyProviderProps) {
  const [state, dispatch] = React.useReducer(canopyReducer, initialState);
  const value = { canopyDispatch: dispatch, canopyState: state };
  return (
    <CanopyStateContext.Provider value={value}>
      {children}
    </CanopyStateContext.Provider>
  );
}

function useCanopyState() {
  const context = React.useContext(CanopyStateContext);
  if (context === undefined) {
    throw new Error("useCanopyState must be used within a CanopyProvider");
  }
  return context;
}

export { CanopyProvider, defaultState, useCanopyState };
