import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BiChevronLeft, BiPlus } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import currencyIcon from '../../../../Assets/Dashboard/currency.png';
import AuthContext from '../../../../Context/AuthContext';
import { setJob } from '../../../../Hooks/useLocalStorage';

const Contracts = () => {
  // const [storedJob, setStoredJob] = useState({});
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const path = location.pathname.split('/');
  const jobName = path[path.length - 1];

  const isEdit = path.includes('edit');

  const categoryName = jobName.replace(/-/g, ' ').replace(/\b[a-z]/g, (c) => c.toUpperCase());

  // const storedJob = getStoredJob(jobName);
  const storedJob = location?.state && location?.state?.data;
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const [skills, setSkills] = useState(storedJob?.skills || []);

  // File State
  const [file, setFile] = useState();

  // perks state
  const [deliverables, setDeliverables] = useState('');
  const [deliverablesItems, setDeliverablesItems] = useState(storedJob?.joiningPerks || []);

  // handle perk
  const changeDeliverablesHandler = (e) => {
    setDeliverables(e.target.value);
  };

  const handlePerk = () => {
    setDeliverablesItems([...deliverablesItems, deliverables]);
    setDeliverables('');
  };

  const experiences = [1, 2, 3, 4, 5];

  // handle skill input
  const [tag, setTag] = useState('');

  // handle skill input button
  const changeHandler = (e) => {
    setTag(e.target.value);
  };
  const handleTags = () => {
    setSkills([...skills, tag]);
    setTag('');
  };

  // Domains
  const [jData, setJData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setJData(jsonData);
    }
    fetchData();
  }, []);

  const [disableOption, setDisable] = useState(false);
  // Cross  Button Domains
  const buttonHandle = () => {
    setDisable(false);
  };
  // ?Domain Function start

  const [selectedValues, setSelectedValues] = useState(storedJob?.domains || []);
  const [domainValue, setDomainValue] = useState('');
  const [openOtherMenu, setOpenOtherMenu] = useState(false);
  const [otherDomainValue, setOtherDomainValue] = useState('');
  const selectRefTo = useRef(null);

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
  const handleClick = () => {
    setDisable(true);
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

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // useEffect(() => {
  //     setStoredJob(alreadyStored);
  //     setSkills(alreadyStored?.skills || []);
  // }, [jobName]);

  // data posting to ls
  const onSubmit = async (data) => {
    setLoading(true);
    const jobData = {
      ...data,
      email: user?.user?.email || serviceUser?.email,
      startupsProfilePhoto: user?.user?.profilePhoto || '',
      startupsName: user?.user?.fullName || serviceUser?.fullName,
      categoryName,
      skills,
      domains: selectedValues,
      joiningPerks: deliverablesItems,
      apiPath: jobName,
      jobStatus: 'active',
      // contractsPaper: _.cloneDeep(file),
    };
    // const fileDeep = _.cloneDeep(file);

    setJob(jobName, jobData);
    const formData = new FormData();

    formData.append('obj', JSON.stringify(jobData));
    const contractsFile = file && file[0];

    formData.append('contractsPaper', contractsFile);

    if (isEdit) {
      await axios
        .put(`${process.env.REACT_APP_URL_STARTUP}/api/job/contracts/${storedJob._id}`, formData)
        .then((res) => {
          if (res.data._id) {
            toast.success('Contracts job data added to review');
            setLoading(false);
            navigate('/dashboard/post-job/contracts/review', {
              state: { data: res.data },
            });
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      await axios
        .post(`${process.env.REACT_APP_URL_STARTUP}/api/job/contracts`, formData)
        .then((res) => {
          if (res.data._id) {
            toast.success('Contracts job data edited successfully');
            setLoading(false);
            navigate('/dashboard/post-job/contracts/review', {
              state: { data: res.data },
            });
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    }

    // navigate('/dashboard/post-job/contracts/review');
    // const jobDataString = JSON.stringify(jobData);

    // Store the jobData in localStorage
    // localStorage.setItem('jobData', jobDataString);
    // const reader = new FileReader();
    // reader.onload = () => {
    //   const fileData = {
    //     name: file[0].name,
    //     type: file[0].type,
    //     size: file[0].size,
    //     dataUrl: reader.result,
    //   };
    //   localStorage.setItem('fileData', JSON.stringify(fileData));
    // };
    // reader.readAsDataURL(file[0]);
  };
  //     const fileDataString = localStorage.getItem('fileData');
  //    if (fileDataString) {
  //     const fileData = JSON.parse(fileDataString);
  //     const { name, type, size, dataUrl } = fileData;
  //     const files = new File([dataUrl], name, { type, lastModified: Date.now() });

  return (
    <div>
      <div className="flex gap-4 items-center">
        <Link to="/dashboard/post-job">
          <BiChevronLeft className="border p-1 text-4xl rounded border-black" />
        </Link>
        <p className="text-2xl font-semibold">Contract</p>
      </div>
      <p className="border-[#e5e7eb] bg-[#BCBCBC] border mt-2" />
      <p className=" text-[#999999] font-medium xl:font-semibold mt-6 lg:mt-1">
        You can handover your tech and non tech projects to us, we will recruit the team, gather the
        resource, micro-mange the project till its done
      </p>

      {/* Start Form  */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* contract title */}
        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Contract Title</label>
          <input
            name="title"
            {...register('title', {
              required: true,
            })}
            id="title"
            defaultValue={storedJob?.title}
            placeholder="Eg. Remostarts"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#E5E5E5]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.title && (
              <span className="text-red-400 ">
                {errors.title?.type === 'required' && 'Please provide your Contract title'}
              </span>
            )}
          </p>
        </div>

        {/* Contract Description starts here 2 */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Contract Description</label>
          <textarea
            name="description"
            {...register('description', {
              required: true,
            })}
            defaultValue={storedJob?.description}
            id="description"
            placeholder="Write about Description..."
            className="lg:w-3/4 h-28 w-full px-4 py-3 rounded-md border border-[#E5E5E5]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.description && (
              <span className="text-red-400 ">
                {errors.description?.type === 'required' &&
                  'Please provide your Contract Description'}
              </span>
            )}
          </p>
        </div>

        {/* Section Of Skills Required */}

        <div className="mt-5">
          <label className="block font-semibold text-gray-900">Contract Requirement</label>
          <p className="border-[#BCBCBC] lg:w-9/12 bg-[#BCBCBC] border mt-2" />
        </div>

        <div className="mt-5 lg:flex w-3/4 items-start justify-between">
          <div className="">
            <label htmlFor="">Years</label>
            <select
              {...register('experience', {
                required: true,
              })}
              defaultValue={storedJob?.experience}
              className="select lg:w-[100px]  mt-1 w-full block font-semibold border 
                       border-[#E5E5E5] rounded-md "
            >
              <option hidden>{storedJob?.experience ? storedJob?.experience : 0} </option>
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
            <label className="block font-semibold text-gray-900">
              Experience <span className="text-gray-300"> (Optional)</span>
            </label>
            <p className="p-3 lg:w-[100px] rounded-md shadow-sm">Years</p>
          </div>

          {/* Skill Section  */}

          {/* Skill required input field */}

          <div>
            <div className="space-y-1 text-sm w-[300px]">
              <label className="block font-semibold text-gray-900">Skills Required</label>
              <div className=" lg:w-[50rm]  pr-2 rounded-md border border-gray-200  text-gray-900 justify-between flex items-center">
                <input
                  name="inputSkill"
                  value={tag}
                  onChange={changeHandler}
                  placeholder="Eg. remostarts"
                  className="px-4 py-3 focus:outline-none border border-transparent rounded-md outline-none w-full focus:bg-transparent"
                />
                <button onClick={handleTags} type="button">
                  <BiPlus className="border p-1 text-xl" />
                </button>
              </div>

              {skills.length ? (
                <div className="flex flex-wrap rounded-md px-2 py-4 gap-3 mt-8 w-[300px] border h-auto bg-[#F0F9FF]">
                  {skills.map((value, index) => (
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
                ''
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
        <p className="border bg-gray-500 mt-6" />

        {/* domains */}
        <div className="lg:flex justify-center ">
          <div className="group w-full inline-block mt-6  lg:pr-10">
            <div>
              <label htmlFor="bio" className="text-sm block font-medium">
                Select Domains
              </label>
              <select
                onChange={handleChange}
                className="select lg:w-[220px]  mt-1 w-full font-semibold border 
                     border-[#e5e7eb] rounded-md "
                value={domainValue}
              >
                <option value="" hidden>
                  Domains
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
            </div>

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
            <div className="flex flex-wrap rounded-md px-2 py-4 gap-3 mt-8 lg:w-[630px] w-full border h-auto bg-[#F0F9FF]">
              {selectedValues.map((value, index) => (
                <div key={Math.random()}>
                  <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
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

        {/* Input salary  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Compensation</label>
          <div className="flex justify-between items-center w-full md:w-1/2 pr-2 gap-3  rounded-md border border-[#e5e7eb focus:outline-none] ">
            <input
              type="number"
              name="salary"
              {...register('salary', {
                required: true,
              })}
              defaultValue={storedJob?.salary}
              id="salary"
              placeholder="Compensation Range"
              className="w-full px-4 py-3 text-gray-900 border-transparent rounded-md focus:outline-none "
            />
            <img src={currencyIcon} alt="" />
          </div>
          <p className="pt-2">
            {errors.salary && (
              <span className="text-red-400 ">
                {errors.salary?.type === 'required' && 'Please provide  salary'}
              </span>
            )}
          </p>
        </div>

        {/* Date Section  */}
        <span className="text-md font-medium">Internship Duration</span>
        <div className="flex justify-between ">
          <div className="space-y-1 mt-5 text-sm">
            <label className="block font-semibold text-gray-900">Starting Date</label>
            <input
              type="date"
              name="startingDate"
              {...register('startingDate', {
                required: true,
              })}
              defaultValue={storedJob?.startingDate?.slice(0, 10)}
              id="startingDate"
              className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#e5e7eb]  text-gray-900 "
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
              defaultValue={storedJob?.endingDate?.slice(0, 10)}
              id="applyBefore"
              className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#e5e7eb]  text-gray-900 "
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
            defaultValue={storedJob?.applyBefore?.slice(0, 10)}
            id="applyBefore"
            className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#e5e7eb]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.applyBefore && (
              <span className="text-red-400 ">
                {errors.applyBefore?.type === 'required' && 'Please provide your Apply Before'}
              </span>
            )}
          </p>
        </div>
        {/* Deliverables */}
        <div>
          <div className="space-y-2.5 mt-5 text-sm w-[1/3]">
            <label className="block font-semibold text-gray-900">Deliverables</label>
            <div className="lg:w-[50%] pr-2  rounded-md border  border-[#e5e7eb]  text-gray-900 gap-3  justify-between flex items-center">
              <input
                name="inputSkill"
                value={deliverables}
                onChange={changeDeliverablesHandler}
                placeholder="Sample Input"
                className="px-4 py-3 focus:outline-none rounded-md outline-none w-full focus:bg-transparent"
              />
              <button onClick={handlePerk} type="button">
                <BiPlus className="border p-1 text-xl" />
              </button>
            </div>

            {deliverablesItems?.length ? (
              <div className="flex flex-wrap  px-2 rounded-md py-4 gap-3 mt-10 lg:w-[50%] border h-auto bg-[#F0F9FF]">
                {deliverablesItems.map((value) => (
                  <div key={Math.random()}>
                    <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                      <p>{value}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setDeliverablesItems(deliverablesItems.filter((val) => val !== value));
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
        </div>
        {/* location */}
        <div>
          <div className="space-y-2.5 mt-5 text-sm w-[1/3]">
            <label className="block font-semibold text-gray-900">Location</label>
            <div className="lg:w-[50%] pr-2  rounded-md border  border-[#e5e7eb]  text-gray-900 gap-3  justify-between flex items-center">
              <input
                type="Text"
                name="location"
                {...register('location', {
                  required: true,
                })}
                defaultValue={storedJob?.location}
                id="location"
                placeholder="Remote"
                className=" w-full pl-4 py-3 rounded-md border border-transparent focus:ring-0 text-gray-900 "
              />
            </div>
            <p className="pt-2">
              {errors.location && (
                <span className="text-red-400 ">
                  {errors.location?.type === 'required' && 'Please provide your Location'}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* upload image or file */}
        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900 mb-2">
            Contract Terms & Condition document
          </label>

          <Dropzone className="" onDrop={(acceptedFiles) => setFile(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="container  lg:w-[335px]">
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <section
                    htmlFor="dropzone-file"
                    className="justify-center cursor-pointer  lg:mt-0 flex lg:w-[335px]  flex-col items-center rounded-xl h-[213px] border-2 border-dashed border-blue-400 bg-white text-center"
                  >
                    {!file?.[0]?.size ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>

                        <h2 className="mt-4 text-xl font-medium tracking-wide">
                          Drop your files here or{' '}
                          <span className="text-blue-600 font-medium">Browse</span>
                        </h2>
                        <span className="text-xs font-medium">Maximum size: 50MB</span>
                      </>
                    ) : (
                      <div>
                        <p className="text-2xl text-blue-500">{file?.[0]?.path}</p>
                        <p>size: {file?.[0]?.size} bytes</p>
                      </div>
                    )}
                  </section>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        {/* Submit Button  */}

        {isEdit ? (
          <button
            type="submit"
            className="px-6 py-3 mt-10 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
          >
            Edit Contract Job
          </button>
        ) : (
          <button
            type="submit"
            className="px-6 py-3 mt-10 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
          >
            Review Contract Job
          </button>
        )}
      </form>
    </div>
  );
};

export default Contracts;
