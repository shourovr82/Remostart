import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import UserContext from './Context/UserContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       
            <App />
            <ToastContainer autoClose={1000} />
   
    </React.StrictMode>
);

reportWebVitals();
