/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { BsCalendarRange } from 'react-icons/bs';
import { FiInfo, FiUpload } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import image from '../../../Assets/Verification/Image.png';

import AuthContext from '../../../Context/AuthContext';
import SettingsItems from '../../../Routes/Roots/SettingsItems';
import { getFileSize } from '../../../Utilities/FileSize';
import GeneralSettingsForNonRegistered from './GeneralSettingsForNonRegistered';
import GeneralSettingsPersonal from './SettingsGeneral/GeneralSettingsPersonal';
import Password from './SettingsGeneral/Password';

const SettingsGeneral = () => {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const [error, setError] = useState();
  const [domain, setDomain] = useState(null);
  const [files, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState();
  const [registerDate, setRegisterDate] = useState(new Date());

  const navigate = useNavigate();

  // get storedValues for startup
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
    (startupData?.companyDocs?.length && startupData?.companyDocs) || null
  );
  // Initialize use form form react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  // Upload Button Function
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

  const onSubmit = async (data) => {
    if (!allFiles?.length) {
      toast.error('Must upload Documents ');
    } else {
      setLoading(true);
      const bodyData = {
        companyAddress: {
          place: data.RegisteredAddress,
          city: data.City,
          state: data.State,
          country: data.Country,
          PIN: data.pinCode,
          registrationDate: registerDate?.toLocaleDateString(),
          registeredName: data.RegisteredName,
        },
        registered: true,
        email: user?.user?.email || serviceUser?.email,
        startupName: data.startupName,
        registeredName: data.RegisteredName,
        startupCIN: data.ComanyCINNumber,
        region: data.regions,
        gstinNumber: data.GSTINNumber,
        foundersDetail: {
          fullName: data.FounderFullName,
          linkedin: data.LinkedInURL,
          address: data.Address,
        },
      };
      const formData = new FormData();

      // Append file fields to the form data
      formData.append('data', JSON.stringify(bodyData));
      allFiles.forEach((doc) => {
        Object.entries(doc).forEach(([key, value]) => {
          const newKey = key.replace(/\s/g, '').replace(/^./, key[0].toLowerCase());

          formData.append(newKey, value);
        });
      });

      try {
        const response = await axios.put(
          `${process.env.REACT_APP_URL_STARTUP}/api/startup/settings-general-verification`,
          formData
        );
        if (response.data.modifiedCount) {
          setLoading(false);
          toast.success('Your personal data is updated successfully');
          navigate('/dashboard/settings/verification');
        }
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    }
  };
  // Array of Documents ID types
  const domains = ['GSTIN', 'Address Proof', 'CIN Document', 'Company PAN', 'Others'];
  // Array of countries, regions, states, cities
  const Countries = ['India', 'Bangladesh', 'Pakistan'];
  const Regions = ['India', 'Bangladesh', 'Pakistan'];
  const States = ['Jharkhand', 'Delhi', 'Dhaka'];
  const Cites = ['Jharkhand', 'Delhi', 'Dhaka'];

  // on Change event of select options value and set to selected values state
  const handleDelete = (f) => {
    const updatedFiles = allFiles.filter((item) => item !== f);
    setAllFiles(updatedFiles);
  };

  return (
    <SettingsItems>
      {/* General Settings Component STARTS */}

      <GeneralSettingsPersonal />
      <br />
      {/* UP`DATE `PASSWORD FORM STARTS IF Start-up is Registered */}
      <br />

      <Password />
      {/* START-UP VERIFICATION START */}

      <h1 className="text-3xl font-semibold mt-10">
        Startup <span className="text-[#65DC7F]">Verification</span>
      </h1>
      <p className="border-[#BCBCBC] bg-[#BCBCBC] border mt-2" />

      <section className="mx-auto">
        <div className="grid grid-cols-2 gap-10 mt-10 items-center">
          <div className="col-span-2 md:col-span-1 flex gap-5">
            <p className="font-medium">Is your StartUp Registered?</p>
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer text-gray-900"
            >
              <span>No</span>
              <span className="relative">
                <input
                  id="Toggle1"
                  type="checkbox"
                  className="hidden peer"
                  onClick={(e) => {
                    setToggle(e.target.checked);
                  }}
                />
                <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-blue-400" />
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800" />
              </span>
              <span>Yes</span>
            </label>
          </div>
          {toggle && (
            <div className="col-span-1 max-md:hidden ">
              <div className="flex gap-4 items-center ">
                {/* Information Alert if is registered */}

                <div className=" border-headers  relative  flex no-wrap  justify-between items-center">
                  <div className="group transition-all flex duration-300 ease-in justify-between ">
                    <div className=" flex items-center justify-start  h-[3.2rem]">
                      <span className="w-[30px]">
                        <FiInfo className="text-xl " />
                      </span>
                    </div>
                    <div className="group-hover:w-[90%] border rounded-md  border-[#009aff] px-2 items-center transition-all duration-300 ease-in w-0 gap-3 hidden group-hover:flex ">
                      <span>
                        <FiInfo className="text-3xl text-[#009aff]" />
                      </span>
                      <div className="group-hover:w-full transition-all duration-300 ease-in">
                        <h6 className="text-headers font-bold text-[#009aff] text-md">
                          Information
                        </h6>
                        <p className="text-xs ">depending on your registration status</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {toggle ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* START-UP FORM FOR REGISTERED START-UP STARTs */}
            <div className="mt-[33px] lg:w-[10rm] ">
              <div className="lg:flex items-center justify-between">
                <div>
                  {/* START-UP Name Input STARTs */}

                  <div className="space-y-1 text-sm">
                    <label className="block font-semibold text-gray-900">
                      {/* startup Name */}
                      Startup Name
                    </label>
                    <input
                      type="Text"
                      name="startupName"
                      {...register('startupName', {
                        required: 'Startup Name is Required',
                        minLength: {
                          value: 3,
                          message: 'Min 3 characters required for Startup Name',
                        },
                        maxLength: {
                          value: 70,
                          message: 'Max 70 characters allowed',
                        },
                      })}
                      defaultValue={startupData?.startupName}
                      id="startupName"
                      placeholder="Enter Startup Name"
                      className="lg:w-[520px] w-full px-4 py-3 rounded-md border  border-[#E5E7EB]  text-gray-900 "
                    />
                    {/* START-UP Name ERRORS STARTs */}

                    <p className="py-2 text-red-400">
                      {errors.startupName && <span>{errors?.startupName?.message}</span>}
                    </p>
                  </div>
                  {/* Registered Name Input STARTs */}

                  <div className="space-y-1 text-sm">
                    <label className="block font-semibold text-gray-900">Registered Name</label>
                    <input
                      type="Text"
                      name="RegisteredName"
                      {...register('RegisteredName', {
                        required: 'Registered Name is Required',
                        minLength: {
                          value: 3,
                          message: 'Min 3 characters Required',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Max 70 characters allowed',
                        },
                      })}
                      defaultValue={startupData?.companyAddress?.registeredName}
                      id="RegisteredName"
                      placeholder="Enter Registered Name"
                      className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#E5E7EB] text-gray-900 "
                    />
                    {/* Registered Name Error STARTs */}
                    <p className="pt-2">
                      {errors.RegisteredName && (
                        <span className="text-red-400 ">{errors.RegisteredName?.message}</span>
                      )}
                    </p>
                  </div>
                  {/* Company CIN Number Input STARTs */}

                  <div className="space-y-1 text-sm">
                    <label className="block font-semibold text-gray-900">Company CIN Number</label>
                    <input
                      type="number"
                      name="CompanyCINNumber"
                      {...register('CompanyCINNumber', {
                        required: 'Company CIN number is Required',
                      })}
                      defaultValue={startupData?.startupCIN}
                      id="CompanyCINNumber"
                      placeholder="Enter Company CIN Number"
                      className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#E5E7EB] text-gray-900 "
                    />
                    {/* Company CIN Number ERRORS STARTs */}

                    <p className="pt-2">
                      {errors.CompanyCINNumber && (
                        <span className="text-red-400 ">{errors.CompanyCINNumber?.message}</span>
                      )}
                    </p>
                  </div>
                  {/* Registration Date Input STARTs */}

                  <div className="space-y-1 text-sm">
                    <label className="block font-semibold text-gray-900">Registration Date</label>
                    <div className="lg:w-[362px] w-full px-4 py-3 rounded-md border  border-[#E5E7EB] flex items-center text-gray-900">
                      <div>
                        <BsCalendarRange />
                      </div>

                      <DatePicker
                        className="border-transparent border focus:ring-transparent"
                        showIcon
                        selected={registerDate}
                        onChange={(date) => setRegisterDate(date)}
                      />

                      {/* <input
                        type="date"
                        name="SelectDate"
                        {...register('SelectDate', {
                          required: true,
                        })}
                        defaultValue={startupData?.companyAddress?.registrationDate?.substring(
                          0,
                          10
                        )}
                        id="SelectDate"
                        placeholder="Select date"
                        className=" w-full outline-none border-0 focus:border-0 px-4 rounded-md selection:outline-none   !focus:outline-none  text-gray-900 "
                      /> */}
                    </div>
                    {/* Registration Date ERRORS STARTs */}

                    <p className="pt-2">
                      {errors.SelectDate && (
                        <span className="text-red-400 ">
                          {errors.SelectDate?.type === 'required' && 'Select date please'}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                {/* Registered Region STARTs */}
                <div className="text-center">
                  {/* <p className="mt-2">Registered Region</p> */}

                  <p className="pt-2">
                    {errors.regions && (
                      <span className="text-red-400 ">
                        {errors.regions?.type === 'required' && 'Select a country'}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              {/* Registered Address Input STARTs */}

              <div className="space-y-1 text-sm">
                <label className="block font-semibold text-gray-900">Registered Address</label>
                <input
                  type="Text"
                  name="Registered Address"
                  {...register('RegisteredAddress', {
                    required: ' Registered Address is Required',
                    minLength: {
                      value: 3,
                      message: 'Min 3 characters Required',
                    },
                    maxLength: {
                      value: 40,
                      message: 'Max 40 characters allowed',
                    },
                  })}
                  defaultValue={startupData?.companyAddress?.place}
                  id="RegisteredAddress"
                  placeholder="Plot./ Flat. / Area./ etc..."
                  className=" w-full px-4 py-3 rounded-md border  border-[#E5E7EB] text-gray-900 "
                />
                {/* Registered Address Errors STARTs */}

                <p className="pt-2">
                  {errors.RegisteredAddress && (
                    <span className="text-red-400 ">{errors.RegisteredAddress?.message}</span>
                  )}
                </p>
              </div>
            </div>
            {/* Country Input STARTs */}

            <div className="lg:flex justify-between items-start">
              <div>
                <label className="block font-semibold text-sm text-gray-900">Country</label>
                <select
                  {...register('Country', {
                    required: true,
                  })}
                  defaultValue={startupData?.companyAddress?.country}
                  className="select lg:w-[116px] w-full mt-1 max-w-xs font-semibold border border-[#E5E7EB] rounded-md "
                >
                  <option hidden>Country</option>
                  {Countries.map((country, i) => (
                    <option key={i}>{country} </option>
                  ))}
                </select>
                {/* Country Errors STARTs */}
                <p className="pt-2">
                  {errors.Country && (
                    <span className="text-red-400 ">
                      {errors.Country?.type === 'required' && 'Select Country please'}
                    </span>
                  )}
                </p>
              </div>
              {/* State Input STARTs */}

              <div>
                <label className="block font-semibold text-sm text-gray-900">State</label>
                <select
                  {...register('State', {
                    required: 'State is required',
                  })}
                  defaultValue={startupData?.companyAddress?.state}
                  className="select lg:w-[125px] w-full mt-1 max-w-xs font-semibold border border-[#E5E7EB] rounded-md "
                >
                  <option hidden value="">
                    State
                  </option>
                  {States.map((state, i) => (
                    <option key={i}>{state} </option>
                  ))}
                </select>
                {/* State Errors STARTs */}

                <p className="">
                  {errors.State && <span className="text-red-400 ">{errors?.State?.message}</span>}
                </p>
              </div>
              {/* CITIES Input STARTs */}

              <div>
                <label className="block font-semibold text-sm text-gray-900">City</label>
                <select
                  {...register('City', {
                    required: 'city is required',
                    valueAsDate: 'date value is required',
                  })}
                  defaultValue={startupData?.companyAddress?.city}
                  className="select lg:w-[125px] w-full mt-1 max-w-xs font-semibold border border-[#E5E7EB] rounded-md "
                >
                  <option hidden>City</option>
                  {Cites.map((city, i) => (
                    <option key={i}>{city} </option>
                  ))}
                </select>
                {/* CITIES ERRORS STARTs */}

                <p className="pt-2">
                  {errors.City && <span className="text-red-400 ">{errors.City?.message}</span>}
                </p>
              </div>
              {/* PIN CODE Input STARTs */}

              <div className="space-y-1 text-sm">
                <label className="block font-semibold text-gray-900">PIN CODE</label>
                <input
                  type="number"
                  name="PIN CODE"
                  {...register('pinCode', {
                    required: '*PIN code is Required',
                    minLength: {
                      value: 3,
                      message: '*Min 3 PIN Code Required',
                    },
                    maxLength: {
                      value: 30,
                      message: '*Max 30 PIN code allowed',
                    },
                  })}
                  defaultValue={startupData?.companyAddress?.PIN}
                  id="RegisteredPinNumber"
                  placeholder="Enter Your PIN number"
                  className="w-full px-4 py-3 rounded-md border border-[#E5E7EB]  text-gray-900 "
                />
                {/* PIN CODE Errors STARTs */}

                <p>
                  {errors.pinCode && (
                    <span className="text-red-400 ">{errors.pinCode?.message}</span>
                  )}
                </p>
              </div>
            </div>

            {/* SUPPORTED DOCUMENTS SECTION STARTS */}

            <div className="lg:flex justify-start mt-10 ">
              <div className="group flex flex-col space-y-2 pr-10">
                <label htmlFor="document" className=" text-[#475569] font-medium">
                  Upload Supported Documents
                </label>
                <select
                  onClick={(e) => {
                    setDomain(e.target.value);
                  }}
                  className="select  mt-1 max-w-xs font-semibold border 
                   border-[#E5E7EB] rounded-md "
                >
                  <option hidden value="">
                    Document Type
                  </option>
                  {domains.map((D, i) => (
                    <option key={i}>{D}</option>
                  ))}
                </select>
              </div>
              {/* Dropzone Section starts */}
              <div>
                <Dropzone
                  className="lg:w-[335px] lg:mt-0 h-[213px] mt-10 mx-auto"
                  onDrop={handleDropFile}
                >
                  {/* onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
                                    ref={(node) => { dropzoneRef = node; }}
                                    accept="image/jpeg, image/png"
                                    maxSize={5242880} */}

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
            <br />
            {/* Founders Details Section Starts */}

            <h1 className="text-3xl font-semibold mt-10">
              Founder <span className="text-[#65DC7F]"> Details</span>
            </h1>
            <p className=" border-[#E5E7EB] bg-[#BCBCBC] border w-5/6 mt-2" />

            <div className="lg:w-[520px]  mt-10">
              <div className="mt-2">
                <label className="text-sm font-medium" htmlFor="MyName">
                  Founder Full Name
                </label>
                <input
                  {...register('FounderFullName', {
                    required: '*Founder Full Name is required',
                    minLength: {
                      value: 3,
                      message: '*Min 3 characters required',
                    },
                    maxLength: {
                      value: 40,
                      message: '*Maximum 40 characters Required',
                    },
                  })}
                  defaultValue={startupData?.foundersDetail?.fullName}
                  id="FounderFullName"
                  type="text"
                  placeholder="Enter Founder Full Name"
                  className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md border-[#E5E7EB]  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                />
                <p className="pt-2 ">
                  <span className="text-red-400 ">
                    {errors.FounderFullName && <span>{errors?.FounderFullName?.message}</span>}
                  </span>
                </p>
              </div>
              <div className="mt-2">
                <label className="text-sm font-medium " htmlFor="LinkedInURL">
                  LinkedIn URL
                </label>
                <input
                  {...register('LinkedInURL', {
                    required: '*Linkedin url is Required',
                    pattern: {
                      value: /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile|company)/,
                      message: '*Linkedin  url is not valid',
                    },
                  })}
                  defaultValue={startupData?.foundersDetail?.linkedin}
                  id="LinkedInURL"
                  type="text"
                  placeholder="https://www.linkedin.com/company/remo-start/"
                  className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md   border-[#E5E7EB]  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                />
                <p className="py-2 ">
                  <span className="text-red-400 ">
                    {errors.LinkedInURL && <span>{errors?.LinkedInURL?.message}</span>}
                  </span>
                </p>
              </div>
              <div className="mt-2">
                <label className="text-sm font-medium" htmlFor="MyName">
                  Address
                </label>
                <input
                  {...register('Address', {
                    required: 'Founder Address is required',
                    minLength: {
                      value: 3,
                      message: 'Min 3 characters required',
                    },
                    maxLength: {
                      value: 40,
                      message: 'Maximum 40 characters required',
                    },
                  })}
                  defaultValue={startupData?.foundersDetail?.address}
                  id="Address"
                  type="text"
                  placeholder="Founder Address"
                  className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md   border-[#E5E7EB]  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                />
                <p className="pt-2 ">
                  <span className="text-red-400 ">
                    {errors.Address && <span>{errors?.Address?.message}</span>}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-14 justify-center">
              <button
                className="px-11 py-5 bg-[#65DC7F] rounded-lg text-white flex items-center gap-2"
                type="submit"
              >
                Submit For Verification{' '}
                {loading && (
                  <span className="w-7 h-7 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
                )}
              </button>
            </div>
          </form>
        ) : (
          <>
            {/* If start-up isn't registered  and toggle is false */}
            <GeneralSettingsForNonRegistered />
          </>
        )}
      </section>
    </SettingsItems>
  );
};

export default SettingsGeneral;
