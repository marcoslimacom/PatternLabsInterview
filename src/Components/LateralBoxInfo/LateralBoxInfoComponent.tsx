import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "./LateralBoxInfoStyle";

type LateralBoxInfoComponentProps = {
  loading: boolean;
  regionName?: any;
  summaryData: any;
  changeData: any;
};

export default function LateralBoxInfoComponent({
  loading,
  regionName,
  summaryData,
  changeData,
}: LateralBoxInfoComponentProps) {
  const classes = useStyles();

  const data = [
    { title: "Total", data: summaryData },
    { title: "Today", data: changeData },
  ];

  return (
    <List className={classes.root}>
      {data.map((item, index) => (
        <div key={index}>
          {loading && (
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
                    <ListItemText
                      primary={<Skeleton />}
                      secondary={<Skeleton />}
                    />
                  </ListItem>
                </div>
              ))}
            </>
          )}

          {!loading && (
            <>
              <ListItem>
                <Typography variant="h5">
                  {regionName} - {item.title}
                </Typography>
              </ListItem>
              {item.data.map((itemLi: any, index: any) => (
                <div key={index}>
                  <Divider component="li" />
                  <ListItem className={classes.listItem}>
                    <ListItemText primary={itemLi.name} secondary={itemLi.value} />
                  </ListItem>
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </List>
  );
}
