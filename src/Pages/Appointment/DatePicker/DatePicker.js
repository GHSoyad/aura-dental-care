import React from 'react';
import chair from '../../../Assets/images/chair.png';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';

const DatePicker = ({ selectedDate, setSelectedDate }) => {

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
        </section>
    );
};

export default DatePicker;