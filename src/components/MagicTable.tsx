import { DataGrid, GridColDef } from "@material-ui/data-grid";

const columns: GridColDef[] = [
  { field: "date", headerName: "Date", width: 200 },
  {
    field: "weight",
    headerName: "Weight",
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, date: "25.08.2021", weight: 114.6 },
  { id: 2, date: "24.08.2021", weight: 115 },
];

export const MagicTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={90}
        disableSelectionOnClick
      />
    </div>
  );
};

export default MagicTable;
