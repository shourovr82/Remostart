import React, { useContext, useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { BiChevronLeft } from 'react-icons/bi';
import { GoPlus } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setJob } from '../../../../Hooks/useLocalStorage';
import AuthContext from '../../../../Context/AuthContext';

const ShadowingJob = () => {
  // handle skill input
  const getStoredItem = (key) => JSON.parse(localStorage.getItem('shadowing')) || {};
  const storedJob = getStoredItem();
  const [tag, setTag] = useState('');
  const [skills, setSkills] = useState((storedJob?.skills?.length && storedJob?.skills) || []);

  // State Of Disable Domains
  const [disableOption, setDisable] = useState(false);
  const [selectedValues, setSelectedValues] = useState(
    (storedJob?.domains?.length && storedJob?.domains) || []
  );
  // get values

  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/');
  const jobName = path[path.length - 1];

  const categoryName = jobName.replace(/-/g, ' ').replace(/\b[a-z]/g, (c) => c.toUpperCase());

  // localStorage data
  const locationData = location?.state && location?.state?.data;

  // Domain Function start
  const [jData, setJData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setJData(jsonData);
    }
    fetchData();
  }, []);

  const [domainValue, setDomainValue] = useState('');
  const [openOtherMenu, setOpenOtherMenu] = useState(false);
  const [otherDomainValue, setOtherDomainValue] = useState('');
  const selectRefTo = useRef(null);

  // handleChangeDomain
  const handleChange = (e) => {
    const selectedOptions = e.target.value;
    setDomainValue(e.target.value);
    if (selectedOptions === 'Other') {
      setOpenOtherMenu(true);
      setTimeout(() => {
        if (selectRefTo.current) {
          selectRefTo.current.focus();
        }
      }, 0);
      return;
    }
    setSelectedValues([...selectedValues, selectedOptions]);
  };
  const handleOtherMenu = (e) => {
    setOtherDomainValue(e.target.value);
  };
  const handleAddOtherDomain = () => {
    if (otherDomainValue) {
      setSelectedValues([...selectedValues, otherDomainValue]);
      setOpenOtherMenu(false);
      setOtherDomainValue('');
    }
  };

  // Disable  Domains
  const handleClick = () => {
    setDisable(true);
  };
  // Cross  Button Domains
  const buttonHandle = () => {
    setDisable(false);
  };

  // domains function end
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit job data to local storage
  const onSubmit = (data) => {
    const { mentorsBio, mentorsName, mentorsLinkedInURL, ...rest } = data;

    const shadowingJobData = {
      ...rest,
      skills,
      domains: selectedValues,
      categoryName,
      mentorsInfo: { mentorsBio, mentorsName, mentorsLinkedInURL },
      apiPath: jobName,
      jobStatus: 'active',
      email: user?.user?.email || serviceUser?.email,
      startupsProfilePhoto: user?.user?.profilePhoto || '',
      startupsName: user?.user?.fullName || serviceUser?.fullName,
    };

    if (shadowingJobData) {
      setJob(jobName, shadowingJobData);
      navigate('/dashboard/post-job/shadowing-job/review');
    }
  };

  // handle skill input button

  const changeHandler = (e) => {
    setTag(e.target.value);
  };
  const handleTags = () => {
    setSkills([...skills, tag]);
    setTag('');
  };

  return (
    <div>
      <div className="flex gap-4 items-center">
        <Link to="/dashboard/post-job">
          <BiChevronLeft className="border p-1 text-4xl rounded border-black" />
        </Link>
        <p className="text-2xl font-semibold">Shadowing</p>
      </div>
      <p className="border-[#BCBCBC] bg-[#BCBCBC] border mt-2" />
      <p className="text-gray-400 mt-6 lg:mt-1">
        The flexible and permissionsless job platform. Its job with social good. Pay talents while
        ADA they are learning on the job, while we do the certification.
      </p>

      {/* Start Form  */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900 ">Shadowing Title</label>
          <input
            type="Text"
            name="title"
            {...register('title', {
              required: true,
            })}
            defaultValue={storedJob?.title}
            id="title"
            placeholder="Shadowing Title"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#e5e5e5]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.title && (
              <span className="text-red-400 ">
                {errors.title?.type === 'required' && 'Please provide your Shadowing Title '}
              </span>
            )}
          </p>
        </div>

        {/* Input ShadowingShadowing Description  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Shadowing Description</label>
          <textarea
            type="Text"
            name="description"
            {...register('description', {
              required: true,
            })}
            id="description"
            defaultValue={storedJob?.description}
            placeholder="Shadowing Description"
            className="lg:w-3/4 h-28 w-full px-4 py-3 rounded-md border border-[#e5e5e5]  text-gray-900 "
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

        <div className="mt-5">
          <label className="block font-semibold text-gray-900">Shadowing Requirement</label>
          <p className="border-[#BCBCBC] lg:w-9/12 bg-[#BCBCBC] border mt-2" />
        </div>

        {/* Skill Section  */}
        <div className="mt-5 lg:flex items-start justify-between">
          <div className="space-y-1 text-sm w-[600px]  ">
            <div className=" mb-5">
              <label className="block font-semibold text-gray-900">Skills Required</label>
              <div className=" lg:w-[50rm] gap-3  pr-3 border-2 mt-2 rounded-md border-[#e5e5e5]  text-gray-900 justify-between flex items-center">
                <input
                  type="text"
                  name="inputSkill"
                  value={tag}
                  onChange={changeHandler}
                  placeholder="Add Skills"
                  className="px-4 py-4 focus:outline-none focus:border-transparent focus:ring-0 border-transparent rounded-md outline-none w-full focus:bg-transparent"
                />
                <button onClick={handleTags} type="button">
                  <GoPlus className="border-[3px] rounded-md border-[#999999] p-1 text-3xl text-[#999999]" />
                </button>
              </div>
            </div>

            {/* skills select */}
            {skills.length ? (
              <div className="flex  flex-wrap px-2 rounded-md py-4 gap-3 mt-8  justify-start border h-auto bg-[#F0F9FF]">
                {skills.map((value, index) => (
                  <div key={Math.random()}>
                    {/* <div className="  text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                                            <button type="button">
                                                <RxCross2 className="font-bold text-sm" />
                                            </button>
                                        </div> */}

                    <button
                      onClick={() => {
                        setSkills(skills.filter((val) => val !== value));
                      }}
                      type="button"
                      className="bg-[#19A5FF] flex text-white text-base 
                                             gap-2 rounded-full items-center py-1 px-2.5"
                    >
                      <p className="">{value}</p>
                      <MdOutlineClose className="font-bold text-white " />
                    </button>
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

        {/* Select Domains  */}

        <div className="lg:flex flex-col justify-center ">
          <div className="group w-full inline-block mt-6  lg:pr-10">
            <label htmlFor="bio" className="text-sm block font-medium">
              Domain
            </label>
            <select
              onChange={handleChange}
              className="p-2 lg:w-[250px]  mt-1 w-full font-semibold border border-[#d6d6d6] rounded-md "
            >
              <option value="" hidden className="px-2">
                {domainValue || ' Choose'}
              </option>
              {jData?.domains?.map((D, i) => (
                <option
                  onClick={handleClick}
                  disabled={disableOption}
                  value={D}
                  key={Math.random()}
                >
                  {D}
                </option>
              ))}
            </select>
            <div>
              {openOtherMenu && (
                <>
                  <label htmlFor="industryName" className="text-sm mt-2 font-medium">
                    Write your other domain
                  </label>
                  <div className="flex flex-col items-start gap-2">
                    <input
                      id="industryName"
                      ref={selectRefTo}
                      className=" rounded-md py-2.5 border-[#d6d6d6]  focus:outline-none  mt-2"
                      // onBlur={() => setOpenOtherMenu(false)}
                      type="text"
                      placeholder="Other Domain..."
                      onChange={handleOtherMenu}
                      required
                    />
                    <button
                      onClick={handleAddOtherDomain}
                      className="border py-1.5 bg-[#19A5FF] text-white px-4 rounded-md"
                      type="button"
                    >
                      Add
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {selectedValues.length ? (
            <div className="flex flex-wrap px-2 py-4 gap-3 mt-2 rounded-md lg:w-2/4 w-full border h-auto bg-[#F0F9FF]">
              {selectedValues.map((value, index) => (
                <div key={Math.random()}>
                  <div className="bg-[#19A5FF] py-1  px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                    <p>{value}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedValues(selectedValues.filter((val) => val !== value));
                        buttonHandle();
                      }}
                    >
                      <RxCross2 className="font-bold text-sm" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>

        {/* Curriculum */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">
            Curriculum <span className="font-normal text-gray-500">(Minimum 100 words)</span>
          </label>
          <textarea
            type="Text"
            name="curriculum"
            {...register('curriculum', {
              required: 'Curriculums is Required',
              minLength: {
                value: 100,
                message: 'Minimum 100 Words Required',
              },
            })}
            id="curriculum"
            defaultValue={storedJob?.curriculum}
            placeholder="Write about curriculum"
            className="lg:w-3/4 h-28 w-full px-4 py-3 rounded-md border border-[#e5e5e5]  text-gray-900 "
          />
          <p className="pt-2">
            {errors?.curriculum && (
              <span className="text-red-400 ">{errors?.curriculum?.message}</span>
            )}
          </p>
        </div>

        {/* Compensation  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Compensation</label>
          <div className="flex gap-2 justify-between items-center w-full md:w-1/2  pr-3 rounded-md border border-[#BCBCBC focus:outline-none] ">
            <input
              type="number"
              name="salary"
              {...register('salary', {
                required: 'Compensation is Required',
              })}
              id="salary"
              defaultValue={storedJob?.salary}
              placeholder="Compensation Range"
              className="w-full border-transparent rounded-md ring-white py-5 text-gray-900 focus:outline-none "
            />
            <p className="text-3xl">₳</p>
            {/* <img src={currencyIcon} alt="" /> */}
          </div>
          <p className="pt-2">
            {errors.salary && <span className="text-red-400 ">{errors.salary?.message}</span>}
          </p>
        </div>

        <h1 className="font-bold my-2">Shadowing Duration</h1>
        {/* Date Section  */}

        <div className="flex justify-between ">
          <div className="space-y-1 mt-5 text-sm">
            <label className="block font-semibold text-gray-900">Starting Date</label>
            <input
              type="date"
              name="StartingDate"
              {...register('StartingDate', {
                required: true,
              })}
              id="StartingDate"
              defaultValue={storedJob && storedJob?.StartingDate}
              className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
            />
            <p className="pt-2">
              {errors.StartingDate && (
                <span className="text-red-400 ">
                  {errors.StartingDate?.type === 'required' && 'Please provide your Starting Date'}
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
              defaultValue={storedJob && storedJob?.endingDate}
              id="applyBefore"
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
            defaultValue={storedJob?.applyBefore}
            id="applyBefore"
            className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors?.applyBefore && (
              <span className="text-red-400 ">
                {errors?.applyBefore?.type === 'required' && 'Please provide your Apply Before'}
              </span>
            )}
          </p>
        </div>
        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Location </label>
          <input
            type="Text"
            name="location"
            {...register('location', {
              required: true,
            })}
            id="location"
            defaultValue={storedJob?.location}
            placeholder="Remote"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.location && (
              <span className="text-red-400 ">
                {errors.location?.type === 'required' && 'Please provide your Job Title'}
              </span>
            )}
          </p>
        </div>
        <p className="text-2xl">Add Mentor</p>
        <p className="border bg-gray-700 border-gray-500 w-1/3" />

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Mentor Name</label>

          <input
            type="Text"
            name="mentorsName"
            {...register('mentorsName', {
              required: true,
            })}
            defaultValue={storedJob?.mentorsName}
            placeholder="Sample input"
            id="mentorsName"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.mentorsName && (
              <span className="text-red-400 ">
                {errors.mentorsName?.type === 'required' && 'Please provide your mentor name'}
              </span>
            )}
          </p>
        </div>

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Add Mentor Bio</label>
          {/* <input
                        type="Text"
                        name="mentorsBio"
                        {...register('mentorsBio', {
                            required: true,
                        })}
                        id="mentorsBio"
                        defaultValue={storedJob?.mentorsBio || ''}
                        placeholder="Sample input"
                        className=" w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
            /> */}

          <textarea
            type="Text"
            name="mentorsBio"
            {...register('mentorsBio', {
              required: true,
            })}
            id="mentorsBio"
            defaultValue={storedJob?.mentorsBio}
            placeholder="Mentor Bio"
            className="lg:w-[520px] h-20 w-full px-4 py-3 rounded-md border border-[#e5e5e5]  text-gray-900 "
          />

          <p className="pt-2">
            {errors.mentorsBio && (
              <span className="text-red-400 ">
                {errors.mentorsBio?.type === 'required' && 'Please provide your Add Mentor Bio'}
              </span>
            )}
          </p>
        </div>
        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">LinkedIn URL</label>
          <input
            type="Text"
            name="mentorsLinkedInURL"
            {...register('mentorsLinkedInURL', {
              required: true,
              pattern: {
                value:
                  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/,
                message: 'Linkedin url is not valid',
              },
            })}
            id="mentorsLinkedInURL"
            defaultValue={storedJob?.mentorsLinkedInURL}
            placeholder="Linkedin"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors?.mentorsLinkedInURL && (
              <span className="text-red-400 ">{errors.mentorsLinkedInURL?.message}</span>
            )}
          </p>
        </div>
        {/* Submit Button  */}

        <button
          type="submit"
          className="px-6 py-3 mt-10 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
        >
          Post Shadowing Job
        </button>
      </form>
    </div>
  );
};

export default ShadowingJob;
