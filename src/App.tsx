import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import MagicPage from "./pages/MagicPage";
import Header from "./layout/Header";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <MagicPage />
    </div>
  );
}

export default App;
