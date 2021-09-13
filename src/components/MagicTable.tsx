import { DataGrid, GridColDef, GridRowData } from "@material-ui/data-grid";
import { useEffect, useRef } from "react";
import { DATE_FORMAT } from "../datetime/datetime";

function getDate(params: any) {
  const d = params.getValue(params.id, "date");
  return d.format(DATE_FORMAT);
}

const columns: GridColDef[] = [
  {
    field: "formattedDate",
    headerName: "Date",
    width: 200,
    valueGetter: getDate,
    sortComparator: (v1, v2) => (v1 as string).localeCompare(v2 as string),
  },
  {
    field: "weight",
    headerName: "Weight",
    width: 150,
    editable: true,
  },
];

export const MagicTable = ({ rows }: { rows: GridRowData[] }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={90}
        disableSelectionOnClick
        rowHeight={30}
      />
    </div>
  );
};

export default MagicTable;
