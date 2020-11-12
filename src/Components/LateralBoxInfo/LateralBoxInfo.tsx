import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "./LateralBoxInfoStyle";
import { prepareLateralBoxData } from "./utils";

type LateralBoxInfoProps = {
  regionName?: string;
  summary: any;
  change: any;
  loading: boolean;
};

export default function LateralBoxInfo({
  summary,
  change,
  regionName,
  loading,
}: LateralBoxInfoProps) {
  const [skeleton, setSkeleton] = useState(<></>);
  const classes = useStyles();

  useEffect(() => {
    setSkeleton(
      <>
        <ListItem>
          <Typography className={classes.fullWidth} variant="h5">
            <Skeleton />
          </Typography>
        </ListItem>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item}>
            <Divider component="li" />
            <ListItem className={classes.listItem}>
              <ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
            </ListItem>
          </div>
        ))}
      </>
    );
  }, [classes]);

  var summaryData = prepareLateralBoxData(summary);
  var changeData = prepareLateralBoxData(change);

  return (
    <List className={classes.root}>
      {loading && skeleton}

      {!loading && (
        <>
          <ListItem>
            <Typography variant="h5">{regionName} - Total</Typography>
          </ListItem>
          {summaryData.map((item, index) => (
            <div key={index}>
              <Divider component="li" />
              <ListItem className={classes.listItem}>
                <ListItemText primary={item.name} secondary={item.value} />
              </ListItem>
            </div>
          ))}
        </>
      )}

      {loading && skeleton}

      {!loading && (
        <>
          <ListItem>
            <Typography variant="h5">{regionName} - Today</Typography>
          </ListItem>
          {changeData.map((item, index) => (
            <div key={index}>
              <Divider component="li" />
              <ListItem className={classes.listItem}>
                <ListItemText primary={item.name} secondary={item.value} />
              </ListItem>
            </div>
          ))}
        </>
      )}
    </List>
  );
}
