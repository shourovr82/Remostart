/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { BsGearWideConnected, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { DiGoogleAnalytics } from 'react-icons/di';
import { HiColorSwatch } from 'react-icons/hi';
import { RiShareForwardLine } from 'react-icons/ri';
import { SiBlockchaindotcom, SiCivicrm, SiUikit } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

const Profile = () => {
    const { serviceUser } = useContext(AuthContext);

    const items = [
        {
            id: 1,
            icon: <SiBlockchaindotcom />,
            name: 'Blockchain',
        },
        {
            id: 2,
            icon: <HiColorSwatch />,
            name: 'Front-End',
        },
        {
            id: 3,
            icon: <BsGearWideConnected />,
            name: 'Back-End',
        },
        {
            id: 4,
            icon: <SiUikit />,
            name: 'UI Desing',
        },
        {
            id: 5,
            icon: <DiGoogleAnalytics />,
            name: 'Analytics',
        },
        {
            id: 6,
            icon: <SiCivicrm />,
            name: 'CRM',
        },
    ];

    // const employeReview = [
    //     {
    //         id: 1,
    //         userName: 'Amit Sharma',
    //         date: '10 May 2022',
    //         heading: 'Great Team to work with',
    //         pTag: 'MotionElements - это лучший онлайн-сайт, где можно бесплатно скачать шаблоны для AE. Выбирайте бесплатные шаблоны для After Effects, бесплатное видео и бесплатную музыку. Наши элементы не подвергаюются комиссии, вы можете использовать их в различных проектах, в любых типах медиа по всему миру. Получи Бесплатные элементы букмарклет.',
    //     },
    //     {
    //         id: 2,
    //         userName: 'Ankit Sharma',
    //         date: '10 april 2022',
    //         heading: 'Great Team to work with',
    //         pTag: 'MotionElements - это лучший онлайн-сайт, где можно бесплатно скачать шаблоны для AE. Выбирайте бесплатные шаблоны для After Effects, бесплатное видео и бесплатную музыку. Наши элементы не подвергаюются комиссии, вы можете использовать их в различных проектах, в любых типах медиа по всему миру. Получи Бесплатные элементы букмарклет.',
    //     },
    //     {
    //         id: 3,
    //         userName: 'Ashish Gupta',
    //         date: '15 april 2022',
    //         heading: 'Great Team to work with',
    //         pTag: 'MotionElements - это лучший онлайн-сайт, где можно бесплатно скачать шаблоны для AE. Выбирайте бесплатные шаблоны для After Effects, бесплатное видео и бесплатную музыку. Наши элементы не подвергаюются комиссии, вы можете использовать их в различных проектах, в любых типах медиа по всему миру. Получи Бесплатные элементы букмарклет.',
    //     },
    // ];
    const { user } = useSelector((state) => state.auth);
    const { data: startupData } = useQuery(['startupData'], () =>
        axios
            .get(
                `${process.env.REACT_APP_URL_STARTUP}/api/startup/startup-preview/${
                    user?.user?.email || serviceUser?.email
                }`
            )
            .then((res) => res.data)
    );

    console.log(startupData);

    return (
        // <div className="flex justify-center items-center text-center lg:h-[100vh]">
        //     <div>
        //         <img src={comingsoonBg} className="w-full" alt="" />
        //         <div className="mt-5">
        //             <p className="text-xl md:text-2xl ">Profile settings will be updated soon.</p>
        //         </div>
        //     </div>
        // </div>
        <section className="flex flex-col">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-full lg:w-1/2 pr-0 lg:pr-4 justify-center items-center md:justify-start md:items-start">
                    <div className="flex items-end space-x-1">
                        <img
                            src={startupData?.startupIcon}
                            className="w-12 rounded-full md:h-20  md:w-20"
                            alt=""
                        />
                        <h5 className="text-2xl md:text-3xl font-semibold mb-2">
                            {startupData?.startupName}
                        </h5>
                    </div>
                    <div className="flex flex-col my-3 space-y-4 text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
                            {startupData?.startupSlogan}
                        </h1>
                        <p className="text-sm font-semibold break-words ">
                            {startupData?.startupDescription}
                        </p>
                    </div>

                    <div className="lg:flex mt-8 space-x-10 hidden">
                        <Link
                            to="/dashboard/all-jobs"
                            className="px-8 py-5 bg-[#0B132A] inline-block text-white text-xs font-semibold rounded-md"
                        >
                            See Open Jobs
                        </Link>

                        <Link className="px-8 py-5 text-xs inline-block font-semibold rounded-md border-2 border-black">
                            Share <RiShareForwardLine className="inline-block text-lg" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex justify-end space-x-3 text-3xl mr-20 mt-14">
                        {/* github link */}
                        {startupData?.socialLinks?.Github && (
                            <a
                                target="_blank"
                                href={startupData?.socialLinks?.Github}
                                rel="noreferrer"
                            >
                                <BsGithub />
                            </a>
                        )}
                        {/* github link */}
                        {startupData?.socialLinks?.Instagram && (
                            <a
                                target="_blank"
                                href={startupData?.socialLinks?.Instagram}
                                rel="noreferrer"
                            >
                                <BsInstagram className="text-rose-500" />
                            </a>
                        )}
                        {/* github link */}
                        {startupData?.socialLinks?.Linkedin && (
                            <a
                                target="_blank"
                                href={startupData?.socialLinks?.Linkedin}
                                rel="noreferrer"
                            >
                                <BsLinkedin className="text-[#0e76a8]" />
                            </a>
                        )}
                        {/* github link */}
                        {startupData?.socialLinks?.Twitter && (
                            <a
                                target="_blank"
                                href={startupData?.socialLinks?.Twitter}
                                rel="noreferrer"
                            >
                                <BsTwitter className="text-[#1DA1F2]" />
                            </a>
                        )}
                    </div>
                </div>

                {/* carousel */}
                <div className="w-full lg:w-1/2 px-6 md:px-0">
                    <Carousel
                        showThumbs={false}
                        showArrows={false}
                        showStatus={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        emulateTouch
                    >
                        {startupData?.homePageImages &&
                            startupData?.homePageImages.map((homePageImage) => (
                                <div key={Math.random()} className="">
                                    <img
                                        src={homePageImage}
                                        alt=""
                                        className="aspect-square object-contain"
                                    />
                                </div>
                            ))}
                    </Carousel>
                </div>
                <div className="flex mt-8 space-x-10 justify-center items-center lg:hidden">
                    <Link
                        to="/dashboard/all-jobs"
                        className="px-8 py-5 bg-[#0B132A] inline-block text-white text-xs font-semibold rounded-md"
                    >
                        See Open Jobs
                    </Link>

                    <Link className="px-8 py-5 text-xs inline-block font-semibold rounded-md border-2 border-black">
                        {/* Share <RiShareForwardLine className="inline-block text-md" /> */}
                    </Link>
                </div>
            </div>

            {/* Industry Work */}
            <div className="flex flex-col space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl mt-7 font-medium">Industry Work In</h1>
                    <p className="w-full break-words">{startupData?.worksIn}</p>
                </div>

                {/* Domins and work */}

                <div className="flex flex-col  space-y-5 border-t">
                    <div className="space-y-5">
                        <h1 className="text-3xl text-[#19A5FF] mt-7 ">Domains We Work On</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center md:place-items-start">
                            {startupData?.domains &&
                                startupData?.domains?.map((item) => (
                                    <div
                                        key={Math.random()}
                                        className="flex flex-col items-center justify-center h-[155px] w-[155px] shadow-2xl rounded-md"
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="text-2xl font-normal">{item}</span>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Reviews and ratings */}
                    {/* <div className="space-y-8">
                        <h1 className="text-3xl mt-7 font-medium">Reviews and Ratings</h1>

                        <div className="flex gap-8 flex-wrap justify-center items-center md:justify-start md:items-start">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 rounded-xl shadow-2xl p-2 lg:p-6">
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress blue">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value absolute">
                                            <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                                <span className="font-bold text-xl">90%</span>
                                                <span className="inline-block text-md absolute">
                                                    Overall Rating{' '}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress yellow">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value absolute">
                                            <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                                <span className="font-bold text-xl">70%</span>
                                                <span className="inline-block text-md absolute">
                                                    Work-Life
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress pink">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value absolute">
                                            <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                                <span className="font-bold text-xl">60%</span>
                                                <span className="inline-block text-md absolute">
                                                    Skill
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="progress blue">
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value absolute">
                                            <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                                <span className="font-bold text-xl">50%</span>
                                                <span className="inline-block text-md absolute">
                                                    Satisfaction
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Employee reviews */}
                    {/* <div className="space-y-8 flex flex-col">
                        <h1 className="text-3xl mt-7 font-medium">Employee reviews</h1>
                        {employeReview.map((item) => (
                            <div key={item.id} className="flex space-x-5">
                                <div className="flex flex-col mt-1">
                                    <span className="text-xs font-medium">{item.userName}</span>
                                    <span className="text-xs">{item.date}</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <span className="font-bold text-base">{item.heading}</span>
                                    <p className="text-xs font-normal w-2/3">{item.pTag}</p>
                                    <button
                                        type="button"
                                        className="border border-[#712EFF] text-[#712EFF] text-sm py-2 px-4"
                                    >
                                        Read More <BsArrowRight className="inline-block ml-1" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Profile;
