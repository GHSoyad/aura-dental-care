import React from 'react';

const TimePickerCard = ({ time }) => {
    const { name, slots } = time;
    console.log(slots.length);
    return (
        <div className='text-center flex flex-col gap-2 rounded-xl shadow-lg py-10'>
            <p className='font-semibold text-xl text-primary'>{name}</p>
            <p>{slots.length ? slots[0] : 'No slots available'}</p>
            <p className='text-sm'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}  Available</p>
            <div>
                <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-2'>Book Appointment</button>
            </div>
        </div>
    );
};

export default TimePickerCard;