import React from 'react';
import fluoride from '../../../Assets/images/fluoride.png';
import cavity from '../../../Assets/images/cavity.png';
import whitening from '../../../Assets/images/whitening.png';
import ServicesInfoCard from './ServicesInfoCard';

const ServicesInfo = () => {

    const services = [
        {
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ]
    return (
        <section className='text-center my-20 lg:my-32'>
            <h3 className='text-xl font-bold text-primary mb-2'>OUR SERVICES</h3>
            <h2 className='text-4xl mb-16'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map((service, index) => <ServicesInfoCard key={index} service={service}></ServicesInfoCard>)
                }
            </div>
        </section>
    );
};

export default ServicesInfo;