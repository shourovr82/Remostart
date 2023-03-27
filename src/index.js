import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserContext from './Context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
           <UserContext>
        <App />
        <ToastContainer autoClose={1000} />
        </UserContext>
     
    </React.StrictMode>
);

reportWebVitals();
