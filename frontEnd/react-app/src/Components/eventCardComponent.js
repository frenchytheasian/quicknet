import React from 'react';
import Button from '@mui/material/Button'

function EventCard(props) {
    return (
        <Button variant="contained" className='EventCard' style={{
            minHeight: '20vh',
            minWidth: '40vh',
        }}>
            <cl>
                <h1>
                    {props.eventName}
                </h1>
                <h2>
                    Hosted By: {props.hostName}
                </h2>
                <h3>
                    {props.date}
                </h3>
            </cl>
        </Button>
    )
}

export default EventCard;