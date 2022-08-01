import React from "react";
import Stack from '@mui/material/Stack'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink, Row, Col, CardHeader, CardFooter
} from 'reactstrap';

function EventPage(props) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Card>
                <Stack justifyContent="center"
                    alignItems="center"
                    style={{
                        minHeight: '60hv'
                    }}>
                    <CardBody>
                        <Col className="text-center">
                            <CardHeader>
                                {props.eventName}
                            </CardHeader>
                            <CardSubtitle>
                                {props.hostName}
                            </CardSubtitle>
                        </Col>
                        <CardText>
                            Details: {props.details}
                        </CardText>
                        <CardText>
                            Sponsors: {props.sponsors}
                        </CardText>
                        <CardFooter>
                            <Row>
                                <CardText>
                                    #: {props.phoneNumber} @: <CardLink>{props.email}</CardLink>
                                </CardText>
                            </Row>
                            <Row>
                                <CardText>
                                   
                                </CardText>
                                <CardText>
                                    Located At: <CardLink>{props.address}</CardLink>
                                </CardText>
                            </Row>
                        </CardFooter>
                    </CardBody>
                </Stack>
            </Card>
        </div>
    );
}

export default EventPage;