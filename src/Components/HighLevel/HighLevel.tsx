import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import useStyles from "./HighLevelStyle";
//import { prepareLateralBoxData } from "./utils";
import HighLevelItem from "./../HighLevelItem/HighLevelItem";

type HighLevelProps = {
  regions: Array<any>;
  loading: boolean;
};

export default function HighLevel({ regions, loading }: HighLevelProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {loading && (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item) => (
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
                    <HighLevelItem key={item} isSkeleton={true} />
                  </Paper>
                </Grid>
              )
            )}
          </>
        )}

        {!loading && (
          <>
            {Object.keys(regions).map((key, index) => (
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <HighLevelItem
                    key={index}
                    region={regions[key as any]}
                    isSkeleton={false}
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
