/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { RiHandCoinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TalentRequestsHistories from './TalentRequestsHistories';

const TalentRequestHistory = () => (
  <div>
    {/* title and back button */}
    <div className="border-b-[2px] pb-3 border-[#A5DBFF]">
      <Link className="flex gap-2 lg:gap-3 items-center" to="/dashboard/talent-request">
        <span className="border-2 hover:bg-black hover:text-white duration-300 ease-in border-black p-0.5 lg:p-1.5 rounded-md">
          <IoChevronBackSharp className="text-lg lg:text-xl" />
        </span>
        <h3 className=" text-xl lg:text-3xl flex gap-2 items-center text-[#13d1ff] font-semibold">
          <RiHandCoinLine /> Talent <span className="text-black"> Request</span>
        </h3>
      </Link>
    </div>
    {/* description */}
    <div className="mt-5 lg:ml-12">
      <h2 className="text-[#999999] lg:text-base text-sm font-medium  lg:font-semibold">
        Your all searches are available here
      </h2>
    </div>

    {/* talent request history  */}
    <TalentRequestsHistories />
  </div>
);

export default TalentRequestHistory;
