import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import editIcon from '../../../Assets/Dashboard/talentRequest/editiIcon.svg';
import penIcon from '../../../Assets/Dashboard/talentRequest/penIcon.svg';
import penIconBlue from '../../../Assets/Dashboard/talentRequest/penIconBlue.svg';

const TalentRequestsHistories = () => {
  console.log('');
  return (
    <div className="bg-[#f0f9ff] mt-6 py-2 px-8 rounded-xl">
      {/* search and sorting button */}
      <div className="py-8">
        <div className=" flex justify-end items-center">
          <div className="flex items-center gap-5 ">
            <div className="my-2 flex sm:flex-row flex-col">
              <div className="flex  flex-row mb-1 sm:mb-0">
                <form className="flex bg-[#f9fbff] items-center">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <span>
                        <FiSearch className="text-[#7e7e7e] text-2xl" />
                      </span>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-[#f9fbff] border  border-transparent text-gray-900 text-sm rounded-lg focus:ring-[#e3d5ff]  focus:ring-2 block w-full pl-12 p-2.5  "
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="group">
              <div className="flex  focus:ring-blue-500 focus:ring  group-hover:border-[3px] group-hover:border-[#e3d5ff]   rounded-lg bg-[#f9fbff] px-2 gap-2 relative items-center justify-center w-[220px] ">
                <label htmlFor="sort" className="text-sm ">
                  Sort by :
                </label>
                <select
                  id="sort"
                  className="font-bold cursor-pointer border border-transparent bg-transparent text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-transparent block  py-2.5 "
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                  <option value="Most">Most</option>
                  <option value="Lowest">Lowest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* history card */}
      <div />
      <div className="bg-white grid grid-cols-5 rounded-xl py-2 px-3">
        {/* title and skills */}
        <div className=" col-span-2">
          {/* title */}
          <div className="flex gap-2  items-center">
            <div className="flex gap-2">
              <img className="w-5" src={penIcon} alt="" />
              <h2 className="text-xl  text-[#2d1865] font-semibold">Blockchain Senior Developer</h2>
            </div>
            <div className="flex bg-[#ffffad] items-center rounded-lg py-1 px-2 gap-2">
              <img className="w-5" src={editIcon} alt="" />
              <h5 className="font-semibold">Intermediate</h5>
            </div>
          </div>
          {/* skills */}
          <div className=" flex flex-wrap mt-5 gap-2">
            <div className="flex gap-2 items-center rounded-md py-0.5 px-1.5  bg-[#b9f2ff]">
              <img className="" src={penIconBlue} alt="" />
              <span className="text-sm text-[#23aaff] font-medium">KING ANACONDA</span>
            </div>
            <div className="flex gap-2 items-center rounded-md py-0.5 px-1.5  bg-[#b9f2ff]">
              <img className="" src={penIconBlue} alt="" />
              <span className="text-sm text-[#23aaff] font-medium">KING REACT</span>
            </div>
            <div className="flex gap-2 items-center rounded-md py-0.5 px-1.5  bg-[#b9f2ff]">
              <img className="" src={penIconBlue} alt="" />
              <span className="text-sm text-[#23aaff] font-medium">KING JAVA</span>
            </div>
            <div className="flex gap-2 items-center rounded-md py-0.5 px-1.5  bg-[#b9f2ff]">
              <img className="" src={penIconBlue} alt="" />
              <span className="text-sm text-[#23aaff] font-medium">KING HTML</span>
            </div>
            <div className="flex gap-2 items-center rounded-md py-0.5 px-1.5  bg-[#b9f2ff]">
              <img className="" src={penIconBlue} alt="" />
              <span className="text-sm text-[#23aaff] font-medium">KING Database</span>
            </div>
          </div>
        </div>

        {/* other details  */}
        <div className="flex col-span-3  ">
          <div>
            <div className="bg-[#ffe1b5] flex  items-center gap-2 rounded-md">
              <span>
                <GrLocation className="text-[#ff9900]" />
              </span>
              <p className="text-white">South Africa</p>
            </div>
          </div>
          <div>interview Schedule</div>
          <div>total</div>
        </div>
      </div>
    </div>
  );
};

export default TalentRequestsHistories;
