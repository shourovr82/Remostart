import React from 'react';
import { TbBrush } from 'react-icons/tb';

const RemoForceMyJobApplied = ({ fullList }) => (
  <section>
    <div className="talentTable rounded-2xl pb-4 ">
      <div className=" flex items-center justify-center bg-gray-100 font-sans max-md:overflow-x-auto">
        <div className="w-full  ">
          <div className="  bg-white shadow-md rounded ">
            <table className="bg-white w-full table-auto">
              <thead>
                <tr className=" text-[#000]  font-semibold leading-normal">
                  <th className="pb-3 pt-7 border-b px-6 text-left">Startup</th>
                  <th className="pb-3 pt-7 border-b px-6 text-left">Applied Date</th>

                  <th className="pb-3 pt-7 border-b px-6 text-center">Job Title</th>
                  <th className="pb-3 pt-7 border-b px-6 text-center">Status</th>
                  <th className="pb-3 pt-7 border-b px-6 text-center" />
                </tr>
              </thead>
              <tbody className="  text-[#292d32] text-sm font-light">
                {'fullList?.length' &&
                  fullList?.map((job, index) => (
                    <tr
                      key={Math.random()}
                      className={`border-b  border-gray-200 hover:bg-gray-100 ${
                        index % 2 === 0 && 'bg-[#f8f8f8]'
                      }`}
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap font-semibold">
                        {job?.StartUp}
                      </td>
                      <td className="py-3 px-6 text-left font-semibold">{job?.Applied}</td>
                      <td className="py-3 font-semibold px-6 text-center">{job?.Title}</td>

                      <td
                        className={`py-3 px-6 font-semibold text-center ${
                          job?.status === 'Applied' && 'text-[#31BE00]'
                        }
                             ${job?.status === 'Rejected' && 'text-[#ce0d06]'}   
                             ${job?.status === 'Interview' && 'text-[#8e9bf7]'}`}
                      >
                        {job?.status}
                      </td>
                      <td className="py-3 font-semibold px-6 text-center">
                        <TbBrush className="text-xl" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RemoForceMyJobApplied;
