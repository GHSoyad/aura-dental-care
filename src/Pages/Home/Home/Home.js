import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import HeroBanner from '../HeroBanner/HeroBanner';
import OfficeInfo from '../OfficeInfo/OfficeInfo';
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const Home = () => {
    return (
        <div className='container max-w-screen-xl mx-auto px-6 '>
            <HeroBanner></HeroBanner>
            <OfficeInfo></OfficeInfo>
            <ServicesInfo></ServicesInfo>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;