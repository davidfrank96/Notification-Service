import React, { Component } from "react";
import "./indes.css";
import { Row,Col } from "reactstrap";


export default class Sample extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center align-content-center px-5 mt-n5" id="sample">
                    
                    <Row className="justify-content-center py-5 shadow-lg" style={{ backgroundColor: "white" }}>
                        <Row className="mb-5 text-black-50"><h2>SAMPLE</h2></Row>
                        <Row className="justify-content-center ml-5">
                            <Col className="justify-content-center" lg="6" md="6" sm="12">
                                <div className="img-fluid">
                                    <img src={require("../assets/images/cars.png")} width="95%"/>
                                </div>
                                <p className="mt-5 text-light text-black-50">Image for illustration purpose only</p>
                                <Row className="bg-warning justify-content-center w-50 p-2">
                                    <Col className="bg-warning justify-content-center">
                                        <Row className="bg-warning justify-content-center">
                                            <Col lg="6" md="6" sm="6" className="justify-content-center">
                                                <h3><b>NT657EU</b></h3>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div className="mt-5">
                                    <h2 className="text-primary"><b>Overall Result</b></h2>
                                </div>
                                <Row className="bg-danger justify-content-center w-50 p-1">
                                    <Col className="bg-danger justify-content-center">
                                        <Row className="bg-danger justify-content-center">
                                            <Col lg="6" md="6" sm="6" className="justify-content-center">
                                                <h3><b>FAIL</b></h3>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="justify-content-center">
                                hello
                            </Col>
                        </Row>
                    </Row>
                </div>
            </>
        );
    }
}