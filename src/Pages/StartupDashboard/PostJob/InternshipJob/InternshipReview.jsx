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
import ApplicationRequests from './ApplicationRequests';

const InternshipReview = () => {
  const [internship, setInternship] = useState(false);
  const [storedJob, setStoredJob] = useState({});
  const location = useLocation();
  const data = location?.state && location?.state?.data;
  const path = location.pathname.split('/');
  const review = path[path.length - 1];
  useEffect(() => {
    const getStoredItem = (key) => JSON.parse(localStorage.getItem('internship')) || {};

    const lsData = getStoredItem();

    if (Object.keys(lsData).length !== 0) {
      setStoredJob(lsData);
    } else {
      setStoredJob(data);
    }
  }, [data]);

  // Data posting

  const handlePost = () => {
    setInternship(true);
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
      <div className="relative right-[-5px] md:right-[-36px] top-[93px] md:top-[117px] lg-[top-[126px]]">
        <div className="flex gap-[10px] items-center">
          <div className="bg-white w-[85px] md:w-[131px] bg-red rounded-full shadow-2xl shadow-[#DDB6FF] p-4 md:p-10">
            <img src={internshipLogo} alt="" />
          </div>
          <div className="font-bold text-[14px] mt-6 lg:mt-0 flex flex-col">
            <h3>Internship</h3>
          </div>
        </div>
      </div>

      <div className="mt-[125px] ml-5">
        {/* <div className="md:flex gap-4 text-[#999999] font-semibold mt-[8px] ">
          <p>Posted</p>
          <p>2 Day ago</p>
        </div> */}
        {/* Paragraph   */}
        <div className="mt-5 lg:grid lg:grid-cols-4 ">
          <div className=" lg:col-span-3">
            {/* Job Description   */}
            <p className="whitespace-pre-wrap">{storedJob?.description}</p>

            {/* Internship Duration Details */}
            <div>
              <h1 className=" mt-[30px] font-semibold text-2xl">Internship Duration:</h1>
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

            {/* Internship Requirements year ----- */}
            <div>
              <h1 className=" mt-[30px] font-semibold text-2xl">Internship Requirements:</h1>
              <hr className="h-[3px] bg-[#19A5FF]  w-[85%] lg:w-2/4" />
              <div className=" mb-4 mt-[10px]">
                <h4 className="font-semibold">Experience Required:</h4>
                <span className=" mt-2 rounded-md inline-block  font-semibold py-2 px-4 bg-[#F0F9FF]  ">
                  {storedJob?.experience} Years
                </span>
              </div>
            </div>

            {/* Internship Perks ----- */}
            <div className="mt-[30px]">
              <h1 className="  font-semibold text-2xl">Internship Perks:</h1>
              <hr className="h-[3px] bg-[#19A5FF]  w-2/3 lg:w-[35%]" />
              {/* Internship Duration Details */}
              <div className=" mb-4 mt-[10px] flex items-center gap-[10px]">
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
              <h1 className="font-semibold text-2xl mb-3">
                {storedJob?.skills?.length > 0 && 'Skills Required:'}
              </h1>
              <div className="flex flex-wrap  w-full gap-2">
                {storedJob?.skills?.map((requiredSkill) => (
                  <div key={Math.random()} className="bg-[#F0F9FF]  rounded-md ">
                    <p className="text-sm px-[10px] py-[8px] ">{requiredSkill}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-semibold text-[16px] mt-3 mb-3">Stipend Offered:</h1>
              <div className="">
                <div className="bg-[#F0F9FF] mt-3 w-[122px] flex items-center gap-3 rounded-md ">
                  <p className="text-sm pl-[25px] py-[8px] ">{storedJob?.salary} ₳</p>
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
            {review !== 'review' && data.applicationRequest.length > 0 && (
              <div>
                <h1 className="font-semibold text-[16px] mt-3 mb-3">Number of Applicants:</h1>
                <div className="">
                  <div className="bg-[#F0F9FF] mt-3 w-[90px] flex items-center gap-3 rounded-md ">
                    <p className="text-sm pl-[20px] py-[8px] ">
                      <BiUser />
                    </p>
                    <p className="pr-[25px] ">{data?.applicationRequest?.length}</p>
                  </div>
                </div>
              </div>
            )}
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
              Post Internship
            </label>
          </button>
          <Link to="/dashboard/post-job/internship">
            <button
              type="button"
              className="px-6 py-3 lg:px-10 lg:py-5 border-2 border-[#0B132A]  rounded-md text-black"
            >
              Edit
            </button>
          </Link>
        </div>
      )}

      {internship && <FinalConfirmation storedJob={storedJob} setConfirmPost={setInternship} />}
      {/* Application Requests */}
      {review !== 'review' && data.applicationRequest.length > 0 && (
        <ApplicationRequests jobData={data} />
      )}
    </div>
  );
};

export default InternshipReview;
