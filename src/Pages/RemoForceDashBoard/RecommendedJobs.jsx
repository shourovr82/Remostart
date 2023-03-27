/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
// const { Carousel } = require('react-responsive-carousel');
import recommendLogo from '../../Assets/RemoForceDashboard/RemoForceAllJobs/recommendedJobBg.png';

const RecommendedJobs = () => {
    const recommendedAllJobs = [
        {
            title: 'Job Title',
            logo: recommendLogo,
            description: '  Is a sales copy really omnipotent?will definitely lead to a sale? and something',
            skills: [
                'Front-End Developer',
                'React',
                'HTML'
            ],
            salary: '50,000',
            applied: '16'
        },
        {
            title: 'Job Title',
            logo: recommendLogo,
            description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
            skills: [
                'Front-End Developer',
                'React',
                'HTML'
            ],
            salary: '50,000',
            applied: '16'
        },
        {
            title: 'Job Title',
            logo: recommendLogo,
            description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
            skills: [
                'Front-End Developer',
                'React',
                'HTML'
            ],
            salary: '50,000',
            applied: '16'
        },
        {
            title: 'Job Title',
            logo: recommendLogo,
            description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
            skills: [
                'Front-End Developer',
                'React',
                'HTML'
            ],
            salary: '50,000',
            applied: '16'
        },
        {
            title: 'Job Title',
            logo: recommendLogo,
            description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
            skills: [
                'Front-End Developer',
                'React',
                'HTML'
            ],
            salary: '50,000',
            applied: '16'
        },
        {
            title: 'Job Title',
            logo: recommendLogo,
            description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
            skills: [
                'Front-End Developer',
                'React',
                'HTML'
            ],
            salary: '50,000',
            applied: '16'
        },
        {
            title: 'Job Title',
            logo: recommendLogo,
            description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
            skills: [
                'Front-End Developer',
                'React',
                'HTML'
            ],
            salary: '50,000',
            applied: '16'
        },
        {
            title: 'Job Title',
            logo: recommendLogo,
            description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
            skills: [
                'Front-End Developer',
                'React',
                'HTML'
            ],
            salary: '50,000',
            applied: '16'
        },
    ]
    const isDesktop = useMediaQuery({ minWidth: 1368 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1367 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    // Define the number of slides to display based on device size
    let slidesToShow = 1;
    if (isDesktop) {
        slidesToShow = 3;
    } else if (isTablet) {
        slidesToShow = 2;
    }

    return (

        <section className='border-t pt-2'>
            <div className='lg:grid grid-cols-8 lg:py-10  items-center  recommendedBg rounded-md border-2 lg:border-[3px] border-[#a0daff]'>


                {/* recommend job title */}
                <div className=' col-span-2  p-4'>
                    <h2 className='text-lg max-md:text-center lg:text-2xl font-semibold'>Recommended Jobs <br />For you to get Started!</h2>
                    <p className='text-[#999999] mt-2 max-md:text-center text-xs'>Scroll down the page for more recommendations. Below you will find a variety of products from all categories on Steam that may be of interest to you. Looking for recommendations?</p>
                    <button className='flex mt-3 items-center gap-2 text-xs  text-[#B18CFF]  2xl:w-full 2xl:justify-end'>Explore All Jobs <span><BsArrowRight className='text-lg mt-0.5' /></span></button>
                </div>



                {/* recommend job card */}
                <div className='col-span-6'>
                    <div >
                        <Swiper navigation
                            slidesPerView={slidesToShow}
                            modules={[Navigation]}
                            className="mySwiper">
                            {recommendedAllJobs?.map((item, index) => (

                                <SwiperSlide key={Math.random()}>
                                    <div

                                        className=" p-3 m-3 border xl:m-1 shadow-md shadow-[#e5f4ff] bg-white border-[#a5dbff9d] rounded-md"
                                    >
                                        <div className="flex justify-between items-center">
                                            <img className="!w-10" src={item?.logo} alt="" />
                                            <h2 className="text-[20px] font-semibold">{item?.title}</h2>
                                            {/* three dot option button */}
                                            <div className="dropdown dropdown-end">
                                                <button type='button'>
                                                    <label tabIndex={0} className=" px-1 py-1 rounded-md cursor-pointer btn-ghost m-1 text-xs">●●●</label>
                                                </button>
                                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><button type='button'
                                                        className='font-medium text-sm'
                                                    >View Applicants</button></li>
                                                    <li><button
                                                        className='font-medium text-sm'
                                                        type='button'>Hide Post</button></li>

                                                    {/* dynamic link should be here */}
                                                    <li><Link
                                                        className='font-medium text-sm'
                                                    >Details
                                                    </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        {/* description, skills */}
                                        <div className="mt-1">
                                            <p className="text-start ">
                                                {item?.description.length > 65
                                                    ? `${item?.description?.slice(0, 65)}...`
                                                    : item?.description}
                                            </p>
                                            <div className="flex mt-[5px] flex-wrap  w-full lg:gap-1 xl:gap-2">
                                                {item &&
                                                    item?.skills.map((skill) => (
                                                        <div key={Math.random()} className="bg-[#F0F9FF]  rounded-md ">
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
                                                <button
                                                    className="px-6 py-3 lg:px-3 border border-[#00C42B] lg:py-2 bg-[#7DEC96] text-black text-[13px] font-semibold rounded-md"
                                                    type="button"
                                                >
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default RecommendedJobs;
