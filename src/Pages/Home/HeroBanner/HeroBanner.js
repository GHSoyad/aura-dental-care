import React from 'react';
import banner from '../../../Assets/images/chair.png';

const HeroBanner = () => {
    return (
        <section className="relative py-8 lg:py-44 mb-4 md:mb-0" style={{
            backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>
            <div className='absolute inset-0 bg-white/90'></div>
            <div className='container max-w-screen-xl mx-auto px-6 lg:px-0 card md:card-side flex-col-reverse gap-6 '>
                <div className="flex flex-col gap-6 md:w-1/2 justify-center relative">
                    <h2 className="text-5xl font-bold leading-tight">Your New Smile Starts Here!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <div>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-4">Get Started</button>
                    </div>
                </div>
                <div className='md:w-1/2 relative'>
                    <img src={banner} alt="Album" className='w-full' />
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;