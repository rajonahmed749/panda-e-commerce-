import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import jordan from "../../../images/jorder-nike.jpg"

const Header = () => {
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={5}>
                    <h1>Smart Shoes, <br /> Trending shoes <br /> Are Here</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing  <br /> them satisfied with growing their business</p>
                    <Button variant="success" className="mt-2 rounded-pill">Let's Shopping</Button>
                    <Button variant="link" className="ml-3 mt-2 rounded-pill">Watch Demo</Button>
                </Col>
                <Col xs={6} md={4}>
                    <Image className="mt-5" src={jordan} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;