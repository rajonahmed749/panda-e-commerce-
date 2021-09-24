import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../../images/logo.png";
import "./Navbar.css"
const Menubar = () => {
    return (
        <Navbar  expand="lg" >
            <img src={logo} alt="website-logo" id="logo" className="ml-5" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#home" className="mr-4">Home</Nav.Link>
                    <Nav.Link href="#features" className="mr-4">About</Nav.Link>
                    <Nav.Link href="#pricing" className="mr-4">Products</Nav.Link>
                    <Nav.Link href="#contact" className="mr-4">Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menubar;