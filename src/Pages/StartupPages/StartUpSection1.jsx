import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiLineChart } from 'react-icons/bi';
import { HiOutlinePresentationChartLine } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import four from '../../Assets/Startup/StartUpHome/envato4.png';
import five from '../../Assets/Startup/StartUpHome/framer5.png';
import two from '../../Assets/Startup/StartUpHome/qiwi2.png';
import logo from '../../Assets/Startup/StartUpHome/section1Logo.svg';
import three from '../../Assets/Startup/StartUpHome/tech_crunch3.png';
import six from '../../Assets/Startup/StartUpHome/ubuntu5.png';
import one from '../../Assets/Startup/StartUpHome/yandex_kassa1.png';

const StartUpSection1 = () => (
    <section className="flex flex-col mt-4 md:mt-10 border-b-2 pb-10">
        <div className="flex flex-col md:grid md:grid-cols-2 space-y-6 md:space-y-0 border-b-2 md:border-b-0 pb-6 md:pb-0">
            <div className="flex items-center">
                <span className="text-2xl md:text-3xl lg:text-5xl font-semibold ">
                    You are where you <br className="hidden lg:block" /> needed to be!
                </span>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
                <img src={five} alt="" />
                <img src={six} alt="" />
            </div>
        </div>

        {/* Section two */}
        <section className="flex flex-col-reverse md:grid md:grid-cols-2 m-4 md:mt-14 justify-center items-center">
            <div className="flex w-full md:w-11/12 mt-10 md:mt-0">
                <img src={logo} className="w-full" alt="" />
            </div>

            <div className="flex flex-col justify-center w-full">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl text-center md:text-left">
                    Global Talents Ready to
                    <br className="hidden lg:block" /> work with you
                </h1>
                <p className="text-base md:text-base lg:text-base xl:text-xl font-semibold text-[#999999] mt-2 md:mt-6 text-center md:text-left">
                    Irrespective of age, class, race or region our{' '}
                    <br className="hidden lg:block" />
                    mission cares less about this. To us this is an{' '}
                    <br className="hidden lg:block" /> advantage for building global solutions
                </p>
                <div className="flex flex-col space-y-6 mt-3 pl-4">
                    <div className="flex py-2 items-center">
                        <span className="inline-block mr-5 text-4xl">
                            <HiOutlinePresentationChartLine />
                        </span>
                        <span className="inline-block text-sm font-semibold md:font-normal lg:text-base">
                            We have a dichotomy of talents from all around the world
                        </span>
                    </div>
                    <div className="flex py-2 items-center">
                        <span className="inline-block mr-5 text-4xl">
                            <BiLineChart />
                        </span>
                        <span className="inline-block text-sm font-semibold md:font-normal lg:text-base">
                            With these talents comes different perspectives which helps you scale
                        </span>
                    </div>

                    <div className="flex py-2 items-center">
                        <span className="inline-block mr-5 text-4xl">
                            <AiOutlineShareAlt className="rotate-90" />
                        </span>
                        <span className="inline-block text-sm font-semibold md:font-normal lg:text-base">
                            Diversity, equity and inclusion should not just be a phrase, its what we
                            help you achieve
                        </span>
                    </div>
                    <div className="mx-auto md:mx-0">
                        <Link
                            to="/remowelcome"
                            className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
                        >
                            Create your profile for free
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </section>
);

export default StartUpSection1;
