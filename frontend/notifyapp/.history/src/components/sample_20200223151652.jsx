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
                        <Row className="justify-content-center mx-5">
                            <Col className="justify-content-center" lg="6" md="6" sm="12">
                                <div className="img-fluid">
                                    <img src={require("../assets/images/cars.png")} width="95%"/>
                                </div>
                                <p className="mt-5 text-light text-black-50">Image for illustration purpose only</p>
                                <Row className="bg-warning justify-content-center p-2">
                                    <Col className="bg-warning justify-content-center">
                                        <b>NT657EU</b>
                                    </Col>
                                </Row>
                                <div className="mt-5">
                                    <h2 className="text-primary"><b>Overall Result</b></h2>
                                </div>
                                <Row className="bg-danger justify-content-center w-50 text-light">
                                    <Col className="bg-danger justify-content-center">
                                        <h3 className="justify-content-center"><b className="justify-content-center">FAIL</b></h3>
                                    </Col>
                                </Row>
                                <div className="mt-3">
                                    <p style={{ color: "grey" }}>Time of Check: 04/10/2019 - 08:52</p>
                                </div>
                                <Row style={{ borderTop: "0.1px solid grey", borderBottom: "0.1px solid grey"}} className="justify-content-center w-100 text-black50 text-left">
                                    <Col className="justify-content-center">
                                        <p className="font-weight-light" style={{fontSize:"0.7em"}}>Please read your deluxe check carefully to ensure you fully understand all the information shown. If you have any questions regarding your deluxe check please contact us and we will be happy to help.</p>
                                    </Col>
                                </Row>

                            </Col>
                            <Col className="justify-content-center">
                                <div className="mt-5">
                                    <h2 className="text-primary"><b>Your Checks</b></h2>
                                </div>
                                <Row style={{ borderTop: "3px dashed grey"}} className="justify-content-center w-100 text-black50 text-left">
                                    <Col className="justify-content-center">
                                        <p className="font-weight-light" style={{ fontSize: "0.7em" }}>It is vital that you check the above 3 details before you purchase this vehicle. If you are stuck with the above 3 checks then follow this guide!</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </div>
            </>
        );
    }
}