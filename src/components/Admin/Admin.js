import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';


const Admin = () => {


    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("https://dry-retreat-33637.herokuapp.com/allOrders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    console.log("orders form db", orders)

    let count = 1;
    return (
        <Container>
            <Row className="justify-content-center mt-5 ">
                <Col sm={3}>
                    <p>N.B: This is only for admin panel. </p>
                </Col>
                <Col sm={7}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order No.</th>
                                <th>Shoe Model</th>
                                <th>Price</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(info => {
                                    return (
                                        <tr key={info._id}>
                                            <td>{count++}</td>
                                            <td>{info.shoeName}</td>
                                            <td>${info.price}</td>
                                            <td className="text-center"><button className="btn btn-success">{info.status}</button> </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;