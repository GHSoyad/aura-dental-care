import React from 'react';
import clock from '../../../Assets/icons/clock.svg';
import marker from '../../../Assets/icons/marker.svg';
import phone from '../../../Assets/icons/phone.svg';
import OfficeInfoCard from './OfficeInfoCard';

const OfficeInfo = () => {
    const information = [
        {
            "title": "Opening Hours",
            "description": "opening time",
            "img": clock,
            "bgColor": "bg-gradient-to-r from-primary to-secondary"
        },
        {
            "title": "Visit our Location",
            "description": "Brooklyn, NY 10036, United States",
            "img": marker,
            "bgColor": "bg-accent"
        },
        {
            "title": "Contact us now",
            "description": "+000 123 456789",
            "img": phone,
            "bgColor": "bg-gradient-to-r from-primary to-secondary"
        }
    ]

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative container max-w-screen-xl mx-auto px-6 xl:px-0'>
            {
                information.map((info, index) => <OfficeInfoCard key={index} info={info}></OfficeInfoCard>)
            }
        </section>
    );
};

export default OfficeInfo;