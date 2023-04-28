import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import diamondBadge from '../../../Assets/RemoForceDashboard/verify/diamondBadge.png';

const GetVerifyDiamondBadge = () => {
  console.log('');
  return (
    <div className="bg-[#f3e5fe] max-lg:flex flex-col lg:grid grid-cols-5 gap-5 lg:h-[500px]  max-lg:py-5 justify-center items-center shadow-[#dceadb] shadow-inner  ">
      <div className="col-span-2 flex justify-center lg:justify-end pr-10  ">
        <div className="w-2/4 lg:w-[60%]">
          <img src={diamondBadge} className="  object-right" alt="" />
        </div>
      </div>
      <div className="col-span-3 ">
        <div className="space-y-6">
          <h1 className="text-4xl font-medium max-lg:text-center">
            Ready To Get Your Diamond Badge?
          </h1>
          <p className="text-[#999999] max-lg:text-center max-lg:px-2">
            Remostart verifying you is the greatst confidence that recruiters
            <br className="max-lg:hidden" /> and ccompanies want. It means that we know who you are
            and <br className="max-lg:hidden" /> are confident that you can do what you say you can
            do
          </p>
        </div>
        <div className="mt-6 ml-10">
          <ul className="space-y-8">
            <li className="flex  items-center gap-4 lg:gap-8">
              <span>
                <FiCheckCircle className="text-2xl text-[#d14eff]" />
              </span>
              <span className="text-xl">
                Pay a small token for our skilled test, interview session etc
              </span>
            </li>
            <li className="flex  items-center gap-4 lg:gap-8">
              <span>
                <FiCheckCircle className="text-2xl text-[#d14eff]" />
              </span>
              <span className=" text-xl ">
                You get a diamond badge that shows you are Remostart certified
              </span>
            </li>
          </ul>
          {/* get diamond button */}
          <div className="ml-14 mt-10">
            <button
              className="px-5 py-2 rounded-lg shadow-inner bg-[#ead0ff] text-[#d14eff] text-2xl font-medium"
              type="button"
            >
              Get Diamond
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetVerifyDiamondBadge;
