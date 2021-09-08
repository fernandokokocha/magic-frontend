import MagicTable from "../components/MagicTable";
import { Box, Button, makeStyles } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";
import { GridRowData } from "@material-ui/data-grid";
import dayjs, { Dayjs } from "dayjs";

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

const DATE_FORMAT = "DD.MM.YYYY";

const initialRows = [
  { id: 0, date: dayjs("25.08.2021", DATE_FORMAT), weight: 114.6 },
  { id: 1, date: dayjs("24.08.2021", DATE_FORMAT), weight: 115 },
];

const getNextDate = (dates: Dayjs[]): Dayjs => {
  const lastDate = (dayjs as any).max(dates);
  return lastDate.add(1, "day");
};

const getNextId = (ids: number[]): number => {
  const maxId = Math.max(...ids);
  return maxId + 1;
};

const getRandomWeight = () => {
  const rand = (Math.random() * 10).toFixed(1);
  return 100 + Number(rand);
};

const MagicPage = () => {
  const classes = useStyles();

  const [rows, setRows] = useState<GridRowData[]>(initialRows);

  const handleSubmit = () => {
    const dates = rows.map((row) => row.date);
    const date = getNextDate(dates);

    const ids = rows.map((row) => row.id);
    const id = getNextId(ids);

    const weight = getRandomWeight();

    setRows([{ id, date, weight }, ...rows]);
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
