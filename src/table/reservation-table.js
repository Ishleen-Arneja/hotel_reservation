import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableDetails from './table-details';
import TableHeader from './table-header';

const ReservationTable = (props) => {
    return (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader/>
            <TableDetails 
              handleSubmitForm={props.handleSubmitForm}
              handleClose = {props.handleClose}/>
          </Table>
        </TableContainer>
    )
}

export default ReservationTable;