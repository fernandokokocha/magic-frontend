import { GridRowData } from "@material-ui/data-grid";
import Chart from "react-apexcharts";

const chartOptions = {
  xaxis: {
    type: "datetime" as any,
  },
};

const rowToDataEntry = (row: GridRowData) => ({
  x: row.date.unix(),
  y: row.weight,
});

const rowsToSeries = (rows: GridRowData[]) => {
  return [
    {
      data: rows.map(rowToDataEntry),
    },
  ];
};

export const MagicChart = ({ rows }: { rows: GridRowData[] }) => {
  const series = rowsToSeries(rows);
  return <Chart options={chartOptions} series={series} />;
};

export default MagicChart;
