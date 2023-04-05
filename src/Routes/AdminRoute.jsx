/* eslint-disable import/no-cycle */
import { Navigate, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import loadingAnimation from '../Assets/Images/LoadingAnimation.svg';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { isLoading, loading } = useAuth();
  const { user } = useSelector((state) => state.auth);

  // const { loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading || isLoading) {
    return (
      <div className="grid h-screen  place-items-center">
        <img src={loadingAnimation} alt="" />
      </div>
    );
  }

  if (user?.user?.role !== 'admin') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user?.user?.role === 'startup') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user?.user?.role === 'remoforce') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
