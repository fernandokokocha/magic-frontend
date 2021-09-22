import MagicTable from "../components/MagicTable";
import { Box, Button, makeStyles } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";
import { GridRowData } from "@material-ui/data-grid";
import dayjs, { Dayjs } from "dayjs";
import { DATE_FORMAT } from "../datetime/datetime";

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
  {
    id: dayjs("2021.08.23", DATE_FORMAT).unix(),
    date: dayjs("2021.08.23", DATE_FORMAT),
    weight: 114.6,
  },
  {
    id: dayjs("2021.08.24", DATE_FORMAT).unix(),
    date: dayjs("2021.08.24", DATE_FORMAT),
    weight: 115,
  },
];

const getNextDate = (dates: Dayjs[]): Dayjs => {
  const lastDate = (dayjs as any).max(dates);
  return lastDate.add(1, "day");
};

const getNextId = (date: Dayjs): number => {
  return date.unix();
};

const MagicPage = () => {
  const classes = useStyles();

  const [rows, setRows] = useState<GridRowData[]>(initialRows);

  const handleSubmit = () => {
    const dates = rows.map((row) => row.date);
    const date = getNextDate(dates);

    const id = getNextId(date);

    const weight = null;

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
          Next day
        </Button>
      </Box>
      <Box display="flex">
        <MagicTable rows={rows} />
      </Box>
    </Box>
  );
};

export default MagicPage;
