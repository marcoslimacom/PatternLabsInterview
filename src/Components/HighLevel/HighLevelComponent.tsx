import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import useStyles from "./HighLevelStyle";
import HighLevelItemContainer from './../../Containers/HighLevelItem/HighLevelItemContainer';

type HighLevelComponentProps = {
  setRegionName: any;
  setPage: any;
  bookmarks: any;
  setBookmarks: any;
  regions: Array<any>;
  loading: boolean;
};

export default function HighLevelComponent({
  setRegionName,
  setPage,
  bookmarks,
  setBookmarks,
  regions,
  loading,
}: HighLevelComponentProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {(loading || bookmarks === null) && (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item) => (
                <Grid item xs={3} key={item}>
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
            {Object.keys(regions).map((key, index) => (
              <Grid item xs={3} key={index}>
                <Paper className={classes.paper}>
                  <HighLevelItemContainer
                    region={regions[key as any]}
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
