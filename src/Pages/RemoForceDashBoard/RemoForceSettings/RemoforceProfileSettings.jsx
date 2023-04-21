/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { FiUpload } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { RiUser3Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';
import profile from '../../../Assets/RemoForceDashboard/ProfileSettings/personalprofile.png';
import RemoForceSettingsItems from '../../../Routes/Roots/RemoforceSettingItems';

import AuthContext from '../../../Context/AuthContext';

// style for select
const customStyles = {
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#d6edf7' : 'white',
    color: state.isSelected ? 'white' : 'black',
    outline: 'none !important',
    boxShadow: 'rgba(192, 37, 37, 0.24) 0px 3px 8px;',
    ':hover': {
      backgroundColor: 'lightblue',
      borderColor: '#cccccc',
    },
  }),
  control: (base, state) => ({
    ...base,
    border: '1px solid #e5e7eb !important',
    ':hover': {
      outline: 'none !important',
      border: 'none',
    },
  }),
};

function RemoforceProfileSettings() {
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [files, setFile] = useState(null);
  const [progressBar, setProgressBar] = useState(null);

  const [error, setError] = useState();
  // States for phone number
  const [contact, setContact] = useState(null);
  const [alternative, setAlternative] = useState(null);

  const { data: remoProfile, refetch } = useQuery(['remoProfile'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-profile/${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );
  // set progressBar
  function ProgressBar(data) {
    const newUrl = data?.[0];
    setProgressBar(newUrl);
  }

  // Initialize use form hook
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // Array of Gender
  const gender = ['Male', 'Female', 'Transgender', 'Others'];

  const [selectedGender, setSelectedGender] = useState('');

  function handleChange(event) {
    setSelectedGender(event.target.value);
  }

  const link = [
    {
      name: 'Github',
      icon: 'https://cdn-icons-png.flaticon.com/512/9168/9168217.png',
    },
    {
      name: 'Linkedin',
      icon: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
    },
    {
      name: 'Instagram',
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
    },
    {
      name: 'Twitter',
      icon: 'https://cdn-icons-png.flaticon.com/512/2525/2525779.png',
    },
  ];

  // State Of Disable Domains
  const [disableOption, setDisable] = useState(false);

  // Disable  Domains
  const handleClick = () => {
    setDisable(true);
  };
  // Cross  Button Domains
  const buttonHandle = () => {
    setDisable(false);
  };

  const [socialMedia, setSocialMedia] = useState();
  const [socialLinks, setSocialLinks] = useState({});
  // input Link State
  const [url, setUrl] = useState('');
  const [selectUrl, setSelectUrl] = useState();
  const [displayUrl, setDisplayUrl] = useState(
    remoProfile?.socialLinks
      ? Object.entries(remoProfile?.socialLinks).map(([key, value]) => ({ name: key, link: value }))
      : []
  );

  const [selectedOption, setSelectedOption] = useState(null);
  const [jData, setJData] = useState({});
  const [selectedCounty, setSelectedCountry] = useState('');
  //
  const handleLink = (e) => {
    setSelectUrl(Array.from(e.target.selectedOptions).map((option) => option.value));
    setSocialMedia(e.target.selectedOptions[0].innerHTML);
  };
  const uploadHandler = () => {
    const allData = { name: selectUrl?.[0], url };
    setDisplayUrl([...displayUrl, allData]);
    setSocialLinks({ ...socialLinks, [socialMedia]: url });
    document.getElementById('upload').value = '';
  };

  const handleDelete = () => {
    setFile(null);
    setProgressBar(null);
  };

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);
    if (files?.[0] === null && contact === null && alternative === null) {
      return setError('All fields required');
    }
    const resume = files?.[0];
    const remoforceProfilePhoto = data.remoforceProfilePhoto[0];
    const newObj = {
      resume,
      ...data,
      socialLinks,
      // ...display,
      // ...selectUrl,
      contactNumber: contact,
      alternativeNumber: alternative,
    };
    const { Bio, about, age, date, email, fullName } = data;

    const bodyData = {
      personalDetails: {
        bio: Bio,
        aboutMe: about,
        age,
        gender: selectedGender,
        birthDate: date,
        country: selectedCounty,
        alternativeEmail: email,
        alternativePhone: alternative,
      },
      email: user?.user?.email || serviceUser?.email,
      socialLinks,
      personalPhone: contact,
      fullName,
    };

    const formData = new FormData();

    formData.append('obj', JSON.stringify(bodyData));

    formData.append('remoforceProfilePhoto', remoforceProfilePhoto);
    formData.append('resume', resume);

    await axios
      .put(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-settings-profile`,
        formData
      )
      .then((res) => {
        if (res.data.modifiedCount || res.data.upsertedCount) {
          toast.success('profile data updated successfully');
          setLoading(false);
          navigate('/remoforce-dashboard/skill-preference');
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOption(selectedOptions);
    const selectedValue = selectedOptions?.value;
    setSelectedCountry(selectedValue);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setJData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <RemoForceSettingsItems>
      <section className="w-full lg:mt-4 h-full bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full items-center py-4">
          {/* Personal details section  starts */}

          <div className="bg-[#f4fbff] w-full flex flex-col">
            {/* Personal details Header  starts */}
            <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[14rem] p-2 mb-4">
              <img src={profile} alt="" className="" width="15px" />
              <h1 className="text-headers font-sans font-semibold text-xl w-[89%]">
                Personal Details
              </h1>
            </div>
            <div className="flex w-full items-center justify-between p-0 lg:p-4">
              <div className="w-full p-2 mb-3">
                <span className="text-base font-medium my-4">Profile Photo</span>

                <div className="lg:flex justify-start items-center lg:space-x-4">
                  {remoProfile?.remoforceProfilePhoto ? (
                    <img
                      className="w-20 rounded-full"
                      src={remoProfile?.remoforceProfilePhoto}
                      alt=""
                    />
                  ) : (
                    <span className="p-4 rounded-full border inline-block bg-[#6B7280]">
                      <RiUser3Line className="text-4xl text-white" />
                    </span>
                  )}

                  <div>
                    <input
                      {...register('remoforceProfilePhoto', {
                        required: true,
                      })}
                      type="file"
                      name="remoforceProfilePhoto"
                      className="choose pt-3 lg:pt-0 block"
                    />
                    <p className="pt-2">
                      <span className="text-red-400 ">
                        {errors.remoforceProfilePhoto && (
                          <span>Please Input Your remoforceProfilePhoto</span>
                        )}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-6 mt-6 gap-4 col-span-full ">
                  {/* fullName Input starts */}
                  <div className="col-span-full  space-y-1">
                    <label htmlFor="username" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      {...register('fullName', {
                        required: true,
                      })}
                      defaultValue={remoProfile?.fullName}
                      type="text"
                      placeholder="Full Name"
                      className="w-full border p-4 rounded-md border-gray-200 focus:ring focus:ring-opacity-75 focus:ring-violet-400  "
                    />
                    <p className="pt-1">
                      <span className="text-red-400 ">
                        {errors.fullName && <span>Please Input Full Name</span>}
                      </span>
                    </p>
                  </div>
                  {/* Bio Input starts */}
                  <div className="col-span-full  space-y-1">
                    <label htmlFor="username" className="text-sm font-medium">
                      Bio <span className="text-gray-300"> (In one line)</span>
                    </label>
                    <input
                      id="bio"
                      {...register('Bio', {
                        required: true,
                      })}
                      defaultValue={remoProfile?.personalDetails?.bio}
                      type="text"
                      placeholder="Sample Bio"
                      className="w-full border p-4 rounded-md border-gray-200 focus:ring focus:ring-opacity-75 focus:ring-violet-400  "
                    />
                    <p className="pt-1">
                      <span className="text-red-400 ">
                        {errors.Bio && <span>Please Input Bio</span>}
                      </span>
                    </p>
                  </div>
                  {/* About Me Text-Area starts */}
                  <div className="col-span-full space-y-1">
                    <label htmlFor="bio" className="text-sm font-medium">
                      About Me
                    </label>
                    <textarea
                      {...register('about', {
                        required: true,
                      })}
                      defaultValue={remoProfile?.personalDetails?.aboutMe}
                      id="About_me"
                      placeholder="Write Something About you ..."
                      className="w-full h-full p-4 border border-gray-200 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "
                    />
                    <p className="pt-1">
                      <span className="text-red-400 ">
                        {errors.About && <span>About cannot be empty</span>}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* age birth year */}
            <div className="flex justify-between   items-center flex-wrap lg:flex-nowrap mt-2 space-y-2 p-2 lg:p-6">
              <div className="w-[45%] lg:w-[20%] space-y-1">
                <label htmlFor="age" className="text-sm font-medium">
                  Age
                </label>
                <input
                  defaultValue={remoProfile?.personalDetails?.age}
                  id="age"
                  {...register('age', {
                    required: true,
                  })}
                  type="text"
                  placeholder="21"
                  className="w-full border border-gray-200 p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "
                />
                <p className="pt-1">
                  <span className="text-red-400 ">
                    {errors.age && <span>Please Input Age</span>}
                  </span>
                </p>
              </div>
              <div className="w-[45%] lg:w-[20%] space-y-1">
                <label htmlFor="age" className="text-sm block font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  className="py-3 rounded-md border-gray-200"
                  value={remoProfile?.personalDetails?.gender || selectedGender}
                  onChange={handleChange}
                >
                  <option value="" hidden>
                    {`${
                      remoProfile?.personalDetails?.gender
                        ? remoProfile?.personalDetails?.gender
                        : ' Select Gender'
                    }`}
                  </option>
                  {gender.map((genderOption) => (
                    <option key={Math.random()} value={genderOption}>
                      {genderOption}
                    </option>
                  ))}
                </select>
                <p className="pt-1">
                  <span className="text-red-400 ">
                    {errors.age && <span>Please Input Age</span>}
                  </span>
                </p>
              </div>
              {/* birthdate */}
              <div className="w-full lg:w-[40%] flex flex-col space-y-1">
                <label htmlFor="birthDate" className="text-sm font-medium">
                  BirthDate
                </label>
                <input
                  defaultValue={remoProfile?.personalDetails?.birthDate?.slice(0, 10)}
                  type="date"
                  name="date"
                  id="date"
                  {...register('date', {
                    required: true,
                  })}
                  className="p-[0.65rem] w-full focus:ring border-gray-200  rounded-md border focus:ring-opacity-75 focus:ring-violet-400  dark:text-gray-90"
                />
                <p className="pt-1">
                  <span className="text-red-400 ">
                    {errors.date && <span>Please Input Birth Date</span>}
                  </span>
                </p>
              </div>
            </div>
            {/* country ---------------------- */}

            <div className=" flex justify-between   items-center flex-wrap lg:flex-nowrap mt-2 space-y-2 p-2 lg:p-6">
              <div>
                <label htmlFor="age" className="text-sm font-medium">
                  Country
                </label>
                <Select
                  // defaultValue={remoProfile?.personalDetails?.country}
                  options={jData?.countries}
                  styles={customStyles}
                  defaultValue={selectedOption}
                  onChange={handleSelectChange}
                  placeholder={remoProfile?.personalDetails?.country}
                  className="mt-1 w-full lg:w-[280px] "
                  classNamePrefix="select2-selection"
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />
              </div>
            </div>
          </div>
          <hr className="w-full bg-hr m-3" />
          {/* Contact section  starts */}

          <div className="bg-[#f4fbff] w-full flex flex-col">
            <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[11.5rem] p-2 mb-4">
              <h1 className="text-headers font-sans font-semibold text-xl w-[89%]">Contact</h1>
            </div>
            <div className="w-full lg:w-1/2 p-2 lg:px-6 lg:py-6">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                defaultValue={remoProfile?.personalDetails?.alternativeEmail}
                {...register('email', {
                  required: true,
                })}
                type="email"
                placeholder="Samplemail@example.com"
                className="w-full border border-gray-200 p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "
              />
              <p className="pt-1">
                <span className="text-red-400 ">
                  {errors.email && <span>Please Input Your Email</span>}
                </span>
              </p>
            </div>
            <div className="lg:flex lg:flex-row-reverse mb-4 p-2 lg:gap-2 lg:px-6">
              <div className="w-full lg:w-1/2 ">
                <label htmlFor="email" className="text-sm font-medium">
                  Alternative Number
                </label>

                <div className="flex w-full justify-between">
                  <PhoneInput
                    id="alternative_number"
                    type=""
                    value={alternative}
                    onChange={setAlternative}
                    placeholder="2385269875"
                    className="w-full border p-4 space-x-3 border-gray-200 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "
                  />
                  <p className="pt-1">
                    <span className="text-red-400 ">{error && <span>{error}</span>}</span>
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                <label htmlFor="email" className="text-sm font-medium">
                  Contact Number
                </label>

                <div className="flex w-full justify-between">
                  <PhoneInput
                    id="email"
                    type=""
                    value={contact}
                    onChange={setContact}
                    placeholder="03385269875"
                    className="w-full border p-4 space-x-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "
                  />
                  <p className="pt-1">
                    <span className="text-red-400 ">{error && <span>{error}</span>}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-full bg-hr m-3" />
          {/* Social Links section  starts */}

          {/* <div className="bg-lightblue w-full flex flex-col">
                        <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[11.5rem] p-2 mb-4">
                            <h1 className="text-headers font-sans font-semibold text-xl w-[89%]">
                                Social Links
                            </h1>
                        </div>
                        <div className="flex flex-col gap-6 lg:gap-2 px-2 lg-px-6 lg:flex-row items-center justify-center py-10">
                            <div className="w-full flex-1">
                                <select
                                    onChange={handleLink}
                                    className="select mt-1 font-semibold border 
                  border-gray-400 rounded-md mr-6 "
                                >
                                    <option value="Link" hidden>
                                        Link
                                    </option>
                                    {link.map((D, i) => (
                                        <option
                                            onClick={handleClick}
                                            value={D.name}
                                            key={Math.random()}
                                        >
                                            {D.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex w-full items-center space-x-1 flex-1">
                                <input
                                    onChange={(e) => setUrl(e.target.value)}
                                    type="text"
                                    placeholder="https://"
                                    className="focus:input border-gray-700 border py-3 px-4 rounded-md focus:outline-gray-600 focus:border-sky-700 focus:ring-1 focus:ring-sky-500 "
                                />

                                <button
                                    type="button"
                                    disabled={!url?.length}
                                    onClick={uploadButton}
                                    className="bg-gray-900 p-3 z-50 rounded cursor-pointer text-white"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="w-full xl:w-1/2 pl-0 lg:pl-0 xl-10">
                                <p className="text-md text-black font-sans mb-4">
                                    currently added social links
                                </p>
                                <div className="w-1/2 lg:w-full xl:w-1/2 border mt-4 p-4 rounded flex gap-2">
                                    <div className="flex items-start gap-1">
                                        {displayUrl.map((d, i) => (
                                            <>
                                                <img
                                                    className="w-5"
                                                    key={Math.random()}
                                                    src={
                                                        (d?.name === 'Github' &&
                                                            'https://cdn-icons-png.flaticon.com/512/9168/9168217.png') ||
                                                        (d?.name === 'Linkedin' &&
                                                            'https://cdn-icons-png.flaticon.com/512/3536/3536505.png') ||
                                                        (d?.name === 'Instagram' &&
                                                            'https://cdn-icons-png.flaticon.com/512/174/174855.png') ||
                                                        d?.name === ''
                                                    }
                                                    alt=""
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setDisplayUrl(
                                                            displayUrl.filter((val) => val !== d)
                                                        );
                                                        buttonHandle();
                                                    }}
                                                >
                                                    <RxCross2 className="font-bold text-sm" />
                                                </button>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

          {/* social links add */}

          <div className=" bg-[#f4fbff] lg:flex items-center mt-10 ">
            <div className="group  inline-block lg:space-y-2 pr-0 lg:pr-10">
              <select
                defaultValue="Link"
                onChange={handleLink}
                className="select  mt-1 w-full  font-semibold border 
                     border-gray-200 rounded-md "
              >
                <option value="Link" hidden>
                  Link
                </option>
                {link.map((D) => (
                  <option onClick={handleClick} value={D.name} key={Math.random()}>
                    {D.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-2  lg:mt-0">
              <div className="flex gap-4">
                <input
                  onChange={(e) => setUrl(e.target.value)}
                  type="text"
                  id="upload"
                  placeholder="https://"
                  className="focus:input border-gray-200 border py-2.5 focus:border-transparent px-4 rounded-md !w-[320px] input-bordered  focus:outline-gray-600 focus:border-sky-700 focus:ring-1 focus:ring-sky-500   "
                />

                <button
                  type="button"
                  disabled={!url?.length}
                  onClick={() => uploadHandler()}
                  className="bg-gray-900 px-2 py-1 z-50 rounded cursor-pointer text-white"
                >
                  Upload
                </button>
              </div>
            </div>
            {displayUrl.length ? (
              <div className="w-1/2 border  ml-10 mt-4 p-4 rounded flex gap-2 ">
                {displayUrl.map((d, i) => (
                  <div key={Math.random()} className="flex items-start gap-1">
                    <img
                      className="w-5"
                      src={
                        (d?.name === 'Github' &&
                          'https://cdn-icons-png.flaticon.com/512/9168/9168217.png') ||
                        (d?.name === 'Linkedin' &&
                          'https://cdn-icons-png.flaticon.com/512/3536/3536505.png') ||
                        (d?.name === 'Twitter' &&
                          'https://cdn-icons-png.flaticon.com/512/2525/2525779.png') ||
                        (d?.name === 'Instagram' &&
                          'https://cdn-icons-png.flaticon.com/512/174/174855.png') ||
                        d?.name === ''
                      }
                      alt=""
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setDisplayUrl(displayUrl.filter((val) => val !== d));
                        buttonHandle();
                      }}
                    >
                      <RxCross2 className="font-bold text-sm" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>

          <hr className="w-full bg-hr m-3" />
          {/* Resume Upload section  starts */}

          <div className="bg-[#f4fbff] w-full flex flex-col">
            <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[11.5rem] p-2 mb-4">
              <h1 className="text-headers font-sans font-semibold text-xl w-[89%]">Resume</h1>
            </div>
            <div className="w-full p-0 lg:p-4 flex flex-col items-center">
              <p className="text-[#999999] w-full mb-6 text-sm" />
              <div className="w-full lg:w-[60%]">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setFile(acceptedFiles);
                    ProgressBar(acceptedFiles);
                    setError('');
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section className="container">
                      <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <section
                          htmlFor="dropzone-file"
                          className="mx-auto justify-center cursor-pointer mt-6 lg:mt-10 flex flex-col items-center rounded-xl lg:h-[250px] w-[60%] mb-6 p-3 border-2 border-dashed border-blue-400 bg-white text-center"
                        >
                          {!files?.[0]?.size ? (
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
                              <p className="text-2xl text-blue-500">{files?.[0]?.path}</p>
                              <p>size: {files?.[0]?.size}</p>
                            </div>
                          )}
                        </section>
                      </div>
                    </section>
                  )}
                </Dropzone>
                {error && <span className="text-red-400 ">{error}</span>}
              </div>
              {/* progress bar section if file uploaded Successfully starts */}
              {progressBar && (
                <div className="mt-6">
                  <div className="border rounded-md w-full mt-3">
                    <div className="p-5">
                      <div className="flex justify-between items-center">
                        <div className="flex  gap-4 items-center">
                          <FiUpload className="text-sm" />
                          <p className="text-sm lg:w-[627px]">{progressBar?.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button type="button" className="bg-teal-500 text-white rounded-full">
                            <TiTick className="text-md " />
                          </button>
                          <button onClick={handleDelete} type="button">
                            <MdDeleteOutline className="text-lg " />
                          </button>
                        </div>
                      </div>
                      <p className="w-full mt-2 h-[6px] bg-[#3B82F6]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-black rounded-lg mt-2 text-white flex items-center gap-2"
            >
              Update Profile
              {loading && (
                <span className="w-7 h-7 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
              )}
            </button>
          </div>
        </form>
      </section>
    </RemoForceSettingsItems>
  );
}

export default RemoforceProfileSettings;
