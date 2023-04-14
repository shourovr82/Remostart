import React, { useState } from 'react';
import { BiWinkSmile } from 'react-icons/bi';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { IoLanguageSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import penIcon from '../../../Assets/Dashboard/talentRequest/penIcon.svg';
import penIconBlue from '../../../Assets/Dashboard/talentRequest/penIconBlue.svg';

const TalentRequestsHistories = () => {
  const [expanded, setExpanded] = useState([]);
  const pageLocation = useLocation();
  //   const talentHistories = [
  //     {
  //       id: 1,
  //       title: 'Blockchain Senior Developer ',
  //       icon: penIcon,
  //       level: 'Intermediate',
  //       skills: ['KING ANACONDA', 'REACT', 'JAVA', 'HTML', 'Database'],
  //       locations: ['South Africa'],
  //       personalities: 'Team Leader',
  //       languages: ['English'],
  //       interviewSchedule: 15,
  //       totalTalentReq: 18,
  //       jobDescripTion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.

  // Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
  // `,
  //     },
  //   ];

  const data = pageLocation?.state && pageLocation?.state?.data;
  console.log(data);

  const { searchHistory } = data || {};

  const handleExpand = (_id) => {
    if (expanded.includes(_id)) {
      setExpanded(expanded.filter((item) => item !== _id));
    } else {
      setExpanded([...expanded, _id]);
    }
  };

  return (
    <div className="bg-[#f0f9ff] mt-6 py-2 pb-4 px-3 2xl:px-8 rounded-xl">
      {/* search and sorting button */}
      <div className=" py-3 2xl:py-8 ">
        <div className=" flex    lg:justify-end items-center">
          <div className="lg:flex max-md:w-full    items-center gap-5 ">
            <div className="my-2 flex  sm:flex-row flex-col">
              <div className="flex  flex-row mb-1 sm:mb-0">
                <form className="flex max-md:w-full bg-[#f9fbff] items-center">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <span>
                        <FiSearch className="text-[#7e7e7e] text-xl" />
                      </span>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-[#f9fbff] border  border-transparent text-gray-900  lg:text-xs 2xl:text-sm rounded-lg focus:ring-[#e3d5ff]  focus:ring-2 block w-full pl-12 p-2  "
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="group">
              <div className="flex  focus:ring-blue-500 focus:ring  lg:group-hover:border-[3px] lg:group-hover:border-[#e3d5ff]   rounded-lg bg-[#f9fbff] px-2 gap-2 relative items-center justify-center lg:w-[200px] ">
                <label htmlFor="sort" className="text-sm ">
                  Sort by :
                </label>
                <select
                  id="sort"
                  className="font-bold cursor-pointer border border-transparent bg-transparent text-gray-900 lg:text-xs 2xl:text-sm rounded-lg focus:ring-0 focus:border-transparent block  lg:py-2 2xl:py-2.5 "
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
      <div className="space-y-3">
        {searchHistory?.map((talentHistory) => (
          <div className="bg-white rounded-xl ">
            <div className="lg:grid space-y-4 grid-cols-5 pt-3 2xl:pt-5 pb-1.5 px-2 2xl:px-3">
              {/* title and skills */}
              <div className="col-span-2">
                {/* title */}
                <div className="lg:flex gap-2  items-center">
                  <div className="flex gap-1  lg:gap-1.5 2xl:gap-2">
                    <img className="lg:w-4 2xl:w-5" src={penIcon} alt="" />
                    <h2 className="text-base 2xl:text-xl  text-[#2d1865] font-semibold">
                      {talentHistory?.searchQuery?.details?.title}
                    </h2>
                  </div>
                  {/* <div className="flex max-md:w-24 bg-[#ffffad] items-center rounded-lg py-0.5 lg:px-1.5 2xl:px-2 lg:gap-1.5 2xl:gap-2">
                    <img className="2xl:w-4" src={editIcon} alt="" />
                    <h5 className="font-semibold text-xs lg:text-[10px] 2xl:text-sm">
                      {talentHistory?.level}
                    </h5>
                  </div> */}
                </div>
                {/* skills */}
                <div className=" flex flex-wrap mt-2 lg:mt-5 gap-1 lg:gap-2">
                  {talentHistory?.searchQuery?.selectedSkills?.map((skill) => (
                    <div className="flex gap-1 lg:gap-2 items-center rounded-md py-0.5 px-1.5  bg-[#b9f2ff]">
                      <img className="" src={penIconBlue} alt="" />
                      <span className=" text-xs font-medium lg:text-[10px] 2xl:text-sm text-[#23aaff] lg:font-medium">
                        {skill?.skillName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* other details  */}
              <div className="lg:flex max-md:mt-3 max-md:divide-y lg:divide-x gap-x-5 max-md:justify-center lg:justify-end col-span-3  ">
                <div className="space-y-2 flex  flex-col justify-center lg:items-end">
                  {talentHistory?.searchQuery?.locationPreference?.map((location) => (
                    <div className="bg-[#ffe1b5] flex  items-center gap-1.5 py-0.5 px-1.5 2xl:px-2 rounded-md">
                      <span>
                        <FiMapPin className=" text-[#ff9900] lg:text-[10px] 2xl:text-sm" />
                      </span>
                      <p className="text-white lg:text-[10px] 2xl:text-sm">{location}</p>
                    </div>
                  ))}

                  {talentHistory?.searchQuery?.softSkills?.map((softSkill) => (
                    <div className="bg-[#b1edbf] rounded-md flex gap-1.5 px-1.5 ml-0.5 2xl:px-2 py-0.5 items-center">
                      <span>
                        <BiWinkSmile className="text-[#00c42b] lg:text-[10px]" />
                      </span>
                      <p className="text-white lg:text-[10px] 2xl:text-sm">{softSkill}</p>
                    </div>
                  ))}

                  {talentHistory?.languages?.map((language) => (
                    <div className="bg-[#ffadbb] rounded-md flex gap-1.5 px-1.5 2xl:px-2 py-0.5 items-center">
                      <span>
                        <IoLanguageSharp className="text-[#ff1023] lg:text-[10px]" />
                      </span>
                      <p className="text-white lg:text-[10px] 2xl:text-sm">{language}</p>
                    </div>
                  ))}
                </div>
                <div className="flex max-md:mt-5 max-md:pt-3 items-center  justify-center">
                  <div className="flex pl-3  flex-col items-center justify-center">
                    <h4 className="text-[#999999] lg:text-[10px] 2xl:text-sm">
                      Interview Schedule
                    </h4>
                    <h2 className="text-3xl font-bold">15</h2>
                  </div>
                </div>
                <div className="flex max-md:mt-5 max-md:pt-3 justify-center">
                  <div className="flex pl-3   flex-col items-center justify-center">
                    <h4 className="text-[#999999] lg:text-[10px] 2xl:text-sm">
                      Total Talent Requested
                    </h4>
                    <h2 className="text-3xl font-bold">18</h2>
                  </div>
                </div>
                {/* view details */}
                {/* <div className="flex  max-md:mt-5 max-md:pt-3 justify-center items-center">
                  <button
                    onClick={() => handleExpand(talentHistory?._id)}
                    type="button"
                    className="flex pl-2 items-center justify-center flex-col"
                  >
                    <span className=" rounded-full  border-[3px] border-[#65dc7f]">
                      <BsArrowDownCircleFill className="text-3xl  m-0.5 text-[#65dc7f]" />
                    </span>
                    <span className="text-[#acacac] lg:text-[10px] 2xl:text-sm">
                      Show more details
                    </span>
                  </button>
                </div> */}
              </div>
              {/* bottom item */}
              <div className="col-span-5 flex justify-center">
                <p className="text-[10px] text-[#b2b2b2]">
                  Expand The Card To See Interview List & Requested Talents
                </p>
              </div>
            </div>
            {expanded.includes(talentHistory?._id) && (
              <>
                <hr className="w-[95%] 2xl:w-[98%] mx-auto" />
                <div className="card-content">
                  <h4 className="font-semibold">Job Description</h4>
                  <div className="border-dashed border-[2px] p-2 mt-2  border-[#2cb0ec] rounded-xl ">
                    <p className="whitespace-pre-wrap text-[#999999]">
                      {talentHistory?.jobDescripTion}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentRequestsHistories;
