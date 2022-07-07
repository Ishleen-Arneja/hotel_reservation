import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const searchStyle = {
    width: '550px',
    color: 'rgba(0, 0, 0, 0.6)', 
    fontSize: '1.1rem'
}
function SearchBar({placeholder, onChange}) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ marginRight: '10px' }} />
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={searchStyle}
                disableUnderline
            />
        </Box>
    )
}

export default SearchBar;