import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineUsers } from 'react-icons/hi2';
import { RxDashboard } from 'react-icons/rx';
import { SlEnvelopeOpen } from 'react-icons/sl';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import bottomPhoto from '../../../Assets/RemoForceDashboard/dashboard/bottomPhoto.svg';
import topPhoto from '../../../Assets/RemoForceDashboard/dashboard/topPhoto.svg';

import RemoForceMyJobTables from './RemoForceMyJobTables';

// List of Card items
const cardItems = [
  {
    icon: <HiOutlineUsers className="inline-block text-xl text-[#FF9900]" />,
    shadow: 'hover:shadow-amber-300',
    border: 'border-amber-300',
    title: '1. A feature that engages the visitors',
    text: ' down the page for more recommendations. Below you will find a variety of products from all categories on Steam that may be of interest to you.<br /> Looking for recommendations?',
    background: 'bg-[#FFF3E1] ',
    btnColor: 'text-[#FF9900]',
  },
  {
    icon: <HiOutlineUsers className="inline-block text-xl text-[#09ff00]" />,
    shadow: 'hover:shadow-green-300',
    border: 'border-[#09ff00]',
    title: '2. A feature that engages the visitors',
    text: ' down the page for more recommendations. Below you will find a variety of products from all categories on Steam that may be of interest to you.<br /> Looking for recommendations?',
    background: 'bg-[#09ff0050] ',
    btnColor: 'text-[#09ff00]',
  },
  {
    icon: <SlEnvelopeOpen className="inline-block text-xl  text-[#318cb6]" />,
    shadow: 'hover:shadow-blue-300',
    border: 'border-[#318cb6]',
    title: `3. Let's Start your journey now!`,
    text: ' down the page for more recommendations. Below you will find a variety of products from all categories on Steam that may be of interest to you.<br /> Looking for recommendations?',
    background: 'bg-[#daf0ff] ',
    btnColor: 'text-[#318cb6]',
  },
  {
    icon: <RxDashboard className="inline-block text-xl text-[#fe3e4d]" />,
    shadow: 'hover:shadow-[#fe3e4d]',
    border: 'border-[#fe3e4d]',
    title: '4. Want to apply in same job',
    text: ' down the page for more recommendations. Below you will find a variety of products from all categories on Steam that may be of interest to you.<br /> Looking for recommendations?',
    background: 'bg-[#Fbc2c5] ',
    btnColor: 'text-[#fe3e4d]',
  },
];

