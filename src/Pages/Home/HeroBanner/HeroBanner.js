import React from 'react';
import banner from '../../../Assets/images/chair.png';

const HeroBanner = () => {
    return (
        <section className="card md:card-side bg-base-100 flex-col-reverse gap-6 relative py-52" style={{
            backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>
            <div className='absolute inset-0 bg-white/90'></div>
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
        </section>
    );
};

export default HeroBanner;