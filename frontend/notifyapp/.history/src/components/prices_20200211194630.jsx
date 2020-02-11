import React, { Component } from "react";
import "./indes.css";
import { Row, Col } from "reactstrap";

export default class Price extends Component {
    render() {
        return (
            <>
                <div className="vh-100 justify-content-center align-content-center" id="price">
                    <Row>
                        <Col sm="6" md="6" lg="6">
                            <h2>Prices</h2>
                        </Col>
                   </Row>
                </div>
            </>
        );
    }
}