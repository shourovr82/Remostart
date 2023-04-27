import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiChevronLeft, BiPlus } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import AuthContext from '../../../../Context/AuthContext';

import { getStoredJob, setJob } from '../../../../Hooks/useLocalStorage';

const GigsJobs = () => {
  //  All Functional is ok . You now work with only onSubmit
  // const [storedJob, setStoredJob] = useState({});
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  // get stored values
  const location = useLocation();
  const path = location.pathname.split('/');
  const jobName = path[path.length - 1];

  const storedData = getStoredJob(jobName);

  const experience = [1, 2, 3, 4, 5];

  // handle skills state
  const [tag, setTag] = useState('');
  const [skills, setSkills] = useState(storedData?.skills || []);

  // perks state
  const [deliverables, setDeliverables] = useState('');
  const [deliverablesItems, setDeliverablesItems] = useState(storedData?.joiningPerks || []);

  const categoryName = jobName.replace(/-/g, ' ').replace(/\b[a-z]/g, (c) => c.toUpperCase());

  // const getStoredItem = (key) => JSON.parse(localStorage.getItem('public-job')) || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // handle skills input button

  const changeHandler = (e) => {
    setTag(e.target.value);
  };
  const handleTags = () => {
    setSkills([...skills, tag]);
    setTag('');
  };

  // handle perk
  const changeDeliverableskHandler = (e) => {
    setDeliverables(e.target.value);
  };

  const handleDeliverables = () => {
    setDeliverablesItems([...deliverablesItems, deliverables]);
    setDeliverables('');
  };

  const onSubmit = (data) => {
    const gigsData = {
      ...data,
      email: user?.user?.email || serviceUser?.email,
      startupsProfilePhoto: user?.user?.profilePhoto || '',
      startupsName: user?.user?.fullName || serviceUser?.fullName,
      categoryName,
      skills,
      apiPath: jobName,
      joiningPerks: deliverablesItems,
      jobStatus: 'active',
    };

    setJob(jobName, gigsData);
    navigate('/dashboard/post-job/gigs/review');
  };
  return (
    <div>
      <div className="flex gap-4 items-center">
        <Link to="/dashboard/post-job">
          <BiChevronLeft className="border p-1 text-4xl rounded border-black" />
        </Link>
        <p className="text-2xl font-semibold">Gigs</p>
      </div>
      <p className="border-[#BCBCBC] bg-[#BCBCBC] border mt-2" />
      <p className="text-gray-400 mt-6 lg:mt-1">
        You need someone to do simple task, small tasks, no matter how small the task is, post it
        here and our talents will do the tasks for you
      </p>

      {/* Start Form  */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* internship title */}
        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Gigs Title</label>
          <input
            type="Text"
            name="title"
            {...register('title', {
              required: true,
            })}
            id="title"
            defaultValue={storedData?.title}
            placeholder="Eg. Remostarts"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.title && (
              <span className="text-red-400 ">
                {errors.title?.type === 'required' && 'Please provide your Internship title'}
              </span>
            )}
          </p>
        </div>

        {/* Input Job Description  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Gigs Description</label>
          <textarea
            type="Text"
            name="description"
            {...register('description', {
              required: true,
            })}
            id="description"
            defaultValue={storedData?.description}
            placeholder="Write your description"
            className="lg:w-3/4 h-40 w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.description && (
              <span className="text-red-400 ">
                {errors.description?.type === 'required' &&
                  'Please provide your internship Description'}
              </span>
            )}
          </p>
        </div>

        {/* Section Of Skills Required */}

        <div className="mt-5">
          <label className="block font-semibold text-gray-900">Gig Requirement</label>
          <p className="border-[#BCBCBC] lg:w-9/12 bg-[#BCBCBC] border mt-2" />
        </div>

        <div className="mt-5 lg:flex items-start justify-between">
          <div className="">
            <label htmlFor="">Years</label>
            <select
              {...register('experience', {
                required: true,
              })}
              className="select lg:w-[80px]  mt-1 w-full block font-semibold border 
                       border-gray-400 rounded-md "
            >
              <option defaultValue={storedData?.experience || 'select a year'}>
                {storedData?.experience || 0}
              </option>
              {experience.map((D) => (
                <option key={Math.random()}>{D}</option>
              ))}
            </select>
            <p className="pt-2">
              {errors.experience && (
                <span className="text-red-400 ">
                  {errors.experience?.type === 'required' && 'Please provide your Number Of Years'}
                </span>
              )}
            </p>
          </div>

          {/* Experience Year Input Field */}

          <div>
            <label className="block font-semibold text-gray-900">Experience (Optional)</label>
            <p className="p-3 lg:w-[50px] rounded-md shadow-sm">Years</p>
          </div>

          {/* Skill Section  */}

          {/* Skill required input field */}

          <div>
            <div className="space-y-1 text-sm lg:w-[600px]">
              <label className="block font-semibold text-gray-900">Skills Required</label>
              <div className=" lg:w-[50rm]  pr-2 rounded-md border border-[#BCBCBC]  text-gray-900 justify-between flex items-center">
                <input
                  type="text"
                  name="inputSkill"
                  value={tag}
                  onChange={changeHandler}
                  placeholder="node js"
                  className="px-4 py-3 focus:ring-0 focus:outline-none border border-transparent rounded-md outline-none w-full focus:bg-transparent"
                />
                <button onClick={handleTags} type="button">
                  <BiPlus className="border p-1 text-xl" />
                </button>
              </div>

              {skills.length ? (
                <div className="flex flex-wrap px-2 py-4 gap-3 mt-8 w-[300px] border h-auto bg-[#F0F9FF]">
                  {skills.length &&
                    skills.map((value, index) => (
                      <div key={Math.random()}>
                        <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                          <p>{value}</p>
                          <button
                            type="button"
                            onClick={() => {
                              setSkills(skills.filter((val) => val !== value));
                            }}
                          >
                            <RxCross2 className="font-bold text-sm" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p>No skills selected</p>
              )}

              <p className="pt-2">
                {errors.Skills && (
                  <span className="text-red-400 ">
                    {errors.Skills?.type === 'required' && 'Please provide your Skills'}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        <hr className="border bg-gray-500 mt-6" />

        {/* Input Salary  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Compensation</label>

          <div className="flex justify-between items-center w-full md:w-[30%]  rounded-md border border-[#BCBCBC focus:outline-none]">
            <input
              type="number"
              name="salary"
              {...register('salary', {
                required: true,
              })}
              id="salary"
              defaultValue={storedData?.salary}
              placeholder="Compensation Range"
              className="w-full  px-4 py-3 focus:ring-0 border border-transparent rounded-md  text-gray-900 focus:outline-none "
            />
            <p
              className="text-xl pr-3 font-semibol
                      "
            >
              ₳
            </p>
          </div>
          <p className="pt-2">
            {errors.salary && (
              <span className="text-red-400 ">
                {errors.salary?.type === 'required' && 'Please provide  Salary'}
              </span>
            )}
          </p>
        </div>

        {/* Date Section  */}
        <span className="text-md font-medium">Gig Duration</span>
        <div className="lg:flex   lg:gap-20 ">
          <div className="space-y-1 mt-5 text-sm">
            <label className="block font-semibold text-gray-900">Starting Date</label>
            <input
              type="date"
              name="startingDate"
              {...register('startingDate', {
                required: true,
              })}
              id="startingDate"
              defaultValue={storedData?.startingDate}
              className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
            />
            <p className="pt-2">
              {errors.startingDate && (
                <span className="text-red-400 ">
                  {errors.startingDate?.type === 'required' && 'Please provide your Starting Date'}
                </span>
              )}
            </p>
          </div>
          <div className="space-y-1 mt-5 text-sm">
            <label className="block font-semibold text-gray-900">Ending Date</label>
            <input
              type="date"
              name="endingDate"
              {...register('endingDate', {
                required: true,
              })}
              defaultValue={storedData?.endingDate}
              id="endingDate"
              className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
            />
            <p className="pt-2">
              {errors.endingDate && (
                <span className="text-red-400 ">
                  {errors.endingDate?.type === 'required' && 'Please provide your Ending Date'}
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Apply Before</label>
          <input
            type="date"
            name="applyBefore"
            {...register('applyBefore', {
              required: true,
            })}
            defaultValue={storedData?.applyBefore}
            id="applyBefore"
            className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.applyBefore && (
              <span className="text-red-400 ">
                {errors.applyBefore?.type === 'required' && 'Please provide your Apply Before'}
              </span>
            )}
          </p>
        </div>

        {/* Joining Perks  */}

        <div>
          <div className="space-y-1 mt-5 text-sm ">
            <label className="block font-semibold text-gray-900">Deliverables</label>
            <div className="lg:flex justify-between max-lg:space-y-5 gap-4 items-start">
              <div className="lg:w-full pr-2 gap-3 rounded-md border border-[#BCBCBC]  text-gray-900 justify-between flex items-center">
                <input
                  type="text"
                  name="deliverables"
                  value={deliverables}
                  onChange={changeDeliverableskHandler}
                  placeholder="Add Deliverables"
                  className="px-4 py-3 focus:ring-0 focus:outline-none border  rounded-md border-transparent outline-none w-full focus:bg-transparent"
                />
                <button onClick={handleDeliverables} type="button">
                  <BiPlus className="border p-1 text-3xl" />
                </button>
              </div>

              {deliverablesItems.length ? (
                <div className="flex flex-wrap  rounded-md  px-2 py-4 gap-3  lg:w-full border h-auto bg-[#F0F9FF]">
                  {deliverablesItems.length &&
                    deliverablesItems.map((value, index) => (
                      <div key={Math.random()}>
                        <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                          <p>{value}</p>
                          <button
                            type="button"
                            onClick={() => {
                              setDeliverablesItems(
                                deliverablesItems.filter((val) => val !== value)
                              );
                            }}
                          >
                            <RxCross2 className="font-bold text-sm " />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="w-full  bg-[#F0F9FF] py-5 text-center rounded-md">
                  No deliverables added
                </div>
              )}
            </div>

            <p className="pt-2">
              {errors.Skills && (
                <span className="text-red-400 ">
                  {errors.Skills?.type === 'required' && 'Please provide your Skills'}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Submit Button  */}

        <button
          type="submit"
          className="px-6 py-3 mt-10  lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
        >
          Review Gigs
        </button>
      </form>
    </div>
  );
};

export default GigsJobs;
