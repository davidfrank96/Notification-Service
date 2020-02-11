import React, { Component } from "react";
import "./indes.css";
import { Row, Col } from "reactstrap";

export default class Price extends Component {
    render() {
        return (
            <>
                <div className="vh-100 justify-content-center align-content-center" id="price">
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="6" className="justify-content-center">
                            <Row className="justify-content-center">
                                <Col sm="6" md="6" lg="6" className="justify-content-center">
                                    <Row className="justify-content-center">
                                        <Col sm="6" md="6" lg="6" className="justify-content-center">
                                            <h2>Prices</h2>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="6" className="justify-content-center">
                            <Row className="justify-content-center">
                                <Col sm="6" md="6" lg="6" className="justify-content-center">
                                    <Row className="justify-content-center">
                                        <Col sm="6" md="6" lg="6" className="justify-content-center">
                                            <h2>Prices</h2>
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