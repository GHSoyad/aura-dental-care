import React, { useState } from 'react';
import chair from '../../../Assets/images/chair.png';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    console.log(selectedDate)
    return (
        <section className="relative py-8 lg:py-44 mb-4 md:mb-0 bg-home-hero bg-cover bg-center">
            <div className='absolute inset-0 bg-white/90'></div>
            <div className='container max-w-screen-xl mx-auto px-6 xl:px-0 xl:pl-10 card md:card-side flex-col-reverse gap-6 md:gap-12 xl:gap-24 relative justify-center items-center'>
                <div>
                    <DayPicker className='bg-white rounded-xl shadow-lg p-6'
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    ></DayPicker>
                </div>
                <div className='md:w-1/2 flex items-center'>
                    <img src={chair} alt="Album" className='w-full' />
                </div>
            </div>
            {
                selectedDate &&
                <p className='relative text-center mt-10 text-2xl font-medium text-primary'>Available Appointments on {format(selectedDate, 'PP')}.</p>
            }
        </section>
    );
};

export default DatePicker;