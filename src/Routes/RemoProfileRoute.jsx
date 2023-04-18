/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../Hooks/useAuth';

import AuthContext from '../Context/AuthContext';

const RemoProfileRoute = ({ children }) => {
  const { isLoading, user, loading } = useAuth();
  const { results } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname.split('/');
  const pathId = path[path.length - 1];

  const remoForceEmail = results.lastSearchResult.requiredTalentsInHistory.find(
    (users) => users.email === pathId
  );
  if (remoForceEmail && user.user.email === results.startupsEmail) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;

  // console.log(results,'-------------', user.user.email);
};

export default RemoProfileRoute;
