import React, { Component } from "react";
import NavBar from "../components/navbar";



export default class Home extends Component{
    render() {
        return (
            <>
                <NavBar />
                <div id="sample" style={{height:"100vh", backgroundColor:"red"}}>
                    hello
                </div>
                <div id="price" style={{ height: "100vh", backgroundColor: "red" }}>
                    hello
                </div>
                <div id="sample" style={{ height: "100vh", backgroundColor: "red" }}>
                    hello
                </div>
                <div id="price" style={{ height: "100vh", backgroundColor: "red" }}>
                    hello
                </div>
            </>
        );
    }
}