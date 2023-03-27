import React from 'react';
import { BiLineChart } from 'react-icons/bi';
import { HiOutlinePresentationChartLine } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import sec1logo from '../../Assets/Images/RemoForceHome/Illustration.png';
import five from '../../Assets/Images/RemoForceHome/OK.png';
import seven from '../../Assets/Images/RemoForceHome/airbnb.png';
import one from '../../Assets/Images/RemoForceHome/envato.png';
import six from '../../Assets/Images/RemoForceHome/flowmapp.png';
import two from '../../Assets/Images/RemoForceHome/marvel.png';
import three from '../../Assets/Images/RemoForceHome/procreate.png';
import four from '../../Assets/Images/RemoForceHome/vk.png';
import RemoForceBenefit from './RemoForceBenefit';

const UserSection1 = () => (

    <section className='flex bg-transparent flex-col mt-10 md:mt-20 items-center border-b-2'>
        <h1 className='text-xl lg:text-3xl mt-7 font-bold'>
            Work For Startups and Founders on a Mission
        </h1>
        <div className='grid md:grid-cols-7 grid-cols-3 gap-x-12 gap-y-5 lg:gap-x-20 mt-11'>
            <img className='w-14 lg:w-16' src={one} alt="" />
            <img className='w-14 lg:w-16' src={two} alt="" />
            <img className='w-14 lg:w-16' src={three} alt="" />
            <img className='w-14 lg:w-16' src={four} alt="" />
            <img className='w-14 lg:w-16' src={five} alt="" />
            <img className='w-14 lg:w-16' src={six} alt="" />
            <img className='w-14 lg:w-16 hidden md:block' src={seven} alt="" />
        </div>

        {/* Benefit section */}
        <RemoForceBenefit />
        {/* Benefit section */}

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-sm:py-3 max-md:bg-[#FFC46B33] mt-10 '>
            <div className='flex'>
                <img src={sec1logo} alt="" />
            </div>

            <div className='flex flex-col lg:bg-[#FFC46B33]  p-5 justify-center'>
                <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>
                    At Remostart you are not just a talent
                </h1>
                <p className='  lg:text-xl font-semibold text-[#999999] mt-6'>
                    You are a global citizen, providing solutions on <br className='max-md:hidden' />  similar problems you care about, to entrepreneurs <br className='max-md:hidden' />  just like you, we call it entrepreneurship
                </p>

                <div className='flex flex-col space-y-2 mt-3 lg:pl-4'>
                    <div className='flex py-2 items-center'>
                        <span className='inline-block mr-5 text-3xl lg:text-4xl'>
                            <HiOutlinePresentationChartLine />
                        </span>
                        <span className='inline-block text-sm lg:text-xl font-semibold lg:font-normal'>
                            We care to know your mission and passion and link you with projects that share your interest
                            <br className='max-md:hidden' />
                        </span>



                    </div>
                    <div className='flex py-2 items-center'>
                        <span className='inline-block mr-5  text-3xl lg:text-4xl'>
                            <BiLineChart />
                        </span>
                        <span className='inline-block text-sm lg:text-xl font-semibold lg:font-normal'>
                            As an underrepresented talent your diverse views and input is highly needed
                        </span>
                    </div>
                    <div className='!mt-8 lg:ml-14 '>
                        <Link to='/signup' className='px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md'>
                            Create your profile for free
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </section>

);

export default UserSection1;
