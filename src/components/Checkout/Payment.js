import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51JHvdXDp2DJbL4lhSOBGscpqExQzDXRgwcRs5nLWyCnOtl3F0xaURQC1CKmfJOoqjrW2WZGDXVoZERGru5uw3Jeu00xRrAWD56');

const Payment = ({ order }) => {
    console.log("from payment page ", order)
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm order={order} />
        </Elements>
    );
};

export default Payment;