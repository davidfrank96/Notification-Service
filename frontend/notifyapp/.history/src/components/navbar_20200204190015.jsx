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
        }
    }
    render() {
        return (
            <>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={
                        () => {

                            this.setState({ isOpen: !this.state.isOpen })
                        }
                    } />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="justify-content-end" navbar>
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