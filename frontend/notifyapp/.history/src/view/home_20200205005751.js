import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "reactstrap";



export default class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="wrapper">
                    {/* put the header here */}
                    <div className="container">
                        <section id="sample">
                            <Container>
                                hejksoodi
                            </Container>
                        </section>
                        <section id="price">
                            <Container>
                                hejksoodi
                            </Container>
                        </section>
                        <section id="contact">
                            <Container>
                                hejksoodi
                            </Container>
                        </section>
                        <section id="price">
                            <Container>
                                hejksoodi
                            </Container>
                        </section>
                    </div>
                    <div style={{ position: "absolute", left: "0", right: "0", bottom: "0" }}>
                        <Footer />
                    </div>
                </div>

            </>
        );
    }
}