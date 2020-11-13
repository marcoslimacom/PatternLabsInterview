import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    homeIcon: {
      verticalAlign: "middle",
      cursor: "pointer",
    },
    title: {
      margin: `${theme.spacing(1)}px 0 0 ${theme.spacing(1)}px`,
    },
    bookmarkIcon: {
      padding: theme.spacing(1),
      position: "absolute",
      right: theme.spacing(2),
      cursor: "pointer",
    },
  })
);

export default useStyles;
