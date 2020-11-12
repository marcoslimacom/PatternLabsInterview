import React from "react";
import Grid from "@material-ui/core/Grid";
import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid";

import useStyles from "./DetailedLevelStyle";

type DetailedLevelProps = {
  regionName: any;
};

function getFullName(params: ValueGetterParams) {
  return `${params.getValue("firstName") || ""} ${
    params.getValue("lastName") || ""
  }`;
}

const columns: ColDef[] = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "fullName",
    headerName: "Full name",
    width: 160,
    valueGetter: getFullName,
    sortComparator: (v1, v2, cellParams1, cellParams2) =>
      getFullName(cellParams1).localeCompare(getFullName(cellParams2)),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
  { id: 3, lastName: "Lannister", firstName: "Jaime" },
  { id: 4, lastName: "Stark", firstName: "Arya" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
];

export default function DetailedLevel({ regionName }: DetailedLevelProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div style={{ width: "100%" }}>
          <Grid item xs={12}>
            <DataGrid rows={rows} columns={columns} />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
