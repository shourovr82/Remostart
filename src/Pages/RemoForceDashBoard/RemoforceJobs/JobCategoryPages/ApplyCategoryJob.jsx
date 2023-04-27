import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { BiBookmarks, BiUser } from 'react-icons/bi';
import { FaRegClock } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import { GiSandsOfTime } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import initialLogo from '../../../../Assets/RemoForceDashboard/RemoForceAllJobs/InitialLogo.png';
import RecommendedJobs from '../../RecommendedJobs';

import AuthContext from '../../../../Context/AuthContext';

const ApplyCategoryJob = () => {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const location = useLocation();
  const data = location.state && location.state.data;

  const { data: job, refetch } = useQuery(['job'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/job/apply-status?id=${data.jobId}&email=${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );

  const {
    title,
    description,
    experience,
    skills,
    salary,
    applyBefore,
    applicationRequest,
    categoryName,
  } = data;

  const applyJobHandler = () => {
    const url = `${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/${data.jobId}`;
    const applicantsData = {
      applicantsName: user?.user?.fullName || serviceUser?.fullName,
      applicantsEmail: user?.user?.email || serviceUser?.email,
      applicationStatus: 'pending',
      email: data.email,
    };

    // Send the PUT request using axios
    axios
      .put(url, applicantsData)
      .then((response) => {
        toast.success(response.data);
        refetch();
      })
      .catch((error) => {
        console.error('Error making PUT request:', error);
      });
  };

  return (
    <div className="w-full">
      <div>
        {/* back button for navigate  */}
        {/* it will be Link , which path should be come from dynamic by using window location  */}
        <div className="pb-1 border-b border-[#9999996e] mb-3">
          <button type="button" className="text-3xl font-semibold flex gap-2 items-center">
            <span>
              <FiChevronLeft className="mt-1 text-2xl" />
            </span>
            Back
          </button>
        </div>
        {/* Banner Section start */}
        <div className="flex internshipBannerImg justify-between absolute w-full md:w-[80%] lg:w-[63%] max-w-6xl">
          <h1 className="text-2xl md:text-3xl lg:text-5xl pt-2 md:pt-[15px] md:pl-7 pl-2 font-normal text-white">
            {/* <br className="sm:hidden block" />  */}
            {title}
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
        <div className="relative right-[-6px]  md:right-[-36px] top-[123px] md:top-[117px] lg:top-[110px]">
          <div className="flex gap-[10px] items-center">
            <div className="bg-[#F0F9FF] w-[85px] md:w-[131px] bg-red rounded-full shadow-2xl shadow-[#DDB6FF] p-4 md:p-10">
              <img src={initialLogo} alt="" />
            </div>
            <div className="font-bold text-[14px] mt-6 lg:mt-0 flex flex-col">

              <h3>{categoryName}</h3>
             <div className="flex text-xs text-[#999999] md:hidden" />

             
            </div>
          </div>
        </div>

        <div className="mt-[130px] lg:mt-[125px] lg:ml-5">
          <div className="md:flex gap-4 text-[#999999] font-semibold mt-[8px] hidden" />

          <div className="mt-5 lg:grid lg:grid-cols-6 ">
            {/* job details  */}
            <div className="lg:col-span-4">
              <p className="lg:w-[95%]">{description}</p>

              {/* Internship Duration Details if available */}
              {data?.categoryName === 'Internship' && (
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
                        <span>{data?.startingDate?.slice(0, 10)}</span>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">End Date</h4>
                      <p className="flex  rounded-md items-center gap-3 font-semibold py-2 px-4 bg-[#F0F9FF]  ">
                        <span>
                          <FaRegClock className="text-[#F60C36] text-lg" />
                        </span>
                        <span>{data?.endingDate?.slice(0, 10)}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* job Requirements year ----- */}
              <div>
                <h1 className=" mt-[30px] font-semibold text-2xl">
                  {data?.categoryName} Requirements:
                </h1>
                <hr className="h-[3px] bg-[#19A5FF]  w-[85%] lg:w-2/4" />
                <div className=" mb-4 mt-[10px]">
                  <h4 className="font-semibold">Experience Required:</h4>
                  <span className=" mt-2 rounded-md inline-block  font-semibold py-2 px-4 bg-[#F0F9FF]  ">
                    {experience} Years
                  </span>
                </div>
              </div>
              {/* Internship Perks  if available----- */}
              {data?.joiningPerks?.length < 0 && (
                <div className="mt-[30px]">
                  <h1 className="  font-semibold text-2xl">Internship Perks:</h1>
                  <hr className="h-[2px] bg-[#19A5FF]  w-2/3 lg:w-[35%]" />
                  {/* Internship Duration Details */}
                  <div className=" mb-4 mt-[10px] flex items-center gap-[10px]">
                    {data?.joiningPerks?.map((perk) => (
                      <p
                        key={Math.random()}
                        className="py-2 px-4 lg:px-6 bg-[#F0F9FF] rounded-md font-semibold"
                      >
                        {perk}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Skills Required (right side) */}
            <div className=" lg:col-span-2 lg:border-l-2 lg:pl-4  md:border-t-2  lg:border-t-0">
              <div>
                <h1 className="font-semibold text-2xl mb-3">Skills Required:</h1>
                <div className="flex flex-wrap  w-full gap-2">
                  {skills &&
                    skills.map((requiredSkill) => (
                      <div key={Math.random()} className="bg-[#F0F9FF]  rounded-md ">
                        <p className="text-sm px-[8px] py-[8px] ">{requiredSkill}</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* salary  */}
              <div>
                <h1 className="font-semibold text-[16px] mt-3 mb-3">Salary Offered:</h1>
                <div className="">
                  <div className="bg-[#F0F9FF] mt-3 w-[122px] flex items-center gap-3 rounded-md ">
                    <p className="text-sm pl-[25px] py-[8px] ">{data?.salary && salary}</p>
                    <p className="pr-[25px] font-semibold">₳</p>
                  </div>
                </div>
              </div>

              {/* location or work type */}
              <div>
                <h1 className="font-semibold text-[16px] mt-3 mb-3">Location:</h1>
                <div className="">
                  <div className="bg-[#F0F9FF] mt-3 w-[109px] flex items-center gap-3 rounded-md ">
                    <p className="text-sm pl-[15px] py-[8px] ">
                      <GoLocation />
                    </p>
                    <p className="pr-[15px] ">{data?.location ? data?.location : 'Remote'}</p>
                  </div>
                </div>
              </div>
              {/* number of applicants */}
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

              {/* apply date */}
              <div>
                <h1 className="font-semibold text-[16px] mt-3 mb-3">Apply Before:</h1>
                <div className="">
                  <div className="bg-[#F0F9FF] mt-3 w-[170px] flex items-center gap-3 rounded-md ">
                    <p className="text-sm pl-[15px] py-[8px] ">
                      <GiSandsOfTime className="text-red-500" />
                    </p>
                    <p className="pr-[15px] font-bold ">
                      {data?.applyBefore && applyBefore.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Skills Required (right side) */}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          {job.status === 'notApplied' && (
            <button
              type="button"
              onClick={applyJobHandler}
              className="px-6 py-3 lg:px-10 lg:py-5 border border-[#2BDE73] font-semibold bg-[#d8f6df] rounded-md text-[#2BDE73]"
            >
              Apply Now!
            </button>
          )}
          {job.status === 'pending' && (
            <button
              type="button"
              className="px-4 py-3 lg:py-5 border border-[#19A5FF] font-semibold bg-[#A5DBFF] rounded-md text-[#19A5FF]"
            >
              Withdraw Application
            </button>
          )}
          {job.status === 'accepted' && (
            <button
              type="button"
              className="px-4 py-3 lg:py-5 border border-[#03b403] font-semibold bg-[#c1ffa5] rounded-md text-[#19A5FF]"
            >
              wait for interview call
            </button>
          )}

          {job.status === 'rejected' && (
            <button
              type="button"
              className="px-6 lg:px-14 py-3 lg:py-5  bg-[#E5E5E5] rounded-md text-[#F00C18]"
            >
              Rejected
            </button>
          )}
        </div>
      </div>
      {/* recommend jobs */}
      <div className="mt-14">
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default ApplyCategoryJob;
