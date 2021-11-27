import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import CountryDetail from "./CountryDetail"
import {ITable} from "./ListCountry"
export interface IDialogProps {
  open: boolean;
  selectedCode: ITable;
  onClose: (value: string) => void;
}

const DialogContentStyle = styled(DialogContent)`
  display: flex;
  min-width: 500px
`

const InformationDetail = ({ onClose, selectedCode, open }: IDialogProps) => {
  console.log(selectedCode)
  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose}  open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContentStyle>
      <Box component="Grid" m={2}>
        <CountryDetail code={selectedCode} />
      </Box>
      <Box component="Grid" m={2}>haha</Box>
      {/* <Box>hahaha</Box> */}
        
      </DialogContentStyle>
      
    </Dialog>
    
  );

};

export default InformationDetail;
