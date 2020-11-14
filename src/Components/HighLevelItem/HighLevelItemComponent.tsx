import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "./HighLevelItemStyle";

type HighLevelItemComponentProps = {
  region?: any;
  onClickMore: any;
  bookmarks: Array<any>;
  onClickAddBookmark: any;
  isSkeleton: boolean;
};

export default function HighLevelItemComponent({
  region,
  onClickMore,
  bookmarks,
  onClickAddBookmark,
  isSkeleton,
}: HighLevelItemComponentProps) {
  const classes = useStyles();

  return (
    <>
      {isSkeleton && (
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
      )}

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

              {!bookmarks.some((element: any) => element === region.name) && (
                <Button
                  className={classes.buttonCardRemoveAction}
                  size="small"
                  color="secondary"
                  onClick={() => onClickAddBookmark(region.name)}
                >
                  Add bookmark
                </Button>
              )}

              {bookmarks.some((element: any) => element === region.name) && (
                <Button
                  className={classes.buttonCardBookmarkedAction}
                  size="small"
                  color="primary"
                >
                  Bookmarked
                </Button>
              )}
            </CardActions>
          </Card>
        </>
      )}
    </>
  );
}
