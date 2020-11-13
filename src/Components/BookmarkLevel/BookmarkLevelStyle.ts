import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 0,
      textAlign: "center",
      color: theme.palette.text.secondary,
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
  })
);

export default useStyles;
