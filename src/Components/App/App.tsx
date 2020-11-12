import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./AppStyle";
import HighLevel from "./../HighLevel/HighLevel";
import LateralBoxInfo from "./../LateralBoxInfo/LateralBoxInfo";
import useLastestData from "../../effects/useLastestData";

export default function App() {
  const lastestData = useLastestData();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            World - Coronavirus Statistics
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />

        <LateralBoxInfo
          summary={lastestData.lastestData.data.summary}
          change={lastestData.lastestData.data.change}
          loading={lastestData.loading}
          region={"World"}
        />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <HighLevel />
      </main>
    </div>
  );
}
