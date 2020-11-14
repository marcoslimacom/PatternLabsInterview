import React, { useState, useEffect } from "react";

import { getAllBookmark, removeBookmark } from "../../utils/bookmarkStorage";
import BookmarkLevelComponent from './../../Components/BookmarkLevel/BookmarkLevelComponent';

type BookmarkLevelContainerProps = {
  setRegionName: any;
  setPage: any;
};

export default function BookmarkLevelContainer({
  setRegionName,
  setPage,
}: BookmarkLevelContainerProps) {
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    setBookmarks(getAllBookmark() as any);
  }, []);

  const onClickMore = (regionName: any) => {
    setRegionName(regionName);
    setPage("DetailedLevel");
  };

  const onClickRemove = (regionName: any) => {
    removeBookmark(regionName);
    setBookmarks(getAllBookmark() as any);
  };

  return (
    <BookmarkLevelComponent
      bookmarks={bookmarks}
      onClickMore={onClickMore}
      onClickRemove={onClickRemove}
    />
  );
}
