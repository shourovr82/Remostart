import React from 'react';
import { BsCalendarMinus } from 'react-icons/bs';
import { IoGolfOutline } from 'react-icons/io5';
import sec4logo from '../../Assets/UserComponentImages/section4logo.png';
// import cardLogo from '../../Assets/UserComponentImages/nebulas-(nas).png'

const UserSection3 = () => (
    // const items = [
    //     {
    //         id: 1,
    //         logo: cardLogo,
    //         heading: '2.7k',
    //         pTag: 'download'
    //     },
    //     {
    //         id: 2,
    //         logo: cardLogo,
    //         heading: '2.7k',
    //         pTag: 'download'
    //     },
    //     {
    //         id: 3,
    //         logo: cardLogo,
    //         heading: '2.7k',
    //         pTag: 'download'
    //     },
    //     {
    //         id: 4,
    //         logo: cardLogo,
    //         heading: '2.7k',
    //         pTag: 'download'
    //     }
    // ]

    <section className="flex flex-col lg:grid lg:grid-cols-2 w-full lg:bg-transparent bg-[#FFFFE4]">
        <div className="flex center justify-center">
            <img src={sec4logo} alt="" />
        </div>

        <div className="flex flex-col justify-center bg-[#FFFFE4] p-2 lg:p-10 items-start">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl pb-2">
                How It Works Here at Remostart
            </h1>
            <p className="  lg:text-xl font-semibold text-[#999999] mt-6">
                Fill in your registration details and start <br className="max-md:hidden" /> your
                remoforce journey
            </p>
            <div className="flex flex-col space-y-2 mt-3 pl-4">
                <div className="flex py-2 items-center">
                    <span className="inline-block mr-5 text-2xl">
                        <BsCalendarMinus />
                    </span>
                    <span className="inline-block text-sm lg:text-xl font-semibold lg:font-normal">
                        Register on Remoforce portal, and fill all your details on profile page
                    </span>
                </div>

                <div className="flex py-2 items-center ">
                    <span className="inline-block mr-5 text-2xl">
                        <IoGolfOutline />
                    </span>
                    <span className="inline-block text-sm lg:text-xl font-semibold lg:font-normal">
                        Get vetted, and immediately start applying for jobs
                    </span>
                </div>
                <div className="w-full pt-5">
                    <button type='button' className="px-6 py-3 w-full md:w-[fit-content] lg:px-12 lg:py-4 bg-[#0B132A] text-white text-xs font-semibold rounded-md ">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </section>
);
export default UserSection3;
