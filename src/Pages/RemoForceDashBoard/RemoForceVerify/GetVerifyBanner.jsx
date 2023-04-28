import React from 'react';
import { HiOutlineChevronLeft, HiStar } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import getVerifiedBannerImg from '../../../Assets/RemoForceDashboard/dashboard/getVerifiedBanner.svg';
import clipPathImg from '../../../Assets/RemoForceDashboard/verify/bannerClipPath.svg';

const GetVerifyBanner = () => {
  console.log('');
  const location = useLocation();
  console.log(location);
  return (
    <div className="bg-[#edfff1] p-2  rounded-md">
      {/* title and back button */}
      <div className="flex border-b-[2px] pb-2 border-[#65dc7f] items-center gap-3">
        <button
          type="button"
          className="border border-black hover:bg-[#00C42B] hover:text-white hover:border-[#00C42B] duration-300 ease-in rounded-md p-1"
        >
          <HiOutlineChevronLeft className="text-xl lg:text-2xl" />
        </button>
        <h1 className="text-[#00C42B] text-xl lg:text-3xl font-semibold">Get Verified</h1>
      </div>

      {/* banner */}
      <div className="flex max-lg:flex-col-reverse items-center justify-between lg:px-10 ">
        <div>
          <div className="space-y-5 max-lg:mt-10">
            <h1 className=" text-2xl lg:text-5xl leading-tight font-semibold text-[#00C42B]">
              Verification Increases Your <br className="max-lg:hidden" /> Chances At Getting a Job
            </h1>
            <p className="text-[#999999] text-sm lg:text-xl font-semibold">
              If you are struggling with getting jobs its because <br className="max-lg:hidden" />
              you are yet to be verified, verified talents get 10X <br className="max-lg:hidden" />{' '}
              more chance at getting jobs
            </p>
          </div>
          <div className="mt-5 ">
            <button
              className="bg-[#65DC7F] rounded-full px-5 py-2 2xl:py-3 text-lg lg:text-xl 2xl:text-2xl text-white font-medium shadow-lg shadow-[#bef3ca]"
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

      {/* something */}
      <div className="relative pb-40">
        <div className="lg:grid grid-cols-6  max-lg:space-y-4 md:pl-4 lg:pl-0  lg:badgeCard mt-20 ">
          {/* first card */}
          <div className="col-span-2 z-50 flex max-lg:items-center justify-center max-lg:flex-row-reverse relative">
            <div className="border-[2px] space-y-1 bg-[#edf6fe] shadow-xl shadow-[#d6d2f3] border-[#19a5ff] rounded-full lg:px-8 max-lg:px-4 max-lg:py-4 lg:py-5 flex flex-col justify-center items-center">
              <span>
                <HiStar className="text-5xl lg:text-[70px]  text-[#13d1ff]" />
              </span>
              <h1 className="text-sm lg:text-lg text-[#19a5ff] font-semibold ">Blue Badge</h1>
            </div>
            <p className="lg:absolute -bottom-28   lg:-top-16 xl:-top-14 text-center lg:-right-14 xl:-right-14 2xl:-right-5 text-[#999999] font-medium text-xs">
              Getting this badge is a proof <br /> that you have a complete <br />
              profile and that you are who <br /> you really say you are. This <br /> gives
              confidence to recruiters <br /> about you
            </p>
          </div>
          {/* second card */}
          <div className="col-span-2 z-50 flex   lg:justify-center relative">
            <div
              className="border-[2px] space-y-1 bg-[#fdfbdb] shadow-xl shadow-[#f1f8bc] border-[#fee719] rounded-full 
            max-lg:px-4 max-sm:py-5 max-lg:py-4
            lg:px-6 lg:py-7 flex flex-col justify-center items-center"
            >
              <span>
                <HiStar className="text-5xl lg:text-[70px]  text-[#ffec42]" />
              </span>
              <h1 className="text-xs sm:text-sm lg:text-lg text-[#ffdd44] font-semibold ">
                Golden Badge
              </h1>
            </div>
            <p className="lg:absolute -bottom-28  lg:-bottom-20  xl:-bottom-16 2xl:-bottom-14  lg:-left-14 xl:-left-10 2xl:-left-5  text-center  text-[#999999] font-medium text-xs">
              The badge is given to certified <br /> talents with proof of skills, <br /> either
              through other reputable <br /> organizations or through other <br /> verifiable means
            </p>
          </div>
          {/* third card */}
          <div className="col-span-2 z-50 flex max-lg:flex-row-reverse  justify-center relative">
            <div
              className="border-[2px] space-y-1 bg-[#edf6fe] shadow-xl shadow-[#e1b8f0] border-[#d14eff] rounded-full 
            max-lg:px-4 max-lg:py-5
            lg:px-7 lg:py-5 flex flex-col justify-center items-center"
            >
              <span>
                <HiStar className="text-5xl lg:text-[70px]  text-[#d14eff]" />
              </span>
              <h1 className=" text-sm lg:text-lg text-[#d14eff] font-semibold ">Purple Badge</h1>
            </div>
            <p className="lg:absolute -bottom-28 lg:-top-20 xl:-top-20 2xl:-top-16 text-center lg:-left-14 xl:-left-14 2xl:-left-5 text-[#999999] font-medium text-xs">
              Getting this badge is a proof <br /> that you have a complete <br />
              profile and that you are who <br /> you really say you are. This <br /> gives
              confidence to recruiters <br /> about you
            </p>
          </div>
        </div>

        <div>
          <img
            className="object-center max-lg:hidden lg:absolute xl:right-40 lg:right-32 lg:w-[65%] z-10 2xl:right-56 xl:w-[60%] 2xl:w-[59%] top-0 2xl:top-4"
            src={clipPathImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GetVerifyBanner;
