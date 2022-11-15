import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-footer bg-cover bg-center mt-12 md:mt-24'>
            <footer className="container max-w-screen-xl mx-auto px-6 xl:px-0">
                <div className='md:flex justify-between py-20 text-center md:text-justify'>
                    <div className='flex flex-col'>
                        <span className="font-bold text-lg footer-title">Services</span>
                        <Link className="link link-hover">Emergency Checkup</Link>
                        <Link className="link link-hover">Monthly Checkup</Link>
                        <Link className="link link-hover">Weekly Checkup</Link>
                        <Link className="link link-hover">Deep Checkup</Link>
                    </div>
                    <div className='flex flex-col my-8 md:my-0'>
                        <span className="font-bold text-lg footer-title">Oral Health</span>
                        <Link className="link link-hover">Fluoride Treatment</Link>
                        <Link className="link link-hover">Cavity Filling</Link>
                        <Link className="link link-hover">Teeth Whitening</Link>
                    </div>
                    <div className='flex flex-col'>
                        <span className="font-bold text-lg footer-title">Our Address</span>
                        <Link className="">New York - 101010 Hudson</Link>
                    </div>
                </div>
                <p className='text-center mb-8'>Copyright 2022 All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Footer;