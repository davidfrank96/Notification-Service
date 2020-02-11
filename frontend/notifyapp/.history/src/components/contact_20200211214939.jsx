import React, { Component } from "react";
import "./indes.css";
import { Row, Col } from "reactstrap";

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center align-content-center py-5" id="contact">
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="6" className="justify-content-center">
                            <Row className="justify-content-center">
                                <Col sm="6" md="6" lg="6" className="justify-content-center">
                                    <Row className="justify-content-center">
                                        <Col sm="6" md="6" lg="6" className="justify-content-center">
                                            <Card className="shadow shadow-lg">

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