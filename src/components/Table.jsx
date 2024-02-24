import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../css/table.css"; // Ensure your CSS is correctly imported
import { Typography, Box } from '@mui/material';

export default function Table({ rows, columns, handleVisibilityClick ,tableHeading}) {
  const [selectionModel, setSelectionModel] = useState([]);

  // Ensure that rows is not null or undefined before mapping
  const mappedRows = rows ? rows.map(row => ({
    id: row.id,
    name: row.name || '', // Ensure a fallback value if 'name' is undefined
    email: row.email || '',
    phone: row.phone || '',
    postId: row.postId || '', // Ensure postId is included with a fallback value
    company: row.company?.name || '', // Access 'name' property safely using optional chaining
    city: row.address?.city || '', // Access 'city' property safely using optional chaining
    status: row.status || '',
    actions: row.actions || ''
  })) : [];

  const handleSelectionModelChange = (newSelection) => {
    // Update the selection model
    setSelectionModel(newSelection);
  };

  const handleCellClick = (params, event) => {
    // Prevent row selection when clicking on a cell that is not a checkbox
    if (!event.target.classList.contains('MuiDataGrid-checkboxInput')) {
      event.stopPropagation(); // Prevent propagation of the event
    }
  };

  return (
    <>
      <Typography
        variant='h6'
        sx={{
          marginTop: "20px",
          textAlign: 'center', // Align text center
        }}
      >
       {tableHeading}
      </Typography>

      <Box
        sx={{
          width: "1070px",
          margin: "auto",
          marginTop: "20px",
          '@media (max-width: 850px)': {
            width: "calc(100% - 20px)", // Adjust margin for smaller screens
            margin: "10px",
          }
        }}
      >
        <DataGrid
          rows={mappedRows}
          columns={columns.map((column, index) => ({
            ...column,
            align: "center"
          }))}
          className="custom-data-grid"
          getRowClassName={() => "custom-row"}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          selectionModel={selectionModel}
          onSelectionModelChange={handleSelectionModelChange}
          onCellClick={handleCellClick}
          handleVisibilityClick={handleVisibilityClick} // Pass handleVisibilityClick as a prop
        />
      </Box>
    </>
  );
}
