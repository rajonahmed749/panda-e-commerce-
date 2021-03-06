import React, { useState, useContext } from 'react';
import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { OrderContext } from '../../App';
import Payment from './Payment';


const Checkout = () => {
    const [order, setOrder] = useContext(OrderContext);


    return (
        <Container className="mt-5">
            <Card style={{ width: '18rem' }} className="mx-auto my-2 shadow rounded">
                <Card.Img className="IMG" variant="top" src={order.picture} />
                <Card.Body>
                    <Card.Title>{order.shoe}</Card.Title>
                    <Card.Text>{order.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> Cost: ${order.price}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Payment order={order} />
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Checkout;