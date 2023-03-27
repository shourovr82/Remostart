/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-nested-ternary */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DashboardNavbar from '../../Pages/CommonPages/DashboardNavbar';

import Footer from '../../Pages/CommonPages/Footer';
import Navbar from '../../Pages/CommonPages/Navbar';

const Root = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const dashboard = location.pathname;
    const remoforceDashboard = location.pathname;
    const checkDashboard = dashboard.includes('dashboard');
    const checkRemoForceDashboard = remoforceDashboard.includes('remoforce-dashboard');


    return (
        
        <div className="flex flex-col justify-between min-h-screen">
            <div>
                {checkRemoForceDashboard || checkDashboard ? (
                    checkRemoForceDashboard ? (
                        <DashboardNavbar />
                    ) : (
                        ''
                    )
                ) : (
                    <Navbar />
                )}

                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
