import { CanopyProvider, defaultState } from "@context/canopy";
import { render, screen } from "@testing-library/react";

import Search from "./Search";

const initialState = {
  ...defaultState,
  locale: {
    config: {
      footerSourceCollection: "Source Collection",
      footerToggleTheme: "Toggle Theme",
      homepageHighlightedWorks: "Highlighted Works",
      searchButton: "Search",
      searchResults: "Results",
      searchFilter: "Filter",
      searchFilterAny: "Any",
      searchFilterClear: "Clear All",
      searchFilterClose: "Close",
      searchFilterSubmit: "View Results",
      default: {
        footerSourceCollection: "Source Collection",
        footerToggleTheme: "Toggle Theme",
        homepageHighlightedWorks: "Highlighted Works",
        searchButton: "Search",
        searchResults: "Results",
        searchFilter: "Filter",
        searchFilterAny: "Any",
        searchFilterClear: "Clear All",
        searchFilterClose: "Close",
        searchFilterSubmit: "View Results",
      },
    },
  },
};

describe("Search component", () => {
  it("renders Search elements", () => {
    render(
      <CanopyProvider initialState={initialState}>
        <Search />
      </CanopyProvider>
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/search/i);
  });
});
