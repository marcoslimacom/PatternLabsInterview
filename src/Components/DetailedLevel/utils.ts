import { ColDef } from "@material-ui/data-grid";
import { TypographyProps } from "@material-ui/core/Typography";

export function getColumnsData(): ColDef[] {
  var columns: ColDef[] = [
    { field: "id", headerName: "Date", width: 110 },
    { field: "total_cases", headerName: "Total cases", width: 110 },
    { field: "deaths", headerName: "Deaths" },
    { field: "recovered", headerName: "Recovered" },
    { field: "critical", headerName: "Critical" },
    { field: "tested", headerName: "Tested" },
    { field: "death_ratio", headerName: "Death ratio" },
    { field: "recovery_ratio", headerName: "Recovery ratio" },
  ];

  return columns;
}

export function prepareRowData(data: any): Array<any> {
  const rows = Object.keys(data).map((key, index) => {
    const row = { id: key };
    const finalRow = { ...row, ...data[key] };
    return finalRow;
  });
  return rows;
}

export function getSkeletonVariants() {
  const skeletonVariants = [
    "h3",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
    "body1",
  ] as TypographyProps["variant"][];

  return skeletonVariants;
}
