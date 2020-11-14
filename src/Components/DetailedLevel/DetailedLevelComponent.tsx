import React from "react";
import Grid from "@material-ui/core/Grid";
import { DataGrid } from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Alert from "@material-ui/lab/Alert";

import useStyles from "./DetailedLevelStyle";

type DetailedLevelComponentProps = {
  allAvailableForRegion: any;
  skeletonVariants: Array<any>;
  rows: Array<any>;
  columns: Array<any>;
};

export default function DetailedLevelComponent({
  allAvailableForRegion,
  skeletonVariants,
  rows,
  columns,
}: DetailedLevelComponentProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div style={{ height: 650, width: "100%" }}>
          {!allAvailableForRegion.errors &&
            allAvailableForRegion.loading &&
            skeletonVariants.map((variant, index) => (
              <Typography component="div" key={index} variant={variant}>
                <Skeleton />
              </Typography>
            ))}
          {!allAvailableForRegion.errors &&
            !allAvailableForRegion.loading &&
            rows.length > 0 && (
              <DataGrid rows={rows} columns={columns} pageSize={10} />
            )}

          {allAvailableForRegion.errors && (
            <Alert severity="error">
              {allAvailableForRegion.errors.message}
            </Alert>
          )}
        </div>
      </Grid>
    </div>
  );
}
