import React, { Component } from "react";
import "./indes.css";
import { Jumbotron } from "reactstrap";
import bgimg from "../assets/images/speed.jpeg";

export default class HeroPage extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center" >
                    <Jumbotron className="vh-100 justify-content-center" style={{backgroundImage:`url(${bgimg})`}}>
                        HELLO
                   </Jumbotron>
                </div>
            </>
        );
    }
}