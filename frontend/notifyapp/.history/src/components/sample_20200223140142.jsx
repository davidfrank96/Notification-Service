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
                            <Col className="justify-content-center">
                                <div className="img-fluid">
                                    <img src={require("../assets/images/cars.png")} width="70%"/>
                                </div>
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