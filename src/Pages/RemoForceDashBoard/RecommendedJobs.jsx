/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
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
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JobCard from './RemoforceJobs/JobCategoryPages/JobCardComponent/JobCard';

const RecommendedJobs = () => {
    const { data: recommendedAllJobs } = useQuery(['items'], () =>
        axios.get(`${process.env.REACT_APP_URL_STARTUP}/api/job/all-jobs`).then((res) => res.data)
    );

  

    // const recommendedAllJobs = [
    //     {
    //         title: 'Job Title',
    //         logo: recommendLogo,
    //         description: '  Is a sales copy really omnipotent?will definitely lead to a sale? and something',
    //         skills: [
    //             'Front-End Developer',
    //             'React',
    //             'HTML'
    //         ],
    //         salary: '50,000',
    //         applied: '16'
    //     },
    //     {
    //         title: 'Job Title',
    //         logo: recommendLogo,
    //         description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
    //         skills: [
    //             'Front-End Developer',
    //             'React',
    //             'HTML'
    //         ],
    //         salary: '50,000',
    //         applied: '16'
    //     },
    //     {
    //         title: 'Job Title',
    //         logo: recommendLogo,
    //         description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
    //         skills: [
    //             'Front-End Developer',
    //             'React',
    //             'HTML'
    //         ],
    //         salary: '50,000',
    //         applied: '16'
    //     },
    //     {
    //         title: 'Job Title',
    //         logo: recommendLogo,
    //         description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
    //         skills: [
    //             'Front-End Developer',
    //             'React',
    //             'HTML'
    //         ],
    //         salary: '50,000',
    //         applied: '16'
    //     },
    //     {
    //         title: 'Job Title',
    //         logo: recommendLogo,
    //         description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
    //         skills: [
    //             'Front-End Developer',
    //             'React',
    //             'HTML'
    //         ],
    //         salary: '50,000',
    //         applied: '16'
    //     },
    //     {
    //         title: 'Job Title',
    //         logo: recommendLogo,
    //         description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
    //         skills: [
    //             'Front-End Developer',
    //             'React',
    //             'HTML'
    //         ],
    //         salary: '50,000',
    //         applied: '16'
    //     },
    //     {
    //         title: 'Job Title',
    //         logo: recommendLogo,
    //         description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
    //         skills: [
    //             'Front-End Developer',
    //             'React',
    //             'HTML'
    //         ],
    //         salary: '50,000',
    //         applied: '16'
    //     },
    //     {
    //         title: 'Job Title',
    //         logo: recommendLogo,
    //         description: 'Is a sales copy really omnipotent?will definitely lead to a sale?',
    //         skills: [
    //             'Front-End Developer',
    //             'React',
    //             'HTML'
    //         ],
    //         salary: '50,000',
    //         applied: '16'
    //     },
    // ]
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
    const navigate = useNavigate()
    const handleApplyNow = (item) => {
        navigate(`/remoforce-dashboard/all-jobs/${item._id}`, { state: { data: item } });
        window.scroll(0, 0);
    };
    return (

        <section className='border-t pt-2'>
            <div className='lg:grid grid-cols-8 lg:py-10  items-center  recommendedBg rounded-md border-2 lg:border-[3px] border-[#a0daff]'>


                {/* recommend job title */}
                <div className=' col-span-2  p-4'>
                    <h2 className='text-lg max-md:text-center lg:text-2xl font-semibold'>Recommended Jobs for you to get Started!</h2>
                    <p className='text-[#999999] mt-2 max-md:text-center text-xs'>Explore Career Options and Find Your Ideal Job</p>
                    <button className='flex mt-3 items-center gap-2 text-sm  text-[#B18CFF]  2xl:w-full 2xl:justify-end'>Explore All Jobs <span><BsArrowRight className='text-lg mt-0.5' /></span></button>
                </div>



                {/* recommend job card */}
                <div className='col-span-6'>
                    <div >
                        <Swiper navigation
                            slidesPerView={slidesToShow}
                            modules={[Navigation]}
                            className="mySwiper">
                            {recommendedAllJobs?.slice(0, 6)?.map((item) => (

                                <SwiperSlide key={Math.random()}>
                                    <JobCard key={Math.random()} items={item} applyNowBtn={handleApplyNow} />
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
