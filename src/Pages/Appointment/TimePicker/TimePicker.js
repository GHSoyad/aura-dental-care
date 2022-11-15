import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import TimePickerCard from './TimePickerCard';

const TimePicker = ({ selectedDate }) => {

    const [appointmentTimes, setAppointmentTimes] = useState([]);
    useEffect(() => {
        fetch('/appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentTimes(data))
    }, [])

    return (
        <div className='container max-w-screen-xl mx-auto px-6 xl:px-0'>
            <p className='relative text-center text-2xl font-medium text-primary my-16'>Available Appointments on {selectedDate && format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    appointmentTimes.map(time => <TimePickerCard key={time._id} time={time}></TimePickerCard>)
                }
            </div>
        </div>
    );
};

export default TimePicker;