import React from 'react';
import { HiOutlineUser, HiOutlineUsers } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const SettingsItems = ({ children }) => (
    <section className="flex flex-col w-full">
        <h1 className="text-4xl font-semibold">Settings</h1>
        <div className="h-[2px] w-full bg-slate-500 mt-4" />
        <div>
            <nav className="flex list-none mt-5 items-start   pb-2 mb-6 w-[fit-content] flex-wrap">
                <li className="py-2 space-x-1">
                    <NavLink
                        className={({ isActive }) =>
                            ` border-b-[3px] px-1.5   py-2 font-medium lg:p-4 ${
                                isActive ? ' border-[#3b82f6]  text-[#3b82f6]' : ''
                            }`
                        }
                        to="/dashboard/settings/profile"
                    >
                        <HiOutlineUser className="inline-block  text-xl pr-1 mb-px" />
                        Profile
                    </NavLink>
                </li>
                <li className="py-2 space-x-1">
                    <NavLink
                        className={({ isActive }) =>
                            ` border-b-[3px] px-1.5   py-2 font-medium lg:p-4 ${
                                isActive ? 'font-medium  border-[#3b82f6]  text-[#3b82f6]' : ''
                            }`
                        }
                        to="/dashboard/settings/general"
                    >
                        <HiOutlineUsers className="inline-block pr-1 text-xl mb-px" />
                        General
                    </NavLink>
                </li>
            </nav>
        </div>
        <div>{children}</div>
    </section>
);

export default SettingsItems;
