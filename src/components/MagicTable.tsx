import { GridRowData } from "@material-ui/data-grid";
import { DATE_FORMAT } from "../datetime/datetime";
import MUIDataTable from "mui-datatables";
import { Dayjs } from "dayjs";

function formatDate(day: Dayjs) {
  return day.format(DATE_FORMAT);
}

const columns = ["Day", "Weight"];

const options = {
  selectableRows: "none" as any,
};

const rowToData = (row: GridRowData) => [formatDate(row.date), row.weight];

export const MagicTable = ({ rows }: { rows: GridRowData[] }) => {
  const data = rows.map(rowToData);
  return (
    <MUIDataTable
      title={"Magic"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default MagicTable;
