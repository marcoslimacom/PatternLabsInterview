import React, { useState, useEffect, useCallback } from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Alert from "@material-ui/lab/Alert";

import useStyles from "./AppStyle";
import useLastestData from "../../effects/useLastestData";
import LateralBoxInfoContainer from './../../Containers/LateralBoxInfo/LateralBoxInfoContainer';
import HighLevelContainer from './../../Containers/HighLevel/HighLevelContainer';
import DetailedLevelContainer from './../../Containers/DetailedLevel/DetailedLevelContainer';
import BookmarkLevelContainer from './../../Containers/BookmarkLevel/BookmarkLevelContainer';

export default function App() {
  const [page, setPage] = useState("");
  const [regionName, setRegionName] = useState("");
  const [totalDataLbi, setTotalDataLbi] = useState({});
  const [todayDataLbi, setTodayDataLbi] = useState({});
  const [errorDataLbi, setErrorDataLbi] = useState(null);
  const [loadingStateLbi, setLoadingStateLbi] = useState(false);

  const lastestData = useLastestData();

  useEffect(() => {
    if (regionName.length === 0) {
      setTotalDataLbi(lastestData.lastestData.data.summary);
      setTodayDataLbi(lastestData.lastestData.data.change);
      setLoadingStateLbi(lastestData.loading);
    }
    setErrorDataLbi(lastestData.errors);
  }, [lastestData, regionName]);

  const onHomeIconClick = useCallback(() => {
    setRegionName("");
    setPage("");
  }, []);

  const onBoormarkIconClick = useCallback(() => {
    setPage("Bookmark");
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {(page !== "") && (
            <HomeTwoToneIcon
              fontSize="large"
              className={classes.homeIcon}
              onClick={onHomeIconClick}
            />
          )}
          <Typography variant="h6" className={classes.title} noWrap>
            {page === "Bookmark" && "Bookmarks"}
            {page !== "Bookmark" && (regionName || "World")} - Coronavirus
            Statistics
          </Typography>

          <div className={classes.bookmarkIcon} onClick={onBoormarkIconClick}>
            <BookmarkIcon />
          </div>
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

        <LateralBoxInfoContainer
          summary={totalDataLbi}
          change={todayDataLbi}
          loading={loadingStateLbi}
          regionName={regionName || "World"}
        />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />

        {errorDataLbi && (
          <Alert severity="error">{lastestData.errors.message}</Alert>
        )}

        {!errorDataLbi && page === "" && (
          <HighLevelContainer
            loading={lastestData.loading}
            regions={lastestData.lastestData.data.regions}
            setRegionName={setRegionName}
            setPage={setPage}
          />
        )}

        {page === "DetailedLevel" && regionName.length > 0 && (
          <DetailedLevelContainer
            regionName={regionName}
            setTotalDataLbi={setTotalDataLbi}
            setTodayDataLbi={setTodayDataLbi}
            setLoadingStateLbi={setLoadingStateLbi}
          />
        )}

        {page === "Bookmark" && (
          <BookmarkLevelContainer setRegionName={setRegionName} setPage={setPage} />
        )}
      </main>
    </div>
  );
}
