/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { FiEdit } from 'react-icons/fi';
import { TbShare3 } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import AuthContext from '../../Context/AuthContext';

import startupBanner from '../../Assets/Dashboard/startupBanner.svg';

const Profile = () => {
  const { serviceUser } = useContext(AuthContext);

  const { user } = useSelector((state) => state.auth);
  const { data: startupData } = useQuery(['startupData'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/startup/startup-preview/${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );

  return (
    <section className="flex flex-col">
      <div className="">
        {/* banner */}
        <div>
          <img
            className="shadow-xl rounded-xl h-full shadow-[#e4d9f4]"
            src={startupBanner}
            alt=""
          />

          <div className="w-full flex max-md:flex-col  mt-5 justify-between  items-center">
            {/* share button */}
            <div className="max-md:hidden">
              <button
                type="button"
                className="rounded-full bg-white p-2.5 shadow-xl shadow-[#d5c2f3]"
              >
                <TbShare3 className="text-[#19a5ff] text-3xl" />
              </button>
            </div>
            {/* startup logo */}
            <div className=" relative lg:ml-5">
              <div className="shadow-xl shadow-[#e4d9f4] lg:absolute flex justify-center items-center -top-20 h-[150px] 2xl:h-[160px] bg-[#ebffef] 2xl:w-[160px] w-[150px] rounded-full">
                <img
                  className="w-24 object-cover h-24 rounded-full"
                  src={startupData?.startupIcon}
                  alt=""
                />
              </div>
            </div>
            {/* social icons */}
            <div className="flex max-md:mt-3  col-span-3 items-center gap-2 ">
              <a
                target="_blank"
                href={startupData?.linkedIn}
                className="rounded-full bg-white p-2 shadow-xl shadow-[#d5c2f3]"
                rel="noreferrer"
              >
                <SocialIcon style={{ height: 40, width: 40 }} url={startupData?.linkedIn} />
              </a>
              <a
                target="_blank"
                href={startupData?.foundersDetail?.linkedin}
                className="rounded-full bg-white p-2 shadow-xl shadow-[#d5c2f3]"
                rel="noreferrer"
              >
                <SocialIcon style={{ height: 40, width: 40 }} url="https://www.instagram.com" />
              </a>
              <button
                type="button"
                className="rounded-full bg-white p-2 shadow-xl shadow-[#d5c2f3]"
              >
                <SocialIcon style={{ height: 40, width: 40 }} url="https://twitter.com" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* company details */}

      <div className="flex mt-20 justify-center">
        <div className="flex gap-3 w-full relative flex-col justify-center items-center">
          <h1 className="text-3xl 2xl:text-5xl font-bold">
            {startupData?.startupName ? startupData?.startupName : 'Startup Name'}
          </h1>
          <p className="font-medium">
            {startupData?.startupSlogan ? startupData?.startupSlogan : 'Add Slogan'}
          </p>
          <hr className="w-[50%] rounded-full border-[2px]" />

          <div className="w-[90%] mx-auto">
            <p className="text-center mt-3 py-10 text-black  font-medium ">
              {startupData?.startupDescription
                ? startupData?.startupDescription
                : 'Please add the description !'}
            </p>
          </div>

          <Link to="/dashboard/settings/profile" className="absolute right-2 bottom-2">
            <FiEdit className="text-[#999999] text-2xl" />
          </Link>
          <hr className=" rounded-full w-full border-[2px]" />
        </div>
      </div>

      {/* company details domain and what we do */}

      <div className="lg:grid max-md:space-y-5 grid-cols-6 mt-7  gap-5 justify-between">
        <div className="col-span-4 relative p-5 designationCard rounded-lg ">
          <h1 className="text-2xl font-medium">What we do?</h1>
          <p className="mt-5 py-10 text-black  font-medium">
            {startupData?.worksIn ? startupData?.worksIn : 'We would like to know about you !'}
          </p>
          <Link to="/dashboard/settings/profile" className="absolute right-2 top-2">
            <FiEdit className="text-[#999999] text-2xl" />
          </Link>
        </div>
        <div className="col-span-2 bg-[#f0f9ff] p-3 shadow-inner rounded-lg">
          <div className="flex justify-center">
            <h1 className="text-[#19a5ff] text-2xl">Domains</h1>
          </div>

          <div className="flex flex-wrap gap-2 gap-y-3 mt-3 ">
            {startupData?.domains?.length ? (
              startupData?.domains?.map((domain) => (
                <p className="border-[#19a5ff]  duration-300 ease-in hover:shadow-xl hover:shadow-[#d3cef2] text-sm font-semibold bg-white  px-2 py-0.5  border rounded-full">
                  {domain}
                </p>
              ))
            ) : (
              <div className="flex justify-center  w-full mt-10">
                <h3 className="text-[#999999] text-center text-lg">Add Domains</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Industry Work */}
      <div className="flex flex-col space-y-8">
        {/* Domins and work */}

        <div className="flex flex-col  space-y-5 ">
          {/* Reviews and ratings */}
          {/* <div className="space-y-8">
                        <h1 className="text-3xl mt-7 font-medium">Reviews and Ratings</h1>

                        <div className="flex gap-8 flex-wrap justify-center items-center md:justify-start md:items-start">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 rounded-xl shadow-2xl p-2 lg:p-6">
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress blue">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value absolute">
                                            <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                                <span className="font-bold text-xl">90%</span>
                                                <span className="inline-block text-md absolute">
                                                    Overall Rating{' '}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress yellow">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value absolute">
                                            <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                                <span className="font-bold text-xl">70%</span>
                                                <span className="inline-block text-md absolute">
                                                    Work-Life
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="progress pink">
                                        <span className="progress-left">
                                            <span className="progress-bar" />
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value absolute">
                                            <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                                <span className="font-bold text-xl">60%</span>
                                                <span className="inline-block text-md absolute">
                                                    Skill
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="progress blue">
                                        <span className="progress-right">
                                            <span className="progress-bar" />
                                        </span>
                                        <div className="progress-value absolute">
                                            <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                                <span className="font-bold text-xl">50%</span>
                                                <span className="inline-block text-md absolute">
                                                    Satisfaction
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

          {/* Employee reviews */}
          {/* <div className="space-y-8 flex flex-col">
                        <h1 className="text-3xl mt-7 font-medium">Employee reviews</h1>
                        {employeReview.map((item) => (
                            <div key={item.id} className="flex space-x-5">
                                <div className="flex flex-col mt-1">
                                    <span className="text-xs font-medium">{item.userName}</span>
                                    <span className="text-xs">{item.date}</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <span className="font-bold text-base">{item.heading}</span>
                                    <p className="text-xs font-normal w-2/3">{item.pTag}</p>
                                    <button
                                        type="button"
                                        className="border border-[#712EFF] text-[#712EFF] text-sm py-2 px-4"
                                    >
                                        Read More <BsArrowRight className="inline-block ml-1" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;

// <div className="flex flex-col lg:flex-row">
//   <div className="flex flex-col w-full lg:w-1/2 pr-0 lg:pr-4 justify-center items-center md:justify-start md:items-start">
//     <div className="flex items-end space-x-1">
//       <img
//         src={startupData?.startupIcon}
//         className="w-12 rounded-full md:h-20  md:w-20"
//         alt=""
//       />
//       <h5 className="text-2xl md:text-3xl font-semibold mb-2">{startupData?.startupName}</h5>
//     </div>
//     <div className="flex flex-col my-3 space-y-4 text-center md:text-left">
//       <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
//         {startupData?.startupSlogan}
//       </h1>
//       <p className="text-sm font-semibold break-words ">{startupData?.startupDescription}</p>
//     </div>

//     <div className="lg:flex mt-8 space-x-10 hidden">
//       <Link
//         to="/dashboard/all-jobs"
//         className="px-8 py-5 bg-[#0B132A] inline-block text-white text-xs font-semibold rounded-md"
//       >
//         See Open Jobs
//       </Link>

//       <Link className="px-8 py-5 text-xs inline-block font-semibold rounded-md border-2 border-black">
//         Share <RiShareForwardLine className="inline-block text-lg" />
//       </Link>
//     </div>

//     <div className="hidden lg:flex justify-end space-x-3 text-3xl mr-20 mt-14">
//       {/* github link */}
//       {startupData?.socialLinks?.Github && (
//         <a target="_blank" href={startupData?.socialLinks?.Github} rel="noreferrer">
//           <BsGithub />
//         </a>
//       )}
//       {/* github link */}
//       {startupData?.socialLinks?.Instagram && (
//         <a target="_blank" href={startupData?.socialLinks?.Instagram} rel="noreferrer">
//           <BsInstagram className="text-rose-500" />
//         </a>
//       )}
//       {/* github link */}
//       {startupData?.socialLinks?.Linkedin && (
//         <a target="_blank" href={startupData?.socialLinks?.Linkedin} rel="noreferrer">
//           <BsLinkedin className="text-[#0e76a8]" />
//         </a>
//       )}
//       {/* github link */}
//       {startupData?.socialLinks?.Twitter && (
//         <a target="_blank" href={startupData?.socialLinks?.Twitter} rel="noreferrer">
//           <BsTwitter className="text-[#1DA1F2]" />
//         </a>
//       )}
//     </div>
//   </div>

//   {/* carousel */}
//   <div className="w-full lg:w-1/2 px-6 md:px-0">
//     <Carousel
//       showThumbs={false}
//       showArrows={false}
//       showStatus={false}
//       autoPlay={true}
//       infiniteLoop={true}
//       emulateTouch
//     >
//       {startupData?.homePageImages &&
//         startupData?.homePageImages.map((homePageImage) => (
//           <div key={Math.random()} className="">
//             <img src={homePageImage} alt="" className="aspect-square object-contain" />
//           </div>
//         ))}
//     </Carousel>
//   </div>
//   <div className="flex mt-8 space-x-10 justify-center items-center lg:hidden">
//     <Link
//       to="/dashboard/all-jobs"
//       className="px-8 py-5 bg-[#0B132A] inline-block text-white text-xs font-semibold rounded-md"
//     >
//       See Open Jobs
//     </Link>

//     <Link className="px-8 py-5 text-xs inline-block font-semibold rounded-md border-2 border-black">
//       {/* Share <RiShareForwardLine className="inline-block text-md" /> */}
//     </Link>
//   </div>
// </div>
