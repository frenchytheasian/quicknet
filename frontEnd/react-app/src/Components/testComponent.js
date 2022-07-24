import React from 'react';
import Button from '@mui/material/Button'

function Test(props) {
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </div>
    )
}

export default Test;