import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
    listItem: {
      padding: `0 ${theme.spacing(2)}px 0 ${theme.spacing(4)}px`,
    },
    todayDivider: {
      paddingTop: theme.spacing(4),
    },
    fullWidth: {
      width: "100%",
    },
  })
);

export default useStyles;
