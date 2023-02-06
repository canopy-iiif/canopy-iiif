import React from "react";
import { SearchContextStore } from "@/types/context/search";

type Action =
  | { type: "updateQuery"; searchQuery: string }
  | { type: "updateVisible"; searchVisible: boolean }
  | { type: "updateNav"; showNav: boolean };

type Dispatch = (action: Action) => void;
type State = SearchContextStore;
type SearchProviderProps = {
  children: React.ReactNode;
  initialState?: SearchContextStore;
};

const defaultState: SearchContextStore = {
  searchQuery: "",
  searchVisible: true,
  showNav: false,
};

const SearchStateContext = React.createContext<
  { searchState: State; searchDispatch: Dispatch } | undefined
>(undefined);

function searchReducer(state: State, action: Action) {
  switch (action.type) {
    case "updateQuery": {
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    }
    case "updateVisible": {
      return {
        ...state,
        searchVisible: action.searchVisible,
      };
    }
    case "updateNav": {
      return {
        ...state,
        showNav: action.showNav,
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
