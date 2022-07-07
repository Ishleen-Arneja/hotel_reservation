import React from 'react';
import TextField from '@mui/material/TextField';

const ContactFields = (props) => {
    const {values, handleChange, handleAddressLocation, handleAddressStreet} = props;
    return (
        <>
            <TextField
                id="standard-basic" 
                label="E-mail" 
                variant="standard"
                sx={{mb:1}}
                onChange= {handleChange('email')}
                defaultValue = {values.email}
            />
            <br/>
            <TextField
                id="standard-basic" 
                label="Phone number" 
                variant="standard"
                sx={{mb:1}}
                helperText="Add your country code first"
                onChange= {handleChange('phone')}
                defaultValue = {values.phone}
            />
            <br/>
            <TextField
                id="standard-basic" 
                label="Street Name" 
                variant="standard"
                sx={{mr: 5, mb:1}}
                onChange= {handleAddressStreet('streetName')}
                defaultValue = {values.addressStreet.streetName}
            />
            <TextField
                id="standard-basic" 
                label="Street Number" 
                variant="standard"
                sx={{mb:1}}
                onChange= {handleAddressStreet('streetNumber')}
                defaultValue = {values.addressStreet.streetNumber}
            />
            <br/>
            <TextField
                id="standard-basic" 
                label="Zip" 
                variant="standard"
                sx={{mr: 5, mb:1}}
                onChange= {handleAddressLocation('zipCode')}
                defaultValue = {values.addressLocation.zipCode}
            />
            <TextField
                id="standard-basic" 
                label="State" 
                variant="standard"
                sx={{mr: 5, mb:1}}
                helperText="Autocomplete"
                onChange= {handleAddressLocation('state')}
                defaultValue = {values.addressLocation.state}
            />
            <TextField
                id="standard-basic" 
                label="City" 
                variant="standard"
                onChange= {handleAddressLocation('city')}
                defaultValue = {values.addressLocation.city}
            />
        </>
    )
}

export default ContactFields;