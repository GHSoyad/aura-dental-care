import React from 'react';

const TreatmentPickerCard = ({ time, setBookAppointment }) => {

    const { name, slots, cost } = time;

    return (
        <div className='text-center flex flex-col gap-2 rounded-xl shadow-lg py-10'>
            <p className='font-semibold text-xl text-primary'>{name}</p>
            <p>{slots.length ? slots[0] : 'No slots available'}</p>
            <p className='text-sm'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}  Available</p>
            <p>Cost: ${cost}</p>
            <div>
                {/* The button to open modal */}
                <label onClick={() => setBookAppointment(time)} htmlFor="booking-modal" disabled={slots.length === 0} className='btn btn-primary text-white mt-2'>Book Appointment</label>
            </div>
        </div>
    );
};

export default TreatmentPickerCard;