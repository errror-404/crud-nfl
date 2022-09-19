import React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CustomDataGrid = ({
  title,
  buttonText,
  rows,
  columns,
  loading,
  onClick,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <Button
        color="primary"
        variant="contained"
        size="large"
        sx={{ marginBottom: 5 }}
        onClick={onClick}
      >
        {buttonText}
      </Button>
      {rows && (
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            loading={loading}
          />
        </Box>
      )}
    </>
  );
};

export default CustomDataGrid;
