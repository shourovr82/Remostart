import React, { useEffect, useState } from 'react';
import { BiBookmarks, BiUser } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { TfiLinkedin } from 'react-icons/tfi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import internshipLogo from '../../../../Assets/Dashboard/post_job/InternshipLogo.png';
import FinalConfirmation from '../../../../Modal/ConfirmationModal/FinalConfirmation';
import ApplicationRequests from '../InternshipJob/ApplicationRequests';

const ShadowingJobReview = () => {
  const [shadowingJob, setShadowingJob] = useState(false);
  const [storedJob, setStoredJob] = useState({});
  const location = useLocation();
  const data = location?.state && location?.state?.data;
  const path = location.pathname.split('/');
  const review = path[path.length - 1];

  useEffect(() => {
    const getStoredItem = (key) => JSON.parse(localStorage.getItem('shadowing')) || {};
    const lsData = getStoredItem();
    if (Object.keys(lsData).length !== 0) {
      setStoredJob(lsData);
    } else {
      setStoredJob(data);
    }
  }, [data]);
  const handlePost = () => {
    setShadowingJob(true);
  };
  const navigate = useNavigate();

  if (!storedJob) {
    navigate('/dashboard/post-job/shadowing-job');
  }
  console.log(storedJob);

  return (
    <div className="w-full">
      {/* Banner Section start */}
      <div className="flex shadowing-banner justify-between absolute w-full md:w-[85%] lg:w-[65%] max-w-6xl">
        <h1 className="text-2xl md:text-3xl lg:text-5xl pt-2 md:pt-[15px] md:pl-7 pl-2 font-normal text-black">
          {storedJob?.shadowingTitle}
        </h1>
        <div className="flex justify-end items-end mt-[34px]  gap-[10px] my-6 ">
          <button type="button">
            <BiBookmarks className="text-[#19A5FF] text-2xl cursor-pointer text-right" />
          </button>
          <button type="button">
            <RiShareForwardLine className="text-[#19A5FF] cursor-pointer text-2xl text-right mr-[30px]" />
          </button>
        </div>
      </div>
      {/* Banner End  */}

      {/* Icon For company  */}
      <div className="relative right-[-5px] md:right-[-36px] top-[93px] md:top-[117px] lg-[top-[126px]]">
        <div className="flex gap-[10px] items-center">
          <div className="bg-[#f0f9ff] mt-10 lg:mt-0 w-[85px] md:w-[131px] bg-red rounded-full shadow-2xl shadow-[#DDB6FF] p-4 md:p-10">
            <img src={internshipLogo} alt="" />
          </div>
          <div className="font-bold text-[14px] mt-12 lg:mt-0 flex flex-col">
            <h3>{storedJob?.categoryName}</h3>
            <div className="flex text-xs text-[#999999] md:hidden">
              <p>Kickstart.</p>
              <p>2 Day ago</p>
            </div>
          </div>
        </div>
        <div className="md:flex gap-4 text-[#999999] font-semibold mt-[8px] hidden">
          <p>Kickstart.</p>
          <p>2 Day ago</p>
        </div>
      </div>

      {/* Shadowing job details starts---------- */}
      <div className="mt-[121px] lg:grid lg:grid-cols-4  ">
        <div className="lg:col-span-3 mt-5 pr-2">
          {/* Job Description   */}
          <div>
            <p className="whitespace-pre-wrap ">{storedJob?.description}</p>
            {/* curriculum */}
          </div>
          <div>
            <h1 className=" mt-6 font-semibold text-2xl">Curriculum:</h1>
            <hr className="h-[3px] bg-[#19A5FF]  w-2/5" />
            <p className="whitespace-pre-wrap ">{storedJob?.curriculum}</p>
          </div>
          {/* shadowing duration start  */}
          {/* shadowing Duration Details */}
          <div>
            <h1 className=" mt-[30px] font-semibold text-2xl">Shadowing Duration:</h1>
            <hr className="h-[3px] bg-[#19A5FF]  w-3/4 lg:w-2/4" />
            <div className=" mb-4 mt-[10px] flex gap-5">
              <div>
                <h4 className="font-semibold">Starting Date</h4>
                <p className="flex items-center rounded-md gap-3 font-semibold py-2 px-4 bg-[#F0F9FF]  ">
                  <span>
                    <FaRegClock className="text-[#65DC7F] text-lg" />
                  </span>
                  <span>{storedJob?.StartingDate}</span>
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Ending Date</h4>
                <p className="flex  rounded-md items-center gap-3 font-semibold py-2 px-4 bg-[#F0F9FF]  ">
                  <span>
                    <FaRegClock className="text-[#F60C36] text-lg" />
                  </span>
                  <span>{storedJob?.endingDate?.slice(0, 10)}</span>
                </p>
              </div>
            </div>
          </div>
          {/* shadowing duration ends */}

          {/* Mentor Section */}
          <h1 className=" mt-[30px] font-semibold text-2xl">Mentor:</h1>
          <hr className="h-[3px] bg-[#19A5FF]  w-2/5" />
          <div className="mt-[30px] relative w-[90%] mb-4 p-3 border rounded-md border-[#ffee55] bg-gradient-to-r from-[#ffee55]  to-[#fffef4]">
            <h2 className="font-semibold"> Mentor Name: {storedJob?.mentorsInfo?.mentorsName} </h2>
            <p className="mt-[9px]  py-2 rounded-md font-semibold">
              {storedJob?.mentorsInfo?.mentorsBio}
            </p>

            <button
              className="absolute bg-[#1275b1] p-1.5 rounded-full right-2 bottom-2"
              type="button"
            >
              <a
                href={storedJob?.mentorsInfo?.mentorsLinkedInURL}
                target="_blank"
                className="  "
                rel="noreferrer"
              >
                <TfiLinkedin className=" text-white" />
              </a>
            </button>
          </div>
        </div>

        {/* all Skills section starts------------ */}
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
            <div>
              <h1 className="font-semibold text-2xl mb-3">Domains Required:</h1>
              <div className="flex flex-wrap  w-full gap-2">
                {storedJob?.domains?.map((domain) => (
                  <div key={Math.random()} className="bg-[#F0F9FF]  rounded-md ">
                    <p className="text-sm px-[10px] py-[8px] ">{domain}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-[16px] mt-3 mb-3">Salary Offered:</h1>
            <div className="">
              <div className="bg-[#F0F9FF] mt-3 w-[122px] flex items-center gap-3 rounded-md ">
                <p className="text-sm pl-[25px] py-[8px] ">
                  {storedJob?.salary} <span className="text-xl ml-2">₳</span>
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
                <p className="pr-[15px] font-bold ">{storedJob?.applyBefore?.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        </div>
        {/* all Skills section ends------------ */}
      </div>

      {/* Shadowing job details ends---------- */}
      {review === 'review' && (
        <div className="flex justify-center gap-4 mt-10">
          <button type="button" onClick={handlePost}>
            <label
              htmlFor="postConfirmation"
              className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] rounded-md text-white cursor-pointer"
            >
              Post Shadowing Job
            </label>
          </button>
          <Link to="/dashboard/post-job/shadowing">
            <button
              type="button"
              className="px-6 py-3 lg:px-10 lg:py-5 border-2 border-[#0B132A]  rounded-md text-black"
            >
              Edit
            </button>
          </Link>
        </div>
      )}

      {shadowingJob && <FinalConfirmation storedJob={storedJob} setConfirmPost={setShadowingJob} />}

      {review !== 'review' && data.applicationRequest.length > 0 && (
        <ApplicationRequests jobData={data} />
      )}
    </div>
  );
};

export default ShadowingJobReview;
