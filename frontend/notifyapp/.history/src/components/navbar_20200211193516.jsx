import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import "../bootstrap.min.css"
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            color:"",
        }
    }
    componentDidMount() {
        window.onscroll = function () {
            if (window.pageYOffset < 99) {
                this.setState({ color: "" });
            } else {

                this.setState({ color: "info" });
            }
        }.bind(this);
    }

    componentWillUnmount() {
        window.onscroll = null;
    }
    render() {
        return (
            <>
                
                <MDBContainer>
                    <MDBRow>
                        <MDBBtn onClick={this.handleToggle}><MDBIcon icon="bars" size="5x" /></MDBBtn>
                    </MDBRow>
                    <MDBSideNav
                        logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                        hidden
                        triggerOpening={isOpen}
                        breakWidth={1300}
                        className="deep-purple darken-4"
                    >
                        <li>
                            <ul className="social">
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="pinterest" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="google-plus-g" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <MDBIcon fab icon="twitter" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <MDBSideNavNav>
                            <MDBSideNavCat
                                name="Submit blog"
                                id="submit-blog"
                                icon="chevron-right"
                            >
                                <MDBSideNavLink>Submit listing</MDBSideNavLink>
                                <MDBSideNavLink>Registration form</MDBSideNavLink>
                            </MDBSideNavCat>
                            <MDBSideNavCat
                                name="Instruction"
                                id="instruction"
                                iconRegular
                                icon="hand-pointer"
                                href="#"
                            >
                                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                                <MDBSideNavLink>For authors</MDBSideNavLink>
                            </MDBSideNavCat>
                            <MDBSideNavCat name="About" id="about" icon="eye">
                                <MDBSideNavLink>Instruction</MDBSideNavLink>
                                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
                            </MDBSideNavCat>
                            <MDBSideNavCat name="Contact me" id="contact-me" iconRegular icon="envelope">
                                <MDBSideNavLink>FAQ</MDBSideNavLink>
                                <MDBSideNavLink>Write a message</MDBSideNavLink>
                            </MDBSideNavCat>
                        </MDBSideNavNav>
                    </MDBSideNav>
                </MDBContainer>
                
                {/* <Navbar fixed="top" color={this.state.color} light expand="md" className="shadow shadow-lg"> */}
                    {/* <NavbarBrand href="/">Notify App</NavbarBrand>
                    <NavbarToggler style={{ border: "none" }} onClick={
                        () => {

                            this.setState({ isOpen: !this.state.isOpen })
                        }
                    } />
                    <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="justify-content-center px-5">
                            <NavItem>
                                <NavLink className="text-light" href="/home/sample"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("sample")
                                            .scrollIntoView({behavior:'smooth'});
                                    }}>Sample</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-light" href="/home/price"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("price")
                                            .scrollIntoView({behavior:'smooth'});
                                    }}>Prices</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-light" href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("price")
                                            .scrollIntoView({behavior:'smooth'});
                                    }}>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-light" href="/home/contact-us"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("contact")
                                            .scrollIntoView({behavior:'smooth'});
                                    }}>Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar> */}
            </>
        );
    }
}