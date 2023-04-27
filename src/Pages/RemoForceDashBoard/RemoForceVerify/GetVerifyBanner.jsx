import React from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import getVerifiedBannerImg from '../../../Assets/RemoForceDashboard/dashboard/getVerifiedBanner.svg';

const GetVerifyBanner = () => {
  console.log('');
  return (
    <div className="bg-[#edfff1] p-2 h-screen rounded-md">
      {/* title and back button */}
      <div className="flex border-b-[2px] pb-2 border-[#65dc7f] items-center gap-3">
        <button
          type="button"
          className="border border-black hover:bg-[#00C42B] hover:text-white hover:border-[#00C42B] duration-300 ease-in rounded-md p-1"
        >
          <HiOutlineChevronLeft className="text-2xl" />
        </button>
        <h1 className="text-[#00C42B] text-3xl font-semibold">Get Verified</h1>
      </div>

      {/* banner */}
      <div className="flex items-center justify-between px-10">
        <div>
          <div className="space-y-5">
            <h1 className="text-5xl leading-tight font-semibold text-[#00C42B]">
              Verification Increases Your <br /> Chances At Getting a Job
            </h1>
            <p className="text-[#999999] text-xl font-semibold">
              If you are struggling with getting jobs its because <br /> you are yet to be verified,
              verified talents get 10X <br /> more chance at getting jobs
            </p>
          </div>
          <div className="mt-5">
            <button
              className="bg-[#65DC7F] rounded-full px-5 py-3 text-2xl text-white font-medium shadow-lg shadow-[#bef3ca]"
              type="button"
            >
              Verify Me !
            </button>
          </div>
        </div>
        <div>
          <img className="object-contain " src={getVerifiedBannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetVerifyBanner;
