import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import goldenBadge from '../../../Assets/RemoForceDashboard/verify/goldenBadge.png';

const GetVerifyGoldenBadge = () => {
  console.log('');
  return (
    <div className="bg-[#f5fde5] max-lg:py-5 max-lg:flex flex-col-reverse lg:grid lg:grid-cols-5 gap-5 lg:h-[500px]  justify-center  items-center">
      <div className="col-span-3  flex flex-col items-center ">
        <div className="space-y-6">
          <h1 className="text-4xl font-medium max-lg:text-center">Get Your Golden Badge Now!</h1>
          <p className="text-[#999999] max-lg:text-center">
            At whichever level your skill is we want o proof that, your proof
            <br className="max-lg:hidden" /> should match what we have on your profile and when we
            confirm <br className="max-lg:hidden" /> that, we automatically give you the golden
            batch
          </p>
        </div>
        <div className="mt-6 lg:ml-12">
          <ul className="space-y-8">
            <li className="flex  items-center gap-4 lg:gap-8">
              <span>
                <FiCheckCircle className="text-2xl text-[#e8d31b]" />
              </span>
              <span className="text-xl">Upload your certificates or links to work </span>
            </li>
            <li className="flex  items-center gap-4 lg:gap-8">
              <span>
                <FiCheckCircle className="text-2xl text-[#e8d31b]" />
              </span>
              <span className=" text-xl ">We authenticate and verify you base on that skill</span>
            </li>
          </ul>
          {/* complete task button */}
          <div className="ml-14 mt-10">
            <button
              className="px-5 py-2 rounded-lg shadow-inner bg-[#f4f5b9] text-[#b5a306] text-2xl font-medium"
              type="button"
            >
              Complete Task
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2 max-lg:justify-center  flex  ">
        <div className="w-2/4 lg:w-[60%]">
          <img src={goldenBadge} className="  " alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetVerifyGoldenBadge;
