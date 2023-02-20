import React from "react";
import { SearchContextStore } from "@/types/context/search";
import { InternationalString } from "@iiif/presentation-3";

type Action =
  | { type: "updateHeaderVisible"; headerVisible: boolean }
  | { type: "updateSearchHeaderFixed"; searchHeaderFixed: boolean }
  | { type: "updateSearchQuery"; searchQuery: string }
  | { type: "updateSearchSummary"; searchSummary: InternationalString };

type Dispatch = (action: Action) => void;
type State = SearchContextStore;
type SearchProviderProps = {
  children: React.ReactNode;
  initialState?: SearchContextStore;
};

const defaultState: SearchContextStore = {
  headerVisible: true,
  searchQuery: "",
  searchHeaderFixed: false,
  searchSummary: { none: [""] },
};

const SearchStateContext = React.createContext<
  { searchState: State; searchDispatch: Dispatch } | undefined
>(undefined);

function searchReducer(state: State, action: Action) {
  switch (action.type) {
    case "updateSearchQuery": {
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    }
    case "updateHeaderVisible": {
      return {
        ...state,
        headerVisible: action.headerVisible,
      };
    }
    case "updateSearchHeaderFixed": {
      return {
        ...state,
        searchHeaderFixed: action.searchHeaderFixed,
      };
    }
    case "updateSearchSummary": {
      return {
        ...state,
        searchSummary: action.searchSummary,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function SearchProvider({
  initialState = defaultState,
  children,
}: SearchProviderProps) {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);
  const value = { searchDispatch: dispatch, searchState: state };
  return (
    <SearchStateContext.Provider value={value}>
      {children}
    </SearchStateContext.Provider>
  );
}

function useSearchState() {
  const context = React.useContext(SearchStateContext);
  if (context === undefined) {
    throw new Error("useSearchState must be used within a SearchProvider");
  }
  return context;
}

export { SearchProvider, useSearchState };
