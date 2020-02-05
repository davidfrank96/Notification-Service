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
                    <div className="container">
                        <section id="sample">
                            hello
                        </section>
                        <section id="price">
                            hello
                        </section>
                        <section id="contact">
                            hello
                        </section>
                        <section id="price">
                            hello
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