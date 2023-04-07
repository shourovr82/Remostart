/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';

import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FiUpload } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import PhoneInput from 'react-phone-number-input';
import { useSelector } from 'react-redux';
import image from '../../../../Assets/Verification/Image.png';
import AuthContext from '../../../../Context/AuthContext';
import { getFileSize } from '../../../../Utilities/FileSize';

const GeneralSettingsPersonal = () => {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [contactNumberError, setContactNumberError] = useState('');
  const [files, setFile] = useState();
  const [domain, setDomain] = useState('Pan Card');
  const [error, setError] = useState();
  
  const { data: startupData } = useQuery(['startupData'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/startup/startup-preview/${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );

  const [allFiles, setAllFiles] = useState(
    (startupData?.personalIds?.length && startupData?.personalIds) || null
  );

  // Domain array
  const domains = ['Pan Card', 'Adhar Card', 'Driving License', 'Passport'];
  // Initialize use form hook
  const [contactNumber, setContactNumber] = useState(startupData?.personalPhone || '');
  const handleSetContactNumber = (contact) => {
    if (contact) {
      setContactNumberError('');
      setContactNumber(contact);
    } else {
      setContactNumberError('Contact Number is required');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  // function to setState of Uploaded Id to New Arr
  async function setAllFilesArray(data) {
    if (allFiles === null) {
      const newArr = [data];
      setAllFiles(newArr);
      return;
    }
    const newArr = allFiles;
    newArr.push(data);
    setAllFiles(newArr);
  }

  // This algorithm check if a domain has been selected
  const createFileArray = async (data) => {
    if (domain === null) {
      setError('Please select an ID type first');
      return;
    }
    const newObj = {};
    newObj[domain] = data?.[0];
    await setAllFilesArray(newObj);
  };

  // handle drop
  const handleDropFile = async (acceptedFiles) => {
    setError('');
    const fileSizeBytes = acceptedFiles[0]?.size;
    const checkFileSize = getFileSize(fileSizeBytes);
    if (checkFileSize > 1024) {
      toast.error('Maximum file upload size is 1Mb / 1024 Kb');
    } else {
      setFile(acceptedFiles);
      if (allFiles?.length) {
        const fileNameArr = allFiles.map((card) => Object.keys(card)[0]);
        const isFileExist = fileNameArr.find((card) => card === domain);
        if (isFileExist) {
          toast.error(`Already added ${isFileExist}`);
        } else {
          await createFileArray(acceptedFiles);
        }
      } else {
        await createFileArray(acceptedFiles);
      }
    }
  };

  // on Submit form and http request
  const onSubmit = async (data) => {
    setLoading(true);
    if (!allFiles?.length) {
      setLoading(false);
      return setError('Please upload at least one ID type');
    }
    const bodyData = {
      email: user?.user?.email || serviceUser?.email,
      secondaryEmail: data.Email,
      designation: data.Designation,
      fullName: data.MyName,
      personalPhone: contactNumber,
      linkedIn: data.LinkedIn,
    };

    const obj = { ...bodyData, document: allFiles };
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
      if (key !== 'document') {
        formData.append(key, value);
      }
    });

    // Append file fields to the form data
    obj.document.forEach((doc) => {
      Object.entries(doc).forEach(([key, value]) => {
        const newKey = key.replace(/\s/g, '').replace(/^./, key[0].toLowerCase());
        formData.append(newKey, value);
      });
    });

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL_STARTUP}/api/startup/settings-general-personal`,
        formData
      );
      if (response.data.modifiedCount) {
        setLoading(false);
        toast.success('Your personal data is updated successfully');
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  // delete
  const handleDelete = (f) => {
    const updatedFiles = allFiles.filter((item) => item !== f);
    setAllFiles(updatedFiles);
  };

  return (
    <div>
      {/* General settings form starts */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-8 mt-5 lg:w-1/2">
          {/* My Name Input starts */}

          <div>
            <label className="text-sm font-medium" htmlFor="MyName">
              My Name
            </label>
            <input
              {...register('MyName', {
                required: '*Your Name is required, Please type your name',
                maxLength: {
                  value: 100,
                  message: 'Maximum 100 characters',
                },
              })}
              defaultValue={startupData?.fullName}
              id="MyName"
              type="text"
              placeholder="Your name"
              className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            {/* My Name Input Error starts */}

            <p className="pt-2 ">
              <span className="text-red-400 ">
                {errors.MyName && <span>{errors?.MyName?.message} </span>}
              </span>
            </p>
          </div>
          {/* Designation Input starts */}

          <div>
            <label className="text-sm font-medium" htmlFor="Designation">
              Designation
            </label>
            <input
              {...register('Designation', {
                required: 'Designation is Required ',
                maxLength: {
                  value: 200,
                  message: 'Max 200 characters allowed',
                },
              })}
              defaultValue={startupData?.designation}
              id="Designation"
              type="text"
              placeholder="CTO, CFO, CEO etc..."
              className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            {/* Designation Input Error starts */}

            <p className="pt-2 ">
              <span className="text-red-400 ">
                {errors.Designation && <span>{errors?.Designation?.message}</span>}
              </span>
            </p>
          </div>
          {/* Email Input starts */}

          <div>
            <label className="text-sm font-medium" htmlFor="Email">
              Email
            </label>
            <input
              {...register('Email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: 'Email address must be valid',
                },
              })}
              defaultValue={startupData?.secondaryEmail}
              id="Email"
              type="email"
              placeholder="samplemail@gmail.com"
              className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            {/* Email Input Error starts */}

            <p className="pt-2 ">
              <span className="text-red-400 ">
                {errors.Email && <span>{errors?.Email?.message}</span>}
              </span>
            </p>
          </div>
          {/* Contact Input starts */}

          <div>
            <label className="text-sm font-medium" htmlFor="Contact">
              Contact
            </label>
            <PhoneInput
              id="contactNumber"
              type=""
              value={contactNumber}
              onChange={handleSetContactNumber}
              placeholder="+91 99999 78787"
              className="w-full border p-4  space-x-3 border-gray-200 rounded-md  mt-2  "
            />

            {/* Contact Input Error starts */}

            <p className="pt-2 ">
              <span className="text-red-400 ">
                {contactNumberError && <span>{contactNumberError}</span>}
              </span>
            </p>
          </div>
          {/* LinkedIn Input starts */}

          <div>
            <label className="text-sm font-medium" htmlFor="LinkedIn">
              LinkedIn (Personal)
            </label>
            <input
              {...register('LinkedIn', {
                required: '*Linkedin Profile url is Required',
                pattern: {
                  value: /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,
                  message: '*Your  Linkedin Profile url is not valid',
                },
              })}
              defaultValue={startupData?.linkedIn}
              id="LinkedIn"
              type="text"
              placeholder="https://mypersonallinkedin.com"
              className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            {/* LinkedIn Input Error starts */}

            <p className="pt-2 ">
              <span className="text-red-400 ">
                {errors?.LinkedIn && <span>{errors?.LinkedIn?.message}</span>}
              </span>
            </p>
          </div>
          {/* Supported Document Upload Section Error starts */}

          <div className="lg:flex justify-center ">
            <div className="group inline-block  space-y-2 pr-10">
              <label htmlFor="document">Choose File</label>
              <select
                // on Click event set value to domain state
                onClick={(e) => {
                  setDomain(e.target.value);
                }}
                className="select  mt-1 max-w-xs font-semibold border 
                     border-gray-400 rounded-md "
              >
                {domains.map((D, i) => (
                  <option key={i} value={D}>
                    {D}
                  </option>
                ))}
              </select>
            </div>
            {/* Dropzone Section starts */}
            <div>
              <Dropzone
                className="lg:w-[335px] lg:mt-0 h-[213px] mt-10 mx-auto"
                onDrop={handleDropFile}
              >
                {({ getRootProps, getInputProps }) => (
                  <section className="container lg:w-[335px]">
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      <section
                        htmlFor="dropzone-file"
                        className="justify-center cursor-pointer lg:mt-0 mt-10  flex lg:w-[335px] h-[213px]  flex-col items-center rounded-xl  border-2 border-dashed border-blue-400 bg-[#eff6ff] text-center"
                      >
                        {!files?.[0]?.size ? (
                          <>
                            <img src={image} alt="" />

                            <h2 className="mt-4  font-medium tracking-wide">
                              Drop your files here or
                              <span className="text-blue-600 font-medium ml-2">Browse</span>
                            </h2>
                            <span className="text-xs font-medium">Maximum size: 1MB</span>
                          </>
                        ) : (
                          <>
                            <img src={image} alt="" />

                            <h2 className="mt-4  font-medium tracking-wide">
                              Drop your files here or
                              <span className="text-blue-600 font-medium ml-2">Browse</span>
                            </h2>
                            <span className="text-xs font-medium">Maximum size: 1MB</span>
                          </>
                        )}
                      </section>
                    </div>
                  </section>
                )}
              </Dropzone>
              {/* Dropzone Section Error starts */}

              {error && <span className="text-red-400 ">{error}</span>}
              {/* Progress Bar Section UI starts */}

              {allFiles?.length ? (
                <div className="mt-6">
                  {allFiles?.map((f, i) => (
                    <div key={i} className="border rounded-md w-full mt-3">
                      <div className="p-5">
                        <div className="flex justify-between items-center">
                          <div className="flex  gap-4 items-center">
                            <FiUpload className="text-sm" />
                            <p className="text-sm lg:w-[627px]">{Object.keys(f)[0]}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button type="button" className="bg-teal-500 text-white rounded-full">
                              <TiTick className="text-md " />
                            </button>
                            <button onClick={() => handleDelete(f)} type="button">
                              <MdDeleteOutline className="text-lg " />
                            </button>
                          </div>
                        </div>
                        <p className="w-full mt-2 h-[6px] bg-[#3B82F6]" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 lg:mt-16">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md flex items-center gap-2"
          >
            Update General Settings{' '}
            {loading && (
              <span className="w-7 h-7 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettingsPersonal;
