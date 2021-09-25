import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from "../../../images/logo.png";
import "./Navbar.css"
import { Link, useHistory } from "react-router-dom";

const Menubar = () => {
    let history = useHistory();
    return (
        <Container>
            <Navbar expand="lg" >
                <Link to="/"><img src={logo} alt="website-logo" id="logo" className="ml-5" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className="mr-4" onClick={() => history.push("/")}>Home</Nav.Link>
                        <Nav.Link className="mr-4">About</Nav.Link>
                        <Nav.Link className="mr-4">Products</Nav.Link>
                        <Nav.Link className="mr-4" onClick={() => history.push("/admin")}>Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Menubar;