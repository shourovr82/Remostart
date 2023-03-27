/* eslint-disable react/jsx-no-constructed-context-values */

import { useEffect, useState } from 'react';

import AuthContext from './AuthContext';
import loadingAnimation from '../Assets/Images/LoadingAnimation.svg';

const UserContext = ({ children }) => {
    // hooks

   
    const [loading, setLoading] = useState(false);
    const [serviceUser, setServiceUser] = useState(null);
  
    useEffect(() => {
        setLoading(true);
        const getUser = () => {
            fetch(`${process.env.REACT_APP_URL_STARTUP}/auth/login/success`, {
                // fetch("https://temp-back-production.up.railway.app/auth/login/success", {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error('authentication has been failed!');
                })
                .then((resObject) => {
                    // console.log(resObject.user);
                    setLoading(false);

                    setServiceUser(resObject.user);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        };
        getUser();
    }, []);
    if (loading) {
        return (
            <div className="grid h-screen  place-items-center">
                <img src={loadingAnimation} alt="" />
               
            </div>
        );
    }
    console.log(serviceUser);

    return (
        <AuthContext.Provider
            value={{
                loading,
                serviceUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
