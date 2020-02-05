import React, { Component } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";



export default class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="wrapper">
                    {/* put the header here */}
                    <div className="main container">
                        <div id="sample">
                            hello
                        </div>
                        <div id="price">
                            hello
                        </div>
                        <div id="contact">
                            hello
                        </div>
                        <div id="price">
                            hello
                        </div>
                    </div>
                    <Footer />
                </div>

            </>
        );
    }
}