import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const ExtraFields = (props) => {
    const {values, handleChange, handleSwitch} = props;

    const extras = {
        "Breakfast": "extraBreakfast",
        "TV": "extraTV",
        "Wifi": "extraWiFi",
        "Parking": "extraParking",
        "Balcony": "extraBalcony"
    }

    return (
        <>
            <FormControl variant="standard" sx={{width: 200, mb:2 }}>
                <InputLabel id="demo-multiple-name-label">Extras</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={values.extras}
                    onChange={handleChange('extras')}
                >
                {Object.keys(extras).map((extra) => (
                    <MenuItem
                        key={extra}
                        value={extras[extra]}
                    >
                    {extra}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <br/>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={values.payment}
                    onChange={handleChange('payment')}
                >
                    <FormControlLabel value="cc" control={<Radio/>} label="Credit Card" />
                    <FormControlLabel value="pp" control={<Radio/>} label="PayPal" />
                    <FormControlLabel value="cash" control={<Radio/>} label="Cash" />
                    <FormControlLabel value="bitcoin" control={<Radio/>} label="Bitcoin" />                    
                </RadioGroup>
            </FormControl>
            <br/>
            <TextField
                id="standard-basic" 
                label="Personal note" 
                variant="standard"
                sx={{mb:2}}
                onChange= {handleChange('note')}
                defaultValue = {values.note}
            />
            <br/>
            <Autocomplete
                multiple
                id="tags-filled"
                options={values.tags.map((tag) => tag)}
                freeSolo
                defaultValue={values.tags}
                onChange={handleChange('tags')}
                renderTags={(value, getTagProps) =>
                    value.map((tag, index) => (
                    <Chip variant="outlined" label={tag} {...getTagProps({ index })} />
                ))
                }
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Tags"
                />
                )}
            />
            <FormGroup>
                <FormControlLabel control={<Switch checked={values.reminder} onChange={handleSwitch('reminder')}/>} label="Send me a reminder" />
                <FormControlLabel control={<Switch checked={values.newsletter} onChange={handleSwitch('newsletter')}/>} label="Subscribe to newsletter" />
            </FormGroup>
            <br/>
            <FormControlLabel control={<Checkbox checked={values.confirm} onChange={handleSwitch('confirm')}/>} label="I confirm the information given above" />
            <br/>
            <Button variant='contained' type = "submit" sx = {{ml:35, mt:4}}>Submit</Button>
        </>
    )
}

export default ExtraFields;