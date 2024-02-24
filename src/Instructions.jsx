import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function Instructions() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom sx={{ marginLeft: '20px' }}>
        Instructions
      </Typography>
      <Box
        sx={{
          borderRadius: '20px',
          border: '2px solid #007FFF',
          padding: '20px',
          maxWidth: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography variant="body1" sx={{ marginLeft: '20px', marginBottom: '10px' ,color:"red"}}>
          Please type "users" or "comments" in the URL just after the "/react_table", like:
        </Typography>
        <Typography variant="body1" sx={{ marginLeft: '20px', marginBottom: '10px' }}>
          To see  users table: https://hassam567.github.io/react_table/users
        </Typography>
        <Typography variant="body1" sx={{ marginLeft: '20px', marginBottom: '10px' }}>
          To see comments table: https://hassam567.github.io/react_table/comments
        </Typography>
      </Box>
    </Box>
  );
}
