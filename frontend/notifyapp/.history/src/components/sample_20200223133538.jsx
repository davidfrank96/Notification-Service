import React, { Component } from "react";
import "./indes.css";
import { Row,Col } from "reactstrap";


export default class Sample extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center align-content-center mt-5 py-5 pt-5" id="sample">
                    <Row className="justify-content-center py-5" style={{backgroundColor:"white"}}>
                        <Col className="justify-content-center">
                            hello
                        </Col>
                        <Col className="justify-content-center">
                            hello
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}