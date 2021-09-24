import React, { useState, useContext } from 'react';
import { OrderedShoe } from '../../App';


const Checkout = () => {
    const [order, setOrder] = useContext(OrderedShoe);

    console.log("from checkout ", order)
    return (
        <div>
            <h4>Yoyr product is here</h4>
        </div>
    );
};

export default Checkout;