import React from 'react';
import TextField from '@mui/material/TextField';
import ContactFields from './contact-fields';
import ExtraFields from './extra-fields';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers';

const UserFields = (props) => {
    const {values, 
            handleChange, 
            handleDate, 
            handleSwitch, 
            handleSubmitForm, 
            handleRoom, 
            handleAddressLocation, 
            handleAddressStreet,
            handleClose, 
            action} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitForm(values, action);
        handleClose(false);
      };

    return (
        <>
        <form onSubmit={handleSubmit}>
           <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(props) => <TextField variant='standard' sx={{mr:5, mb:2}} {...props} />}
                label="Date of Arrival"
                value={values.stay.arrivalDate}
                onChange={handleDate('arrivalDate')}
            />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(props) => <TextField variant='standard'{...props} />}
                label="Date of Departure"
                value={values.stay.departureDate}
                onChange={handleDate('departureDate')}
            />
            </LocalizationProvider>
            <br/>
            <TextField
                id="standard-basic" 
                label="Room Size" 
                variant="standard"
                sx={{mr:5, mb:1}}
                helperText="Choose a room type"
                onChange= {handleRoom('roomSize')}
                defaultValue = {values.room.roomSize}
            />
            <TextField
                id="standard-basic" 
                label="Room Quantity" 
                variant="standard"
                onChange= {handleRoom('roomQuantity')}
                helperText="Maximun: 5"
                defaultValue = {values.room.roomQuantity}
            />
            <br/>
            <TextField
                id="standard-basic" 
                label="First Name" 
                variant="standard"
                sx={{mb:1}}
                onChange= {handleChange('firstName')}
                defaultValue = {values.firstName}
            />
            <br/>
            <TextField
                id="standard-basic" 
                label="Last Name" 
                variant="standard"
                sx={{mb:1}}
                onChange= {handleChange('lastName')}
                defaultValue = {values.lastName}
            />
            <br/>
            <ContactFields
                handleChange = {handleChange}
                handleAddressLocation = {handleAddressLocation}
                handleAddressStreet = {handleAddressStreet}
                values = {values}
            />
            <br/>
            <ExtraFields
                handleChange = {handleChange}
                handleSwitch = {handleSwitch}
                values = {values}
            />
        </form>
        </>
    )
}

export default UserFields;