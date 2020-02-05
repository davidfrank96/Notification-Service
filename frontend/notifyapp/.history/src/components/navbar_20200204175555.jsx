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

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            bgcolor: "transparent",

            color: "navbar-transparent"
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.changeColor);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeColor);
    }
    changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            this.setState({
                color: "bg-info"
            });
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            this.setState({
                color: "navbar-transparent"
            });
        }
    };
    async toggle() {
        await this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <>
                <div style={{backgroundColor:"blue"}}>
                    <Navbar className={"fixed-top " + this.state.color}
                        color-on-scroll="100"
                        expand="lg">
                        <NavbarBrand href="/">hello</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}>

                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                        </NavbarToggler>
                        <Collapse className="flex-end" isOpen={this.state.isOpen} navbar>
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