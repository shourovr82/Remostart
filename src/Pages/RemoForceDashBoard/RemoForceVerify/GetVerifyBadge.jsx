import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import blueBadge from '../../../Assets/RemoForceDashboard/verify/blueBadge.svg';

const GetVerifyBadge = () => {
  console.log('');
  return (
    <div className="bg-[#eaf7ff] grid grid-cols-5 gap-5 h-[70vh]  justify-center items-center border-t-[3px] shadow-[#b6e3ff] border-[#b6e3ff] shadow-inner  ">
      <div className="col-span-2 flex justify-end pr-10  ">
        <div className="w-2/4">
          <img src={blueBadge} className="  object-right" alt="" />
        </div>
      </div>
      <div className="col-span-3 ">
        <div className="space-y-6">
          <h1 className="text-4xl font-medium">Get Your Blue Badge Now!</h1>
          <p className="text-[#999999]">
            This is the most simple and basic verification method, you are <br /> meant to simply
            show us that you are really who you say you are, <br /> and your profile and
            friends(peer-to-peer) are to us the best <br /> indicators to know you
          </p>
        </div>
        <div className="mt-6 ml-10">
          <ul className="space-y-8">
            <li className="flex  items-center gap-8">
              <span>
                <FiCheckCircle className="text-2xl text-[#19A5FF]" />
              </span>
              <span className="text-xl">Complete your profile</span>
            </li>
            <li className="flex items-center gap-8">
              <span>
                <FiCheckCircle className="text-2xl text-[#19A5FF]" />
              </span>
              <span className=" text-xl ">Share your link with friends to verify you</span>
            </li>
          </ul>
          {/* complete task button */}
          <div className="ml-14 mt-10">
            <button
              className="px-5 py-2 rounded-lg shadow-inner bg-[#d8f0ff] text-[#19a5ff] text-2xl font-medium"
              type="button"
            >
              Complete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetVerifyBadge;
