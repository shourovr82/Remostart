import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Startup/Asset15.svg';

const StartupBanner = () => {
  const role = Cookies.get('userRole');

  return (
    <section className="startupBg flex flex-col-reverse md:flex-row justify-between w-full lg:mt-10 border-b-0 md:border-b-2 pb-10 gap-4">
      <section className="flex flex-col w-full md:w-1/2 text-center md:text-left mt-10 lg:mt-0">
        <h1 className="font-sans font-bold text-2xl md:text-3xl lg:text-5xl leading-tight my-4 lg:my-12">
          Get the Right Talents <br className="hidden lg:block" /> Suitable For the Right
          <br className="hidden lg:block" /> Project!
        </h1>
        <p className="mt-0 text-sm lg:text-base font-normal text-[#999999]">
          With our advanced matching system, we ensure that you get{' '}
          <br className="hidden md:block" />
          the right talent suitable for the right project, every time. Say{' '}
          <br className="hidden md:block" />
          goodbye to wasted time and resources, and hello to efficient,{' '}
          <br className="hidden md:block" />
          Successful projects
        </p>
        <div className="flex flex-col md:flex-row space-x-0 space-y-3 md:space-y-0 mt-8 md:space-x-5 text-center justify-center items-center md:justify-start md:items-start">
          {!role ? (
            <Link
              to="/remowelcome"
              className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs border-2 border-black font-semibold rounded-md"
            >
              Create your profile
            </Link>
          ) : (
            ''
          )}

          <Link
            to="/dashboard/post-job"
            className="px-12 py-3 lg:px-16 lg:py-5 text-xs font-semibold rounded-md border-2 border-black"
          >
            Post jobs
          </Link>
        </div>
      </section>

      <section className="w-full md:w-1/2 flex justify-start items-start md:justify-center md:items-center">
        <img src={logo} alt="LandingPageLogo" className="w-full aspect-auto" />
      </section>
    </section>
  );
};

export default StartupBanner;
