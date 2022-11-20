import React, { useState } from 'react';
import { RiCloseFill, RiMenuFill } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
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
            <div className="drawer drawer-mobile container mx-auto max-w-screen-xl">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" onClick={() => setIsOpen(!isOpen)}></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content border border-primary">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;