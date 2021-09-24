import React, { useState, useContext } from 'react';
import './Product.css'
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { OrderedShoe } from "../../../App"


const ProductDetail = ({ shoe }) => {
    const [order, setOrder] = useContext(OrderedShoe);

    const history = useHistory();
    const handleOrder = (id) => {
        const selectedShoe = {
            shoe: shoe.title,
            price: shoe.price,
            picture: shoe.picture,
            description: shoe.description
        }
        setOrder(selectedShoe)
        history.push("/checkout");
    }

    console.log(order)

    return (
        <Col xs={12} md={4}>
            <div className="shoe-card shadow">
                <img className="IMG mb-2" src={shoe.picture} alt="shoe" />
                <h5 >{shoe.title}</h5>
                <p>{shoe.description}</p>
                <h6>Price: ${shoe.price}</h6>
                <button className="btn btn-success mt-1" onClick={() => handleOrder(shoe.id)}>Buy Now</button>
            </div>
        </Col>
    );
};

export default ProductDetail;