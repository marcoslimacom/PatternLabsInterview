import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import useStyles from "./HighLevelStyle";
//import { prepareLateralBoxData } from "./utils";
import HighLevelItem from "./../HighLevelItem/HighLevelItem";

type HighLevelProps = {
  regions: Array<any>;
  loading: boolean;
  setRegionName: any;
};

export default function HighLevel({
  regions,
  loading,
  setRegionName,
}: HighLevelProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {loading && (
          <>
            {[0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item) => (
                <Grid item xs={3} key={item}>
                  <Paper className={classes.paper}>
                    <HighLevelItem
                      isSkeleton={true}
                      setRegionName={setRegionName}
                    />
                  </Paper>
                </Grid>
              )
            )}
          </>
        )}

        {!loading && (
          <>
            {Object.keys(regions).map((key, index) => (
              <Grid item xs={3} key={index}>
                <Paper className={classes.paper}>
                  <HighLevelItem
                    region={regions[key as any]}
                    isSkeleton={false}
                    setRegionName={setRegionName}
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
