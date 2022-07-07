import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';

function DialogBox(props) {
  const {handleClose, isOpen} = props;

  const dialogClose = () => {
    handleClose(false);
  }
   return (
    <>
      <Dialog open={isOpen} onClose={dialogClose} maxWidth="lg">
        <DialogTitle sx={{ mb: 3 }} >
          <IconButton
              aria-label="close"
              onClick={dialogClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogBox;