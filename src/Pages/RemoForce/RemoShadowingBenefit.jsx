/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BsCheck2Circle, BsLightningCharge } from 'react-icons/bs';
import { GiTeacher } from 'react-icons/gi';
import { RiCompasses2Line } from 'react-icons/ri';

const RemoShadowingBenefit = () => {
  return (
    <section className='mt-6'>
      {/* section title */}
      <div className='text-center'>
        <h1 className="text-2xl lg:text-5xl font-medium  text-black drop-shadow-lg shadow-black">The Benefits you will get!</h1>
      </div>


      {/* benefits items */}
      <div className='lg:grid lg:grid-cols-4   lg:h-[250px]  mt-8 '>
        <div className='flex flex-col py-2 max-md:w-4/6 justify-center lg:justify-start  items-center gap-2'>
          <button type='button' className='text-3xl py-4 px-4 bg-[#DDB6FF] rounded-full benefitIcons '>
            <GiTeacher />
          </button>
          <div className='text-center '>
            <h4 className='text-2xl font-semibold'>Learn from Experts</h4>
          </div>
        </div>
        <div className=' flex max-md:justify-end'>
          <div className='flex flex-col  py-2 max-md:w-4/6   justify-end items-center gap-2'>
            <button type='button' className='text-3xl py-4 px-4 bg-[#A5DBFF] rounded-full benefitIcons '>
              <BsLightningCharge />
            </button>
            <div className='text-center '>
              <h4 className='text-2xl font-semibold'>Start with Nothing</h4>
            </div>
          </div>
        </div>
        <div className='flex flex-col py-2 max-md:w-4/6 justify-center lg:justify-start  items-center gap-2'>
          <button type='button' className='text-3xl py-4 px-4 bg-[#65DC7F] rounded-full benefitIcons '>
            <RiCompasses2Line />
          </button>
          <div className='text-center '>
            <h4 className='text-2xl font-semibold'>Practical Learning</h4>
          </div>
        </div>

        <div className=' flex max-md:justify-end  lg:justify-center'>
          <div className='flex flex-col  py-2 max-md:w-4/6   justify-end items-center gap-2'>
            <button type='button' className='text-3xl py-4 px-4 rounded-full bg-[#FFC46B] benefitIcons '>
              <BsCheck2Circle />
            </button>
            <div className='text-center '>
              <h4 className='text-2xl font-semibold'>Get Verified</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoShadowingBenefit;