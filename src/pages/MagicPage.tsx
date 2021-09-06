import MagicTable from "../components/MagicTable";
import { Box, Button, makeStyles } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";
import { GridRowData } from "@material-ui/data-grid";
import dayjs from "dayjs";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

var minMax = require("dayjs/plugin/minMax");
dayjs.extend(minMax);

const useStyles = makeStyles({
  button: {
    "&:focus": {
      backgroundColor: "green",
      transform: "scale(1.2)",
      transition: "0.5s",
    },
  },
});

const initialRows = [
  { id: 0, date: "25.08.2021", weight: 114.6 },
  { id: 1, date: "24.08.2021", weight: 115 },
];

const DATE_FORMAT = "DD.MM.YYYY";

const MagicPage = () => {
  const classes = useStyles();

  const [rows, setRows] = useState<GridRowData[]>(initialRows);

  const handleSubmit = () => {
    const dates = rows.map((row) => dayjs(row.date, DATE_FORMAT));
    const lastDate = (dayjs as any).max(dates);
    const date = dayjs(lastDate, DATE_FORMAT).add(1, "day").format(DATE_FORMAT);

    const ids = rows.map((row) => row.id);
    const maxId = Math.max(...ids);
    setRows([{ id: maxId + 1, date, weight: 112.8 }, ...rows]);
  };

  return (
    <Box m={5}>
      <Box mb={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddBoxIcon />}
          className={classes.button}
          onClick={handleSubmit}
          autoFocus
        >
          New day
        </Button>
      </Box>
      <Box display="flex">
        <MagicTable rows={rows} />
      </Box>
    </Box>
  );
};

export default MagicPage;
