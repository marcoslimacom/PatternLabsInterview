import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import useStyles from "./BookmarkLevelStyle";

type BookmarkLevelComponentProps = {
  bookmarks: any;
  onClickMore: any;
  onClickRemove: any;
};

export default function BookmarkLevelComponent({
  bookmarks,
  onClickMore,
  onClickRemove,
}: BookmarkLevelComponentProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {bookmarks !== null &&
          (bookmarks as any).length === 0 &&
          "No bookmarks"}

        {bookmarks !== null &&
          (bookmarks as any).map((bookmark: any, index: any) => (
            <Grid item xs={3} key={index}>
              <Paper className={classes.paper}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {bookmark}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button
                      className={classes.buttonCardActions}
                      size="small"
                      onClick={() => onClickMore(bookmark)}
                    >
                      More
                    </Button>

                    <Button
                      className={classes.buttonCardRemoveAction}
                      size="small"
                      color="primary"
                      onClick={() => onClickRemove(bookmark)}
                    >
                      Remove bookmark
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
