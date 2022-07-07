import React, {useState, useContext} from 'react';
import TableRow from '@mui/material/TableRow';
import TableBody from "@mui/material/TableBody";
import TableCell from '@mui/material/TableCell';
import Buttons from '../buttons';
import DialogBox from '../form/dialog-box';
import ReservationForm from '../form/reservation-form';
import RowContext from '../row-context';

const TableDetails = (props) => {

  const [open, setOpen] = useState(false);
  const [editedValue, setEditValue] = useState({});

  const rows = useContext(RowContext);

  const editReservation = (value) => {
    setOpen(true);
    setEditValue(value);
   }

   const deleteReservation = (value) => {
      props.handleSubmitForm(value, 'delete');
    }

   const handleModalClose = (value) => {
    setOpen(value);
};

    return (
        <TableBody>
              {rows.map(reservation => (
                <TableRow key={reservation.id}>
                  <TableCell align="center">
                    {reservation.firstName} {reservation.lastName}
                  </TableCell>
                  <TableCell align="center">{reservation.stay.arrivalDate}</TableCell>
                  <TableCell align="center">{reservation.stay.departureDate}</TableCell>
                  <TableCell align="center">
                    Email: {reservation.email}
                    <br/>
                    Phone: {reservation.phone}
                    </TableCell>
                  <TableCell align="center">
                    {reservation.addressStreet.streetName} {reservation.addressStreet.streetNumber} 
                    <br/>
                    {reservation.addressLocation.city} {reservation.addressLocation.state} {reservation.addressLocation.zipCode} 
                    </TableCell>
                  <TableCell align="center">
                    Room Size: {reservation.room.roomSize}
                    <br/>
                    Room Quantity: {reservation.room.roomQuantity}
                    </TableCell>
                  <TableCell align="center">{reservation.payment}</TableCell>
                  <TableCell>
                    <Buttons
                      variant = "contained"
                      onClick = {() => editReservation(reservation)}
                      size = "small"
                      name = "editForm"
                      sx = {{fontSize: '0.8rem'}}
                    >
                      Edit
                    </Buttons>
                    <br/>
                    <Buttons
                      variant = "contained"
                      onClick = {() => deleteReservation(reservation)}
                      size = "small"
                      sx = {{fontSize: '0.8rem'}}
                    >
                      Delete
                    </Buttons>
                  </TableCell>
                  <DialogBox
                    isOpen = {open}
                    handleClose = {handleModalClose}
                  >
                    <ReservationForm 
                      fields = {editedValue}
                      handleSubmitForm = {props.handleSubmitForm}
                      handleClose = {props.handleClose}
                      action = 'edit'
                      />
                  </DialogBox>
                </TableRow>
              ))}
          </TableBody>
    )
}

export default TableDetails;
