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
                        <div className="justify-content-center align-content-center" id="sample">
                            <Sample/>
                        </div>
                        <div className="justify-content-center align-content-center" id="price">
                            <Price/>
                        </div>
                        <div className="justify-content-center align-content-center" id="contact">
                            <Contact/>
                        </div>
                    <div>
                        <Footer />
                    </div>

            </>
        );
    }
}