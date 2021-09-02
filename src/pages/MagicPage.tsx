import MagicTable from "../components/MagicTable";
import { Box, Button, makeStyles } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles({
  button: {
    "&:focus": {
      backgroundColor: "green",
      transform: "scale(1.2)",
      transition: "0.5s",
    },
  },
});

const MagicPage = () => {
  const classes = useStyles();

  return (
    <Box m={5}>
      <Box mb={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddBoxIcon />}
          className={classes.button}
          autoFocus
        >
          New day
        </Button>
      </Box>
      <Box display="flex">
        <MagicTable />
      </Box>
    </Box>
  );
};

export default MagicPage;
