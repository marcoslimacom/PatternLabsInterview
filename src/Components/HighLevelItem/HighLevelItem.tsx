import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "./HighLevelItemStyle";

type HighLevelItemProps = {
  region?: any;
  isSkeleton: boolean;
  setRegionName: any;
};

export default function HighLevelItem({
  region,
  isSkeleton,
  setRegionName,
}: HighLevelItemProps) {
  const [skeleton, setSkeleton] = useState(<></>);
  const classes = useStyles();

  useEffect(() => {
    setSkeleton(
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <Skeleton />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <Skeleton />
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button className={classes.buttonCardActions} size="small">
            <Skeleton width={80} />
          </Button>
        </CardActions>
      </Card>
    );
  }, [classes]);

  const onClickMore = () => {
    setRegionName(region.name);
  };

  return (
    <>
      {isSkeleton && skeleton}

      {!isSkeleton && (
        <>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {region.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Total cases: {region.total_cases}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                className={classes.buttonCardActions}
                size="small"
                onClick={onClickMore}
              >
                More
              </Button>
            </CardActions>
          </Card>
        </>
      )}
    </>
  );
}
