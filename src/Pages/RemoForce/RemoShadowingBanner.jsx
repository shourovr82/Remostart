/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import { IoPlayOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import shadowingImg from '../../Assets/UserComponentImages/remoforceShadowing.png';

const RemoShadowingBanner = () => {
  return (
    <section>
     
      {/* shadowing banner contents */}
      <div className='lg:grid flex flex-col-reverse lg:grid-cols-5 items-center pt-5 lg:py-32 bg-[#FFF1E6] mt-1.5 rounded-[10px] '>
        <div className='col-span-3 lg:pl-20 px-5  lg:py-8'>
          <div>
            <h1 className='text-4xl lg:text-5xl font-semibold '>Shadowing a Way to Start Your Career Journey!</h1>
            <p className='text-[#b2afac] text-base lg:text-xl mt-3  lg:font-semibold 2xl:w-4/5'>We know how hard the career journey can be, if you have little skills, apply here  so you get jobs that pay and certify you as you work and learn</p>


          </div>
          {/* buttons */}

          <div className='py-5 lg:mt-10 flex gap-5 items-center'>
            <Link
              to="/"
              className="px-10 py-4    text-sm bg-[#0B132A] text-white  font-semibold rounded-md"
            >
              Get Started
            </Link>
            {/* video demo button */}
            <button type='button' className='flex items-center gap-3 font-semibold'>
              <span className=' py-4 px-4 rounded-full bg-[#0B132A] text-white'><IoPlayOutline className='text-2xl' /></span>
              Video Demo
            </button>

          </div>
        </div>

        <div className='col-span-2 lg:pr-6  '>
          <img className='object-contain ' src={shadowingImg} alt="" />
        </div>
      </div>

    </section>
  );
};

export default RemoShadowingBanner;