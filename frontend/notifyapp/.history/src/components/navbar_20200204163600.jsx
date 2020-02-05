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

export default class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.toggle = this.toggle.bind(this);
    }
    render() {
        return (
            <>
                
            </>
        );
    }
}