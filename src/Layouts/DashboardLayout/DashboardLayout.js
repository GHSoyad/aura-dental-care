import React, { useState } from 'react';
import { RiCloseFill, RiMenuFill, RiCalendarCheckFill, RiGroupFill } from 'react-icons/ri';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const DashboardLayout = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Navbar></Navbar>

            <div className='p-2'>
                <label htmlFor="my-drawer-2" className="btn-circle btn-primary swap swap-rotate lg:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
                    {/* <!-- this hidden checkbox controls the state --> */}
                    {
                        isOpen ?
                            <><RiCloseFill></RiCloseFill></>
                            :
                            <RiMenuFill></RiMenuFill>
                    }
                </label>
            </div>
            <div className="drawer drawer-mobile container mx-auto max-w-screen-xl gap-5">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" onClick={() => setIsOpen(!isOpen)}></label>
                    <ul className="menu p-4 w-80 bg-neutral text-white shadow-lg lg:rounded-lg">
                        {/* <!-- Sidebar content here --> */}
                        <li className='hover:bg-primary rounded-lg'><NavLink to='/dashboard/users'><RiGroupFill></RiGroupFill> Users</NavLink></li>
                        <li><Link><RiCalendarCheckFill className='text-lg'></RiCalendarCheckFill> Appointments</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;