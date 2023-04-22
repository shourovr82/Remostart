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

  if (!user?.user?.role) {
    if (serviceUser?.role === 'remoforce') {
      return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!serviceUser) {
    if (user?.user?.role === 'remoforce') {
      return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user?.user?.role) {
    if (user?.user?.role !== 'remoforce') {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // if (user?.user?.role === 'startup') {
    //   return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    // if (user?.user?.role === 'admin') {
    //   return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    return children;
  }
  if (serviceUser) {
    if (serviceUser?.role !== 'remoforce') {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
  }

  return children;
};

export default RemoForceRoute;
