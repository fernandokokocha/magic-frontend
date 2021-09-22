import { GridRowData } from "@material-ui/data-grid";
import { DATE_FORMAT } from "../datetime/datetime";
import MUIDataTable from "mui-datatables";
import { Dayjs } from "dayjs";

const options = {
  selectableRows: "none" as any,
};

export const MagicTable = ({
  rows,
  updateRow,
}: {
  rows: GridRowData[];
  updateRow: (rowId: number, newValue: number) => any;
}) => {
  const data = rows;
  const columns = [
    {
      name: "date",
      label: "Day",
      options: {
        customBodyRender: (value: Dayjs | undefined) => {
          return (
            <tr>
              <td>{value?.format(DATE_FORMAT)}</td>
            </tr>
          );
        },
      },
    },
    {
      name: "weight",
      label: "Weight",
      options: {
        customBodyRender: (
          value: number | undefined,
          tableMeta: any,
          updateValue: any
        ) => {
          return (
            <tr>
              <td>
                <input
                  value={value ? value : ""}
                  onChange={(evt) => {
                    const value = Number(evt.target.value);
                    updateRow(tableMeta.rowIndex, value);
                    updateValue(value);
                  }}
                />
              </td>
            </tr>
          );
        },
      },
    },
  ];

  return (
    <>
      <MUIDataTable
        title={"Magic"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default MagicTable;
