import React, { useEffect, useState } from 'react';
import { BiBookmarks, BiUser } from 'react-icons/bi';
import { GiSandsOfTime } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import privateJobLogo from '../../../../Assets/Dashboard/post_job/InternshipLogo.png';
import FinalConfirmation from '../../../../Modal/ConfirmationModal/FinalConfirmation';
import formatCurrency from '../../../../Utilities/FormateCurrency';
import ApplicationRequests from '../InternshipJob/ApplicationRequests';

const PrivateJobReview = () => {
  const [privateJob, setPrivateJob] = useState(false);
  const [storedJob, setStoredJob] = useState({});
  const location = useLocation();
  const data = location.state && location.state.data;
  const path = location.pathname.split('/');
  const review = path[path.length - 1];

  useEffect(() => {
    const getStoredItem = (key) => JSON.parse(localStorage.getItem('private-job')) || {};

    const lsData = getStoredItem();

    if (Object.keys(lsData).length !== 0) {
      setStoredJob(lsData);
    } else {
      setStoredJob(data);
    }
  }, [data]);
  const handlePost = () => {
    setPrivateJob(true);
  };
  console.log(storedJob);
  return (
    <div className="w-full">
      {/* Banner Section start */}
      <div className="flex private-review-img justify-between absolute w-full md:w-[80%] lg:w-[63%] max-w-6xl">
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
          <div className="bg-[#f0f9ff] mt-10 lg:mt-0 w-[85px] md:w-[131px] bg-red rounded-full shadow-2xl shadow-[#DDB6FF] p-4 md:p-10">
            <img src={privateJobLogo} alt="" />
          </div>
          <div className="font-bold text-[14px] mt-12 lg:mt-0 flex flex-col">
            <h3>Private</h3>
            <div className="flex text-xs text-[#999999] md:hidden">
              <p>Posted</p>
              <p>2 Day ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[125px] ">
        {/* post date */}
        <div className="md:flex mx-4 gap-4 text-[#999999] font-semibold mt-[8px] hidden">
          <p>Posted</p>
          <p>2 Day ago</p>
        </div>

        {/* Description start ---------*/}

        <div className="lg:grid lg:grid-cols-4 mt-3 ">
          <div className="lg:col-span-3 mx-4">
            {/* Paragraph */}
            <p className="whitespace-pre-wrap">{storedJob?.description}</p>

            {/* Job Requirments Section */}
            <div>
              <h1 className=" mt-[30px] font-semibold text-2xl">Job Requirements:</h1>
              <hr className="h-[3px] bg-[#19A5FF]  w-2/3" />
              <div className="mt-[30px] mb-4 ">
                <h2 className="font-semibold mb-[10px]">Experience Required:</h2>
                <span className=" px-10  text-center py-2 bg-[#f0f9ff] rounded-md font-semibold">
                  {storedJob?.experience} Years
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:border-l-2 lg:pl-4  md:border-t-2  lg:border-t-0">
            <div>
              <div>
                <h1 className="font-semibold text-2xl mb-3">Skills Required:</h1>
                <div className="flex flex-wrap  w-full gap-2">
                  {storedJob?.skills?.map((requiredSkill) => (
                    <div key={Math.random()} className="bg-[#F0F9FF]  rounded-md ">
                      <p className="text-sm px-[10px] py-[8px] ">{requiredSkill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-[16px] mt-3 mb-3">Salary Offered:</h1>
              <div className="">
                <div className="bg-[#F0F9FF] mt-3 w-[122px] flex items-center gap-3 rounded-md ">
                  {formatCurrency(storedJob?.salary)} ₳
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
                  <p className="pr-[15px] ">{storedJob?.location}</p>
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
                  <p className="pr-[15px] font-bold ">{storedJob.applyBefore?.slice(0, 10)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* all Skills Sections starts---------------------------- */}
        </div>

        {/* Description end------------ */}
      </div>

      {/* post private job and edit private job button */}

      {review === 'review' && (
        <div className="flex justify-center gap-4 mt-10">
          <button type="button" onClick={handlePost}>
            <label
              htmlFor="postConfirmation"
              className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] rounded-md text-white cursor-pointer"
            >
              Post Private Job
            </label>
          </button>
          <Link to="/dashboard/post-job/private-job">
            <button
              type="button"
              className="px-6 py-3 lg:px-10 lg:py-4 border-2 border-[#0B132A]  rounded-md text-black"
            >
              Edit
            </button>
          </Link>
        </div>
      )}

      {privateJob && <FinalConfirmation storedJob={storedJob} setConfirmPost={setPrivateJob} />}
      {review !== 'review' && data.applicationRequest.length > 0 && (
        <ApplicationRequests jobData={data} />
      )}
    </div>
  );
};

export default PrivateJobReview;
