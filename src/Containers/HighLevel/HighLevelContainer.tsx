import React, { useState, useEffect } from "react";

import { getAllBookmark } from "../../utils/bookmarkStorage";
import HighLevelComponent from "./../../Components/HighLevel/HighLevelComponent";

type HighLevelContainerProps = {
  regions: Array<any>;
  loading: boolean;
  setRegionName: any;
  setPage: any;
};

export default function HighLevelContainer({
  regions,
  loading,
  setRegionName,
  setPage,
}: HighLevelContainerProps) {
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    setBookmarks(getAllBookmark() as any);
  }, []);

  return (
    <HighLevelComponent
      setRegionName={setRegionName}
      setPage={setPage}
      bookmarks={bookmarks}
      setBookmarks={setBookmarks}
      regions={regions}
      loading={loading}
    />
  );
}
