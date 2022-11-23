import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [stripeError, setStripeError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { cost, userName, userEmail, _id } = booking;
    const [transactionID, setTransactionID] = useState('')
    const [paymentProcessing, setPaymentProcessing] = useState(false);

    useEffect(() => {
        fetch('https://aurora-dental-care-server.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
            },
            body: JSON.stringify({ cost })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [cost])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error: cardError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (cardError) {
            setStripeError(cardError.message)
            return
        } else {
            setStripeError('')
        }

        setPaymentProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: userName,
                    email: userEmail
                }
            }
        })

        if (confirmError) {
            setStripeError(confirmError)
            return
        } else {
            setStripeError('')
        }

        if (paymentIntent.status === "succeeded") {

            const tID = paymentIntent.id;
            const payment = {
                userEmail,
                transactionId: tID,
                cost,
                bookingId: _id
            };

            fetch('https://aurora-dental-care-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setTransactionID(paymentIntent.id);
                    }
                })
        }

        setPaymentProcessing(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} className='max-w-md mb-2'></CardElement>
                <button type='submit' disabled={!stripe || !elements || paymentProcessing} className='btn btn-primary btn-sm my-4'>Pay</button>
                {
                    stripeError && <p className='text-sm text-red-500'>{stripeError}</p>
                }
                {
                    paymentProcessing && <p className='text-sm text-primary'>Processing...</p>
                }
            </form>
            {
                transactionID &&
                <div>
                    <p className='text-md font-medium text-primary'>Thank you! You have successfully paid for your appointment</p>
                    <p>Your transaction id is <span className='font-medium text-green-400'>{transactionID}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;