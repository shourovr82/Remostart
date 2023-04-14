/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineCloseSquare, AiOutlineMenu } from 'react-icons/ai';
// import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { RxShadow } from 'react-icons/rx';
import { VscLayersActive } from 'react-icons/vsc';
// import { RxShadow } from 'react-icons/rx';
// import { VscLayersActive } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

const DashBoardItems = ({ children }) => {
  const categoryActive = 'border-[#3b82f6]  text-[#3B82F6]';
  return (
    <section className="flex flex-col w-full">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <div className="h-[2px] w-full bg-slate-500 mt-4" />
      <div className="flex justify-start items-start lg:justify-between lg:items-center flex-col-reverse lg:flex-row">
        <nav className="flex list-none mt-5 items-start  space-y-2   mb-6 w-[fit-content] flex-wrap">
          <li className="space-x-1 mt-2 font-semibold text-xs sm:text-sm">
            <NavLink
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-3 font-medium  ${
                  isActive && categoryActive
                }`
              }
              to="/dashboard/all-jobs"
            >
              <AiOutlineMenu className="xs:hidden inline-block text-xs md:text-xl mb-px " /> All
              jobs
            </NavLink>
          </li>
          <li className="space-x-1 font-semibold text-xs sm:text-sm">
            <NavLink
              to="/dashboard/active-jobs"
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-3 font-medium  ${
                  isActive && categoryActive
                }`
              }
            >
              <VscLayersActive className="xs:hidden inline-block text-xs md:text-xl mb-px" /> Active
              jobs
            </NavLink>
          </li>
          <li className="space-x-1 font-semibold text-xs sm:text-sm">
            <NavLink
              to="/dashboard/closed-jobs"
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-3 font-medium  ${
                  isActive && categoryActive
                }`
              }
            >
              <AiOutlineCloseSquare className="xs:hidden inline-block text-xs md:text-xl mb-px" />{' '}
              Closed jobs
            </NavLink>
          </li>
          <li className="space-x-1 font-semibold text-xs sm:text-sm">
            <NavLink
              to="/dashboard/users-shadowing"
              className={({ isActive }) =>
                `border-b-[3px] flex items-center gap-2 px-3 pb-3 font-medium  ${
                  isActive && categoryActive
                }`
              }
            >
              <RxShadow className="xs:hidden inline-block text-xs md:text-xl mb-px" /> Shadowing
            </NavLink>
          </li>
        </nav>
        <div className="pt-2 relative text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search jobs, skills..."
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <FiSearch />
          </button>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
};

export default DashBoardItems;
