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
            this.setState({ bgcolor: "white" })
        }
    }

    render() {
        return (
            <>
                <div>
                    <Navbar className="fixed" expand="md" style={{backgroundColor:this.state.bgcolor}}>
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                    </Navbar>
                </div>  
            </>
        );
    }
}