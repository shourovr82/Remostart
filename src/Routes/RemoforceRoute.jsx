/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import loadingAnimation from '../Assets/Images/LoadingAnimation.svg';

import useAuth from '../Hooks/useAuth';

import AuthContext from '../Context/AuthContext';

const RemoForceRoute = ({ children }) => {
    const { isLoading, user, loading } = useAuth();
    const { serviceUser, loading: serviceLoading } = useContext(AuthContext);

    // const { loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading || isLoading || serviceLoading) {
        return (
            <div className="grid h-screen  place-items-center">
                <img src={loadingAnimation} alt="" />
            </div>
        );
    }
    console.log(user);
    if (user?.user?.role) {
        if (user?.user?.role !== 'remoforce') {
            console.log('hello');

            return <Navigate to="/login" state={{ from: location }} replace />;
        }
        if (user?.user?.role === 'startup') {
            console.log('hello2');
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
        if (user?.user?.role === 'admin') {
            console.log('hello3');
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
        console.log('hello4');
    }
    if (serviceUser?.role) {
        if (serviceUser?.role !== 'remoforce') {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
    }

    return children;
};

export default RemoForceRoute;
