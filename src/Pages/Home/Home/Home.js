import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import HeroBanner from '../HeroBanner/HeroBanner';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OfficeInfo from '../OfficeInfo/OfficeInfo';
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const Home = () => {
    return (
        <div className=''>
            <HeroBanner></HeroBanner>
            <OfficeInfo></OfficeInfo>
            <ServicesInfo></ServicesInfo>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;