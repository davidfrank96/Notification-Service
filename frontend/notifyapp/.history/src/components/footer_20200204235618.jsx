import React, { Component } from "react";
import { Container, Row } from "reactstrap";

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <Container fluid className="justify-content-center">
                        <Row>
                            <div className="ml-auto">
                                &copy; {1900 + new Date().getFullYear()}, {" "}
                                Cos-Ark Enterprise
                            </div>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}