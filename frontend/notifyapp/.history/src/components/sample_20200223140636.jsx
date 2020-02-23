import React, { Component } from "react";
import "./indes.css";
import { Row,Col } from "reactstrap";


export default class Sample extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center align-content-center mt-5 py-5 pt-5" id="sample">
                    <Row className="justify-content-center py-5" style={{backgroundColor:"white"}}>
                        <Row className="justify-content-center">
                            <Col className="justify-content-center" lg="6" md="6" sm="12">
                                <div className="img-fluid">
                                    <img src={require("../assets/images/cars.png")} width="95%"/>
                                </div>
                                <p className="pl-5">Image for illustration purpose only</p>
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