/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import shadowingProcess1 from '../../Assets/UserComponentImages/shadowingProcess1.png'
import shadowingProcess2 from '../../Assets/UserComponentImages/shadowingProcess2.png'
import shadowingProcess3 from '../../Assets/UserComponentImages/shadowinProcess3.png'

const ShadowingProccess = () => {
  return (
    <section className='lg:w-4/5 mt-20 mx-auto'>
      <div className='hidden lg:block'>
        <h1 className='text-2xl font-bold'>Shadowing processes going on!</h1>

        <div className='grid grid-cols-3 justify-between  mt-3'>
          <img src={shadowingProcess3} alt="" />
          <img src={shadowingProcess1} alt="" />
          <img src={shadowingProcess2} alt="" />
        </div>
      </div>

      {/* get started card */}
      <div className='mt-10  flex justify-center'>
        <div className='w-11/12 lg:w-[350px] p-12 rounded-2xl bg-[#fffaf1]  flex flex-col justify-center text-center'>
          <h1 className='text-3xl font-bold'>Get Started Now</h1>

          <Link to='/' className='border-[3px] hover:bg-[#FF9900] text-[#FFC46B] hover:text-white duration-300 ease-in text-xl font-semibold py-2 rounded-full border-[#FF9900] mt-3 '>
            Start My Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShadowingProccess;