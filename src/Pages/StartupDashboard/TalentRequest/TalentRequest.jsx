import React, { useEffect, useState } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { HiOutlineGlobe } from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
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
        {/* <div className="lg:flex max-md:p-2 max-md:pb-4 items-center mt-5 justify-between pr-5 rounded-md bg-[#f0f9ff]"> */}
        <div className="max-md:flex max-md:flex-col lg:grid grid-cols-6  items-center justify-between  w-full  gap-2 px-2   mt-5  max-lg:pr-1 2xl:pr-5 rounded-md bg-[#f0f9ff] py-7">
          <div className="flex gap-2  col-span-4 ">
            <span className="mt-1">
              <BsStarFill className="text-[#ff9900]" />
            </span>
            <div>
              <h4 className="font-semibold">Try for free</h4>
              <p className="  text-[#999999] text-sm">
                Our first 2 tries of this feature is free, you dont even need to put in your card,
                though it has limited functionality
              </p>
            </div>
          </div>
          <div className="flex col-span-2   max-lg:mt-5  w-full justify-around max-lg:gap-5 lg:justify-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:bg-[#00c42b] duration-300 ease-in bg-[#65dc7f] px-7 2xl:px-10  py-2 border  border-[#00c42b] rounded-lg"
              type="button"
            >
              Try Now!
            </button>

            <button
              className="text-[#13d1ff] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in  px-7 2xl:px-10 py-2 border border-[#13d1ff] rounded-lg"
              type="button"
            >
              View Plan
            </button>
          </div>
        </div>
        {/* </div> */}

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
