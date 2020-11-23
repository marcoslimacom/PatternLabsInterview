import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Alert from "@material-ui/lab/Alert";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";

import useStyles from "./AppStyle";
import useLastestData from "../../effects/useLastestData";
import LateralBoxInfoContainer from "./../../Containers/LateralBoxInfo/LateralBoxInfoContainer";
import HighLevelContainer from "./../../Containers/HighLevel/HighLevelContainer";
import DetailedLevelContainer from "./../../Containers/DetailedLevel/DetailedLevelContainer";
import BookmarkLevelContainer from "./../../Containers/BookmarkLevel/BookmarkLevelContainer";

export default function App() {
  const [page, setPage] = useState("");
  const [regionName, setRegionName] = useState("");
  const [totalDataLbi, setTotalDataLbi] = useState({});
  const [todayDataLbi, setTodayDataLbi] = useState({});
  const [errorDataLbi, setErrorDataLbi] = useState(null);
  const [loadingStateLbi, setLoadingStateLbi] = useState(false);
  const [open, setOpen] = React.useState(false);

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          {page !== "" && (
            <HomeTwoToneIcon
              fontSize="large"
              className={classes.homeIcon}
              onClick={onHomeIconClick}
            />
          )}
          <Typography variant="h6" className={classes.title} noWrap>
            {page === "Bookmark" && "Bookmarks"}
            {page !== "Bookmark" && (regionName || "World")} - Statistics 22222
          </Typography>

          <div className={classes.bookmarkIcon} onClick={onBoormarkIconClick}>
            <BookmarkIcon className={clsx(open && classes.hide)} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <LateralBoxInfoContainer
          summary={totalDataLbi}
          change={todayDataLbi}
          loading={loadingStateLbi}
          regionName={regionName || "World"}
        />
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

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
          <BookmarkLevelContainer
            setRegionName={setRegionName}
            setPage={setPage}
          />
        )}
      </main>
    </div>
  );
}
