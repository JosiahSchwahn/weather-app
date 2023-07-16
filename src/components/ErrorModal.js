import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import '../styles/errormodal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid black',
    boxShadow: 24,
    p: 4,
  };

export default function ErrorModal({modalOpen, setModalOpen}) {

  return (
    <div id='modal-id'>
      <Modal className
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='modal_title_wrapper'>Invalid Search Query</div>
          <p className='modal_text_wrapper'>
            You can search by Location Name, UK/Canada/US Zip Code, Coordinates, IP Address
            For more informaton you can find the search query paramaters at
           <a href='https://weatherstack.com/documentation#query_parameter' target="_blank">Here</a>
          </p>
          <div></div>
        </Box>
      </Modal>
    </div>
  );
}
