import React, { Component } from "react";
import { Container, Row } from "reactstrap";

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer bg-dark">
                    <Container fluid className="justify-content-center">
                        <Row className="justify-content-center">
                            <div>
                                Notify App, &copy; {new Date().getFullYear()}
                            </div>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}