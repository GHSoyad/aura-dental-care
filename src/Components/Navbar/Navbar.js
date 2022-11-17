import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { RiUser3Fill } from 'react-icons/ri';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '.././../logo.png'

const Navbar = () => {

    const { userInfo, setUserInfo, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                setUserInfo(null);
                navigate('/');
                toast.success("Logged Out Successfully.")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const menuLinks = <React.Fragment>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/appointment'>Appointment</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {userInfo && userInfo.uid ?
            <>
                <li><NavLink to='/my-reviews'>My Reviews</NavLink></li>
                <li onClick={handleLogOut}><Link>Logout</Link></li>
            </>
            :
            <>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </>
        }
    </React.Fragment>

    return (
        <div className='bg-base-100'>
            <div className="navbar container max-w-screen-xl mx-auto justify-between font-medium px-2 xl:px-0 py-5">
                <div className='flex items-center justify-center gap-2'>
                    <Link to='/'><img src={logo} alt="" className='w-12' /></Link>
                    <Link to='/' className="leading-none font-serif font-bold">
                        <span className='text-3xl text-primary'>Aurora</span>
                        <span className='text-secondary block -mt-1'>Dental Care</span>
                    </Link>
                </div>
                <div className="">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuLinks}
                            {
                                (userInfo && userInfo.uid) &&
                                <>
                                    <li><NavLink to='/'>Profile</NavLink></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuLinks}
                        {
                            (userInfo && userInfo.uid) &&
                            <li>
                                <Link>{
                                    userInfo?.photoURL ?
                                        <img src="https://placeimg.com/80/80/people" alt='user' className="w-10 rounded-full" />
                                        :
                                        <RiUser3Fill className='text-xl'></RiUser3Fill>
                                }</Link>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;