import React, { Component } from "react";
import "./indes.css";
import { Row, Col, Card, CardBody, CardHeader, CardTitle, CardText, Input } from "reactstrap";
import { TextField } from "@material-ui/core";

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center align-content-center py-5" id="contact">
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="6" className="justify-content-center">
                            <Row className="justify-content-center">
                                <Col sm="12" md="9" lg="9" className="justify-content-center">
                                    <Row className="justify-content-center">
                                        <Col sm="12" md="12" lg="12" className="justify-content-center">
                                            <Card className="shadow shadow-lg justify-content-center" style={{ backgroundColor:"#f2f2f2"}}>
                                                <CardHeader className="justify-content-center">
                                                    <Row className="justify-content-center">
                                                        <Col className="justify-content-center" sm="12" md="6" lg="6"> 
                                                            <CardTitle className="justify-content-center">
                                                                <CardText className="justify-content-center">
                                                                    <h3 className="justify-content-center bold font-weight-bolder">
                                                                        CONTACT US
                                                                    </h3>
                                                                </CardText>
                                                            </CardTitle>
                                                        </Col>
                                                    </Row>
                                                </CardHeader>
                                                <CardBody>
                                                    <Row className="justify-content-start">
                                                        <Col lg="12" md="12" sm="12">
                                                            <TextField id="standard-basic" label="Full Name" fullWidth/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="justify-content-start">
                                                        <Col lg="12" md="12" sm="12">
                                                            <TextField id="standard-basic" label="E-Mail Address" fullWidth />
                                                        </Col>
                                                    </Row>
                                                    <Row className="justify-content-start">
                                                        <Col lg="12" md="12" sm="12">
                                                            <TextField id="standard-basic" label="E-Mail Address" fullWidth />
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}