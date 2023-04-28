import React from 'react';
import { AiOutlineLogout, AiOutlineProfile } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { SlEnvelopeOpen } from 'react-icons/sl';
import { TbUsers } from 'react-icons/tb';
import { VscVerified } from 'react-icons/vsc';
import { NavLink, Outlet } from 'react-router-dom';
import settingIcon from '../../Assets/RemoForceDashboard/dashboard/Setting icon.svg';

const RemoForceDashboardRoot = () => {
  const active = 'flex bg-[#E3D5FF] flex-col space-y-2 w-4/5 py-8 rounded-md items-center';
  const notActive = 'flex flex-col space-y-2 w-4/5 py-8 rounded-md items-center';
  return (
    <section className="flex">
      <div className="hidden w-[160px]  text-center space-y-4 h-full flex-col lg:flex items-center rounded-md py-10 cardShadow">
        <NavLink
          to="/remoforce-dashboard/profile"
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          <FaRegUserCircle className="text-xl" />
          <span className="font-normal text-sm">Profile</span>
        </NavLink>
        <NavLink
          to="/remoforce-dashboard/dashboard"
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          <RxDashboard className="text-xl" />
          <span className="font-normal text-sm">DashBoard</span>
        </NavLink>
        <NavLink
          to="/remoforce-dashboard/all-jobs"
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          <SlEnvelopeOpen className="text-xl" />
          <span className="font-normal text-sm">Job</span>
        </NavLink>
        <NavLink
          to="/remoforce-dashboard/my_job"
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          <AiOutlineProfile className="text-xl" />
          <span className="font-normal text-sm leading-4">My jobs</span>
        </NavLink>
        <NavLink
          to="/remoforce/verify"
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          <VscVerified className="text-xl text-[#00c42b]" />
          <span className="font-normal text-sm leading-4 text-[#00c42b]">Get Verified</span>
        </NavLink>
        <NavLink
          to="/remoforce-dashboard/shadowing"
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          <TbUsers className="text-xl text-[#ff9900]" />
          <span className="font-normal text-sm text-[#ff9900] leading-4">Shadowing</span>
        </NavLink>
        <NavLink
          to="/remoforce-dashboard/settings"
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          <img src={settingIcon} alt="" />
          <span className="font-normal text-sm leading-4">Settings</span>
        </NavLink>
        <button className="max-lg:hidden" type="button">
          <label
            htmlFor="logoutModal"
            className="w-full  
            text-center flex flex-col gap-2 text-[#ff1830] justify-center items-center p-8 cursor-pointer rounded-md
            font-normal text-sm leading-4"
          >
            <span>
              <AiOutlineLogout className="text-[#ff1830] text-xl text-center" />
            </span>
            Logout
          </label>
        </button>
        {/* <NavLink to="/login" className={({ isActive }) => (isActive ? active : notActive)}>
                    <AiOutlineLogout className="text-xl" />
                    <span className="font-normal text-sm leading-4">Logout</span>
                </NavLink> */}
      </div>
      <div className="lg:pl-8 w-full h-full">
        <Outlet />
      </div>
    </section>
  );
};

export default RemoForceDashboardRoot;
