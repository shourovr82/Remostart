import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';

import { toast } from 'react-hot-toast';
import { BiCheck } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AuthContext from '../../../../Context/AuthContext';

const ApplicationRequests = ({ jobData }) => {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  // const applicationRequests = jobData?.applicationRequest;
  const [refresh, setRefresh] = useState(false);
  const { id } = useParams();

  const { data: applicationRequests, refetch } = useQuery(['applicationRequests'], () =>
    axios
      .get(`${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/allApplicationRequests/${id}`)
      .then((res) => res.data)
  );

  const acceptHandler = (item) => {
    const acceptData = {
      status: 'accepted',
      email: user?.user?.email || serviceUser?.email,
      jobId: jobData?.jobId,
      applicantsEmail: item?.applicantsEmail,
    };
    const url = `${process.env.REACT_APP_URL_STARTUP}/api/job/accept/${item._id}`;

    axios
      .put(url, acceptData)
      .then((response) => {
        refetch();

        toast.success(response.data);
      })
      .catch((error) => {
        console.error('Error making PUT request:', error);
      });
  };
  const rejectHandler = (item) => {
    const acceptData = {
      status: 'rejected',
      email: user?.user?.email || serviceUser?.email,
      jobId: jobData.jobId,
      applicantsEmail: item.applicantsEmail,
    };
    const url = `${process.env.REACT_APP_URL_STARTUP}/api/job/reject/${item._id}`;

    axios
      .put(url, acceptData)
      .then((response) => {
        refetch();
        toast.success(response.data);
      })
      .catch((error) => {
        console.error('Error making PUT request:', error);
      });
  };

  return (
    <section className="py-1 bg-blueGray-50  ">
      <h1 className="text-2xl font-semibold">Application Requests:</h1>
      <div className="w-full  mb-12 xl:mb-0 mt-[31px] lg:px-4 mx-auto ">
        <div className="relative max-w-[800px] flex flex-col   break-words   ">
          <div className="block rounded-md  border  w-full overflow-x-auto">
            <table className="items-center  w-full    bg-white   shadow-lg">
              {/* table head */}
              <thead className=" ">
                <tr className="font-semibold  bg-[#E5E5E5]    text-[#999999]">
                  <th className="px-6 bg-blueGray-50 text-blueGray-500   py-2 text-xs  whitespace-nowrap    text-left">
                    S.No
                  </th>
                  <th className="px-2 bg-blueGray-50 text-blueGray-500 text-start  py-2 text-xs  whitespace-nowrap font-semibold ">
                    Name
                  </th>
                  <th className="pl-2 hidden  lg:block bg-blueGray-50 text-blueGray-500 align-middle   py-2 text-xs  whitespace-nowrap  text-left ">
                    Email Id
                  </th>
                  <th className=" bg-blueGray-50 text-blueGray-500   py-2 text-xs   whitespace-nowrap ">
                    Contact
                  </th>
                  <th className="text-center bg-blueGray-50 text-blueGray-500 align-middle  py-2 text-xs  whitespace-nowrap ">
                    Action
                  </th>
                </tr>
              </thead>

              {/* table body items */}

              <tbody className="">
                {applicationRequests?.map((singleData, index) => (
                  <tr
                    key={Math.random()}
                    className="bg-white border-b border-[#E5E5E5]  font-semibold text-[#0B132ABF]  "
                  >
                    <th className=" px-6  text-xs whitespace-nowrap p-2 text-left  ">
                      {index + 1}
                    </th>
                    <td className=" text-xs border-b whitespace-nowrap p-2 ">
                      {singleData.applicantsName}
                    </td>
                    <td className="  text-xs whitespace-nowrap p-2 hidden lg:block">
                      {singleData.applicantsEmail}
                    </td>
                    <td
                      className=" 
                   text-xs whitespace-nowrap l-6  p-2"
                    >
                      <span>
                        <CiMail className="text-lg  " />
                      </span>
                    </td>
                    <td className=" lg:px-6   text-xs whitespace-nowrap p-2">
                      <div className="flex justify-center lg:gap-9 gap-7">
                        {singleData.applicationStatus === 'pending' && (
                          <button
                            onClick={() => acceptHandler(singleData)}
                            type="button"
                            className="p-1.5 bg-[#b1edbf] border border-[#00C42B] rounded-md"
                          >
                            <BiCheck />
                          </button>
                        )}
                        {singleData.applicationStatus === 'accepted' && (
                          <button
                            type="button"
                            className="p-1.5 bg-[#b1edbf] border border-[#00C42B] rounded-md"
                          >
                            Accepted
                          </button>
                        )}

                        {singleData.applicationStatus === 'pending' && (
                          <button
                            onClick={() => rejectHandler(singleData)}
                            type="button"
                            className="p-1.5 bg-[#f7858b] border border-[#F00C19] rounded-md"
                          >
                            <RxCross2 />
                          </button>
                        )}
                        {singleData.applicationStatus === 'rejected' && (
                          <button
                            type="button"
                            className="p-1.5 bg-[#f7858b] border border-[#F00C19] rounded-md"
                          >
                            Rejected
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* table foooter */}

              {/* <tfoot>
                <tr className="">
                  {applicationRequests?.length > 7 && (
                    <td colSpan="5" className="text-right pr-6 text-[#19A5FF] font-semibold">
                      show more...
                    </td>
                  )}
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationRequests;
