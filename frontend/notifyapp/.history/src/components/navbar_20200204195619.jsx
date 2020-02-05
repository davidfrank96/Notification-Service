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
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }
}