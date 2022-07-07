import React, {useState} from 'react';
import UserFields from './fields/user-fields';

const ReservationForm = (props) => {
   
    const[fields, setFields] = useState(props.fields);

    const handleDate= (input) => e => {
        const date = e.toISOString();
        setFields({...fields,
            stay: {...fields.stay,[input]: date}
        })
    }

    const handleSwitch = (input) => e => {
        setFields({...fields, [input]: e.target.checked});
    }

    const handleRoom = (input) => e => {
        setFields({...fields,
            room: {...fields.room,[input]: e.target.value}
        })
    }

    const handleAddressStreet = (input) => e => {
        setFields({...fields,
            addressStreet: {...fields.addressStreet,[input]: e.target.value}
            })
    }

    const handleAddressLocation = (input) => e => {
        setFields({...fields,
            addressLocation: {...fields.addressLocation,[input]: e.target.value}
            })
    }

    const handleChange = (input) => e => {
        if (input === 'extras') {
            const {
                target: { value },
              } = e;
             
            setFields({...fields, [input]: (typeof value === 'string' ? value.split(',') : value)});
        }
        if (input === 'tags') {
            setFields({...fields, [input]: [...fields.tags, e.target.value]})
        }
        else {
            setFields({...fields, [input]: e.target.value});
        }
    }

    return (
        <UserFields
            handleChange = {handleChange}
            handleDate = {handleDate}
            handleSwitch = {handleSwitch}
            handleRoom = {handleRoom}
            handleAddressLocation = {handleAddressLocation}
            handleAddressStreet = {handleAddressStreet}
            values = {fields}
            handleSubmitForm = {props.handleSubmitForm}
            handleClose = {props.handleClose}
            action = {props.action}
        />
    )
}

export default ReservationForm;