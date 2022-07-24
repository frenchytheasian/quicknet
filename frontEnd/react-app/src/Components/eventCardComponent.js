import React from 'react';
import Button from '@mui/material/Button'
import '../Stylesheets/eventCard.css'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

function EventCard(props) {
    return (
        <div className="event-card shadow rounded">
            <Card
                style={{
                    width: '100%'
                }}
            >
                {/* <img
                    alt="Card image"
                    src="https://picsum.photos/300/200"
                /> */}
                <CardBody>
                    <CardTitle tag="h5">
                        {props.eventName}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {props.hostName}
                    </CardSubtitle>
                    <CardText>
                        {props.date}
                    </CardText>
                    <Button>
                        More Details
                    </Button>
                </CardBody>
            </Card>

        </div>

    )
}

export default EventCard;