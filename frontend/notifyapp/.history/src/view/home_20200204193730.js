import React, { Component } from "react";
import NavBar from "../components/navbar";



export default class Home extends Component{
    render() {
        return (
            <>
                <NavBar />
                <div style={{height:"100vh", backgroundColor:"red"}}>
                    hello
                </div>
            </>
        );
    }
}