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
  const [regionsHl, setRegionsHl] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setBookmarks(getAllBookmark() as any);
  }, []);

  useEffect(() => {
    setRegionsHl(
      Object.keys(regions)
        .filter((key: any) => {
          const region = regions[key];
          if (searchText.length > 0) {
            const rg = new RegExp(searchText, "i");
            if (region.name.match(rg)) {
              return region;
            } else {
              return false;
            }
          } else {
            return region;
          }
        })
        .map((key: any) => {
          return regions[key];
        }) as any
    );
  }, [regions, searchText]);

  return (
    <HighLevelComponent
      setRegionName={setRegionName}
      setPage={setPage}
      bookmarks={bookmarks}
      setBookmarks={setBookmarks}
      regions={regionsHl}
      loading={loading}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  );
}
