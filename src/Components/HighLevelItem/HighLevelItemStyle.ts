import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardActions: {
      paddingTop: 0,
      position: "relative",
    },
    buttonCardActions: {
      marginTop: 0,
    },
    buttonCardRemoveAction: {
      marginTop: 0,
      position: "absolute",
      right: theme.spacing(2),
    },
    buttonCardBookmarkedAction: {
      marginTop: 0,
      position: "absolute",
      right: theme.spacing(2),
    },
  })
);

export default useStyles;
