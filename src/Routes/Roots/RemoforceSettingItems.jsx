import React from 'react';
import { HiOutlineUser, HiOutlineUsers } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import settingIcon from '../../Assets/RemoForceDashboard/dashboard/Setting icon.svg';

// Array of settings Items Tabs
const data = [
  {
    title: 'Profile',
    path: '/remoforce-dashboard/settings',
    icon: <HiOutlineUser className="inline-block text-xl pr-1 mb-px" />,
  },
  {
    title: 'Skill & Preference',
    path: '/remoforce-dashboard/skill-preference',
    icon: <HiOutlineUser className="inline-block pr-1 text-xl mb-px" />,
  },
  {
    title: 'Education',
    path: '/remoforce-dashboard/add-education',
    icon: <HiOutlineUser className="inline-block pr-1 text-xl mb-px" />,
  },
  {
    title: 'Work Experience',
    path: '/remoforce-dashboard/add-work-experience',
    icon: <HiOutlineUser className="inline-block pr-1 text-xl mb-px" />,
  },
  {
    title: 'Projects',
    path: '/remoforce-dashboard/add-project',
    icon: <HiOutlineUsers className="inline-block pr-1 text-xl mb-px" />,
  },
  {
    title: 'Account Settings',
    path: '/remoforce-dashboard/account-settings',
    icon: <HiOutlineUser className="inline-block pr-1 text-xl mb-px" />,
  },
];
function RemoForceSettingsItems({ children }) {
  return (
    <section className="flex flex-col  w-full">
      <div className="flex w-full h-1/2 items-center justify-evenly flex-nowrap">
        <img src={settingIcon} alt="settings-icon" width="30px" />
        <h1 className="text-4xl font-semibold w-11/12">Settings</h1>
      </div>
      <div className="h-[2px] w-full bg-slate-500 mt-4 mb-1" />
      <div className="h-full lg:h-4 mb-6 py-2 ">
        <nav className="flex justify-start gap-y-5   w-[fit-content] list-none font-semibold text-sm items-center flex-wrap ">
          {data.map((item) => (
            <li className=" text-xs lg:text-md 2xl:text-base" key={Math.random()}>
              <NavLink
                className={({ isActive }) =>
                  ` border-b-[3px] px-1.5   py-1.5 font-medium lg:p-2.5 xl:p-4 ${
                    isActive ? ' border-[#19A5FF]  text-[#19A5FF]' : ''
                  }`
                }
                to={item.path}
              >
                {item.icon}
                {item.title}
              </NavLink>
            </li>
          ))}
        </nav>
      </div>
      <div className="">{children}</div>
    </section>
  );
}

export default RemoForceSettingsItems;
