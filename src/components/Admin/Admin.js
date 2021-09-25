import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col ,Table} from 'react-bootstrap';


const Admin = () => {

    
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:4000/allOrders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    console.log("orders form db", orders)

    let count= 1;
    return (
        <Container>
            <Row className="justify-content-center mt-5 ">
                <Col sm={3}>Navbar</Col>
                <Col sm={7}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order No.</th>
                                <th>Shoe Model</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            orders.map(info => {
                                return (
                                    <tr key={info._id}>
                                        <td> {count++} </td>
                                        <td>{info.shoeName}</td>
                                        <td>${info.price}</td>
                                        <td><button className="btn btn-danger">Delete</button> </td>
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