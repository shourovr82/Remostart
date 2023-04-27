/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { BiBookmarks, BiUser } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import internshipLogo from '../../../../Assets/Dashboard/post_job/InternshipLogo.png';
import FinalConfirmation from '../../../../Modal/ConfirmationModal/FinalConfirmation';
import ApplicationRequests from '../InternshipJob/ApplicationRequests';

const GigsJobsReview = () => {
  const [gig, setGig] = useState(false);
  const [storedJob, setStoredJob] = useState({});
  const location = useLocation();
  const data = location?.state && location?.state?.data;
  const path = location.pathname.split('/');
  const review = path[path.length - 1];

  useEffect(() => {
    const getStoredItem = (key) => JSON.parse(localStorage.getItem('gigs')) || {};
    const lsData = getStoredItem();
    if (Object.keys(lsData).length !== 0) {
      setStoredJob(lsData);
    } else {
      setStoredJob(data);
    }
  }, [data]);

  // Data posting

  const handlePost = () => {
    setGig(true);
  };

  return (
    <div className="w-full">
      {/* Banner Section start */}
      <div className="flex internshipBannerImg justify-between absolute w-full md:w-[80%] lg:w-[63%] max-w-6xl">
        <h1 className="text-2xl md:text-3xl lg:text-5xl pt-2 md:pt-[15px] md:pl-7 pl-2 font-normal text-white">
          {storedJob?.title}
        </h1>
        <div className="flex justify-end items-end mt-[34px] gap-[10px] my-6 ">
          <a href="share">
            <BiBookmarks className="text-[#19A5FF] text-2xl text-right" />
          </a>
          <a href="/">
            <RiShareForwardLine className="text-[#19A5FF] text-2xl text-right mr-[30px]" />
          </a>
        </div>
      </div>
      {/* Banner End  */}

      {/* Icon For company  */}
      <div
        className="relative right-[-5px] md:right-[-36px] top-[120px] md:top-[117px]
       "
      >
        <div className="flex gap-[10px] items-center">
          <div className="bg-white w-[85px] md:w-[131px] bg-red rounded-full shadow-2xl shadow-[#DDB6FF] p-4 md:p-10">
            <img src={internshipLogo} alt="" />
          </div>
          <div className="font-bold text-[14px] mt-10  lg:mt-0 flex flex-col">
            <h3>Gig</h3>
            <div className="flex text-xs text-[#999999] lg:hidden">
              <p>Posted</p>
              <p>2 Day ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:mt-[125px] ml-5">
        <div className="lg:flex gap-4 text-[#999999] font-semibold mt-[8px] hidden">
          <p>Posted</p>
          <p>2 Day ago</p>
        </div>
        {/* Paragraph   */}
        <div className="mt-5 lg:grid lg:grid-cols-4 ">
          <div className=" lg:col-span-3 max-lg:mt-36">
            {/* Job Description   */}
            <p className="whitespace-pre-wrap">{storedJob?.description}</p>

            {/* gig Duration Details */}
            <div className="">
              <h1 className=" mt-[30px] font-semibold text-2xl">Gig Duration:</h1>
              <hr className="h-[3px] bg-[#19A5FF]  w-3/4 lg:w-2/4" />
              <div className=" mb-4 mt-[10px] flex gap-5">
                <div>
                  <h4 className="font-semibold">Start Date</h4>
                  <p className="flex items-center rounded-md gap-3 font-semibold py-2 px-4 bg-[#F0F9FF]  ">
                    <span>
                      <FaRegClock className="text-[#65DC7F] text-lg" />
                    </span>
                    <span>{storedJob?.startingDate?.slice(0, 10)}</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">End Date</h4>
                  <p className="flex  rounded-md items-center gap-3 font-semibold py-2 px-4 bg-[#F0F9FF]  ">
                    <span>
                      <FaRegClock className="text-[#F60C36] text-lg" />
                    </span>
                    <span>{storedJob?.endingDate?.slice(0, 10)}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* gig Requirements year ----- */}
            <div>
              <h1 className=" mt-[30px] font-semibold text-2xl">Gig Requirements:</h1>
              <hr className="h-[3px] bg-[#19A5FF]  w-[85%] lg:w-2/4" />
              <div className=" mb-4 mt-[10px]">
                <h4 className="font-semibold">Experience Required:</h4>
                <span className=" mt-2 rounded-md inline-block  font-semibold py-2 px-4 bg-[#F0F9FF]  ">
                  {storedJob?.experience} Years
                </span>
              </div>
            </div>

            {/* gig  deliverables ----- */}
            <div className="mt-[30px] ">
              <h1 className="  font-semibold text-2xl">Deliverables</h1>
              <hr className="h-[3px] bg-[#19A5FF]  w-2/3 lg:w-[35%]" />
              {/* gig deliverables Details */}
              <div className=" mb-4 mt-[10px] flex flex-wrap pr-10 items-center gap-[10px]">
                {storedJob?.joiningPerks?.map((perk) => (
                  <p
                    key={Math.random()}
                    className="py-2 px-4 lg:px-6 bg-[#F0F9FF] rounded-md font-semibold "
                  >
                    {perk}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Required */}
          {/* w-[330px] */}
          <div className="lg:col-span-1 lg:border-l-2 lg:pl-4  md:border-t-2  lg:border-t-0">
            <div>
              {/* if skills or not */}
              <h1 className="font-semibold text-2xl mb-3">Skills Required: </h1>
              <div className="flex flex-wrap  w-full gap-2">
                {storedJob?.skills?.map((requiredSkill) => (
                  <div key={Math.random()} className="bg-[#F0F9FF]  rounded-md ">
                    <p className="text-sm px-[10px] py-[8px] ">{requiredSkill}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-semibold text-[16px] mt-3 mb-3">Compensation:</h1>
              <div className="">
                <div className="bg-[#F0F9FF] mt-3 w-[122px]  flex items-center gap-3 rounded-md ">
                  <p
                    className="text-sm text-center flex gap-2 items-center justify-center w-full 
                                  "
                  >
                    {storedJob?.salary} <span className="text-2xl">₳</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-[16px] mt-3 mb-3">Location:</h1>
              <div className="">
                <div className="bg-[#F0F9FF] mt-3 w-[109px] flex items-center gap-3 rounded-md ">
                  <p className="text-sm pl-[15px] py-[8px] ">
                    <GoLocation />
                  </p>
                  <p className="pr-[15px] ">Remote</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-[16px] mt-3 mb-3">Number of Applicants:</h1>
              <div className="">
                <div className="bg-[#F0F9FF] mt-3 w-[90px] flex items-center gap-3 rounded-md ">
                  <p className="text-sm pl-[20px] py-[8px] ">
                    <BiUser />
                  </p>
                  <p className="pr-[25px] ">34</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-[16px] mt-3 mb-3">Apply Before:</h1>
              <div className="">
                <div className="bg-[#F0F9FF] mt-3 w-[170px] flex items-center gap-3 rounded-md ">
                  <p className="text-sm pl-[15px] py-[8px] ">
                    <GiSandsOfTime className="text-red-500" />
                  </p>
                  <p className="pr-[15px] font-bold ">{storedJob?.applyBefore?.slice(0, 10)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {review === 'review' && (
        <div className="flex justify-center gap-4 mt-10">
          <button type="button" onClick={handlePost}>
            <label
              htmlFor="postConfirmation"
              className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] rounded-md text-white cursor-pointer"
            >
              Post Gigs
            </label>
          </button>
          <Link to="/dashboard/post-job/gigs">
            <button
              type="button"
              className="px-6 py-3 lg:px-10 lg:py-5 border-2 border-[#0B132A]  rounded-md text-black"
            >
              Edit
            </button>
          </Link>
        </div>
      )}

      {gig && <FinalConfirmation storedJob={storedJob} setConfirmPost={setGig} />}
      {/* Application Requests */}
      {review !== 'review' && data.applicationRequest.length > 0 && (
        <ApplicationRequests jobData={data} />
      )}
    </div>
  );
};

export default GigsJobsReview;
