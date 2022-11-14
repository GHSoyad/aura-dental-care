import React from 'react';
import doctor from '../../../Assets/images/doctor-small.png';

const MakeAppointment = () => {
    return (
        <section className='relative text-white bg-home-appointment my-20 xl:my-32'>
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-0 relative container max-w-screen-xl mx-auto px-6 lg:px-0">
                <img src={doctor} alt="treatment" className="rounded-lg lg:w-1/2 -mt-24 hidden lg:block" />
                <div className='lg:w-1/2 lg:pr-24 flex flex-col gap-6 py-9'>
                    <p className='font-bold text-xl text-primary'>Appointment</p>
                    <h1 className="text-4xl font-semibold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-4">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;