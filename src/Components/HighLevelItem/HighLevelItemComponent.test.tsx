import React from "react";
import { render, screen } from "@testing-library/react";
import HighLevelItemComponent from "./HighLevelItemComponent";

test("render HighLevelItemComponent test", () => {
  //ARRANGE
  const region = { name: "Brazil", total_cases: 1000001 };
  const onClickMore = () => {};
  const bookmarks = [] as any;
  const onClickAddBookmark = () => {};
  const isSkeleton = false;

  //ACTION
  render(
    <HighLevelItemComponent
      region={region}
      onClickMore={onClickMore}
      bookmarks={bookmarks}
      onClickAddBookmark={onClickAddBookmark}
      isSkeleton={isSkeleton}
    />
  );

  //ASSERT
  const linkElement1 = screen.getByText(/Brazil/i);
  const linkElement2 = screen.getByText(/1000001/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
