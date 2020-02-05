import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import HeroPage from "../components/heropage";
import Sample from "../components/sample";
import Price from "../components/prices";
import Contact from "../components/contact";



export default class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <HeroPage />
                <Sample />
                <Price />
                <Contact />
                <Footer />

            </>
        );
    }
}