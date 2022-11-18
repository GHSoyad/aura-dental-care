import React, { useState } from 'react';
import { format } from 'date-fns';
import TreatmentPickerCard from './TreatmentPickerCard';
import BookAppointment from './BookAppointment';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Components/Loader/Loader';

const TreatmentPicker = ({ selectedDate }) => {

    const [bookAppointment, setBookAppointment] = useState(null);

    const { isLoading, error, data: appointmentsOptions } = useQuery({
        queryKey: ['appointmentsOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentsOptions')
            .then(res => res.json())
    })

    if (error) {
        console.log(error)
    }

    const handleBooking = (event, treatment) => {
        event.preventDefault();
        const form = event.target;
        const time = form.time.value;
        const name = form.userName.value;
        const phone = form.userPhone.value;
        const email = form.userEmail.value;

        const appointmentDetails = {
            treatment,
            selectedDate,
            time,
            name,
            phone,
            email
        }

        console.log(appointmentDetails);
        setBookAppointment(null);
    }

    return (
        <div className='container max-w-screen-xl mx-auto px-6 xl:px-0'>
            <p className='relative text-center text-2xl font-medium text-primary my-16'>Available Appointments on {selectedDate && format(selectedDate, 'PP')}</p>
            {
                isLoading ?
                    <Loader></Loader>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            appointmentsOptions.map(time => <TreatmentPickerCard key={time._id} time={time} selectedDate={selectedDate} setBookAppointment={setBookAppointment}></TreatmentPickerCard>)
                        }
                    </div>
            }
            {
                bookAppointment &&
                <BookAppointment bookAppointment={bookAppointment} selectedDate={selectedDate} handleBooking={handleBooking}></BookAppointment>
            }
        </div>
    );
};

export default TreatmentPicker;