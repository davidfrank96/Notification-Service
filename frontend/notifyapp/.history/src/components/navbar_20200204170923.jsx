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
    componentDidMount() {
        if (document.documentElement.scrollTop > 399 ||
            document.body.scrollTop > 399) {
                this.setState({bgcolor:"white"})
        } else {
            this.setState({ bgcolor: "transparent" })
        }
    }

    render() {
        return (
            <>
                <div>
                    <Navbar color="primary" light expand="md">
                        <NavbarBrand href="/">hello</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>  
            </>
        );
    }
}