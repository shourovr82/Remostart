import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import RemoForceDashBoardItems from '../../../../Routes/Roots/RemoForceDashBoardItems';
import NoJob from '../../../StartupDashboard/DashboardPages/NoJob';

const RemoforceGigs = () => {
    const { data: gigs } = useQuery(['publicJobs'], () =>
        axios
            .get(`${process.env.REACT_APP_URL_STARTUP}/api/job/remoforce/gigs`)
            .then((res) => res.data)
    );
    const navigate = useNavigate();

    const handleApplyNow = (item) => {
        navigate(`/remoforce-dashboard/category-jobs/${item._id}`, { state: { data: item } });
    };
    return (
        <RemoForceDashBoardItems>
            <section>
                {/* card section */}
                {gigs?.length ? (
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto gap-3  ">
                        {gigs?.map((item) => (
                            <div
                                key={Math.random()}
                                className=" p-3 2xl:p-2.5 border  duration-300 ease-in xl:m-1 shadow-lg shadow-[#78a5c554] bg-white border-[#a5dbff9d] rounded-md flex flex-col justify-between"
                            >
                                <div className="flex justify-between  items-center">
                                    <div className="flex items-center gap-5">
                                        {item?.img && (
                                            <img className="!w-10" src={item?.img} alt="" />
                                        )}
                                        <h2 className="text-[20px] font-semibold">{item?.title}</h2>
                                    </div>

                                    {/* three dot option button */}
                                    {/* <div>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <button type="button" className="p-1">
                                        <label tabIndex={0} className="cursor-pointer">
                                            {' '}
                                            <BsThreeDots className="text-xl" />
                                        </label>
                                    </button>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu p-2 shadow-xl shadow-[#4e00b42d]  bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <button
                                                type="button"
                                                className="font-medium text-sm"
                                            >
                                                View Applicants
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="font-medium text-sm"
                                                type="button"
                                            >
                                                Hide Post
                                            </button>
                                        </li>

                                        <li>
                                            <Link to="#" className="font-medium text-sm">
                                                Details
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                                </div>
                                <div>
                                    <p className="text-start  text-sm ">
                                        {item?.description
                                            ? `${item?.description?.slice(0, 100)}`
                                            : item?.description}
                                    </p>
                                </div>
                                {/* description, skills */}
                                <div className="mt-1">
                                    {/* skills */}
                                    <div className="flex mt-[7px] flex-wrap  w-full lg:gap-1 xl:gap-2">
                                        {item &&
                                            item?.skills.map((skill) => (
                                                <div
                                                    key={Math.random()}
                                                    className="bg-[#F0F9FF]  rounded-md "
                                                >
                                                    <p className="text-xs px-[5px] py-[5px] ">
                                                        {skill}
                                                    </p>
                                                </div>
                                            ))}
                                    </div>
                                    {/* salary  */}
                                    <div className="mt-3 border-b pb-2">
                                        <h4 className="text-start font-bold">
                                            Salary : {item?.salary} ₳{' '}
                                        </h4>
                                    </div>
                                    {/* applied and apply now button */}
                                    <div className="mt-4 flex justify-between">
                                        <button
                                            type="button"
                                            className="flex items-center font-semibold px-4 rounded-full py-2  gap-2 bg-[#19A5FF80]"
                                        >
                                            {item?.applied}{' '}
                                            <span>
                                                <AiOutlineFileDone className="text-xl" />
                                            </span>
                                        </button>
                                        {/* <Link to={`/remoforce-dashboard/all-jobs/${item._id}`}> */}
                                        <button
                                            onClick={() => handleApplyNow(item)}
                                            className="px-6 py-3 lg:px-3 border border-[#00C42B] lg:py-2 bg-[#7DEC96] text-black text-[13px] font-semibold rounded-md"
                                            type="button"
                                        >
                                            Apply Now
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                ) : (
                    <NoJob />
                )}
            </section>
        </RemoForceDashBoardItems>
    );
};

export default RemoforceGigs;
