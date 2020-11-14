import React from "react";
import { render, screen } from "@testing-library/react";
import BookmarkLevelComponent from "./BookmarkLevelComponent";

test("render BookmarkLevelComponent test", () => {
  //ARRANGE
  const bookmarks = ["Brazil", "Canada"];
  const onClickMore = () => {};
  const onClickRemove = () => {};

  //ACTION
  render(
    <BookmarkLevelComponent
      bookmarks={bookmarks}
      onClickMore={onClickMore}
      onClickRemove={onClickRemove}
    />
  );

  //ASSERT
  const linkElement1 = screen.getByText(/Brazil/i);
  const linkElement2 = screen.getByText(/Canada/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
