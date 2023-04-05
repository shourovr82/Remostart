import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import loadingAnimation from '../Assets/Images/LoadingAnimation.svg';
import AuthContext from '../Context/AuthContext';
import useAuth from '../Hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { isLoading, user, loading } = useAuth();
    const { serviceUser, loading: serviceLoading } = useContext(AuthContext);

    const location = useLocation();
    if (loading || isLoading) {
        return (
            <div className="grid h-screen  place-items-center">
                <img src={loadingAnimation} alt="" />
            </div>
        );
    }
  


    if (!user?.user || serviceUser?.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    return children;
};

export default ProtectedRoute;
