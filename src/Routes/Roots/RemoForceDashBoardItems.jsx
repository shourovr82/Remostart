/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsLayoutTextWindowReverse } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const RemoForceDashBoardItems = ({ children }) => {
  const categoryActive = 'border-[#3b82f6]  text-[#3B82F6]';
  return (
    <section className="flex flex-col w-full">
      <div className=" border-b w-[95%] border-[#BCBCBC]">
        <h1 className="text-4xl flex items-center gap-3 font-semibold">
          <span>
            <BsLayoutTextWindowReverse className="text-2xl mt-1" />
          </span>
          Jobs
        </h1>
      </div>
      <div className="flex lg:grid lg:grid-cols-3 justify-start items-start lg:justify-between   flex-col-reverse lg:flex-row">
        <nav className="flex lg:col-span-2  list-none mt-2 lg:mt-5 items-start space-y-2  pb-2 mb-6 w-[fit-content] flex-wrap">
          <li className="mt-2 font-semibold text-xs sm:text-sm">
            <NavLink
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-1 font-medium  ${
                  isActive && categoryActive
                }`
              }
              to="/remoforce-dashboard/all-jobs"
            >
              All
            </NavLink>

            {/* <NavLink to="/remoforce-dashboard/all-jobs">All</NavLink> */}
          </li>
          <li className="font-semibold text-xs sm:text-sm">
            <NavLink
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-1 font-medium  ${
                  isActive && categoryActive
                }`
              }
              to="/remoforce-dashboard/shadowing-jobs"
            >
              Shadowing
            </NavLink>
            {/* <Link to="/remoforce-dashboard/shadowing-jobs">Shadowing</Link> */}
          </li>
          <li className="font-semibold text-xs sm:text-sm">
            <NavLink
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-1 font-medium  ${
                  isActive && categoryActive
                }`
              }
              to="/remoforce-dashboard/public-jobs"
            >
              Public Jobs
            </NavLink>
            {/* <Link to="/remoforce-dashboard/public-jobs"> Public Jobs</Link> */}
          </li>
          <li className="font-semibold text-xs sm:text-sm">
            <NavLink
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-1 font-medium  ${
                  isActive && categoryActive
                }`
              }
              to="/remoforce-dashboard/private-jobs"
            >
              Private Jobs
            </NavLink>
            {/* <Link to="/remoforce-dashboard/private-jobs"> Private Jobs</Link> */}
          </li>
          <li className="font-semibold text-xs sm:text-sm">
            <NavLink
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-1 font-medium  ${
                  isActive && categoryActive
                }`
              }
              to="/remoforce-dashboard/internship"
            >
              Internship
            </NavLink>
            {/* <Link to="/remoforce-dashboard/internship"> Internship</Link> */}
          </li>
          <li className="font-semibold text-xs sm:text-sm">
            <NavLink
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-1 font-medium  ${
                  isActive && categoryActive
                }`
              }
              to="/remoforce-dashboard/gigs"
            >
              Gigs
            </NavLink>
            {/* <Link to="/remoforce-dashboard/gigs"> Gigs</Link> */}
          </li>
          <li className="font-semibold text-xs sm:text-sm">
            <NavLink
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-1 font-medium  ${
                  isActive && categoryActive
                }`
              }
              to="/remoforce-dashboard/contracts"
            >
              Contracts
            </NavLink>
            {/* <Link to="/remoforce-dashboard/contracts"> Contracts</Link> */}
          </li>
        </nav>
        <div className="lg:col-span-1 w-full  max-lg:mt-2 lg:mt-5  relative text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white w-full h-10 pr-16 rounded-md text-sm focus:outline-none px-4"
            type="text"
            name="search"
            placeholder="Search jobs, skills, location..."
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <BiSearchAlt />
          </button>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
};

export default RemoForceDashBoardItems;
