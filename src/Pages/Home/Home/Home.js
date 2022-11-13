import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import OfficeInfo from '../OfficeInfo/OfficeInfo';

const Home = () => {
    return (
        <div className='container max-w-screen-xl mx-auto'>
            <HeroBanner></HeroBanner>
            <OfficeInfo></OfficeInfo>
        </div>
    );
};

export default Home;