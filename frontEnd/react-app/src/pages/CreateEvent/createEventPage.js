import React, { useState } from 'react'

import { Card, CardHeader, CardTitle, CardText, CardBody, Form, FormGroup, Label, Col, Input, Row, Button } from 'reactstrap'
import Header from '../../Components/headerComponent';

function CreateEvent() {

    const [formValues, setFormValues] = useState([{ name: "", bio: "", logoLink: "", hiringLink: "", industry: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { name: "", bio: "", logoLink: "", hiringLink: "", industry: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <div>
            <Header />
            <div className="container border mt-0 mt-md-5 mb-3 rounded shadow pb-3">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className='mt-3'>
                            <h1>Create New Event</h1>
                        </div>
                        <div>
                            <Form
                                onSubmit={handleSubmit}
                            >
                                <Row>
                                    <Col sm='12'>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Event Name
                                            </Label>
                                            <Input
                                                id="eventName"
                                                name="eventName"
                                                placeholder="Hack Midwest"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm='12'>
                                        <FormGroup>
                                            <Label for="examplePassword">
                                                Organizer Name
                                            </Label>
                                            <Input
                                                id="organizerName"
                                                name="organizerName"
                                                placeholder="Michael Gelphman"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="exampleAddress">
                                        Event Date
                                    </Label>
                                    <Input
                                        id="eventDate"
                                        name="eventDate"
                                        placeholder=""
                                        type='date'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="eventAddress">
                                        Address
                                    </Label>
                                    <Input
                                        id="eventAddress"
                                        name="eventaddress"
                                        placeholder="123 Kansas City"
                                    />
                                </FormGroup>
                                <hr />
                                <h4>Companies Attending</h4>
                                <div className="add-companies-area mb-4">
                                    {formValues.map((element, index) => (
                                        <div className="" key={index}>
                                            <div className=''>
                                                <strong>Company {index + 1}</strong>
                                            </div>
                                            <div>
                                                {/* <label>Company Name</label>
                                                <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} /> */}
                                                <FormGroup>
                                                    <Label for="name">
                                                        Company Name
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        placeholder=""
                                                        value={element.name || ""}
                                                        onChange={e => handleChange(index, e)}
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div>
                                                {/* <label>Company Bio</label>
                                                <input type="text" name="bio" value={element.bio || ""} onChange={e => handleChange(index, e)} /> */}
                                                <FormGroup>
                                                    <Label for="bio">
                                                        Company Bio
                                                    </Label>
                                                    <Input
                                                        id="bio"
                                                        name="bio"
                                                        placeholder=""
                                                        value={element.bio || ""}
                                                        onChange={e => handleChange(index, e)}
                                                    />
                                                </FormGroup>
                                            </div>

                                            <div>
                                                {/* <label>Company Logo Link</label>
                                                <input type="text" name="logoLink" value={element.logoLink || ""} onChange={e => handleChange(index, e)} /> */}
                                                <FormGroup>
                                                    <Label for="logoLink">
                                                        Company Logo Link
                                                    </Label>
                                                    <Input
                                                        id="logoLink"
                                                        name="logoLink"
                                                        placeholder=""
                                                        value={element.logoLink || ""}
                                                        onChange={e => handleChange(index, e)}
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div>
                                                {/* <label>Company Hiring Link</label>
                                                <input type="url" name="hiringLink" value={element.hiringLink || ""} onChange={e => handleChange(index, e)} /> */}
                                                <FormGroup>
                                                    <Label for="hiringLink">
                                                        Company Hiring Link
                                                    </Label>
                                                    <Input
                                                        id="hiringLink"
                                                        name="hiringLink"
                                                        placeholder=""
                                                        value={element.hiringLink || ""}
                                                        onChange={e => handleChange(index, e)}
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div>
                                                {/* <label>Company Industry</label>
                                                <input type="text" name="industry" value={element.industry || ""} onChange={e => handleChange(index, e)} /> */}
                                                <FormGroup>
                                                    <Label for="industry">
                                                        Company Industry
                                                    </Label>
                                                    <Input
                                                        id="industry"
                                                        name="industry"
                                                        placeholder=""
                                                        value={element.industry || ""}
                                                        onChange={e => handleChange(index, e)}
                                                    />
                                                </FormGroup>
                                            </div>
                                            {
                                                index ?
                                                    <button type="button" className="btn btn-danger mb-2" onClick={() => removeFormFields(index)}>Remove Company {index + 1}</button>
                                                    : null
                                            }
                                        </div>
                                    ))}
                                    <div className="button-section">
                                        <button className="btn btn-primary add" type="button" onClick={() => addFormFields()}>Add Another Company</button>
                                        {/* <button className="button submit" type="submit">Submit</button> */}
                                    </div>
                                </div>
                                <Button className=''>
                                    Create Event
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEvent;