import React from "react";
import { render, screen } from "@testing-library/react";
import HighLevelComponent from "./HighLevelComponent";

test("render HighLevelComponent test", () => {
  //ARRANGE
  const regions = [
    { name: "Brazil", total_cases: 1000001 },
    { name: "Canada", total_cases: 2000002 },
  ];
  const setRegionName = () => {};
  const bookmarks = [] as any;
  const setPage = () => {};
  const setBookmarks = () => {};
  const loading = false;
  const setSearchText = () => {};
  const searchText = "";

  //ACTION
  render(
    <HighLevelComponent
      setRegionName={setRegionName}
      setPage={setPage}
      bookmarks={bookmarks}
      setBookmarks={setBookmarks}
      regions={regions}
      loading={loading}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  );

  //ASSERT
  //Brazil
  const linkElementBr1 = screen.getByText(/Brazil/i);
  const linkElementBr2 = screen.getByText(/1000001/i);

  //Canada
  const linkElementCa1 = screen.getByText(/Canada/i);
  const linkElementCa2 = screen.getByText(/2000002/i);

  expect(linkElementBr1).toBeInTheDocument();
  expect(linkElementBr2).toBeInTheDocument();

  expect(linkElementCa1).toBeInTheDocument();
  expect(linkElementCa2).toBeInTheDocument();
});
