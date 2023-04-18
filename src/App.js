import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import loadingAnimation from './Assets/Images/LoadingAnimation.svg';
import router from './Routes/Routes';
import store from './app/store';
import UserContext from './Context/UserContext';

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  // card animator
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" h-full bg-white text-black m-[0_auto] w-[95%] max-w-[1440px] px-0 sm:w-[90%] md:w-[80%] xl:w-[75%]">
      <QueryClientProvider client={client}>
        <Suspense
          fallback={
            <div className="grid h-screen  place-items-center">
              <img src={loadingAnimation} alt="" />
            </div>
          }
        >
          {/* <UserContext> */}
          <Provider store={store}>
          <UserContext>
            <RouterProvider router={router} />

            <Toaster />
            </UserContext>
          </Provider>
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default App;
