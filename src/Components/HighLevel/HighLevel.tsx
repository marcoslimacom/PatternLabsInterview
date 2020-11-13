import React, { useState, useEffect }  from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import useStyles from "./HighLevelStyle";
import HighLevelItem from "./../HighLevelItem/HighLevelItem";
import { getAllBookmark } from './../../utils/bookmarkStorage';

type HighLevelProps = {
  regions: Array<any>;
  loading: boolean;
  setRegionName: any;
  setPage: any;
};

export default function HighLevel({
  regions,
  loading,
  setRegionName,
  setPage,
}: HighLevelProps) {
  const [bookmarks, setBookmarks] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setBookmarks(getAllBookmark() as any);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {(loading || bookmarks === null) && (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item) => (
                <Grid item xs={3} key={item}>
                  <Paper className={classes.paper}>
                    <HighLevelItem
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
                  <HighLevelItem
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
