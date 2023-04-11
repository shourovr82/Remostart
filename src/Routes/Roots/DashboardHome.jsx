import React from 'react';
import { AiOutlineFileAdd, AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';
import { RiHandCoinLine, RiTeamLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { NavLink, Outlet } from 'react-router-dom';
import SignOutModal from '../../Modal/signOutModal/SignOutModal';
import DashboardNavbar from '../../Pages/CommonPages/DashboardNavbar';

const DashboardHome = () => {
  const active = 'flex bg-[#E3D5FF] flex-col space-y-2 w-4/5 py-8 rounded-md items-center';
  const notActive = 'flex flex-col space-y-2 w-4/5 py-8 rounded-md items-center';
  return (
    <>
      <DashboardNavbar />
      <section className="flex">
        <div className=" hidden  w-[160px]  text-center space-y-4 h-full flex-col lg:flex items-center rounded-md py-10 cardShadow">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <FaRegUserCircle className="text-xl" />
            <span className="font-normal text-sm">Profile</span>
          </NavLink>
          <NavLink
            to="/dashboard/all-jobs"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <RxDashboard className="text-xl" />
            <span className="font-normal text-sm">DashBoard</span>
          </NavLink>
          <NavLink
            to="/dashboard/post-job"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <AiOutlineFileAdd className="text-xl" />
            <span className="font-normal text-sm">Post Job</span>
          </NavLink>
          <NavLink
            to="/dashboard/talent-request"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <RiHandCoinLine className="text-xl" />
            <span className="font-normal text-sm leading-4">
              Talent <br /> Request
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/reviews"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <MdOutlineRateReview className="text-xl" />
            <span className="font-normal text-sm leading-4">
              Reviews & <br /> Ratings
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/manage-teams"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <RiTeamLine className="text-xl" />
            <span className="font-normal text-sm leading-4">
              Manage <br /> Teams
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/settings/profile"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <AiOutlineSetting className="text-xl" />
            <span className="font-normal text-sm leading-4">Settings</span>
          </NavLink>
          <button type="button">
            <label
              htmlFor="logoutModal"
              className="w-full  
            text-center flex flex-col gap-2 text-[#181818] justify-center items-center p-8 cursor-pointer rounded-md
            font-normal text-sm leading-4"
            >
              <span>
                <AiOutlineLogout className="text-xl text-center" />
              </span>
              Logout
            </label>
          </button>
        </div>
        <div className="lg:pl-8 w-full h-full">
          <Outlet />
        </div>
      </section>
      <SignOutModal />
    </>
  );
};

export default DashboardHome;
