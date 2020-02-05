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
            bgcolor:"transparent"
        }
        this.toggle = this.toggle.bind(this);
    }
    async toggle() {
        await this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <>
                <div>
                    <Navbar expand="md" style={{backgroundColor:this.state.bgcolor}}>
                        
                    </Navbar>
                </div>  
            </>
        );
    }
}