function RemoForceMyJob() {
  const isDesktop = useMediaQuery({ minWidth: 1368 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1367 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  let slidesToShow = 1;
  if (isDesktop) {
    slidesToShow = 3;
  } else if (isTablet) {
    slidesToShow = 2;
  }
  return (
    <main className="flex flex-col w-full ">
      {/* page heading */}
      <h1 className="font-bold text-xl font-sans">My Jobs</h1>
      <hr className="w-[96%]" />
      {/* parent container  */}

      <section className="md:grid md:grid-cols-4 w-full mt-[2rem] ">
        {/* Left section after Dashboard Navigation start */}
        <div className="w-full col-span-3">
          {/* Card section starts */}
          <div className=" w-full  ">
            <Swiper
              slidesPerView={slidesToShow}
              spaceBetween={isDesktop ? 10 : 10}
              autoplay
              loop
              className="mySwiper !p-2 !pb-5 "
            >
              {cardItems.map((item) => (
                <SwiperSlide
                  key={Math.random()}
                  className={`border shadow-lg ${item.shadow} rounded-[20px] `}
                >
                  <div
                    className={` cursor-pointer  flex text-start flex-col justify-start items-start  `}
                  >
                    <div
                      className={`rounded-[20px] w-[4rem] p-[18px]  border ${item.border} flex justify-center m-3 mb-1 ${item.background} `}
                    >
                      {item.icon}
                    </div>
                    <div className="w-full m-3 mb-1 flex flex-col items-start">
                      <h4 className="text-black text-sm lg:text-[11px] 2xl:text-sm font-semibold  ">
                        {item.title}
                      </h4>
                      <p className="w-[90%] text-xs text-[#CCCCCC] my-1"> {item.text}</p>
                    </div>
                    <div className="  w-full flex justify-end">
                      <button
                        type="button"
                        className={`text-sm font-semibold m-4 mt-2 flex gap-2 hover:gap-3 ease-in duration-300 items-center no-wrap ${item.btnColor}`}
                      >
                        Know More{' '}
                        <span className="mt-0.5">
                          <HiArrowNarrowRight className="text-lg" />
                        </span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* applied interview rejections table started  */}

          <div>
            <RemoForceMyJobTables />
          </div>

          {/* applied interview rejections table end */}
        </div>

        {/* Right section start ======================================= */}
        <div className="col-span-1  lg:space-y-10 lg:border-l-[3px] px-2 ml-1.5 ">
          <div className="px-1  ">
            <Swiper
              slidesPerView={1}
              pagination
              spaceBetween={isDesktop ? 5 : 5}
              loop
              modules={[Pagination]}
              className="mySwiper     shadow-lg  shadow-[#d3baf7]  rounded-xl  overflow-hidden"
            >
              <SwiperSlide className=" w-full    ">
                {/* Card details section start */}
                <div className="w-full mt-1 px-4 py-2 ">
                  <img src={topPhoto} alt="jobsrightupper" className="border-black w-full" />
                  <div className="mt-1 text-start">
                    <h4 className="font-medium  text-xs">Learn Skill Now</h4>
                    <p className="text-xs  text-[#CCCCCC] mt-1">
                      down the page for more recommendations. Below you will find a variety of
                      products from all categories on Steam
                      <button type="button" className="text-xs mb-[2rem] text-[#94e6ff]">
                        Read more <span className="w-[20px]">&rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" w-full    ">
                {/* Card details section start */}
                <div className="w-full mt-1 px-4 py-2 ">
                  <img src={topPhoto} alt="jobsrightupper" className="border-black w-full" />
                  <div className="mt-1 text-start">
                    <h4 className="font-medium  text-xs">Learn Skill Now</h4>
                    <p className="text-xs  text-[#CCCCCC] mt-1">
                      down the page for more recommendations. Below you will find a variety of
                      products from all categories on Steam
                      <button type="button" className="text-xs mb-[2rem] text-[#94e6ff]">
                        Read more <span className="w-[20px]">&rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" w-full    ">
                {/* Card details section start */}
                <div className="w-full mt-1 px-4 py-2 ">
                  <img src={topPhoto} alt="jobsrightupper" className="border-black w-full" />
                  <div className="mt-1 text-start">
                    <h4 className="font-medium  text-xs">Learn Skill Now</h4>
                    <p className="text-xs  text-[#CCCCCC] mt-1">
                      down the page for more recommendations. Below you will find a variety of
                      products from all categories on Steam
                      <button type="button" className="text-xs mb-[2rem] text-[#94e6ff]">
                        Read more <span className="w-[20px]">&rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="px-1  ">
            {/* Right Card section Bottom start */}
            <div className="p-3  rounded-xl bg-[#f0f9ff] w-full ">
              <img src={bottomPhoto} alt="jobsrightlower" className="w-full mb-4 mt-2" />
              <div className="w-full">
                <h1 className="font-bold mb-6 text-sm w-full">
                  How can you improve your productivity
                </h1>
                <p className="text-xs text-[#999999] mb-[3rem]">
                  down the page for more recommendations. Below you will find a variety of products
                  from all categories on Steam down the page for more recommendations. Below you
                  will find a variety of products from all categories on Steam down the page for
                  more recommendations. Below you will find a variety of products from all
                  categories on Steam
                </p>
                <Link to="/blog" className="text-base mb-4 text-[#19A5FF] text-center w-full">
                  Take me to Blog!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RemoForceMyJob;
