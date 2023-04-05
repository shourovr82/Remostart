/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminRoot = () => (
  // const { user } = useSelector((state) => state.auth);

  <div>
    <div className="drawer drawer-mobile ">
      <input id="dashboardOpener" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>
      <div className="drawer-side  ">
        <label htmlFor="dashboardOpener" className="drawer-overlay" />
        <ul className="menu p-4 w-64 bg-info  text-base-100">
          <li className="mb-10">
            {/* {user?.user?.role==='admin' && ( */}
            <div className="flex">
              <div>Admins Dashboard</div>
              {/* <div>
                                        <img
                                            className="w-12 h-12 rounded-full"
                                            src={user?.photoURL || Avatar}
                                            alt=""
                                        />
                                    </div> */}
            </div>
            {/* )} */}
          </li>
          {/* {isUser && (
                            <div className="flex">
                                <div>{user?.displayName}s Dashboard</div>
                                <div>
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={user?.photoURL || Avatar}
                                        alt=""
                                    />
                                </div>
                            </div>
                        )} */}

          {/* {user?.user?.role==='admin'  && ( */}

          <li>
            <NavLink to="/admin-dashboard/all-blogs">All Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/add-blogs">Add Blogs</NavLink>
          </li>
          {/* <li>
                                    <NavLink to="/admin-dashboard/make-admin">Make admin</NavLink>
                                </li> */}

          {/* )} */}

          {/* {isUser && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/my-blogs">My Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/my-bookmark">My Bookmark</NavLink>
                                </li>
                            </>
                        )} */}
        </ul>
      </div>
    </div>
  </div>
);
export default AdminRoot;
