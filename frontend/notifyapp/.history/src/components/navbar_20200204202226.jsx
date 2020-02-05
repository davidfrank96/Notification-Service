import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import "../bootstrap.min.css"

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

                this.setState({ color: "light" });
            }
        }.bind(this);
    }

    componentWillUnmount() {
        window.onscroll = null;
    }
    render() {
        return (
            <>
                <Navbar fixed="top" color={this.state.color} light expand="md">
                    <NavbarBrand href="/">Notify App</NavbarBrand>
                    <NavbarToggler style={{ border: "none" }} onClick={
                        () => {

                            this.setState({ isOpen: !this.state.isOpen })
                        }
                    } />
                    <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
                        <Nav  navbar>
                            <NavItem>
                                <NavLink href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("sample")
                                            .scrollIntoView();
                                    }}>Sample</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("price")
                                            .scrollIntoView();
                                    }}>Prices</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("buy-token")
                                            .scrollIntoView();
                                    }}>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        document
                                            .getElementById("buy-token")
                                            .scrollIntoView();
                                    }}>Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }
}