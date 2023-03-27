import React from 'react';
import { GiStarShuriken } from 'react-icons/gi';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import section2logo from '../../Assets/Startup/StartUpHome/section2Logo.png';

const StartupSection2 = () => (
    <section className="flex flex-col md:flex-row justify-between w-full mt-5 border-b-2 pb-10 space-y-6 md:space-y-0">
        <section className="flex flex-col w-full md:w-1/2 pl-0 lg:pl-14 text-center md:text-left">
            <h1 className="font-sans font-semibold text-2xl md:text-3xl lg:text-5xl leading-tight">
                Streamline your talent
                <br className="hidden xl:block" /> Recruitment...
            </h1>
            <p className="mt-2 text-base md:text-base lg:text-base xl:text-xl font-semibold text-[#999999]">
                Our platform enables you to quickly screen and <br className="hidden lg:block" />
                manage your talent pool, making the recruitment
                <br className="hidden lg:block" />
                process faster, efficient, and hassle-free
            </p>

            <div className="flex flex-col space-y-6 mt-3 pl-4">
                <div className="flex py-2 text-left items-center">
                    <span className="inline-block mr-5 text-4xl">
                        <HiOutlineDevicePhoneMobile />
                    </span>
                    <span className="inline-block text-sm font-semibold md:font-normal lg:text-base">
                        Customized features that enables seamless recruitment and project management
                    </span>
                </div>
                <div className="flex py-2 text-left items-center">
                    <span className="inline-block mr-5 text-4xl">
                        <GiStarShuriken />
                    </span>
                    <span className="inline-block text-sm font-semibold md:font-normal lg:text-base">
                        Manage all your team and talent resources in one place
                    </span>
                </div>
                <div>
                    <button
                        type="button"
                        className="mt-2 px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
                    >
                        Search Jobs
                    </button>
                </div>
            </div>
        </section>

        <section className="w-full md:w-1/2 grid place-items-center">
            <img src={section2logo} className="w-full md:w-11/12" alt="LandingPageLogo" />
        </section>
    </section>
);

export default StartupSection2;
