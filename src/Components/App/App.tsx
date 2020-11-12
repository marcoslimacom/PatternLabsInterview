import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./AppStyle";
import HighLevel from "./../HighLevel/HighLevel";
import LateralBoxInfo from "./../LateralBoxInfo/LateralBoxInfo";
import useLastestData from "../../effects/useLastestData";
import DetailedLevel from "./../DetailedLevel/DetailedLevel";

export default function App() {
  const [regionName, setRegionName] = useState("");
  const lastestData = useLastestData();

  // useEffect(() => {

  //   if (regionName.length === 0) {
  //     setTotalData(lastestData.lastestData.data.summary);
  //     setTodayData(lastestData.lastestData.data.change);
  //     setMainData(lastestData.lastestData.data.regions);
  //     setLoadingState(lastestData.loading);
  //   } else {

  //   }
  // }, [dispatch, lastestData, regionName, regionStatistics]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {regionName || "World"} - Coronavirus Statistics
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
          regionName={regionName || "World"}
        />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {regionName.length === 0 && (
          <HighLevel
            loading={lastestData.loading}
            regions={lastestData.lastestData.data.regions}
            setRegionName={setRegionName}
          />
        )}

        {regionName.length > 0 && <DetailedLevel regionName={regionName} />}
      </main>
    </div>
  );
}
