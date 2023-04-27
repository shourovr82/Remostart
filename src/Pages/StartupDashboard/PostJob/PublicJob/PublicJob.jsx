/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { BiChevronLeft, BiPlus } from 'react-icons/bi';
import { BsCalendarRange } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../../../Context/AuthContext';
import { setJob } from '../../../../Hooks/useLocalStorage';

const PublicJob = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/');
  const jobName = path[path.length - 1];
  const getStoredItem = (key) => JSON.parse(localStorage.getItem('public-job')) || {};
  const storedJob = getStoredItem();
  const categoryName = jobName.replace(/-/g, ' ').replace(/\b[a-z]/g, (c) => c.toUpperCase());

  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const experiences = [1, 2, 3, 4, 5];

  // handle
  const [tag, setTag] = useState('');
  const [skills, setSkills] = useState(storedJob?.skills || []);
  const [applyBeforeDate, setApplyBeforeDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const changeHandler = (e) => {
    setTag(e.target.value);
  };

  const handleTags = () => {
    setSkills([...skills, tag]);
    setTag('');
  };

  // data posting to ls
  const onSubmit = (data) => {
    const jobData = {
      ...data,
      applyBefore: applyBeforeDate?.toLocaleDateString(),
      email: user?.user?.email || serviceUser?.email,
      startupsProfilePhoto: user?.user?.profilePhoto || '',
      startupsName: user?.user?.fullName || serviceUser?.fullName,
      categoryName,
      skills,
      apiPath: jobName,
      jobStatus: 'active',
    };
    setJob(jobName, jobData);
    navigate('/dashboard/post-job/public-job/review');
  };

  // const skillsValue = ['react', 'javascript', 'mongodb', 'express js'];
  return (
    <div>
      <div className="flex gap-4 items-center">
        <Link to="/dashboard/post-job">
          <BiChevronLeft className="border p-1 text-4xl rounded border-black" />
        </Link>
        <p className="text-2xl font-semibold">Public Job</p>
      </div>
      <p className="border-[#BCBCBC] bg-[#BCBCBC] border mt-2" />
      <p className="text-gray-400 mt-6 lg:mt-1">
        Jobs posted here are not limited to only our vetted talents. We open it to everyone on the
        internet and any and everyone can apply.
      </p>

      {/* Start Form  */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Job Title</label>
          <input
            type="Text"
            name="title"
            {...register('title', {
              required: true,
            })}
            defaultValue={storedJob?.title}
            id="title"
            placeholder="Eg. remostarts"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.title && (
              <span className="text-red-400 ">
                {errors.title?.type === 'required' && 'Please provide your Job Title'}
              </span>
            )}
          </p>
        </div>

        {/* Input Job Description  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Job Description</label>
          <textarea
            name="description"
            {...register('description', {
              required: true,
            })}
            defaultValue={storedJob?.description}
            id="description"
            placeholder="Description..."
            className="lg:w-3/4 h-40 w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.description && (
              <span className="text-red-400 ">
                {errors.description?.type === 'required' && 'Please provide your Job Description'}
              </span>
            )}
          </p>
        </div>

        {/* Section Of Skills Required */}

        <div className="mt-5 ">
          <label className="block font-semibold text-gray-900">Skills Required</label>
          <p className="border-[#BCBCBC]  lg:w-9/12 bg-[#BCBCBC] border mt-2" />
        </div>

        <div className="mt-5 lg:flex items-start justify-between">
          <div className="">
            <label htmlFor="">Years</label>
            <select
              {...register('experience', {
                required: true,
              })}
              defaultValue={storedJob?.experience}
              className="select lg:w-[67px]  mt-1 w-full block font-semibold border 
                     border-gray-400 rounded-md "
            >
              <option hidden>0</option>
              {experiences.map((D) => (
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
            {/* <select
                            {...register('Experience', {})}
                            className="select lg:w-[100px] block  mt-1 w-full font-semibold border 
                     border-gray-400 rounded-md "
                        >
                            <option hidden>Years</option>
                            {Years.map((D) => (
                                <option key={Math.random()}>{D}</option>
                            ))}
                        </select> */}
            <p>Years</p>
          </div>

          {/* Skill required input filed */}

          <div>
            <div className="space-y-1 text-sm w-full  lg:w-[300px]">
              <label className="block font-semibold text-gray-900">Skills Required</label>
              <div className="border lg:w-[50rm]  pr-2 rounded-md  border-[#BCBCBC]  text-gray-900 justify-between flex items-center">
                <input
                  id="skills"
                  type="text"
                  name="skills"
                  value={tag}
                  onChange={changeHandler}
                  placeholder="Eg. remostarts"
                  className="px-4  py-3 w-full focus:border-transparent focus:ring-0 border-transparent border rounded-md focus:outline-none"
                />
                <button onClick={handleTags} type="button">
                  <BiPlus className="border p-1 text-xl" />
                </button>
              </div>

              <div>
                {skills.length ? (
                  <div className="flex flex-wrap px-2 py-4 gap-3  mt-5 rounded-md lg:w-[300px] border h-auto bg-[#F0F9FF]">
                    {skills.map((value) => (
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
                  <div className="flex flex-wrap px-2 py-4 gap-3 mt-8 rounded-md lg:w-[300px] border h-auto bg-[#F0F9FF]">
                    <p>No skill Selected yet</p>
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
        </div>
        <p className="border bg-gray-500 mt-6" />

        {/* Input Location  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Location</label>
          <input
            type="Text"
            name="location"
            {...register('location', {
              required: true,
            })}
            id="location"
            defaultValue={storedJob?.location}
            placeholder="Eg. Remote"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.location && (
              <span className="text-red-400 ">
                {errors.location?.type === 'required' && 'Please provide your Location'}
              </span>
            )}
          </p>
        </div>

        {/* Input Salary  */}

        <div className="space-y-1 mt-5 ">
          <label className="block font-semibold text-gray-900">
            Salary <span className="text-xs">( per Month )</span>
          </label>
          <input
            type="number"
            name="Salary"
            {...register('salary', {
              required: true,
            })}
            defaultValue={storedJob?.salary}
            id="salary"
            placeholder="Salary..."
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.salary && (
              <span className="text-red-400 ">
                {errors.salary?.type === 'required' && 'Please provide  Salary'}
              </span>
            )}
          </p>
        </div>

        {/* Input Apply Before  */}

        <div className="space-y-1 mt-5 text-sm">
          <label htmlFor="applyBefore" className="block font-semibold text-gray-900">
            Apply Before
          </label>

          <div className="lg:w-[362px] w-full px-4 py-3 rounded-md border  border-[#E5E7EB] flex items-center text-gray-900">
            <div>
              <BsCalendarRange />
            </div>

            <DatePicker
              className="border-transparent border focus:ring-transparent"
              showIcon
              id="applyBefore"
              selected={applyBeforeDate}
              onChange={(date) => setApplyBeforeDate(date)}
            />
          </div>

          {/* <input
            type="date"
            name="applyBefore"
            {...register('applyBefore', {
              required: true,
            })}
            defaultValue={storedJob?.applyBefore}
            id="applyBefore"
            placeholder="Eg. remostarts"
            className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          /> */}
          <p className="pt-2">
            {errors.applyBefore && (
              <span className="text-red-400 ">
                {errors.applyBefore?.type === 'required' && 'Please provide your Apply Before'}
              </span>
            )}
          </p>
        </div>

        {/* Submit Button  */}

        <button
          type="submit"
          className="px-6 py-3 mt-10 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
        >
          Post Public Job
        </button>
      </form>
    </div>
  );
};

export default PublicJob;
