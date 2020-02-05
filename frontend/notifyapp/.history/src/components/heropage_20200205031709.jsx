import React, { Component } from "react";
import "./indes.css";
import { Jumbotron } from "reactstrap";


export default class HeroPage extends Component {
    render() {
        return (
            <>
                <div className="vh-100 justify-content-center">
                    <Jumbotron className="vh-100 justify-content-center">
                        HELLO
                   </Jumbotron>
                </div>
            </>
        );
    }
}