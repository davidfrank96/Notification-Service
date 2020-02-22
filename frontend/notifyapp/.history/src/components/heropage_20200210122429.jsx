import React, { Component } from "react";
import "./indes.css";
import { Jumbotron, Col, Row,  Button } from "reactstrap";
import bgimg1 from "../assets/images/bg1.jpg";
import bgimg2 from "../assets/images/bg.jpeg";
import bgimg3 from "../assets/images/bmw.jpg";
import bgimg4 from "../assets/images/speed-car-wallpaper.jpg";
import bgimg5 from "../assets/images/speed-car.jpg";
import bgimg6 from "../assets/images/speed.jpg";
import InputGroup from "reactstrap/lib/InputGroup";
import Input from "reactstrap/lib/Input";

import BackgroundSlider from 'react-background-slider'

export default class HeroPage extends Component {
    render() {
        return (
            <>
                <div>
                    <BackgroundSlider
                        images={[bgimg1, bgimg2, bgimg3, bgimg4, bgimg5, bgimg6]}
                        duration={8}
                        transition={2}
                    />
                    <Jumbotron className="h-100 rounded-0 justify-content-center bg-transparent">
                        <Row className="justify-content-center h-100 pl-5 pt-5 mt-5 py-5 px-5 mx-5 my-5">
                            <Col lg="12" md="12" sm="12">
                                <Row className="h-100 justify-content-center">
                                    <Col lg="6" md="6" sm="12" className="h-100 justify-content-center">
                                        {" "}
                                        {/* <h2 className="bold text-capitalize text-center text-dark">
                                            Stay on the wheel!
                                        </h2> */}
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" md="12" sm="12">
                                <Row className="h-100 justify-content-center">
                                    <Col lg="4" md="4" sm="12" className="h-100 justify-content-center">
                                        <InputGroup className="p-1 rounded-pill">
                                            <Input className="center justify-content-center" placeholder="ENTER REG" className="text-info" />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <Row className="h-100 justify-content-center">
                                    <Col lg="6" md="6" sm="12" className="h-100 justify-content-center">
                                        <Button color="primary" block active>Check Vehicle for Free</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Jumbotron>
                </div>
                {/* <div className="justify-content-center" >
                    <Jumbotron className="h-100 rounded-0 justify-content-center " style={{backgroundImage:`url(${bgimg})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
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
                                    <Col lg="4" md="4" sm="12" className="h-100 justify-content-center">
                                        <InputGroup className="p-1 rounded-pill">
                                            <Input className="center justify-content-center" placeholder="ENTER REG" className="text-info"/>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Col>    

                            <Col lg="6" md="6" sm="12">
                                <Row className="h-100 justify-content-center">
                                    <Col lg="6" md="6" sm="12" className="h-100 justify-content-center">
                                        <Button color="primary" block  active>Check Vehicle for Free</Button>
                                    </Col>
                                </Row>
                            </Col>    
                       </Row>

                   </Jumbotron>
                </div> */}
            </>
        );
    }
}