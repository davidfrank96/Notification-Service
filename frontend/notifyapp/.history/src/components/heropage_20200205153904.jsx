import React, { Component } from "react";
import "./indes.css";
import { Jumbotron, Col, Row, NavbarText } from "reactstrap";
import bgimg from "../assets/images/bg1.jpg";

export default class HeroPage extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center" >
                    <Jumbotron className="h-100 justify-content-center " style={{backgroundImage:`url(${bgimg})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
                        <Row className="justify-content-center h-100 pl-5 pt-5 mt-5 py-5 px-5 mx-5 my-5">
                            <Col lg="12" md="12" sm="12">
                                <Row className="h-100 justify-content-center">
                                    <Col lg="6" md="6" sm="12" className="h-100 justify-content-center">
                                        <h2 className="text-light bold text-capitalize text-center">
                                                Stay on the wheel!
                                        </h2>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" md="12" sm="12">
                                <Row className="h-100 justify-content-center">
                                    <Col lg="6" md="6" sm="12" className="h-100 justify-content-center">
                                        <h1>wait!!!!</h1>
                                    </Col>
                                </Row>
                            </Col>    

                            <Col lg="12" md="12" sm="12">
                                <Row className="h-100 justify-content-center">
                                    <Col lg="6" md="6" sm="12" className="h-100 justify-content-center">
                                        <h1>wait!!!!</h1>
                                    </Col>
                                </Row>
                            </Col>    
                       </Row>

                   </Jumbotron>
                </div>
            </>
        );
    }
}