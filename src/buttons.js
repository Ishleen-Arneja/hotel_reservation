import React from 'react'
import Button from '@mui/material/Button';

const Buttons = ({children, color, size, sx, variant, onClick}) => {
    return (
        <Button
            color={color}
            size={size}
            sx={sx}
            variant={variant}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default Buttons