import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';


const SimpleCardForm = ({ order }) => {
    const history = useHistory()

    console.log('from stripe', order)
    const selectedShoe = {
        shoeName: order.shoe,
        price: order.price,
        description: order.description,
        status: "paid"
    }


    //order shoe
    const handleOrder = () => {
        fetch(`http://localhost:4000/addOrder`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedShoe)
        })
            .then(res => res.json())
        // history.push('/orders')
    }
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            alert("please try again")
        } else {

            // alert("payment successfully")
            afterSuccess()
            console.log('[PaymentMethod]', paymentMethod.id);
        }
    };

    const afterSuccess = () => {
        var person = prompt("Congress!, you have ordered", `${order.shoe}`);
        if (person != null) {
            history.push('/')
        }
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button onClick={handleOrder} className="btn btn-success mt-1" type="submit" disabled={!stripe}>
                    Pay
            </button>
            </form>
        </Container>
    );
};

export default SimpleCardForm;