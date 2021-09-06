import { DataGrid, GridColDef, GridRowData } from "@material-ui/data-grid";

const columns: GridColDef[] = [
  { field: "date", headerName: "Date", width: 200 },
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
