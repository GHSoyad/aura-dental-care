import React, { useContext, useState } from 'react';
import { RiCloseFill, RiMenuFill, RiCalendarCheckFill, RiGroupFill, RiUserAddFill, RiUserSettingsFill } from 'react-icons/ri';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const DashboardLayout = () => {

    const { userInfo } = useContext(AuthContext);
    const [isAdmin] = useAdmin(userInfo?.email);
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
                    <ul className="menu p-4 w-80 bg-neutral text-white shadow-lg lg:rounded-lg gap-2">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link><RiCalendarCheckFill className='text-xl'></RiCalendarCheckFill> Appointments</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li className='hover:bg-primary rounded-lg'><NavLink to='/dashboard/users'><RiGroupFill className='text-xl'></RiGroupFill> Users</NavLink></li>
                                <li className='hover:bg-primary rounded-lg'><NavLink to='/dashboard/add-doctor'><RiUserAddFill className='text-xl'></RiUserAddFill> Add Doctor</NavLink></li>
                                <li className='hover:bg-primary rounded-lg'><NavLink to='/dashboard/manage-doctor'><RiUserSettingsFill className='text-xl'></RiUserSettingsFill> Manage Doctor</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;