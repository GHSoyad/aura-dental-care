import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {

    const { userInfo, loading, logOutUser } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(userInfo?.email)
    const location = useLocation();

    if (loading || adminLoading) {
        return (
            <Loader>Logging in...</Loader>
        )
    }

    if (userInfo && userInfo?.uid && isAdmin) {
        return children;
    }

    if (!isAdmin) {
        logOutUser();
    }

    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoute;