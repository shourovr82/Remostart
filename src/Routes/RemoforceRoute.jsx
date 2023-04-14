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
  console.log(serviceUser);
  console.log(user);

  if (!user?.user?.role) {
    if (serviceUser?.role === 'remoforce') {
      console.log('hello2');
      return children;
    }
    console.log('hello3');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!serviceUser) {
    if (user?.user?.role === 'remoforce') {
      console.log('hello4');
      return children;
    }

    console.log('hello14');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user?.user?.role) {
    if (user?.user?.role !== 'remoforce') {
      console.log('hello6');
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // if (user?.user?.role === 'startup') {
    //   console.log('hello7');
    //   return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    // if (user?.user?.role === 'admin') {
    //   console.log('hello8');
    //   return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    return children;
  }
  if (serviceUser) {
    console.log('hello9');
    if (serviceUser?.role !== 'remoforce') {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
  }
  console.log('hello11');
  return children;
};

export default RemoForceRoute;
