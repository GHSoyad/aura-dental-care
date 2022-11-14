import React from 'react';
import treatment from '../../../Assets/images/treatment.png'

const DentalCare = () => {
    return (
        <section className='container max-w-screen-xl mx-auto px-6 lg:px-0 mb-0 lg:mb-52'>
            <div className="flex flex-col lg:flex-row items-center my-20 xl:my-32">
                <div className='lg:w-1/2 lg:px-24'>
                    <img src={treatment} alt="treatment" className="rounded-lg" />
                </div>
                <div className='lg:w-1/2 lg:pr-24 pt-8 lg:pt0'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;