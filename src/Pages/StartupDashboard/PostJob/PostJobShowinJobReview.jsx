import React from 'react';
import { BiBookmarks, BiUser } from 'react-icons/bi';
import { GiSandsOfTime } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { GrLinkedin } from 'react-icons/gr';
import { RiShareForwardLine } from 'react-icons/ri';
import logo from '../../../Assets/Dashboard/post_job/compunyLogo.png';

const PostJobShowinJobReview = () => (
  <div>
    {/* Banner Section start */}
    <div className="bg-gradient-to-r border border-[#FEE719] absolute from-[#FEE719]  to-[#fee71926] w-[1160px] h-[160px] rounded-2xl ">
      <h1 className="text-5xl pt-[15px] pl-7 text-[#0B132A] font-[400]">
        Senior Software Engineer
      </h1>
      <div className="flex justify-end mt-[34px] gap-[10px] ">
        <a href="share">
          {' '}
          <BiBookmarks className="text-[#19A5FF] text-2xl text-right" />
        </a>
        <a href="/">
          {' '}
          <RiShareForwardLine className="text-[#19A5FF] text-2xl text-right mr-[30px]" />
        </a>
      </div>
    </div>
    {/* Banner End  */}

    {/* Icon For company  */}
    <div className="relative  right-[-36px] top-[104px]">
      <div className="flex gap-[10px] items-center">
        <div className="bg-white  w-[131px] rounded-full shadow-2xl shadow-[#DDB6FF]  p-10">
          <img src={logo} alt="" />
        </div>
        <h3 className="font-bold text-[14px]">Shadowing</h3>
      </div>
      <div className="flex gap-4 text-[#999999] font-semibold mt-[8px]">
        <p>Posted</p>
        <p>2 Day ago</p>
      </div>
    </div>

    {/* Paragraph   */}
    <div className="mt-[121px] lg:flex ">
      <div className="lg:w-[850px] lg:px-[66px]">
        <p>A</p>
        <ul className="pl-5" style={{ listStyleType: 'disc' }}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>

        <h1 className=" mt-[30px] font-semibold text-2xl">Mentor:</h1>
        <div
          className="w-[330px] bg-blue-400"
          style={{ border: '2px solid rgba(25, 165, 255, 1)' }}
        >
          {' '}
        </div>

        <div className="bg-gradient-to-r w-[734px] mt-4 border border-[#FEE719] from-[#FEE719]  to-white  rounded-2xl ">
          <h1 className="text-[16px] pt-[15px] px-4 text-[#0B132A] font-semibold">Mentor Name</h1>
          <p className="px-4">Description</p>
          <div className="flex justify-end p-[4px] ">
            <a href="linkdin">
              <GrLinkedin className="text-[#19A5FF] text-2xl rounded-full text-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[330px] lg:border-l-2 pl-4  border-t-2  lg:border-t-0">
        <div>
          <h1 className="font-semibold text-2xl mb-3">Skills Required:</h1>
          <div className="bg-[#F0F9FF] w-[156px] rounded-md ">
            <p className="text-sm px-[10px] py-[8px] ">Front-End Developer</p>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="bg-[#F0F9FF]  rounded-md ">
              <p className="text-sm px-[25px] py-[8px] ">UI / UX</p>
            </div>
            <div className="bg-[#F0F9FF] text-center rounded-md ">
              <p className="text-sm py-[8px] px-[45px]">Javascript 3.5v</p>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="bg-[#F0F9FF] text-center rounded-md ">
              <p className="text-sm py-[8px] px-[22px]">HTMl</p>
            </div>
            <div className="bg-[#F0F9FF]  rounded-md ">
              <p className="text-sm px-[25px] py-[8px] ">React</p>
            </div>
          </div>
          <div className="bg-[#F0F9FF] mt-3 w-[300px] rounded-md ">
            <p className="text-sm px-[25px] py-[8px] ">Basic Java Knowledge (JDK 14.2 Above)</p>
          </div>
          <div className="bg-[#F0F9FF] mt-3 w-[170px] rounded-md ">
            <p className="text-sm px-[10px] py-[8px] ">Github Version Control</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[16px] mt-3 mb-3">Salary Offered:</h1>
          <div className="">
            <div className="bg-[#F0F9FF] mt-3 w-[122px] flex items-center gap-3 rounded-md ">
              <p className="text-sm pl-[25px] py-[8px] ">40,000</p>
              <p className="pr-[25px] font-semibold">$</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[16px] mt-3 mb-3">Location:</h1>
          <div className="">
            <div className="bg-[#F0F9FF] mt-3 w-[109px] flex items-center gap-3 rounded-md ">
              <p className="text-sm pl-[15px] py-[8px] ">
                <GoLocation />
              </p>
              <p className="pr-[15px] ">Remote</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[16px] mt-3 mb-3">Number of Applicants:</h1>
          <div className="">
            <div className="bg-[#F0F9FF] mt-3 w-[90px] flex items-center gap-3 rounded-md ">
              <p className="text-sm pl-[20px] py-[8px] ">
                <BiUser />
              </p>
              <p className="pr-[25px] ">34</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[16px] mt-3 mb-3">Apply Before:</h1>
          <div className="">
            <div className="bg-[#F0F9FF] mt-3 w-[170px] flex items-center gap-3 rounded-md ">
              <p className="text-sm pl-[15px] py-[8px] ">
                <GiSandsOfTime className="text-red-500" />
              </p>
              <p className="pr-[15px] font-bold ">2 Day 21 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end Paragraph  */}

    <div className="flex justify-center gap-4 mt-10">
      <button type="button" className="px-[46px] py-[21px] bg-[#0B132A] rounded-md text-white">
        Post Public Job
      </button>
      <button
        type="button"
        className="px-[46px] py-[21px] border-2 border-[#0B132A]  rounded-md text-black"
      >
        Edit
      </button>
    </div>
  </div>
);

export default PostJobShowinJobReview;
