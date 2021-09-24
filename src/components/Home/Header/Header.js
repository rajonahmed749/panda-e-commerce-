import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import shoe from "../../../images/red-shoe.png"
import "./Header.css"
const Header = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <h1>Smart Ideas <br /> For Your  Brand <br /> Are Here</h1>
                    <p className="text-secondary">Our motto is to fulfill customer demand by making <br /> them satisfied with growing their business</p>
                    <Button variant="success" className="mt-2 rounded-pill">Get Started</Button>
                    <Button variant="link" className="ml-3 mt-2 rounded-pill">Watch Video</Button>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={shoe} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;