/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { BsThreeDots } from 'react-icons/bs';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { GrDocumentUser } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';
import DashBoardItems from '../../../Routes/Roots/DashBoardItems';
import NoJob from './NoJob';

const AllJobs = () => {
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { data: items, refetch } = useQuery(['items'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/${id}`)
      .then((response) => {
        refetch();
        toast.success(`${response.data.title} deleted successfully`);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
    refetch();
  };
  const handleClose = async (id) => {
    await axios
      .put(`${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/close/${id}`)
      .then((response) => {
        refetch();
        toast.success(`${response.data.title} closed successfully`);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
    refetch();
  };

  // /dashboard/post-job/public-job/:id
  const viewHandler = (item) => {
    const path = item?.categoryName?.toLowerCase().replace(/\s+/g, '-');

    path === 'public-job' && navigate(`/dashboard/public/${item.jobId}`, { state: { data: item } });

    path === 'private-job' &&
      navigate(`/dashboard/private/${item.jobId}`, { state: { data: item } });
    path === 'internship' &&
      navigate(`/dashboard/internship/${item.jobId}`, { state: { data: item } });

    path === 'contracts' &&
      navigate(`/dashboard/contracts/${item.jobId}`, { state: { data: item } });
    path === 'shadowing' &&
      navigate(`/dashboard/shadowing/${item.jobId}`, { state: { data: item } });
    path === 'gigs' && navigate(`/dashboard/gigs/${item.jobId}`, { state: { data: item } });
  };
  console.log(items);

  return (
    <DashBoardItems>
      <section>
        {/* card section */}
        {items?.length ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 ">
            {items?.map((item) => (
              <div
                key={Math.random()}
                className="flex flex-col    px-4 hover:shadow-xl duration-300 ease-in shadow-lg hover:shadow-[#b492ff8a] shadow-[#b394f573] bg-white border-[#b394f5c4] py-5 justify-between items-stretch border  space-y-2  rounded-lg"
              >
                <div className="flex justify-between ">
                  <div className="flex flex-col">
                    <div className="flex space-x-2">
                      {item?.startupsProfilePhoto ? (
                        <img
                          className="w-8 h-8 rounded-full"
                          src={item.startupsProfilePhoto}
                          alt=""
                        />
                      ) : (
                        <p className="w-8 h-8 grid place-items-center  text-white rounded-full bg-black">
                          {item?.startupsName?.charAt(0).toUpperCase()}
                        </p>
                      )}
                      <h5 className="font-semibold text-lg">{item.title}</h5>
                    </div>
                  </div>

                  {/* three dot option button */}
                  <div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <button type="button" className="p-1">
                        <label tabIndex={0} className="cursor-pointer">
                          {' '}
                          <BsThreeDots />
                        </label>
                      </button>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow-xl shadow-[#4e00b42d]  bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <button
                            onClick={() => handleDelete(item.jobId)}
                            type="button"
                            className="font-medium text-sm"
                          >
                            Delete Post
                          </button>
                        </li>
                        {item.jobStatus === 'active' ? (
                          <li>
                            <button
                              onClick={() => handleClose(item.jobId)}
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
                            onClick={() => viewHandler(item)}
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
                    {item?.categoryName}
                  </p>
                </div>

                <div className="">
                  <p className="font-normal text-sm">
                    {item.description ? item?.description?.slice(0, 100) : item?.description}...
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex flex-wrap gap-1 items-center">
                    {item.skills.map((skill) => (
                      <p
                        className="text-[12px] px-1.5 py-0.5 rounded-md font-normal bg-[#d0e5ff]"
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
                      Salary : {item.salary} ₳
                    </span>
                  </div>
                  <div className="justify-between border-t mt-1 flex">
                    <div className="flex space-x-2 text-sm font-semibold mt-4">
                      <span className="bg-[#D4C0FF] px-2 py-2 rounded-full gap-2 flex items-start justify-start">
                        {item?.applicationRequest?.length}
                        <GrDocumentUser className="inline-block mt-1" />
                      </span>
                    </div>
                    <div className="flex justify-center items-center space-x-2 mt-4">
                      <button
                        onClick={() => viewHandler(item)}
                        className="bg-[#D4C0FF] text-sm px-4 rounded-md border border-[#b294f5] font-semibold py-2 "
                        type="button"
                      >
                        View Job
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="">
            <NoJob />
          </div>
        )}
      </section>
    </DashBoardItems>
  );
};

export default AllJobs;
