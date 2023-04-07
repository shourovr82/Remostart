/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import { BiUser } from 'react-icons/bi';

// import userLogo from '../../Assets/Images/avatar.png';
import defaultUserLogo from '../../Assets/Images/avatar.png';
import logo from '../../Assets/Images/logoBlack.svg';
import AuthContext from '../../Context/AuthContext';
import useAuth from '../../Hooks/useAuth';
import SignOutModal from '../../Modal/signOutModal/SignOutModal';
import SupportModal from '../../Modal/supportModal/SupportModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  // const { user } = useSelector((state) => state.auth);
  const [currentUser, setCurrentUser] = useState({});
  const { serviceUser } = useContext(AuthContext);
  // logout functionality
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const role = Cookies.get('userRole');

  const handleClick = () => {
    const elem = document.activeElement;
    setIsMenuOpen(false);
    if (elem) {
      elem?.blur();
    }
  };

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <>
      <div className="py-5 mx-auto bg-white relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo linking */}
          <Link
            to="/"
            aria-label="Smart Home"
            title="Smart Home"
            className="inline-flex items-center"
          >
            <img src={logo} alt="logo" />
          </Link>
          {/* desktop nav menu */}
          <ul className="items-center hidden space-x-8 lg:flex">
            {/* Start Up */}

            {(!role || role === 'undefined' || role === 'startup') &&
              serviceUser?.role !== 'remoforce' && (
                <li>
                  <Link
                    to="/startup"
                    aria-label="startup"
                    title="startup"
                    className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Startup
                  </Link>
                </li>
              )}
            {(role === 'startup' || serviceUser?.role === 'startup') && (
              <li>
                <Link
                  to="/dashboard/all-jobs"
                  aria-label="dashboard"
                  title="dashboard"
                  className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
              <li>
                <Link
                  to="/remoforce-dashboard/dashboard"
                  aria-label="dashboard"
                  title="dashboard"
                  className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {(role === 'startup' ||
              role === 'remoforce' ||
              serviceUser?.role === 'remoforce' ||
              serviceUser?.role === 'startup') && (
              <li>
                {/* The button to open modal */}
                <label
                  htmlFor="supportModal"
                  className="font-normal cursor-pointer text-xs  hidden lg:block tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Support
                </label>
              </li>
            )}

            {/* Remo Force */}

            {(!role ||
              role === 'undefined' ||
              role === 'remoforce' ||
              serviceUser?.role === 'remoforce') && (
              <li>
                <Link
                  to="/remoforce"
                  aria-label="RemoForce"
                  title="RemoForce"
                  className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  RemoForce
                </Link>
              </li>
            )}
            {/* Blog */}
            <li>
              <Link
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
            {/* dropdown: Desktop */}
            <li>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <BiUser className="inline-block " />
                  <span className="inline-block rotate-180 ">^</span>
                </label>

                <ul
                  tabIndex={0}
                  className="menu bg-white dropdown-content  shadow rounded-xl overflow-hidden w-[280px] mt-4 "
                >
                  {/* conditional rendering  */}
                  {(token || serviceUser?.role) && (
                    <li className="bg-[#f3f4f6]">
                      <div className="flex  py-1.5 flex-row justify-center items-center text-center">
                        <div className="w-1/3 pl-4">
                          <img
                            src={user?.user?.profilePhoto || defaultUserLogo}
                            className="rounded-full w-10 h-10"
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
                  {token || serviceUser?.email ? (
                    <>
                      {(role === 'startup' || serviceUser?.role === 'startup') && (
                        <li>
                          <Link
                            // onClick={handleClick}
                            to="/dashboard/profile"
                            aria-label="profile"
                            title="profile"
                            className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Profile
                          </Link>
                        </li>
                      )}
                      {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                        <li>
                          <Link
                            // onClick={handleClick}
                            to="/remoforce-dashboard/profile"
                            aria-label="profile"
                            title="profile"
                            className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Profile
                          </Link>
                        </li>
                      )}

                      {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                        <li>
                          <Link
                            // onClick={handleClick}
                            to="/remoforce-dashboard"
                            aria-label="dashboard"
                            title="dashboard"
                            className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Dashboard
                          </Link>
                        </li>
                      )}
                      {(role === 'startup' || serviceUser?.role === 'startup') && (
                        <li>
                          <Link
                            // onClick={handleClick}
                            to="/dashboard"
                            aria-label="Dashboard"
                            title="Dashboard"
                            className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Dashboard
                          </Link>
                        </li>
                      )}
                      {(role === 'startup' || serviceUser?.role === 'startup') && (
                        <li>
                          <Link
                            // onClick={handleClick}
                            to="/dashboard/settings/profile"
                            aria-label="Settings"
                            title="Settings"
                            className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Settings
                          </Link>
                        </li>
                      )}
                      {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                        <li>
                          <Link
                            to="/remoforce-dashboard/settings"
                            aria-label="Settings"
                            title="Settings"
                            className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Settings
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
                    <div className="flex flex-col justify-center  rounded-md items-center gap-2">
                      <li className="w-full text-center">
                        <Link
                          to="/login"
                          className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 "
                        >
                          Login
                        </Link>
                      </li>
                      <li className="w-full ">
                        <Link
                          to="/signup"
                          className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400  "
                        >
                          Sign Up
                        </Link>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </li>
          </ul>

          {/* Hamburger: upto lg */}
          <div className="lg:hidden">
            <button
              type="button"
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
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
            </button>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 !bg-white border rounded shadow-sm !z-50">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/dashboard/profile"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div>
                      <button
                        type="button"
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Hamburger menu */}
                  <nav>
                    <ul className="space-y-4">
                      {/* Hamburger startup */}
                      {(!role || role === 'undefined' || role === 'startup') &&
                        serviceUser?.role !== 'remoforce' && (
                          <li>
                            <Link
                              to="/startup"
                              aria-label="startup"
                              title="startup"
                              className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <button onClick={() => setIsMenuOpen(false)} type="button">
                                Startup
                              </button>
                            </Link>
                          </li>
                        )}

                      {/* Hamburger startup */}

                      {/* Hamburger Remoforce */}

                      {(!role || role === 'undefined' || role === 'remoforce') &&
                        serviceUser?.role !== 'startup' && (
                          <li>
                            <Link
                              to="/remoforce"
                              aria-label="RemoForce"
                              title="RemoForce"
                              className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              {' '}
                              <button onClick={() => setIsMenuOpen(false)} type="button">
                                RemoForce
                              </button>
                            </Link>
                          </li>
                        )}

                      {/* Hamburger Remoforce */}

                      {/* Hamburger blog */}
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          <button onClick={() => setIsMenuOpen(false)} type="button">
                            Blog{' '}
                          </button>
                        </Link>
                      </li>

                      <li>
                        <div className="dropdown dropdown-center ">
                          <label tabIndex={0} className="cursor-pointer">
                            <BiUser className="inline-block" />{' '}
                            <span className="inline-block rotate-180">^</span>
                          </label>
                          {isMenuOpen && (
                            <ul
                              tabIndex={0}
                              className="menu dropdown-content overflow-hidden shadow rounded-xl w-[280px] mt-4 bg-white"
                            >
                              {token && (
                                <li className="bg-[#f3f4f6]">
                                  <div className="flex  py-1.5 flex-row justify-center items-center text-center">
                                    <div className="w-1/3 pl-4">
                                      <img
                                        src={user?.user?.profilePhoto || defaultUserLogo}
                                        className="rounded-full w-10 h-10"
                                        alt=""
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col space-y-1 items-start">
                                      <span className="text-[#6B7280] text-sm font-normal">
                                        Signed in as
                                      </span>
                                      <span className="text-sm font-normal">
                                        {user && user?.user?.email}
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              )}
                              {/* Hamburger conditional rendering */}
                              {token || serviceUser?.role ? (
                                <>
                                  {(role === 'startup' || serviceUser?.role === 'startup') && (
                                    <li>
                                      <Link
                                        // onClick={handleClick}
                                        to="/dashboard/profile"
                                        aria-label="profile"
                                        title="profile"
                                        className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                      >
                                        Profile
                                      </Link>
                                    </li>
                                  )}
                                  {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                                    <li>
                                      <Link
                                        // onClick={handleClick}
                                        to="/remoforce-dashboard/profile"
                                        aria-label="Profile"
                                        title="Profile"
                                        className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                      >
                                        Profile
                                      </Link>
                                    </li>
                                  )}

                                  {(role === 'startup' || serviceUser?.role === 'startup') && (
                                    <li>
                                      <Link
                                        // onClick={handleClick}
                                        to="/dashboard/all-jobs"
                                        aria-label="dashboard"
                                        title="dashboard"
                                        className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                      >
                                        Dashboard
                                      </Link>
                                    </li>
                                  )}
                                  {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                                    <li>
                                      <Link
                                        // onClick={handleClick}
                                        to="/remoforce-dashboard"
                                        aria-label="Dashboard"
                                        title="Dashboard"
                                        className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                      >
                                        Dashboard
                                      </Link>
                                    </li>
                                  )}

                                  {(role === 'startup' || serviceUser?.role === 'startup') && (
                                    <li>
                                      <Link
                                        // onClick={handleClick}
                                        to="/dashboard/settings/profile"
                                        aria-label="Settings"
                                        title="Settings"
                                        className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                      >
                                        Settings
                                      </Link>
                                    </li>
                                  )}
                                  {(role === 'remoforce' || serviceUser?.role === 'remoforce') && (
                                    <li>
                                      <Link
                                        // onClick={handleClick}
                                        to="/remoforce-dashboard/settings"
                                        aria-label="Settings"
                                        title="Settings"
                                        className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                      >
                                        Settings
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
                                  <li className="w-full    rounded-xl  text-center">
                                    <Link
                                      to="/login"
                                      className="font-normal  text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 "
                                    >
                                      <button
                                        className="w-full text-start"
                                        type="button"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        Login
                                      </button>
                                    </Link>
                                  </li>

                                  <li className="w-full ">
                                    <Link
                                      to="/signup"
                                      className="font-normal text-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400  "
                                    >
                                      <button
                                        className="w-full text-start"
                                        type="button"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        Sign Up
                                      </button>
                                    </Link>
                                  </li>
                                </div>
                              )}
                            </ul>
                          )}
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <SignOutModal />
      <SupportModal />
    </>
  );
};

export default Navbar;
