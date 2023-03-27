import React from 'react';
import features2 from '../../Assets/Images/IllustrationTravels.svg';
import logo from '../../Assets/Images/remoFeaturelogo.png';
import features from '../../Assets/LandingPage/remoFeatures.svg';

const RemoFeatures = () => (
    <>
        <section className="mt-0 md:mt-10 lg:mt-32 flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center mt-7 font-semibold">
                Remostart Features
            </h1>
            <div className="flex flex-col">
                <div className="flex w-full mt-10 md:mt-16 px-10 md:px-40 mb-4 lg:mb-0 justify-center ml-0 md:ml-10">
                    <div className="flex justify-start items-end">
                        <h1 className="font-bold text-[8px] md:text-base lg:text-2xl">
                            Job <br className="block md:hidden" /> Shadowing
                        </h1>
                    </div>

                    <div className="flex justify-center items-center px-4 md:px-20">
                        <h1 className="font-bold text-[8px] md:text-lg mb-4 md:mb-16">
                            Diverse <br className="block md:hidden" /> Talent
                        </h1>
                    </div>

                    <div className="flex justify-start items-end">
                        <h1 className="font-bold text-[8px] md:text-base lg:text-2xl ml-10">
                            Enhanced <br className="block md:hidden" /> Productivity
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex justify-center flex-col items-center">
                        <span className="font-bold text-[8px] md:text-lg mb-4 md:mb-20">
                            Quick Hiring
                        </span>{' '}
                        <br />
                        <span className="font-bold text-[8px] md:text-base lg:text-2xl">
                            Comprehensive Database
                        </span>
                    </div>

                    <div className="col-span-2  mx-auto">
                        <img src={features} className="" alt="" />
                    </div>

                    <div className="flex justify-center flex-col items-center">
                        <span className="font-bold text-[8px] md:text-lg mb-4 md:mb-20">
                            Scalable and <br className="hidden md:block lg:hidden" /> Cost Effective
                        </span>{' '}
                        <br />
                        <span className="font-bold text-[8px] md:text-base lg:text-2xl">
                            Skill Based Talent Filtering
                        </span>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2 */}
        <section className="mt-7 flex flex-col-reverse gap-0 lg:gap-10 md:flex-row my-4 md:my-10 justify-between w-full items-center">
            <div className="flex justify-between  w-full md:w-1/2">
                <img src={features2} alt="feature logo" />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex flex-col md:flex-row text-center lg:gap-5 items-center md:items-start space-y-3 md:space-y-0 md:text-left">
                    <div className="max-md:hidden">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-full">
                        <p className="text-2xl md:text-base lg:text-2xl  font-semibold">
                            Hire globally : Hire inclusively
                        </p>
                        <div className="xl:w-[443px] w-full mt-2 md:mt-6">
                            <p className=" text-base">
                                The need for inclusion has never been more urgent as it is today.
                                Building global startups means global inputs and global experiences.
                                Our solution connects you with millions of talents waiting to work
                                with you from all corners of the earth
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default RemoFeatures;
