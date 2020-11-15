import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";

import useStyles from "./HighLevelStyle";
import HighLevelItemContainer from "./../../Containers/HighLevelItem/HighLevelItemContainer";

type HighLevelComponentProps = {
  setRegionName: any;
  setPage: any;
  bookmarks: any;
  setBookmarks: any;
  regions: Array<any>;
  loading: boolean;
  searchText: string;
  setSearchText: any;
};

export default function HighLevelComponent({
  setRegionName,
  setPage,
  bookmarks,
  setBookmarks,
  regions,
  loading,
  searchText,
  setSearchText,
}: HighLevelComponentProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBar
            value={searchText}
            onChange={(newSearchText) => setSearchText(newSearchText)}
            onCancelSearch={() => setSearchText("")}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {(loading || bookmarks === null) && (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item) => (
                <Grid item xs={12} md={6} lg={3} key={item}>
                  <Paper className={classes.paper}>
                    <HighLevelItemContainer
                      isSkeleton={true}
                      setRegionName={setRegionName}
                      setPage={setPage}
                      bookmarks={bookmarks}
                      setBookmarks={setBookmarks}
                    />
                  </Paper>
                </Grid>
              )
            )}
          </>
        )}

        {!loading && bookmarks !== null && (
          <>
            {regions.map((region, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Paper className={classes.paper}>
                  <HighLevelItemContainer
                    region={region}
                    isSkeleton={false}
                    setRegionName={setRegionName}
                    setPage={setPage}
                    bookmarks={bookmarks}
                    setBookmarks={setBookmarks}
                  />
                </Paper>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </div>
  );
}
