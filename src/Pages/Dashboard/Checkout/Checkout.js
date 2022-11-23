import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../Components/Loader/Loader';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk);
const appearance = { theme: 'stripe' };
const options = { appearance };

const Checkout = () => {

    const booking = useLoaderData();
    const { treatment, cost, appointmentDate, appointmentTime } = booking;
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loader>Loading payment...</Loader>
    }

    return (
        <div>
            <p className='text-xl mb-2'>You are paying for {treatment}</p>
            <p className='mb-8'>You will be charged <span className='font-medium'>${cost}</span> for your appointment on {appointmentDate} at {appointmentTime}</p>
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm booking={booking}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Checkout;