import React from 'react';
import { GiStarShuriken } from 'react-icons/gi';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import section2logo from '../../Assets/Images/illustration_landing_page.png';

const UserSection2 = () => (
    <section className="flex flex-col-reverse lg:flex-row justify-between w-full border-b-2 bg-[#E0F8E5] lg:bg-transparent">
        <section className="flex flex-col w-full lg:w-1/2 max-md:pb-5 justify-center items-start p-10 lg:p-12 bg-[#E0F8E5]">
            <h1 className="font-sans font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
                Find work that suits your work balance
            </h1>
            <p className="mt-5 lg:mt-10 lg:text-xl lg:leading-8 font-semibold text-[#999999]">
                We understand that work-life balance is essential to your happiness and
                productivity, we help find remote jobs that fit your schedule and lifestyle
            </p>

            <div className="flex flex-col space-y-2 mt-3">
                <div className="flex py-2 items-center gap-3">
                    <span className="inline-block  text-3xl lg:text-4xl">
                        <HiOutlineDevicePhoneMobile />
                    </span>
                    <span className="inline-block text-sm lg:text-xl font-semibold lg:font-normal">
                        Job listings with flexible schedules, part-time{' '}
                        <br className="max-md:hidden" /> options, and remote work opportunities
                    </span>
                </div>
                <div className="flex py-2 items-center gap-3">
                    <span className="inline-block text-3xl lg:text-4xl ">
                        <GiStarShuriken />
                    </span>
                    <span className="inline-block text-sm lg:text-xl font-semibold lg:font-normal">
                        Say goodbye to the traditional 9-5 workday and{' '}
                        <br className="max-md:hidden" /> hello to a more balanced life
                    </span>
                </div>
                <div className="w-full">
                    <button
                        type="button"
                        className="px-6 py-3 w-full md:w-[fit-content] lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md "
                    >
                        Search Jobs
                    </button>
                </div>
            </div>
        </section>

        <section className="w-full lg:w-1/2 flex justify-center">
            <img src={section2logo} alt="LandingPageLogo" />
        </section>
    </section>
);

export default UserSection2;
