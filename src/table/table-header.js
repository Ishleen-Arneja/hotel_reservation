import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function TableHeader() {
    return (
        <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Arrival Date</TableCell>
                <TableCell align="center">Departure Date</TableCell>
                <TableCell align="center">Contact</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Room</TableCell>
                <TableCell align="center">Payment</TableCell>
              </TableRow>
        </TableHead>
    )
}

export default TableHeader;