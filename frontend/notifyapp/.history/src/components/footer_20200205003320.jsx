import React, { Component } from "react";
import { Container, Row } from "reactstrap";

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer bg-dark">
                    <Container fluid className="justify-content-center">
                        <Row>
                            <div className="ml-auto">
                                Cos-Ark Enterprise, &copy; {new Date().getFullYear()}
                                
                            </div>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}