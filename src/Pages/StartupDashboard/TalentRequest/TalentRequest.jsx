import React, { useEffect, useState } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { HiOutlineGlobe } from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import headingIcon from '../../../Assets/Dashboard/talentRequest/headingIcon.svg';
import TalentRequestModal from '../../../Modal/TalentRequest/TalentRequestModal';
import TalentCards from './TalentCards';
import TalentRequestBanner from './TalentRequestBanner';
import TalentsFounds from './TalentsFounds';

// Import Swiper React components

const TalentRequest = () => {
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log('hello');
  }, [refresh]);
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
      <section>
        {/* section title */}
        <div className="flex gap-3 border-b border-[#A5DBFF] ">
          <img src={headingIcon} alt="" />
          <h1 className="text-3xl font-semibold">
            {' '}
            <span className="text-[#13D1FF]">Talent</span> Request
          </h1>
        </div>

        {/* banner */}
        <div>
          <TalentRequestBanner />
        </div>

        {/* Try Free or view plan option */}
        <div className="lg:flex max-md:p-2 max-md:pb-4 items-center mt-5 justify-between pr-5 rounded-md bg-[#f0f9ff]">
          <div className="flex gap-2 px-2 py-3">
            <span className="mt-1">
              <BsStarFill />
            </span>
            <div>
              <h4 className="font-semibold">Try for free</h4>
              <p className="  text-[#999999] text-sm">
                Our first 2 tries of this feature is free, you dont even need to put in your card,
                though it has limited functionality
              </p>

            </div>
            <div className="max-md:flex max-md:justify-center">
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-white hover:bg-[#00c42b] duration-300 ease-in bg-[#65dc7f] px-10 py-2 border  border-[#00c42b] rounded-lg"
                  type="button"
                >
                  Try Now!
                </button>

                <button
                  className="text-[#13d1ff] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in  px-10 py-2 border border-[#13d1ff] rounded-lg"
                  type="button"
                >
                  View Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
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
                  <div className={`w-full shadow-inner  rounded-xl   ${item?.bgColor}`}>
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

        {/* card */}
        <div>
          <TalentCards />
        </div>
        {/* Talent founds */}
        <div>
          <TalentsFounds />
        </div>
      </section>
      {/* talent Modal */}
      <TalentRequestModal
        refresh={refresh}
        setRefresh={setRefresh}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default TalentRequest;
