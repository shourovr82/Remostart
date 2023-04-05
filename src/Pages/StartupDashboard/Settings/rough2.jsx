/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { RiUser3Line } from 'react-icons/ri';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import image from '../../../Assets/Verification/Image.png';
import SettingsItems from '../../../Routes/Roots/SettingsItems';
import './Input.CSS';

const SettingsProfile = () => {
  const { user } = useSelector((state) => state.auth);

  const domainData = [
    {
      value: 'Mern Stack',
      label: 'Mern Stack',
    },
    {
      value: 'Tailwind CSS',
      label: 'Tailwind CSS',
    },
    {
      value: 'Javascript',
      label: 'Javascript',
    },
    {
      value: 'Node JS',
      label: 'Node JS',
    },
  ];

  //! !!!! All Functional is ok . You now work with only onSubmit function

  // File State
  // State for File and Array name
  const [file, setFile] = useState([]);
  const [url, setUrl] = useState('');
  const [file2, setFile2] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [newArr, setNewArr] = useState([]);
  // State Of Disable Domains
  const [disableOption, setDisable] = useState(false);

  // ?Domain Function start

  const [selectedValues, setSelectedValues] = useState([]);

  // All Content
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

  const handleChange = (e) => {
    const selectedOptions = e.target.selectedOptions[0].innerHTML;
    setSelectedValues([...selectedValues, selectedOptions]);
  };
  //! Domain function is ended

  // input Link State

  const [selectUrl, setSelectUrl] = useState();
  const [displayUrl, setDisplayUrl] = useState([]);

  const [socialMedia, setSocialMedia] = useState();
  const [socialLinks, setSocialLinks] = useState({});

  const navigate = useNavigate();

  // ? Link Function Start

  const handleLink = (e) => {
    setSelectUrl(Array.from(e.target.selectedOptions).map((option) => option.value));
    setSocialMedia(e.target.selectedOptions[0].innerHTML);
  };
  //! Link Function End.

  // Disable  Domains
  const handleClick = () => {
    setDisable(true);
  };
  // Cross  Button Domains
  const buttonHandle = () => {
    setDisable(false);
  };

  // Upload button

  // From Function

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const uploadHandler = () => {
    const allData = { name: selectUrl?.[0], url };
    setDisplayUrl([...displayUrl, allData]);
    setSocialLinks({ ...socialLinks, [socialMedia]: url });
    document.getElementById('upload').value = '';
  };

  // Upload Button Function
  const uploadButton = () => {
    if (selectedValues === null || undefined) {
      setError('Please select an document type first!');
      return;
    }
    const document = {};
    document[selectedValues] = file2?.[0];
    setFile([...file, { name: selectedValues, File: file2?.[0] }]);
    setData([...data, document]);
    setSelectedValues(null);
  };

  // Form submit handler

  const onSubmit = async (data) => {
    const image = data.startupIcon[0] || (file && file[0]);

    if (!image) {
      toast.error('select a startup icon first');
      return;
    }
    const { startupName, startupDescription, worksIn } = data;

    const formData = new FormData();

    const obj = {
      email: user?.user.email,
      startupName,
      startupDescription,
      worksIn,
      domains: selectedValues,
      socialLinks,
    };

    formData.append('obj', JSON.stringify(obj));

    formData.append('startupIcon', image);

    await axios
      .put(`${process.env.REACT_APP_URL_STARTUP}/api/startup/settings-profile`, formData)
      .then((res) => {
        if (res.data.modifiedCount) {
          res.data.modifiedCount && toast.success('profile data updated successfully');
          navigate('/dashboard/settings/general');
        }
      })
      .catch((err) => {});
  };

  return (
    <SettingsItems>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:flex flex-col mt-10 w-full">
        <div className="lg:grid grid-cols-2 w-full">
          <div className="lg:flex flex-col lg:pr-4">
            <span className="text-base font-medium my-4">Startup Icon</span>
            <div className="lg:flex justify-start items-center lg:space-x-4">
              <span className="p-4 rounded-full border inline-block bg-[#6B7280]">
                <RiUser3Line className="text-4xl text-white" />
              </span>
              <div>
                <input
                  {...register('startupIcon', {})}
                  type="file"
                  name="startupIcon"
                  title="Upload Picture"
                  className="choose pt-3 lg:pt-0 block"
                />

                <p className="pt-2">
                  <span className="text-red-400 ">
                    {errors.startupIcon && <span>Please Input Your startupIcon</span>}
                  </span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 mt-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-5 space-y-1">
                <label htmlFor="startupName" className="text-sm font-medium">
                  Startup Name
                </label>
                <input
                  id="startupName"
                  {...register('startupName', {
                    required: true,
                  })}
                  type="text"
                  placeholder="Company name"
                  className="w-full border p-4 rounded-md focus:border-transparent focus:ring focus:ring-opacity-75 focus:ring-blue-500 border-[#E5E5E5]"
                />
                <p className="pt-1">
                  <span className="text-red-400 ">
                    {errors.startupName && <span>Invalid your email address</span>}
                  </span>
                </p>
              </div>
              <div className="col-span-full sm:col-span-5 space-y-1">
                <label htmlFor="startupName" className="text-sm font-medium">
                  Startup Slogan
                </label>
                <input
                  id="startupSlogan"
                  {...register('startupSlogan', {
                    required: true,
                  })}
                  type="text"
                  placeholder="Startup Slogan"
                  className="w-full border p-4 rounded-md focus:border-transparent focus:ring focus:ring-opacity-75 focus:ring-blue-500 border-[#E5E5E5]"
                />
                <p className="pt-1">
                  <span className="text-red-400 ">
                    {errors.startupSlogan && <span>Your Slogan is not Valid</span>}
                  </span>
                </p>
              </div>

              <div className="col-span-full space-y-1">
                <label htmlFor="startupDescription" className="text-sm font-medium">
                  Startup Description
                </label>
                <textarea
                  {...register('startupDescription', {
                    required: true,
                  })}
                  id="startupDescription"
                  placeholder="Description"
                  className="w-full h-full p-4 border focus:border-transparent rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-500 border-[#E5E5E5]"
                />
                <p className="pt-1">
                  <span className="text-red-400 ">
                    {errors.startupDescription && <span>Please Input Description</span>}
                  </span>
                </p>
              </div>
              <div className="col-span-full mt-12 space-y-1">
                <label htmlFor="bio" className="text-sm font-medium">
                  Industries Work In
                </label>
                <textarea
                  {...register('worksIn', {
                    required: true,
                  })}
                  id="worksIn"
                  placeholder="worksIn"
                  className="w-full h-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                <p className="pt-1">
                  <span className="text-red-400 ">
                    {errors.worksIn && <span>Please Input Industries work in details</span>}
                  </span>
                </p>
              </div>
            </div>

            {/* Select Domains */}
            <div className="flex flex-col mt-12">
              <div className="lg:flex justify-center ">
                <div className="group w-full inline-block mt-6  lg:pr-10">
                  <label htmlFor="bio" className="text-sm block font-medium">
                    Select Domains
                  </label>
                  <select
                    onChange={handleChange}
                    className="select lg:w-[120px]  mt-1 w-full font-semibold border 
                     border-gray-400 rounded-md "
                  >
                    <option value="Domains" hidden>
                      Domains
                    </option>
                    {domainData.map((D, i) => (
                      <option
                        onClick={handleClick}
                        disabled={disableOption}
                        value={D.label}
                        key={i}
                      >
                        {D.label}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedValues?.length ? (
                  <div className="grid grid-cols-2 px-2 py-4 gap-3 mt-8 lg:w-[630px] w-full border h-auto bg-[#F0F9FF]">
                    {selectedValues.map((value, index) => (
                      <div key={index}>
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

              <div className="lg:flex items-start mt-10">
                <div className="group w-full inline-block lg:space-y-2 pr-0 lg:pr-10">
                  <select
                    onChange={handleLink}
                    className="select lg:w-[120px]  mt-1 w-full font-semibold border 
                     border-gray-400 rounded-md "
                  >
                    <option value="Link" hidden>
                      Link
                    </option>
                    {link.map((D, i) => (
                      <option onClick={handleClick} value={D.name} key={i}>
                        {D.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2 lg:mt-0">
                  <div className="flex gap-4">
                    <input
                      onChange={(e) => setUrl(e.target.value)}
                      type="text"
                      id="upload"
                      placeholder="https://"
                      className="focus:input border-gray-700 border py-1 px-4 rounded-md !w-[320px] input-bordered  focus:outline-gray-600 focus:border-sky-700 focus:ring-1 focus:ring-sky-500   focus:input-sm"
                    />

                    <button
                      type="button"
                      onClick={() => uploadHandler()}
                      className="bg-gray-900 px-2 py-1 z-50 rounded cursor-pointer text-white"
                    >
                      Upload
                    </button>
                  </div>
                  {displayUrl.length ? (
                    <div className="w-1/2 border  mt-4 p-4 rounded flex gap-2 ">
                      {displayUrl.map((d, i) => (
                        <div key={i} className="flex items-start gap-1">
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
              </div>
            </div>
          </div>

          {/* Image Upload Section start  */}

          <div>
            <h1 className="text-xl ml-5 font-semibold ">Homepage Images</h1>
            <Dropzone
              className="lg:w-[550px]  lg:mt-5 h-[213px] mt-10 mx-auto"
              onDrop={(acceptedFiles) => {
              
                // set error to empty strings if files are accepted
                setError('');
                // set accepted file object as new state
                setFile2(...acceptedFiles);
                setNewArr([...newArr, ...acceptedFiles]);
                // display dropdown
                uploadButton();
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section className="container">
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <section
                      htmlFor="dropzone-file"
                      className="mx-auto justify-center cursor-pointer lg:mt-3 mt-10  flex lg:w-[400px] 2xl:w-[500px] lg:h-[300px] h-[213px]  flex-col items-center rounded-xl  border-2 border-dashed  border-blue-400 bg-[#EFF6FF] text-center"
                    >
                      {!newArr.length ? (
                        <>
                          <img src={image} alt="" />

                          <h2 className="mt-4  font-medium tracking-wide">
                            Drop your files here or{' '}
                            <span className="text-blue-600 font-medium">Browse</span>
                          </h2>
                          <span className="text-xs font-medium">Maximum size: 50MB</span>
                        </>
                      ) : (
                        <div className="w-[300px] lg:w-[380px] p-1 overflow-y-scroll">
                          {newArr?.length &&
                            newArr.map((newAr) => (
                              <div className=" ">
                                <p className="text-xl lg:text-2xl  text-ellipsis overflow-hidden text-blue-500">
                                  {' '}
                                  {newAr?.path}
                                </p>
                                <p>
                                  size: {Math.trunc(parseInt(newAr?.size, 10).toFixed(2) / 1024)} Kb
                                </p>
                              </div>
                            ))}
                        </div>
                      )}
                    </section>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          {/* Image Upload Section Ended  */}
        </div>

        {/* This Is Submit Button  */}

        <div className="flex justify-center mt-10 lg:mt-32">
          <button
            type="submit"
            className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
          >
            Update Profile Page
          </button>
        </div>
      </form>
    </SettingsItems>
  );
};

export default SettingsProfile;
