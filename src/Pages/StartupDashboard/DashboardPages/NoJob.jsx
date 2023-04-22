import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/Startup/JobPost/logo.png';

const NoJob = () => (
  <div className="lg:flex flex-col-reverse  lg:flex-row justify-center w-full pt-10">
    <div className="lg:w-[428px] w-4/5 mx-auto mb-6 pt-20">
      <img className="w-[428px]" src={Logo} alt="" />
      <p className="text-gray-500 text-2xl text-center">
        No Job found ! <br />
        {/* Start your journey by */}
        <Link to="/" className="text-blue-400">
          {/* Posting Jobs */}
        </Link>
      </p>
    </div>
    {/* <div>
            <div className="border-2 w-64 mx-auto bg-blue-100 py-4 ">
                <div className="rounded-full flex justify-center p-4">
                    <div className="w-40 shadow-2xl shadow-purple-300 py-1 rounded-full ">
                        <div className="progress yellow ">
                            <span className="progress-left">
                                <span className="progress-bar" />
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar" />
                            </span>
                            <div className="progress-value absolute">
                                <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                    <span className="font-bold text-xl">0%</span>
                                    <span className="inline-block text-gray-500 text-md absolute">
                                        Secondary label
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-center">Complete Your Profile</p>
                    <p className="p-6">
                        You profile is incomplete ,Please complete it for job posting
                    </p>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="flex items-center gap-2 bg-blue-300 px-4 rounded"
                        >
                            Update <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div> */}
  </div>
);

export default NoJob;
