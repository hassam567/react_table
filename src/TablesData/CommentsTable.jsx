import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Table from '../components/Table';
import ModalForm from '../components/ModalForm';
import { Box, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import "../css/table.css";

function StatusRenderer({ value }) {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Incomplete':
        return { borderColor: '#FB8B01', color: '#FB8B01' }; // Orange
      case 'Enabled':
        return { borderColor: '#4CAF50', color: '#4CAF50' }; // Green
      case 'Completed':
        return { borderColor: '#2196F3', color: '#2196F3' }; // Blue
      default:
        return { borderColor: '#FB8B01', color: '#FB8B01' }; // Default to Orange
    }
  };

  const statusStyles = getStatusStyles(value);

  return (
    <Box
      sx={{
        width: 94,
        height: 26,
        backgroundColor: 'transparent',
        border: '1px solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "400",
        fontSize: "14px",
        ...statusStyles,
        fontFamily: "Roboto",
        borderRadius: "5px"
      }}
    >
      {value}
    </Box>
  );
}

const fetchComments = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
  console.log(response)
   // Randomly assign one of the statuses to each user
   const statuses = ['Incomplete', 'Enabled', 'Completed', 'Pending'];
   const dataWithStatus = response.data.map(user => ({
     ...user,
     status: statuses[Math.floor(Math.random() * statuses.length)], // Random status
   }));
   return dataWithStatus;
  
};

const CommentsTable = () => {
  const { data, isLoading, isError } = useQuery('comments', fetchComments);
  const [selectedComment, setSelectedComment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVisibilityClick = (comment) => {
    setSelectedComment(comment);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      field: 'id', headerName: 'ID', width: 10,
      headerAlign: 'center',
    },
    {
      field: 'postId', headerName: 'postID', width: 80,
      headerAlign: 'center',
    },
    {
      field: 'name', headerName: 'Name', width: 440,
      headerAlign: 'center',
    },
    {
      field: 'email', headerName: 'Email', width: 200,
      headerAlign: 'center',
    },
   
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      headerAlign: 'center',
      renderCell: (params) => <StatusRenderer value={params.value} />,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 70,
      headerAlign: 'center',
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton onClick={() => handleVisibilityClick(params.row)} sx={{ width: 24, height: 24, padding: '0px' }}>
            <VisibilityIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton sx={{ width: 24, height: 24, padding: '0px' }}>
            <EditIcon sx={{ fontSize: 12 }} />
          </IconButton>
        </div>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  const commentsHeadings="Comments Detail"
  const usersHeadings="Users Detail"
  const commentsTypography="Comments Detail Fetched From API"
  
  return (
    <>
      <Table rows={data} columns={columns} handleVisibilityClick={handleVisibilityClick} tableHeading={commentsTypography} />
      {selectedComment && (
        <ModalForm
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="form-modal"
          aria-describedby="form-modal"
          commentData={selectedComment} // Pass selectedComment as userData prop
          ch={commentsHeadings}
         uh={usersHeadings}
        />
      )}
    </>
  );
};

export default CommentsTable;
