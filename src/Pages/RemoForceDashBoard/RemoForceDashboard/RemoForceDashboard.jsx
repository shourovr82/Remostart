import React from 'react';
import { AiOutlineInbox } from 'react-icons/ai';
import { BsBoundingBox } from 'react-icons/bs';
import { FaBriefcase, FaFileContract } from 'react-icons/fa';
import { GoMailRead } from 'react-icons/go';
import { HiOutlineUsers } from 'react-icons/hi';
import { RiTeamFill, RiTodoLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import bg1 from '../../../Assets/RemoForceDashboard/dashboard/cardwithouticonbackground.png';
import atlas from '../../../Assets/RemoForceDashboard/dashboard/worldmap.png';

const buttons = [
  {
    icon: <BsBoundingBox className="text-md " />,
    name: 'Gigs',
    color: 'text-black',
    link: '/remoforce-dashboard/gigs',
  },
  {
    icon: <FaFileContract className="text-md " />,
    name: 'Contract',
    color: 'text-black',
    link: '/remoforce-dashboard/contracts',
  },
  {
    icon: <AiOutlineInbox className="text-md " />,
    name: 'Internship',
    color: 'text-black',
    link: '/remoforce-dashboard/internship',
  },
];
const button = [
  {
    icon: <HiOutlineUsers className="text-md " />,
    name: 'Shadowing',
    color: 'text-black',
    link: '/remoforce-dashboard/shadowing-jobs',
  },
  {
    icon: <FaBriefcase className="text-md " />,
    name: 'Public Job',
    color: 'text-black',
    link: '/remoforce-dashboard/public-jobs',
  },
  {
    icon: <RiTodoLine className="text-md " />,
    name: 'Private Jos',
    color: 'text-black',
    link: '/remoforce-dashboard/private-jobs',
  },
];

const RemoForceDashboard = () => (
  <section className="w-full flex flex-col justify-center items-center ">
    <div className="grid grid-cols-1 lg:grid-cols-1">
      {/* card with background image container start */}
      <div className="col-span-3 w-full  lg:h-full sm:w-full shadow-xl rounded-xl shadow-[rgba(77, 0, 180, 0.25)]  mt-6 flex flex-col justify-center items-center pt-8 lg:pt-4 md:mt-0 relative">
        <img
          src={bg1}
          alt="slides"
          className="object-cover w-full max-md:h-[320px] lg:h-full rounded-xl   "
        />
        <div className=" bg-white opacity-90 absolute shadow-xl rounded-xl w-[85%] lg:w-[90%] lg:h-[60%] z-0 mx-auto grid place-items-center p-4 md:p-4 lg:p-6 xl:p-10">
          <div className="w-full m-4 mb-1 flex flex-col items-start ">
            <h4 className="text-black text-md font-bold w-[100%]">
              {`    Let's Start Your Journey Now!`}
            </h4>
            {/* <p className="w-full lg:w-[80%] text-sm text-black mt-1"></p> */}
          </div>
          <div className=" w-full flex justify-end">
            <button type="button" className="w-[40%] text-sm text-white  m-4 flex no-wrap">
              Know More <span className="w-[20px]">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 mt-3">
        <div className="shadow-xl rounded-xl hover:shadow-[rgba(77, 0, 180, 0.25)] cursor-pointer m-3  flex flex-col justify-start items-start">
          <div className="rounded-xl w-[4rem] p-4 border border-[#FFC46B] bg-[#ffc46b73] flex justify-center m-4 mb-1">
            <RiTeamFill className="inline-block text-xl text-orange-700" />
          </div>
          <div className="w-full m-4 mb-1 flex flex-col items-start">
            <h4 className="text-black text-sm font-bold w-[100%]">
              {`  Let's Start Your Journey Now!`}
            </h4>
            {/* <p className="w-[80%] text-xs text-gray-400 mt-1">
              <span className="font-semibold">(Get Started)</span> Scroll down the page for more
              recommendations. Below you will find a variety of products from all categories on
              Steam that may be of interest to you.
              <br /> Looking for recommendations?
            </p> */}
          </div>
          <div className=" w-full flex justify-end">
            <button type="button" className="w-[40%] text-xs  text-[#FFC46B] m-4 flex no-wrap">
              Know More <span className="w-[20px] ">&rarr;</span>
            </button>
          </div>
        </div>

        {/* cards with icons container start */}
        <div className="shadow-xl rounded-xl hover:shadow-[rgba(77, 0, 180, 0.25)] cursor-pointer m-3  flex flex-col justify-start items-start">
          <div className="rounded-xl w-[4rem] p-4 border border-[#13D1FF] bg-[#DAF0FF] flex justify-center m-4 mb-1">
            <GoMailRead className="inline-block text-xl text-[#13D1FF] " />
          </div>
          <div className="w-full m-4 mb-1 flex flex-col items-start">
            <h4 className="text-black text-sm font-bold w-[100%]">
              {`  Let's Start Your Journey Now!`}
            </h4>
            {/* <p className="w-[80%] text-xs  text-gray-400 mt-1">
              <span className="font-semibold">(Get Started)</span> Scroll down the page for more
              recommendations. Below you will find a variety of products from all categories on
              Steam that may be of interest to you.
              <br /> Looking for recommendations?
            </p> */}
          </div>
          <div className="w-full flex justify-end">
            <button type="button" className="w-[40%] text-xs   text-[#13D1FF] m-4 flex no-wrap">
              Know More <span className="w-[20px]">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* card section starts */}
    {/* middle sections starts */}
    <div className="lg:relative w-[90%] mt-5">
      {/* section for  world map starts */}
      <div className="flex flex-col w-full justify-center items-center lg:flex-row  my-[5rem] lg:justify-between">
        {/* Group image of world atlas */}
        <div className="w-full lg:w-[45%] lg:absolute lg:left-[55%]">
          <img src={atlas} alt="" className="w-full" />
        </div>

        {/* Show me Opportunities section */}
        <div className="w-full p-[2rem] lg:p-1 lg:w-[55%] lg:z-0">
          <span className="w-full font-bold text-xl pb-3" />
          <div className="w-full">
            <span className="text-3xl font-medium">
              You are <strong className="text-purple-400">exactly</strong> where you{' '}
              <strong className="text-purple-400">need</strong> to be!
            </span>
            <p className="text-sm text-gray-400 mt-2 mb-4">
              {` We at remostart want's to provide you with World full of
                                opportunities for your skill excluding all the resource barriers !`}
            </p>
            <button
              type="button"
              className="w-[70%] text-sm lg:w-[60%] lg:ml-0 ml-[20%] p-1 rounded-md  font-bold  text-[#13D1FF] bg-[#DAF0FF] "
            >
              Show more opportunities
            </button>
          </div>
        </div>
      </div>

      {/* section for connect to the world starts */}
      <div className="flex flex-col w-full lg:flex-row  justify-center items-center mt-[1rem] ">
        {/* Connect to the world text section */}
        <div className="w-full lg:w-[30%] px-[2rem] mb-3  lg:px-1 bg-connect-section bg-right bg-contain bg-no-repeat">
          <h1 className="w-full text-black text-xl font-bold">
            Connect to the world of Opportunities
          </h1>
          {/* <p className="w-[70%] text-sm text-gray-400 mt-1">
            {' '}
            Scroll down the page for more recommendations. Below you will find a variety of products
            from all categories on Steam that may be of interest to you.Looking for recommendations?
            <br />
          </p> */}
          <div className="  text-[#13D1FF] bg-[#DAF0FF] hover:bg-[#DAF0FF] font-bold py-2 px-4 mt-2 mr-16 rounded">
            Explore All jobs &rarr;
          </div>
        </div>

        {/* buttons and icons section */}
        <div className="w-full lg:w-[80%] flex flex-col justify-center items-center cursor-pointer ">
          {/* buttons container */}
          <div className="w-[80%] lg:w-full bg-[#f2faff] lg:mt-1 flex flex-col justify-center items-center rounded-md lg:flex-row no-wrap lg:justify-evenly lg:p-[2rem]">
            {/* button with icons */}
            {button.map((item) => (
              <Link
                to={item?.link}
                className={`flex border rounded-md justify-center items-center shadow-lg lg:text-sm font-medium ${item.color} hover:text-amber-500 bg-white m-[1rem] lg:m-0 p-2 w-[80%] lg:w-[30%]`}
              >
                <span className="mr-1 hover:text-amber-500  ">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-[80%] lg:w-full bg-[#f2faff] lg:mt-[2rem] flex flex-col justify-center items-center rounded-md lg:flex-row no-wrap lg:justify-evenly lg:p-[2rem]">
            {/* button with icons */}
            {buttons?.map((item) => (
              <Link
                to={item?.link}
                className={`flex border rounded-md shadow-lg justify-center items-center lg:text-sm font-medium ${item.color} hover:text-amber-500 bg-white m-[1rem] lg:m-0 p-2 w-[80%] lg:w-[30%]`}
              >
                <span className="mr-1 hover:text-amber-500">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RemoForceDashboard;
