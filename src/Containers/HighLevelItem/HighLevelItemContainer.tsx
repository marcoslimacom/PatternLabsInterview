import React from "react";

import { getAllBookmark, addBookmark } from "../../utils/bookmarkStorage";
import HighLevelItemComponent from "./../../Components/HighLevelItem/HighLevelItemComponent";

type HighLevelItemContainerProps = {
  region?: any;
  isSkeleton: boolean;
  setRegionName: any;
  setPage: any;
  bookmarks: any;
  setBookmarks: any;
};

export default function HighLevelItemContainer({
  region,
  isSkeleton,
  setRegionName,
  setPage,
  bookmarks,
  setBookmarks,
}: HighLevelItemContainerProps) {
  const onClickMore = () => {
    setRegionName(region.name);
    setPage("DetailedLevel");
  };

  const onClickAddBookmark = (regionName: any) => {
    addBookmark(regionName);
    setBookmarks(getAllBookmark() as any);
  };

  return (
    <HighLevelItemComponent
      region={region}
      onClickMore={onClickMore}
      bookmarks={bookmarks}
      onClickAddBookmark={onClickAddBookmark}
      isSkeleton={isSkeleton}
    />
  );
}
