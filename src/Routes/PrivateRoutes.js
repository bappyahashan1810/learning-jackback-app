import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Navigate to='/courseDetails/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;