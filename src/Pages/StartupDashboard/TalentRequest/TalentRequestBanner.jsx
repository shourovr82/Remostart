import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { HiOutlineGlobe, HiOutlineUser } from 'react-icons/hi';
// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import talentBannerImg from '../../../Assets/Dashboard/talentRequest/bannerPhoto.svg';

// import required modules

const TalentRequestBanner = () => {
    console.log('s');
    const skillTalents = [
        {
            icon: <AiOutlineFileSearch className="text-[#FF9900] text-3xl" />,
            name: 'UNMATCHED SKILLS',
            total: 500,
            bgColor: 'bg-[#fffcee]',
        },
        {
            icon: <HiOutlineUser className="text-[#FF9900] text-3xl" />,
            name: 'VERIFIED TALENTS',
            total: 5000,
            bgColor: 'bg-[#fafee6]',
        },
        {
            icon: <HiOutlineGlobe className="text-[#26aaff] text-3xl" />,
            name: 'STATES & LANGUAGES',
            total: 47,
            bgColor: 'bg-[#f0f9ff]',
        },
    ];
    return (
        <>
            <div className="lg:grid lg:grid-cols-4 flex flex-col-reverse  justify-between h-full">
                <div className="col-span-2  lg:mt-20">
                    <div className="space-y-3">
                        <h1 className="text-3xl max-md:hidden font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing?
                        </h1>
                        <h2 className="mt-3 max-md:ml-10 text-[#FF5A78] text-xl lg:text-3xl font-semibold">
                            How We Do
                        </h2>
                        <p className="text-[#999999] font-medium lg:font-semibold  lg:text-xl mt-5">
                            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc
                            vulputate libero et velit <br /> interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                    <div className="mt-5 max-md:flex max-md:justify-center">
                        <button
                            type="button"
                            className="text-[#61C1FF] shadow-inner px-5 bg-[#f8f1ff] rounded-lg py-2 text-xl font-semibold"
                        >
                            Find me Talents !
                        </button>
                    </div>

                    {/* for mobile version */}
                    {/* skills , talent , languages cards ==== */}
                    <div className="lg:hidden mt-10  gap-4 ">
                        <Swiper
                            slidesPerView={2.1}
                            spaceBetween={10}
                            loop
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {skillTalents?.map((item) => (
                                <SwiperSlide className="w-full">
                                    <div
                                        className={`w-full shadow-inner  rounded-xl   ${item?.bgColor}`}
                                    >
                                        <div className="flex p-2 items-center gap-2 ">
                                            <span>{item?.icon}</span>
                                            <span className="border-t-[1px]  border-[#000000] w-full" />
                                        </div>
                                        <div className="flex pb-5 pt-1 text-center flex-col justify-center items-center">
                                            <h3 className="font-bold text-xl">{item?.total}+</h3>
                                            <h5 className="text-sm  font-semibold">{item?.name}</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* card */}
                    </div>
                </div>
                {/* right side image */}
                <div className="col-span-2 max-md:mt-5 ">
                    <div className=" lg:hidden">
                        <h1 className="text-xl font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing?
                        </h1>
                    </div>
                    <img className=" lg:object-cover" src={talentBannerImg} alt="" />
                </div>
            </div>
            {/* skills , talent , languages cards ==== */}
            <div className="lg:grid hidden 2xl:w-[70%] w-[70%] grid-cols-6    gap-4 ">
                {/* card */}
                {skillTalents?.map((item) => (
                    <div className={`col-span-2 shadow-inner  rounded-xl   ${item?.bgColor}`}>
                        <div className="flex p-3 items-center gap-2 ">
                            <span>{item?.icon}</span>
                            <span className="border-t-[2px]  border-[#000000] w-full" />
                        </div>
                        <div className="flex pb-5 pt-1 text-center flex-col justify-center items-center">
                            <h3 className="font-bold text-xl 2xl:text-2xl">{item?.total}+</h3>
                            <h5 className="2xl:text-sm text-xs font-bold">{item?.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TalentRequestBanner;
