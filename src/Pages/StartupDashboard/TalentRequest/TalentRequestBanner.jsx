import React from 'react';
import talentBannerImg from '../../../Assets/Dashboard/talentRequest/bannerPhoto.svg';

// import required modules

const TalentRequestBanner = () => (
  <div className="lg:grid lg:grid-cols-4 flex flex-col-reverse  justify-between ">
    <div className="col-span-2  lg:mt-20">
      <div className="space-y-3">
        <h1 className="text-3xl max-md:hidden font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing?
        </h1>
        <h2 className="mt-3 max-md:ml-10 text-[#FF5A78] text-xl lg:text-3xl font-semibold">
          How We Do
        </h2>
        <p className="text-[#999999] font-medium lg:font-semibold  lg:text-xl mt-5">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et
          velit <br /> interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="mt-5 max-md:flex max-md:justify-center">
        <button
          type="button"
          className="text-[#61C1FF] shadow-inner px-5 bg-[#f8f1ff] rounded-lg py-2 text-xl font-semibold"
        >
          Find me Talents !
        </button>
      </div>
    </div>
    {/* right side image */}
    <div className="col-span-2 max-md:mt-5  ">
      <div className=" lg:hidden">
        <h1 className="text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing?</h1>
      </div>
      <img className=" lg:object-cover" src={talentBannerImg} alt="" />
    </div>
  </div>
);

export default TalentRequestBanner;
