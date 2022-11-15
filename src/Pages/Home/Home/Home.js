import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import DentalCare from '../DentalCare/DentalCare';
import FeaturedTestimonial from '../FeaturedTestimonial/FeaturedTestimonial';
import HeroBanner from '../HeroBanner/HeroBanner';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OfficeInfo from '../OfficeInfo/OfficeInfo';
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <OfficeInfo></OfficeInfo>
            <ServicesInfo></ServicesInfo>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <FeaturedTestimonial></FeaturedTestimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;