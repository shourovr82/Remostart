/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { BsEnvelope, BsThreeDots } from 'react-icons/bs';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { GrDocumentUser } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import currency from '../../../Assets/Dashboard/currency.png';
import cardLogo from '../../../Assets/Dashboard/tech_crunch.png';
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
    // const handleClose = async(id) => {
    //     console.log(id);

    //   await axios
    //         .put(`${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/close/${id}`)
    //         .then((response) => {
    //             console.log(response);

    //             // refetch();
    //             // toast.success(`${response.data.title} closed successfully`);
    //         })
    //         .catch((error) => {
    //             console.error('Error deleting data:', error);
    //         });
    //     refetch();
    // };

    // /dashboard/post-job/public-job/:id
    const viewHandler = (item) => {
        console.log(item);
        const path = item?.categoryName?.toLowerCase().replace(/\s+/g, '-');

        path === 'public-job' &&
            navigate(`/dashboard/public/${item.jobId}`, { state: { data: item } });

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

    return (
        <DashBoardItems>
            {/* <section className="grid grid-cols-3 -ml-8">
                {items.length ? (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col mx-6 shadow-2xl mt-10 px-10 py-12 space-y-4 rounded-lg"
                        >
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <div className="flex space-x-2">
                                        <img src={item.img} alt="" />
                                        <h5 className="font-semibold text-lg">{item.tile}</h5>
                                    </div>
                                    <span className="text-base font-normal pl-10 mb-2">
                                        {item.substile}
                                    </span>
                                </div>
                                <div className="">
                                    <BsThreeDots />
                                </div>
                            </div>

                            <div>
                                <p className="font-normal text-sm">{item.pTag}</p>
                            </div>
                            <div className="justify-between flex">
                                <div className="flex space-x-2 text-sm font-semibold">
                                    <span className="bg-[#D4C0FF] px-2 py-3 rounded-full">
                                        14hh
                                    </span>
                                    <span className="bg-[#D4C0FF] px-2 py-3 rounded-full">
                                        view
                                    </span>
                                </div>
                                <div className="flex justify-center items-center space-x-2">
                                    <BsEnvelope />
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="grid place-items-center min-h-screen">
                        <NoJob />
                    </div>
                )}
            </section> */}
            <section className="">
                {/* card section */}
                {items?.length ? (
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 flex-1">
                        {items?.map((item) => (
                            <div
                                key={Math.random()}
                                className="flex flex-col  px-2  jobPostCardShaddow py-6 justify-between items-stretch border space-y-2 space-x-5 rounded-lg"
                            >
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex space-x-2">
                                            <img src={cardLogo} alt="" />
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
                                                <li>
                                                    <button
                                                        // onClick={() => handleClose(item.jobId)}
                                                        className="font-medium text-sm"
                                                        type="button"
                                                    >
                                                        Close Job
                                                    </button>
                                                </li>

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
                                    <p className="font-normal text-sm">
                                        {item.description
                                            ? item?.description?.slice(0, 200)
                                            : item?.description}
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="flex flex-wrap gap-2">
                                        {item.skills.map((skill) => (
                                            <p
                                                className="text-[12px] p-1 rounded-md font-normal bg-[#F0F9FF]"
                                                key={Math.random()}
                                            >
                                                {skill}
                                            </p>
                                        ))}
                                    </span>
                                    <span className="font-semibold text-sm justify-center items-center">
                                        Salary : {item.salary}{' '}
                                        <img src={currency} className="inline" alt="" />
                                    </span>
                                </div>

                                <div className="justify-between flex">
                                    <div className="flex space-x-2 text-sm font-semibold mt-4">
                                        <span className="bg-[#D4C0FF] px-2 py-2 rounded-full gap-2 flex items-start justify-start">
                                            14
                                            <GrDocumentUser className="inline-block mt-1" />
                                        </span>
                                    </div>
                                    <div className="flex justify-center items-center space-x-2 mt-4">
                                        <BsEnvelope />
                                        <span>5</span>
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
