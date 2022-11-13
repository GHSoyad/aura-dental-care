import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.././../logo.png'

const Navbar = () => {

    const menuLinks = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Appointment</Link></li>
        <li><Link to='/'>Reviews</Link></li>
        <li><Link to='/'>Contact Us</Link></li>
        <li><Link to='/'>Login</Link></li>
    </React.Fragment>

    return (
        <div className='bg-base-100'>
            <div className="navbar container max-w-screen-xl mx-auto justify-between font-medium">
                <div className='flex items-center justify-center gap-2'>
                    <Link to='/'><img src={logo} alt="" className='w-10' /></Link>
                    <Link to='/' className="leading-none">
                        <span className='text-3xl'>Aurora </span>
                        <span>Dental Care</span>
                    </Link>
                </div>
                <div className="">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;