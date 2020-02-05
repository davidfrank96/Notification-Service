import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Container, Jumbotron } from "reactstrap";
import HeroPage from "../components/heropage";
import Sample from "../components/sample";
import Price from "../components/prices";
import Contact from "../components/contact";



export default class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Jumbotron fluid className="full">
                    <HeroPage />
                </Jumbotron>
                        <Jumbotron className="full" fluid id="sample">
                            <Sample/>
                        </Jumbotron>
                        <Jumbotron className="full" fluid id="price">
                            <Price/>
                        </Jumbotron>
                        <Jumbotron className="full" fluid id="contact">
                            <Contact/>
                        </Jumbotron>
                    <div>
                        <Footer />
                    </div>

            </>
        );
    }
}