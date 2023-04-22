import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { GrDocumentUser } from 'react-icons/gr';

const StartupJobCard = ({ jobInfo, handleDelete, handleClose, viewHandler }) => (
  <div
    key={Math.random()}
    className="flex flex-col    px-4 hover:shadow-xl duration-300 ease-in shadow-lg hover:shadow-[#b492ff8a] shadow-[#b394f573] bg-white border-[#b394f5c4] py-5 justify-between items-stretch border  space-y-2  rounded-lg"
  >
    <div className="flex justify-between ">
      <div className="flex flex-col">
        <div className="flex space-x-2">
          {jobInfo?.startupsProfilePhoto ? (
            <img className="w-8 h-8 rounded-full" src={jobInfo.startupsProfilePhoto} alt="" />
          ) : (
            <p className="w-8 h-8 grid place-items-center  text-white rounded-full bg-black">
              {jobInfo?.startupsName?.charAt(0).toUpperCase()}
            </p>
          )}
          <h5 className="font-semibold text-lg">{jobInfo.title}</h5>
        </div>
      </div>

      {/* three dot option button */}
      <div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <button type="button" className="p-1">
            <label className="cursor-pointer">
              {' '}
              <BsThreeDots />
            </label>
          </button>
          <ul className="dropdown-content menu p-2 shadow-xl shadow-[#4e00b42d]  bg-base-100 rounded-box w-52">
            <li>
              <button
                onClick={() => handleDelete(jobInfo.jobId)}
                type="button"
                className="font-medium text-sm"
              >
                Delete Post
              </button>
            </li>
            {jobInfo.jobStatus === 'active' ? (
              <li>
                <button
                  onClick={() => handleClose(jobInfo.jobId)}
                  className="font-medium text-sm"
                  type="button"
                >
                  Close Job
                </button>
              </li>
            ) : (
              ''
            )}

            {/* dynamic link should be here */}

            <li>
              <button
                onClick={() => viewHandler(jobInfo)}
                className="font-medium text-sm"
                type="button"
              >
                View Applications
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <p className="w-[max-content] px-2 text-sm rounded-md bg-[#D4C0FF]">
        {jobInfo?.categoryName}
      </p>
    </div>

    <div className="">
      <p className="font-normal text-sm">
        {jobInfo.description ? jobInfo?.description?.slice(0, 100) : jobInfo?.description}...
      </p>
    </div>
    <div className="flex flex-col gap-1">
      <span className="flex flex-wrap gap-1 items-center">
        {jobInfo.skills.map((skill) => (
          <p
            className="text-[12px] px-1.5 py-0.5 rounded-md font-normal bg-[#D4C0FF]"
            key={Math.random()}
          >
            {skill}
          </p>
        ))}
      </span>
    </div>

    <div className="">
      <div>
        <span className="font-semibold text-base justify-center items-center">
          Salary : {jobInfo.salary} ₳
        </span>
      </div>
      <div className="justify-between border-t mt-1 flex">
        <div className="flex space-x-2 text-sm font-semibold mt-4">
          <span className="bg-[#D4C0FF] px-2 py-2 rounded-full gap-2 flex items-start justify-start">
            {jobInfo?.applicationRequest?.length}
            <GrDocumentUser className="inline-block mt-1" />
          </span>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button
            onClick={() => viewHandler(jobInfo)}
            className="bg-[#D4C0FF] text-sm px-4 rounded-md border border-[#b294f5] font-semibold py-2 "
            type="button"
          >
            View Job
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default StartupJobCard;
