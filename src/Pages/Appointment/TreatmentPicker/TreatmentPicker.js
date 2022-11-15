import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import TreatmentPickerCard from './TreatmentPickerCard';
import BookAppointment from './BookAppointment';

const TreatmentPicker = ({ selectedDate }) => {

    const [treatments, setTreatments] = useState([]);
    const [bookAppointment, setBookAppointment] = useState(null);

    useEffect(() => {
        fetch('/appointmentOptions.json')
            .then(res => res.json())
            .then(data => setTreatments(data))
    }, [])

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const time = form.time.value;
        const name = form.userName.value;
        const phone = form.userPhone.value;
        const email = form.userEmail.value;

        const appointmentDetails = {
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    treatments.map(time => <TreatmentPickerCard key={time._id} time={time} selectedDate={selectedDate} setBookAppointment={setBookAppointment}></TreatmentPickerCard>)
                }
            </div>
            {
                bookAppointment &&
                <BookAppointment bookAppointment={bookAppointment} selectedDate={selectedDate} handleBooking={handleBooking}></BookAppointment>
            }
        </div>
    );
};

export default TreatmentPicker;