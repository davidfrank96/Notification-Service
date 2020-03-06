import React, { Component } from "react";
import { Container, Row } from "reactstrap";

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer style={{ padding: "20px" }} className="footer text-white bg-dark">
                    <Container fluid className="justify-content-center">
                        <Row className="justify-content-center">
                            <div>
                                &copy; {new Date().getFullYear()} {" "}Notify App 
                            </div>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}