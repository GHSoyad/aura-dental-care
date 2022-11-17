import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { RiLoaderFill } from "react-icons/ri";

const PrivateRoute = ({ children }) => {

    const { userInfo, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center font-medium flex justify-center items-center text-xl min-h-[calc(100vh_-_380px)]'>
                <RiLoaderFill className="animate-spin mr-3 text-primary text-3xl"></RiLoaderFill>
                Logging in...
            </div>
        )
    }

    if (userInfo && userInfo?.uid) {
        return children;
    }

    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;