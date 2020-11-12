import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { DataGrid } from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "./DetailedLevelStyle";
import useAllAvailableForRegion from "./../../effects/useAllAvailableForRegion";
import useRegionStatistics from "./../../effects/useRegionStatistics";
import { getColumnsData, prepareRowData, getSkeletonVariants } from "./utils";

type DetailedLevelProps = {
  regionName: any;
  setTotalDataLbi: any;
  setTodayDataLbi: any;
  setLoadingStateLbi: any;
};

export default function DetailedLevel({
  regionName,
  setTotalDataLbi,
  setTodayDataLbi,
  setLoadingStateLbi,
}: DetailedLevelProps) {
  const classes = useStyles();

  const subAreas = false;
  const regionStatistics = useRegionStatistics(regionName, subAreas);

  const allAvailableForRegion = useAllAvailableForRegion(regionName);
  const columns = getColumnsData();
  const rows = prepareRowData(
    allAvailableForRegion.allAvailableForRegionSpots.data
  );
  const skeletonVariants = getSkeletonVariants();

  useEffect(() => {
    setTotalDataLbi(regionStatistics.regionStatistics.data.summary);
    setTodayDataLbi(regionStatistics.regionStatistics.data.change);
    setLoadingStateLbi(
      regionStatistics.loading || allAvailableForRegion.loading
    );
  }, [
    regionStatistics,
    allAvailableForRegion,
    setLoadingStateLbi,
    setTodayDataLbi,
    setTotalDataLbi,
  ]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div style={{ height: 650, width: "100%" }}>
          {allAvailableForRegion.loading &&
            skeletonVariants.map((variant, index) => (
              <Typography component="div" key={index} variant={variant}>
                <Skeleton />
              </Typography>
            ))}
          {!allAvailableForRegion.loading && rows.length > 0 && (
            <DataGrid rows={rows} columns={columns} pageSize={10} />
          )}
        </div>
      </Grid>
    </div>
  );
}
