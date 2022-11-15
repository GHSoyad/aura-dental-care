import React from 'react';

const ContactUs = () => {
    return (
        <section className='bg-home-appointment bg-cover bg-center text-center'>
            <div className='container max-w-screen-xl mx-auto px-6 lg:px-0 mt-20 lg:mt-32 py-16'>
                <h4 className='font-bold text-xl text-primary'>Contact Us</h4>
                <h2 className='text-4xl text-white mt-2'>Stay connected with us</h2>
                <form className='flex flex-col items-center gap-5 mt-10'>
                    <input type="email" placeholder="Email Address" className="input w-full max-w-lg" />
                    <input type="text" placeholder="Subject" className="input w-full max-w-lg" />
                    <textarea className="textarea w-full max-w-lg" placeholder="Your Message..." rows='4'></textarea>
                    <button className='btn btn-primary md:btn-wide bg-gradient-to-r from-primary to-secondary text-white mt-4'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;