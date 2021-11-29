import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import CountryDetail from "./CountryDetail"
import CoviInfo from "./CoviInfo"
export interface IDialogProps {
  open: boolean;
  selectedCode: string;
  onClose: () => void;
}

const DialogContentStyle = styled(DialogContent)`
  display: flex;
  
`

const InformationDetail = ({ onClose, selectedCode, open }: IDialogProps) => {
  console.log(selectedCode)
  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContentStyle>
        <Grid container>

      <Grid item xs={12} md={4}>
      <Box>

      
        <CountryDetail code={selectedCode} />
      </Box>
      
      </Grid>
      <Grid item xs={12} md={8}>
      <Box>

      
        <CoviInfo /> 
     
     
      </Box>

      </Grid>
        </Grid>
      
        
      </DialogContentStyle>
      
    </Dialog>
    
  );

};

export default InformationDetail;
