import React from 'react';

const ServicesInfoCard = ({ service }) => {
    const { title, description, img } = service;
    return (
        <div className='flex flex-col justify-center items-center text-center shadow-xl p-10 gap-2 rounded-xl'>
            <img src={img} alt="" className='h-28 mb-6' />
            <p className='font-semibold text-xl'>{title}</p>
            <p >{description}</p>
        </div>
    );
};

export default ServicesInfoCard;