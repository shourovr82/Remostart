import React, { useState } from 'react';
import { HiOutlineChevronUpDown } from 'react-icons/hi2';

const TalentHistoryTable = ({ talentRequests }) => {
  console.log('talentHistory', talentRequests);
  const [tabActive, setTabActive] = useState(1);
  const activeTab = 'text-[#3b82f6] border-[#3b82f6]';
  const handleShowAll = () => {
    setTabActive(1);
  };
  const handleInterviewScheduled = () => {
    setTabActive(2);
  };
  const handleRejected = () => {
    setTabActive(3);
  };
  return (
    <div className="pl-8 w-[95%] bg-[#fefeff] pb-3 pt-10">
      {/* tab button */}
      <div className="flex ">
        <button
          onClick={handleShowAll}
          className={`px-4 text-sm duration-300 ease-in font-medium pb-3 border-b-[3px] ${
            tabActive === 1 && activeTab
          }`}
          type="button"
        >
          Show All
        </button>
        <button
          onClick={handleInterviewScheduled}
          className={`px-4 text-sm duration-300 ease-in font-medium pb-3 border-b-[3px] ${
            tabActive === 2 && activeTab
          }`}
          type="button"
        >
          Interview Scheduled
        </button>
        <button
          onClick={handleRejected}
          className={`px-4 text-sm duration-300 ease-in font-medium pb-3 border-b-[3px] ${
            tabActive === 3 && activeTab
          }`}
          type="button"
        >
          Rejected
        </button>
      </div>

      {/* table */}

      <div className="mt-5">
        <div className="talentTable rounded-2xl pb-4 ">
          <div className=" flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div className="w-full  ">
              <div className="bg-white  shadow-md rounded ">
                <table className="min-w-max  w-full table-auto">
                  <thead>
                    <tr className=" text-[#b5b7c0]  text-sm leading-normal">
                      <th className="pb-3 pt-7 border-b px-6 text-left">
                        <span className="flex gap-2 items-center">
                          {`Talent's Name`}
                          <HiOutlineChevronUpDown className="text-xl" />
                        </span>
                      </th>
                      <th className="pb-3 pt-7 border-b px-6 text-left">
                        <span className="flex gap-2 items-center">
                          Status
                          <HiOutlineChevronUpDown className="text-xl" />
                        </span>
                      </th>
                      <th className="pb-3 pt-7 border-b px-6 text-center">
                        <span className="flex text-center justify-center gap-2 items-center">
                          Details
                          <HiOutlineChevronUpDown className="text-xl" />
                        </span>
                      </th>
                      <th className="pb-3 pt-7 border-b px-6 text-center">
                        <span className="flex text-center justify-center gap-2 items-center">
                          Interview
                          <HiOutlineChevronUpDown className="text-xl" />
                        </span>
                      </th>
                      <th className="pb-3 pt-7 border-b px-6 text-center">
                        <span className="flex text-center justify-center gap-2 items-center">
                          Country
                          <HiOutlineChevronUpDown className="text-xl" />
                        </span>
                      </th>
                      <th className="pb-3 pt-7 border-b px-6 text-center">
                        <span className="flex text-center justify-center gap-2 items-center">
                          Match %
                          <HiOutlineChevronUpDown className="text-xl" />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="  text-[#292d32] text-sm font-light">
                    {talentRequests?.length &&
                      talentRequests?.map((talent) => (
                        <tr
                          key={Math.random()}
                          className="border-b  border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-3 px-6 text-left whitespace-nowrap font-semibold">
                            {talent?.fullName}
                          </td>
                          <td className="py-3 px-6 text-left font-semibold">Accepted</td>
                          <td className="py-3 font-semibold px-6 text-center">
                            14-04-23
                            <br />
                            4:30 Pm GMT
                          </td>
                          <td className="py-3 px-6 text-center">
                            <button
                              type="button"
                              className="bg-[#65dc7f] text-white py-1 px-3  rounded-full font-semibold"
                            >
                              Join Now
                            </button>
                          </td>
                          <td className="py-3 px-6 font-semibold text-center">{talent?.country}</td>
                          <td className="py-3 px-6 text-center">
                            <svg className="progress-ring" viewBox="0 0 120 120">
                              <circle className="progress-ring__circle" cx="60" cy="60" r="50" />
                              <circle
                                className="progress-ring__circle--progress"
                                stroke={
                                  (talent?.scorePercentage >= 80 &&
                                    talent?.scorePercentage <= 100 &&
                                    '#00c42b') ||
                                  (talent?.scorePercentage >= 40 &&
                                    talent?.scorePercentage <= 75 &&
                                    '#19a5ff') ||
                                  (talent?.scorePercentage >= 20 &&
                                    talent?.scorePercentage <= 39 &&
                                    '#ff9900') ||
                                  (talent?.scorePercentage >= 0 &&
                                    talent?.scorePercentage <= 19 &&
                                    '#13d1ff')
                                }
                                cx="60"
                                cy="60"
                                r="50"
                                style={{ '--value': talent?.scorePercentage }}
                              />
                              <text
                                className="text-3xl font-bold"
                                x="55%"
                                y="60%"
                                textAnchor="middle"
                              >
                                {talent?.scorePercentage}%
                              </text>
                            </svg>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentHistoryTable;
