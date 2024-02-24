import React from 'react';
import { Modal, IconButton, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DynamicBox from '../form';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const ModalForm = ({ open, onClose, userData, commentData,ch,uh }) => {
  const [showForm, setShowForm] = useState(true);
  
  const CloseButton = styled(IconButton)({
    width: "18px",
    height: "18px",
    backgroundColor: 'white',
    borderRadius: '50%',
    marginLeft: "40px",
    marginRight: "30px",
    '@media (max-width: 650px)': {
      marginRight: "20px"
    },
    '&:hover': {
      backgroundColor: 'white',
    },
    '&:hover .MuiSvgIcon-root': {
      color: '#55C6EC',
    }
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="form-modal"
      aria-describedby="form-modal"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          maxWidth: 600,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",  backgroundColor:"#CDE7FF", height:"80px"}}>
          <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: "bold", margin:"auto" }}>
            {userData ? uh : ch}
          </Typography>
          <CloseButton onClick={onClose}>
            <ClearIcon sx={{ width: "15px", height: "15px", strokeWidth: "2", stroke: "#55C6EC" }} />
          </CloseButton>
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            maxWidth: 600,
            maxHeight: '80vh',
            overflowY: 'auto',
            padding: '20px',
          }}
        >
          {userData && (
            <DynamicBox
              user={userData.name}
              email={userData.email}
              id={userData.id}
              phone={userData.phone}
              company={userData.company}
              city={userData.city}
            />
          )}
          {commentData && (
            <DynamicBox
              user={commentData.name}
              email={commentData.email}
              id={commentData.id}
              postId={commentData.postId}
              // Check if the props exist before passing them
              // phone={commentData.phone}
              // company={commentData.company}
              // city={commentData.city}
            
            />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalForm;
