import React from 'react';
import ReservationForm from './reservation-form';

const AddForm = (props) => {
    const formFields = {
        "id": 0,
        "stay": {
          "arrivalDate": '',
          "departureDate": ''
        },
        "room": {
          "roomSize": "",
          "roomQuantity": 0
        },
        "firstName": "",
        "lastName": "",
        "email": "",
        "phone": "",
        "addressStreet": {
          "streetName": "",
          "streetNumber": ""
        },
        "addressLocation": {
          "zipCode": "",
          "state": "",
          "city": ""
        },
        "extras": [],
        "payment": "cc",
        "note": "",
        "tags": [],
        "reminder": true,
        "newsletter": true,
        "confirm": false
      }

    return (
        <ReservationForm 
          fields = {formFields}
          handleSubmitForm = {props.handleSubmitForm}
          handleClose = {props.handleClose}
          action = 'add'
          />
    )
}

export default AddForm;