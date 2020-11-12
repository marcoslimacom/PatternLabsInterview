import React, { useState, useEffect, useCallback } from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";

import useStyles from "./AppStyle";
import HighLevel from "./../HighLevel/HighLevel";
import LateralBoxInfo from "./../LateralBoxInfo/LateralBoxInfo";
import useLastestData from "../../effects/useLastestData";
import DetailedLevel from "./../DetailedLevel/DetailedLevel";

export default function App() {
  const [regionName, setRegionName] = useState("");
  const [totalDataLbi, setTotalDataLbi] = useState({});
  const [todayDataLbi, setTodayDataLbi] = useState({});
  const [loadingStateLbi, setLoadingStateLbi] = useState(false);

  const lastestData = useLastestData();

  useEffect(() => {
    if (regionName.length === 0) {
      setTotalDataLbi(lastestData.lastestData.data.summary);
      setTodayDataLbi(lastestData.lastestData.data.change);
      setLoadingStateLbi(lastestData.loading);
    }
  }, [lastestData, regionName]);

  const onHomeIconClick = useCallback(() => {
    setRegionName("");
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {regionName.length > 0 && (
            <HomeTwoToneIcon
              fontSize="large"
              className={classes.homeIcon}
              onClick={onHomeIconClick}
            />
          )}
          <Typography variant="h6" className={classes.title} noWrap>
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
          summary={totalDataLbi}
          change={todayDataLbi}
          loading={loadingStateLbi}
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

        {regionName.length > 0 && (
          <DetailedLevel
            regionName={regionName}
            setTotalDataLbi={setTotalDataLbi}
            setTodayDataLbi={setTodayDataLbi}
            setLoadingStateLbi={setLoadingStateLbi}
          />
        )}
      </main>
    </div>
  );
}
