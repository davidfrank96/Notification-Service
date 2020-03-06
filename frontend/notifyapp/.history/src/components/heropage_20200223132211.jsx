import React, { Component } from "react";
import "./indes.css";
import { Jumbotron, Col, Row,  Button, InputGroupAddon } from "reactstrap";
import bgimg1 from "../assets/images/bg1.jpg";
import bgimg2 from "../assets/images/bg.jpeg";
import bgimg3 from "../assets/images/bmw.jpg";
import bgimg4 from "../assets/images/speed-car-wallpaper.jpg";
import bgimg5 from "../assets/images/speed-car.jpg";
import bgimg6 from "../assets/images/speed.jpg";
import InputGroup from "reactstrap/lib/InputGroup";
import Input from "reactstrap/lib/Input";
import {FiSearch} from "react-icons/fi";

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
                    <div className="justify-content-center pt-5 mt-5 py-5 my-5">
                        <Row className="justify-content-center mx-5 pt-5 mt-5 py-5 my-5">
                            <Col lg="5" md="6" sm="12" className="justify-content-center">
                                <InputGroup>
                                    <Input placeholder="ENTER Vehicle REG" className="rounded-pill"/>
                                    <InputGroupAddon prefix className="rounded-pill">
                                        <Button color="transparent" active><FiSearch size={25} color="white"/></Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </Row>

                    </div>
                </div>
            </>
        );
    }
}