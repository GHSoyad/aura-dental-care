import React, { useState } from 'react';
import { format } from 'date-fns';
import TreatmentPickerCard from './TreatmentPickerCard';
import BookAppointment from './BookAppointment';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Components/Loader/Loader';
import toast from 'react-hot-toast';

const TreatmentPicker = ({ selectedDate }) => {

    const appointmentDate = format(selectedDate, 'PP');
    const [bookAppointment, setBookAppointment] = useState(null);

    const { isLoading, error, data: appointmentsOptions, refetch } = useQuery({
        queryKey: ['appointmentsOptions', appointmentDate],
        queryFn: () => fetch(`https://aurora-dental-care-server.vercel.app/appointmentsOptions?date=${appointmentDate}`)
            .then(res => res.json())
    })

    if (error) {
        console.log(error)
    }

    const handleBooking = (event, treatment) => {
        event.preventDefault();
        const form = event.target;
        const appointmentTime = form.time.value;
        const userName = form.userName.value;
        const userPhone = form.userPhone.value;
        const userEmail = form.userEmail.value;
        const cost = form.cost.value;

        const bookingDetails = {
            treatment,
            appointmentDate,
            appointmentTime,
            userName,
            userPhone,
            userEmail,
            cost
        }

        fetch('https://aurora-dental-care-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`Booked Appointment for ${treatment}`)
                    setBookAppointment(null);
                    refetch();
                } else {
                    toast.error(data.message)
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='container max-w-screen-xl mx-auto px-6 xl:px-0'>
            <p className='relative text-center text-2xl font-medium text-primary my-16'>Available Appointments on {appointmentDate}</p>
            {
                isLoading ?
                    <Loader>Loading data...</Loader>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            appointmentsOptions.map(time => <TreatmentPickerCard key={time._id} time={time} setBookAppointment={setBookAppointment}></TreatmentPickerCard>)
                        }
                    </div>
            }
            {
                bookAppointment &&
                <BookAppointment bookAppointment={bookAppointment} appointmentDate={appointmentDate} handleBooking={handleBooking}></BookAppointment>
            }
        </div>
    );
};

export default TreatmentPicker;