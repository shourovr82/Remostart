import React from 'react';
import { BiBookmarks, BiUser } from 'react-icons/bi';
import { FiMessageSquare } from 'react-icons/fi';
import { GiSandsOfTime } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import logo from '../../../Assets/Dashboard/post_job/compunyLogo.png';

const StartupPostJobJobReview = () => (
  <div>
    {/* Banar Section start */}
    <div className="bg-gradient-to-r border border-[#A5DBFF] absolute from-[#B18CFF]  to-[#F0F9FF] w-[1160px] h-[160px] rounded-2xl ">
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
        <p>Description</p>
        <ul className="pl-5" style={{ listStyleType: 'disc' }}>
          <li>1</li>
          <li>1</li>
          <li>2</li>
          <li>2</li>
          <li>3</li>
          <li>3</li>
        </ul>

        <h1 className=" mt-[30px] font-semibold text-2xl">Job Requirements:</h1>
        <div
          className="w-[330px] bg-blue-400"
          style={{ border: '2px solid rgba(25, 165, 255, 1)' }}
        />

        <div className="mt-8">
          <h1 className="text-[16px] font-semibold">Experience Required:</h1>
          <div className="bg-[#F0F9FF] w-[129px] mt-2 text-center rounded-md ">
            <p className="text-sm font-semibold px-[25px] py-[8px] ">0-1 Years</p>
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
              <p className="text-sm py-[8px] px-[22px]">Html</p>
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
    <div className="w-full border mt-4" />
    <div className="mt-14">
      <h1 className="text-2xl font-semibold ">Application Requests:</h1>
      <div className="table mx-auto  mt-4 border rounded-xl ">
        <table className="w-[855px] ">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                <div className="flex items-center justify-center">S.No</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                <div className="flex items-center justify-center">Name</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                <div className="flex items-center justify-center">Email Id</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                <div className="flex items-center justify-center">Contact</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                <div className="flex items-center justify-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
              <td className="p-2 border-r">1</td>
              <td className="p-2 border-r">John Doe</td>
              <td className="p-2 border-r">john@gmail.com</td>
              <td className="p-2 border-r ">
                <a className="flex justify-center" href="/">
                  <FiMessageSquare />
                </a>
              </td>
              <td className="flex gap-5 justify-center">
                <button
                  type="button"
                  className="bg-blue-500  p-2 text-white hover:shadow-lg text-xs font-semibold"
                >
                  <TiTick />
                </button>
                <button
                  type="button"
                  className="bg-red-500 p-2 rounded-md text-white hover:shadow-lg text-xs font-semibold"
                >
                  <RxCross2 />
                </button>
              </td>
            </tr>
            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
              <td className="p-2 border-r">2</td>
              <td className="p-2 border-r">Adam Smith</td>
              <td className="p-2 border-r">adam@gmail.com</td>
              <td className="p-2 border-r ">
                <a className="flex justify-center" href="/">
                  <FiMessageSquare />
                </a>
              </td>
              <td className="flex gap-5 justify-center">
                <button
                  type="button"
                  className="bg-blue-500  p-2 text-white hover:shadow-lg text-xs font-semibold"
                >
                  <TiTick />
                </button>
                <button
                  type="button"
                  className="bg-red-500 p-2 rounded-md text-white hover:shadow-lg text-xs font-semibold"
                >
                  <RxCross2 />
                </button>
              </td>
            </tr>
            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
              <td className="p-2 border-r">3</td>
              <td className="p-2 border-r">Jean Doe</td>
              <td className="p-2 border-r">jean@gmail.com</td>
              <td className="p-2 border-r ">
                <a className="flex justify-center" href="/">
                  <FiMessageSquare />
                </a>
              </td>
              <td className="flex gap-5 justify-center">
                <button
                  type="button"
                  className="bg-blue-500  p-2 text-white hover:shadow-lg text-xs font-semibold"
                >
                  <TiTick />
                </button>
                <button
                  type="button"
                  className="bg-red-500 p-2 rounded-md text-white hover:shadow-lg text-xs font-semibold"
                >
                  <RxCross2 />
                </button>
              </td>
            </tr>
            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
              <td className="p-2 border-r">4</td>
              <td className="p-2 border-r">Jean Doe</td>
              <td className="p-2 border-r">jean@gmail.com</td>
              <td className="p-2 border-r ">
                <a className="flex justify-center" href="/">
                  <FiMessageSquare />
                </a>
              </td>
              <td className="flex gap-5 justify-center">
                <button
                  type="button"
                  className="bg-blue-500  p-2 text-white hover:shadow-lg text-xs font-semibold"
                >
                  <TiTick />
                </button>
                <button
                  type="button"
                  className="bg-red-500 p-2 rounded-md text-white hover:shadow-lg text-xs font-semibold"
                >
                  <RxCross2 />
                </button>
              </td>
            </tr>
            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
              <td className="p-2 border-r">5</td>
              <td className="p-2 border-r">Jean Doe</td>
              <td className="p-2 border-r">jean@gmail.com</td>
              <td className="p-2 border-r text-center">
                <a className="flex justify-center" href="/">
                  <FiMessageSquare />
                </a>
              </td>
              <td className="flex gap-5 justify-center">
                <button
                  type="button"
                  className="bg-blue-500  p-2 text-white hover:shadow-lg text-xs font-semibold"
                >
                  <TiTick />
                </button>
                <button
                  type="button"
                  className="bg-red-500 p-2 rounded-md text-white hover:shadow-lg text-xs font-semibold"
                >
                  <RxCross2 />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center lg:pr-4 flex justify-end !w-full">
          <button type="button" className="text-[#19A5FF] font-semibold">
            show more..
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default StartupPostJobJobReview;
