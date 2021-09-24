import React from 'react';
import { Container, Button } from 'react-bootstrap';
const Payment = ({order}) => {
    console.log("from payment page ", order)
    return (
        <div>
            <Button  variant="warning"> Confirm Order</Button>
            {/* <Button onClick={handleOrder} variant="warning"> Confirm Order</Button> */}
        </div>
    );
};

export default Payment;