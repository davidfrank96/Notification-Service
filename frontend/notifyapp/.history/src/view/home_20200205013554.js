import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "reactstrap";
import HeroPage from "../components/heropage";
import Sample from "../components/sample";
import Price from "../components/prices";
import Contact from "../components/contact";



export default class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="wrapper">
                    {/* put the header here */}
                    <HeroPage/>
                    <div className="container">
                        <section id="sample">
                            <Sample/>
                        </section>
                        <section id="price">
                            <Price/>
                        </section>
                        <section id="contact">
                            <Contact/>
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