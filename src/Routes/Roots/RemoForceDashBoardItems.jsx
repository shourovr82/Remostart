/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsLayoutTextWindowReverse } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const RemoForceDashBoardItems = ({ children }) => (
    <section className="flex flex-col w-full">
        <div className=" border-b w-[95%] border-[#BCBCBC]">
            <h1 className="text-4xl flex items-center gap-3 font-semibold">
                <span>
                    <BsLayoutTextWindowReverse className="text-2xl mt-1" />
                </span>{' '}
                Jobs
            </h1>
        </div>
        <div className="flex lg:grid lg:grid-cols-3 justify-start items-start lg:justify-between lg:items-center flex-col-reverse lg:flex-row">
            <nav className="flex lg:col-span-2  list-none mt-5 items-start border-b-2 space-y-2 space-x-4 pb-2 mb-6 w-[fit-content] flex-wrap">
                <li className="mt-2 font-semibold text-xs sm:text-sm">
                    <Link to="/remoforce-dashboard/all-jobs">All</Link>
                </li>
                <li className="font-semibold text-xs sm:text-sm">
                    <Link to="#">Shadowing</Link>
                </li>
                <li className="font-semibold text-xs sm:text-sm">
                    <Link to="#"> Public Jobs</Link>
                </li>
                <li className="font-semibold text-xs sm:text-sm">
                    <Link to="#"> Private Jobs</Link>
                </li>
                <li className="font-semibold text-xs sm:text-sm">
                    <Link to="#"> Internship</Link>
                </li>
                <li className="font-semibold text-xs sm:text-sm">
                    <Link to="#"> Gigs</Link>
                </li>
                <li className="font-semibold text-xs sm:text-sm">
                    <Link to="#"> Contracts</Link>
                </li>
            </nav>
            <div className="lg:col-span-1   relative text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white w-full h-10 pr-16 rounded-md text-sm focus:outline-none px-4"
                    type="search"
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

export default RemoForceDashBoardItems;
