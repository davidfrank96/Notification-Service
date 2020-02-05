import React, { Component } from "react";
import "./indes.css";
import { Jumbotron } from "reactstrap";
import bgimg from "../assets/images/bg1.jpg";

export default class HeroPage extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center" >
                    <Jumbotron className="vh-100 justify-content-center" style={{backgroundImage:`url(${bgimg})`, backgroundSize:"auto 100%", repeat:"no-repeat"}}>
                        HELLO
                   </Jumbotron>
                </div>
            </>
        );
    }
}