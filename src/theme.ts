import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme({
  palette: {
    type: "light",
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#fff",
      },
    },
    MuiButton: {
      root: {
        margin: "5px",
      },
    },
  },
});
export default theme;
