import React from 'react';
import treatment from '../../../Assets/images/treatment.png'

const DentalCare = () => {
    return (
        <section>
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-20 px-0 md:px-36 my-20 xl:my-32">
                <img src={treatment} alt="treatment" className="rounded-lg lg:w-5/12" />
                <div className='lg:w-7/12'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;