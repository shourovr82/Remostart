/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Cookies from 'js-cookie';
import React, { useContext, useState } from 'react';

import { BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/logoBlack.svg';
import SignOutModal from '../../Modal/signOutModal/SignOutModal';
import SupportModal from '../../Modal/supportModal/SupportModal';
// import SignOutModal from '../../Modal/SignOutModal/SignOutModal';
import avatarLogo from '../../Assets/Images/avatar.png';
import AuthContext from '../../Context/AuthContext';

const DashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const role = Cookies.get('userRole');
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);

  // logout functionality
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('userRole');
    navigate('/');
  };
  const handleClick = () => {
    const elem = document.activeElement;
    setIsMenuOpen(false);
    if (elem) {
      elem?.blur();
    }
  };
  const { user } = useSelector((state) => state.auth);

  const active =
    'flex bg-[#E3D5FF] flex-col mt-2 space-y-2 lg:w-4/5 lg:py-8 rounded-md items-start lg:items-center';
  const notActive =
    'flex flex-col mt-2  space-y-2 lg:w-4/5 lg:py-8 rounded-md lg:items-center items-start';
  return (
    <>
      <div className="navbar bg-base-100  flex justify-between px-0 py-2 md:py-4">
        <div className="navbar-start block lg:hidden">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {(role === 'startup' || serviceUser?.role === 'startup') && (
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Profile
                  </NavLink>
                </li>
              )}
              {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                <li>
                  <NavLink
                    to="/remoforce-dashboard/profile"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Profile
                  </NavLink>
                </li>
              )}

              {/* <li>
                                <Link
                                    to="/dashboard/profile"
                                    className={({ isActive }) => (isActive ? active : notActive)}
                                >
                                    Profile
                                </Link>
                            </li> */}
              {(role === 'startup' || serviceUser?.role === 'startup') && (
                <li>
                  <NavLink
                    to="/dashboard/all-jobs"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                <li>
                  <NavLink
                    to="/remoforce-dashboard/dashboard"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}

              {(role === 'startup' || serviceUser?.role === 'startup') && (
                <li>
                  <NavLink
                    to="/dashboard/post-job"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Post Job
                  </NavLink>
                </li>
              )}

              {(role === 'startup' || serviceUser?.role === 'startup') && (
                <li>
                  <NavLink
                    to="/dashboard/talent-request"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Talent Request
                  </NavLink>
                </li>
              )}
              {(role === 'startup' || serviceUser?.role === 'startup') && (
                <li>
                  <NavLink
                    to="/dashboard/reviews"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Reviews & Ratings
                  </NavLink>
                </li>
              )}
              {(role === 'startup' || serviceUser?.role === 'startup') && (
                <li>
                  <NavLink
                    to="/dashboard/manage-teams"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Manage Teams
                  </NavLink>
                </li>
              )}
              {(role === 'startup' || serviceUser?.role === 'startup') && (
                <li>
                  <NavLink
                    to="/dashboard/settings/profile"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Settings
                  </NavLink>
                </li>
              )}

              {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                <li>
                  <NavLink
                    to="/remoforce-dashboard/my_job"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    my job
                  </NavLink>
                </li>
              )}
              {/* {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                <li>
                  <NavLink
                    to="/remoforce/verify"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Get Verify
                  </NavLink>
                </li>
              )} */}
              {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                <li>
                  <NavLink
                    to="/remoforce-dashboard/all-jobs"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Jobs
                  </NavLink>
                </li>
              )}
              {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                <li>
                  <NavLink
                    to="/remoforce-dashboard/shadowing"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Shadowing
                  </NavLink>
                </li>
              )}
              {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                <li>
                  <NavLink
                    to="/remoforce-dashboard/settings"
                    className={({ isActive }) => (isActive ? active : notActive)}
                  >
                    Settings
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <Link to="/">
            <img src={logo} className="w-20 h-10 lg:w-24 lg:h-11" alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="items-center space-x-4 lg:space-x-8 flex lg:flex text-2xl">
            {(role === 'startup' || serviceUser?.role === 'startup') && (
              <li>
                <Link
                  to="/startup"
                  aria-label="startup"
                  title="startup"
                  className="font-normal text-xs  hidden lg:block tracking-wide text-gray-700 hover:text-deep-purple-accent-400"
                >
                  Startup
                </Link>
              </li>
            )}
            {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
              <li>
                <Link
                  to="/remoforce"
                  aria-label="remoforce"
                  title="remoforce"
                  className="font-normal text-xs  hidden lg:block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Remoforce
                </Link>
              </li>
            )}

            {(role === 'startup' || serviceUser?.role === 'startup') && (
              <li>
                <Link
                  to="/dashboard/all-jobs"
                  aria-label="Dashboard"
                  title="Dashboard"
                  className="font-normal text-xs  hidden lg:block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
              <li>
                <Link
                  to="/remoforce-dashboard"
                  aria-label="Dashboard"
                  title="Dashboard"
                  className="font-normal text-xs  hidden lg:block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Dashboard
                </Link>
              </li>
            )}

            <li>
              {/* The button to open modal */}
              <label
                htmlFor="supportModal"
                className="font-normal cursor-pointer text-xs  hidden lg:block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Support
              </label>

              {/* <Link
                            to='/remoforce'
                            aria-label='RemoForce'
                            title='RemoForce'
                            className='font-normal text-xs  hidden lg:block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Support
                        </Link> */}
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className="font-normal text-xs  hidden lg:block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item" />
              </div>
            </li>
            <li>
              <div className="dropdown dropdown-end !z-50">
                <button type="button" onClick={() => setIsMenuOpen(true)}>
                  <label tabIndex={0} className="flex  cursor-pointer items-center">
                    <BiUser className="inline-block" />
                    <span className="inline-block rotate-180">^</span>
                  </label>
                </button>

                {isMenuOpen && (
                  <ul
                    tabIndex={0}
                    className="menu bg-white dropdown-content  shadow rounded-box w-[280px] mt-4 "
                  >
                    {/* conditional rendering  */}
                    {(token || serviceUser?.role) && (
                      <li className="bg-[#f3f4f6]">
                        <div className="flex  py-1.5 flex-row justify-center items-center text-center">
                          <div className="w-1/3 ">
                            <img
                              src={user?.user?.profilePhoto || avatarLogo}
                              className="rounded-full w-[50px] h-[50px]  object-cover"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-1 flex-col space-y-1 items-start">
                            <span className="text-[#6B7280] text-sm font-normal">Signed in as</span>
                            <span className="text-sm font-normal">
                              {(user && user?.user?.email) || (serviceUser && serviceUser?.email)}
                            </span>
                          </div>
                        </div>
                      </li>
                    )}
                    {token || serviceUser?.role ? (
                      <>
                        {/* startup profile */}
                        {(role === 'startup' || serviceUser?.role === 'startup') && (
                          <li>
                            <Link
                              // onClick={handleClick}
                              to="/dashboard/profile"
                              aria-label="Profile"
                              title="Profile"
                              className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <button
                                className="w-full text-start"
                                onClick={() => setIsMenuOpen(false)}
                                type="button"
                              >
                                Profile{' '}
                              </button>
                            </Link>
                          </li>
                        )}
                        {/* remoforce profile */}
                        {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                          <li>
                            <Link
                              // onClick={handleClick}
                              to="/remoforce-dashboard/profile"
                              aria-label="Profile"
                              title="Profile"
                              className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <button
                                className="w-full text-start"
                                onClick={() => setIsMenuOpen(false)}
                                type="button"
                              >
                                Profile{' '}
                              </button>
                            </Link>
                          </li>
                        )}

                        {/* startup hamburger dashboard */}
                        {(role === 'startup' || serviceUser?.role === 'startup') && (
                          <li>
                            <Link
                              // onClick={handleClick}
                              to="/dashboard/all-jobs"
                              aria-label="Dashboard"
                              title="Dashboard"
                              className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <button
                                className="w-full  text-start"
                                onClick={() => setIsMenuOpen(false)}
                                type="button"
                              >
                                Dashboard{' '}
                              </button>
                            </Link>
                          </li>
                        )}

                        {/* remoforce hamburger dashboard */}
                        {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                          <li>
                            <Link
                              // onClick={handleClick}
                              to="/remoforce-dashboard"
                              aria-label="Dashboard"
                              title="Dashboard"
                              className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <button
                                className="w-full  text-start"
                                onClick={() => setIsMenuOpen(false)}
                                type="button"
                              >
                                Dashboard{' '}
                              </button>
                            </Link>
                          </li>
                        )}

                        {/* startup setting button */}
                        {(role === 'startup' || serviceUser?.role === 'startup') && (
                          <li>
                            <Link
                              // onClick={handleClick}
                              to="/dashboard/settings/profile"
                              aria-label="settings"
                              title="settings"
                              className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              {' '}
                              <button
                                className="w-full text-start"
                                onClick={() => setIsMenuOpen(false)}
                                type="button"
                              >
                                Settings
                              </button>
                            </Link>
                          </li>
                        )}
                        {/* remoforce  setting button */}
                        {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                          <li>
                            <Link
                              // onClick={handleClick}
                              to="/remoforce-dashboard/settings"
                              aria-label="Settings"
                              title="Settings"
                              className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <button
                                className="w-full  text-start"
                                onClick={() => setIsMenuOpen(false)}
                                type="button"
                              >
                                Settings{' '}
                              </button>
                            </Link>
                          </li>
                        )}

                        <li>
                          <label
                            className=' className="text-black font-normal text-xs tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"'
                            htmlFor="logoutModal"
                          >
                            Logout
                          </label>
                        </li>
                      </>
                    ) : (
                      <div className="flex flex-col justify-center items-center gap-2">
                        <li className="w-full text-center">
                          <Link
                            to="/login"
                            className="font-normal text-xs tracking-wide text-gray-700 hover:text-deep-purple-accent-400 "
                          >
                            Login
                          </Link>
                        </li>
                        <li className="w-full ">
                          <Link
                            to="/signup"
                            className="font-normal text-xs tracking-wide text-gray-700 hover:text-deep-purple-accent-400  "
                          >
                            Sign Up
                          </Link>
                        </li>
                      </div>
                    )}
                  </ul>
                )}
              </div>
            </li>
          </ul>
          {/* calling modal for logout */}
        </div>
      </div>

      <SupportModal />
      <SignOutModal />
    </>
  );
};

export default DashboardNavbar;
