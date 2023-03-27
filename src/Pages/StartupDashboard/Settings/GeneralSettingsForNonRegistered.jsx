/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import axios from 'axios';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { BsCalendarRange } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import image from '../../../Assets/Verification/Image.png';

const GeneralSettingsForNonRegistered = () => {
    const { user } = useSelector((state) => state.auth);

    const [error, setError] = useState();
    const [domain, setDomain] = useState(null);
    const [files, setFile] = useState();
    const [allFiles, setAllFiles] = useState(null);
    const [file, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Initialize use form from react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    // list of allowed ID types
    const domains = ['GSTIN', 'Address Proof', 'CIN Document', 'Company PAN', 'Others'];

    // on change event on documents ID
    // dynamically map value of event and assign to new state

    // State for File and Array name

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

    // function to display progressBar
    // const progressBar = () => {
    //     const document = { name: domain, file: files };
    //     setFiles([...file, document]);
    //     setDomain(null);
    // };
    console.log(allFiles);

    // On form submit and make Http request
    const onSubmit = async (data) => {
        setLoading(true);
        console.log({ data, document });

        const bodyData = {
            companyAddress: {
                place: data.RegisteredAddress,
                city: data.City,
                state: data.State,
                country: data.aboutCountry,
                PIN: data.pinCode,
                incubatedAt: data.Incubated,
                registrationDate: data.registrationDate,
                gstinNumber: data.GSTINNumber,
                registeredName: data.RegisteredName,
                registered: false,
            },

            email: user?.user.email,
            startupName: data.startupName,

            startupCIN: data.ComanyCINNumber,

            foundersDetail: {
                fullName: data.FounderFullName,
                linkedin: data.LinkedInURL,
                address: data.Address,
            },
        };

        const formData = new FormData();

        console.log(allFiles);

        // Append file fields to the form data
        formData.append('data', JSON.stringify(bodyData));
        allFiles.forEach((doc) => {
            Object.entries(doc).forEach(([key, value]) => {
                const newKey = key.replace(/\s/g, '').replace(/^./, key[0].toLowerCase());
                console.log(newKey);

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
    };
    // array of Country, State, Cities
    const Countries = ['India', 'Bangladesh', 'Pakistan'];
    const States = ['Jharkhand', 'Delhi', 'Dhaka'];
    const cities = ['Jharkhand', 'Delhi', 'Dhaka'];

    // console.log(file);
    const handleDelete = (f) => {
        console.log(f);
        const updatedFiles = allFiles.filter((item) => item !== f);
        setAllFiles(updatedFiles);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* StartUp Form for Non-registered Start-up Starts */}

            {/* StartUp Form inputs Starts */}
            <div className="mt-[33px] lg:w-[850px] ">
                <div className="lg:flex items-center justify-between">
                    <div>
                        {/* StartUp Name input Starts */}

                        <div className="space-y-1 text-sm">
                            <label className="block font-semibold text-gray-900">
                                Startup Name
                            </label>
                            <input
                                type="Text"
                                name="startupName"
                                {...register('startupName', {
                                    required: 'Startup Name is Required',
                                    minLength: {
                                        value: 3,
                                        message: 'min  3 characters required',
                                    },
                                    maxLength: {
                                        value: 70,
                                        message: 'max 70 characters allowed',
                                    },
                                })}
                                id="startupName"
                                placeholder="Eg. remostarts"
                                className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                            />
                            {/* StartUp Name input ERRORS Starts */}

                            <p className="py-2">
                                {errors.startupName && (
                                    <span className="text-red-400 ">
                                        {errors.startupName?.message}
                                    </span>
                                )}
                            </p>
                        </div>
                        {/* Registered Name input Starts */}

                        {/* <div className="space-y-1 text-sm">
                            <label className="block font-semibold text-gray-900">
                                Registered Name
                            </label>
                            <input
                                type="Text"
                                name="startupName"
                                {...register('RegisteredName', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 30,
                                })}
                                id="startupName"
                                placeholder="Eg. remostarts"
                                className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                            />
                            Registered Name input ERRORS Starts

                            <p className="pt-2">
                                {errors.RegisteredName && (
                                    <span className="text-red-400 ">
                                        {errors.startupName?.type === 'required' &&
                                            'Please provide your name'}
                                    </span>
                                )}
                            </p>
                        </div> */}
                        {/*  Company CIN Number input Starts */}

                        {/* <div className="space-y-1 text-sm">
                            <label className="block font-semibold text-gray-900">
                                Company CIN Number
                            </label>
                            <input
                                type="Text"
                                name="ComanyCINNumber"
                                {...register('ComanyCINNumber', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 30,
                                })}
                                id="ComanyCINNumber"
                                placeholder="Eg. remostarts"
                                className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                            />
                             Company CIN Number input ERRORS Starts

                            <p className="pt-2">
                                {errors.ComanyCINNumber && (
                                    <span className="text-red-400 ">
                                        {errors.ComanyCINNumber?.type === 'required' &&
                                            'Please provide your name'}
                                    </span>
                                )}
                            </p>
                        </div> */}
                        {/* Registration Date input Starts */}

                        <div className="space-y-1 text-sm">
                            <label className="block font-semibold text-gray-900">Start Date</label>
                            <div className="lg:w-[362px] w-full px-4 py-3 rounded-md border border-[#BCBCBC] flex items-center text-gray-900">
                                <div>
                                    <BsCalendarRange />
                                </div>
                                <input
                                    type="date"
                                    name="SelectDate"
                                    {...register('registrationDate', {
                                        required: true,
                                    })}
                                    id="SelectDate"
                                    placeholder="Select date"
                                    className=" w-full outline-none  border-0 px-4 rounded-md focus:border-opacity-0  text-gray-900 "
                                />
                            </div>
                            {/* Registration Date input ERROR Starts */}

                            <p className="py-2">
                                {errors.registrationDate && (
                                    <span className="text-red-400 ">
                                        {errors.registrationDate?.type === 'required' &&
                                            'Select date please'}
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                {/*  Incubated at? (Optional)  input Starts */}

                <div className="space-y-1 mt-1 text-sm">
                    <label className="block font-semibold text-gray-900">
                        Incubated at? (Optional)
                    </label>
                    <input
                        type="Text"
                        {...register('Incubated', {
                            minLength: {
                                value: 3,
                                message: 'min 3 characters required',
                            },
                            maxLength: {
                                value: 30,
                                message: 'Max 30 characters allowed',
                            },
                        })}
                        id="Register Address"
                        placeholder="Your startup incubated at"
                        className=" w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    {/*  Incubated at? (Optional)  input ERRORS Starts */}
                    <p className="pt-2">
                        {errors?.Incubated && (
                            <span className="text-red-400 ">{errors.Incubated?.message}</span>
                        )}
                    </p>
                </div>

                {/*  Registered Address input Starts */}

                <div className="space-y-1 text-sm">
                    <label className="block font-semibold text-gray-900">Registered Address</label>
                    <input
                        type="Text"
                        name="Registered Address"
                        {...register('RegisteredAddress', {
                            required: '*Registered Address is Required',
                            minLength: {
                                value: 3,
                                message: '*Min 3 characters Required',
                            },
                            maxLength: {
                                value: 30,
                                message: '*Max 30 characters Allowed',
                            },
                        })}
                        id="RegisteredAddress"
                        placeholder="Plot./ Flat. / Area./ etc..."
                        className=" w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    {/*  Registered Address input ERRORS Starts */}

                    <p className="pt-2">
                        {errors.RegisteredAddress && (
                            <span className="text-red-400 ">
                                {errors.RegisteredAddress?.message}
                            </span>
                        )}
                    </p>
                </div>
            </div>

            {/* Country drop-down Starts */}

            <div className="lg:flex gap-40  mt-2 items-center">
                <div>
                    <label className="block font-semibold text-sm text-gray-900">Country</label>
                    <select
                        {...register('aboutCountry', {
                            required: 'Country is Required',
                        })}
                        className="select lg:w-[135px] mt-1 lg:max-w-xs w-full font-semibold border border-gray-400 rounded-md "
                    >
                        <option hidden>Country</option>
                        {Countries.map((country, i) => (
                            <option key={i}>{country} </option>
                        ))}
                    </select>
                    <p className="pt-2">
                        {errors.aboutCountry && (
                            <span className="text-red-400 ">{errors.aboutCountry?.message}</span>
                        )}
                    </p>
                </div>

                {/* State drop-down Starts */}

                <div>
                    <label className="block font-semibold text-sm text-gray-900">State</label>
                    <select
                        {...register('State', {
                            required: ' State is Required',
                        })}
                        className="select lg:w-[130px] mt-1 lg:max-w-xs w-full font-semibold border border-gray-400 rounded-md "
                    >
                        <option hidden>State</option>
                        {States.map((state, i) => (
                            <option key={i}>{state} </option>
                        ))}
                    </select>
                    <p className="pt-2">
                        {errors.SelectDate && (
                            <span className="text-red-400 ">{errors.State?.message}</span>
                        )}
                    </p>
                </div>

                {/* City drop-down Starts */}

                <div>
                    <label className="block font-semibold text-sm text-gray-900">City</label>
                    <select
                        {...register('City', {
                            required: ' City is Required',
                        })}
                        className="select lg:w-[126px] mt-1 lg:max-w-xs w-full font-semibold border border-gray-400 rounded-md "
                    >
                        <option hidden>City</option>
                        {cities.map((city, i) => (
                            <option key={i}>{city} </option>
                        ))}
                    </select>
                    <p className="pt-2">
                        {errors.City && (
                            <span className="text-red-400 ">{errors.City?.message}</span>
                        )}
                    </p>
                </div>

                {/* PIN CODE Input Starts */}

                <div className="space-y-1 text-sm">
                    <label className="block font-semibold text-gray-900">PIN CODE</label>
                    <input
                        type="number"
                        name="PIN CODE"
                        {...register('pinCode', {
                            required: 'Pin Code is Required',
                            minLength: {
                                value: 3,
                                message: 'Min 3 pin required',
                            },
                            maxLength: {
                                value: 30,
                                message: 'Maximum 30 Pin required',
                            },
                        })}
                        id="RegisteredPin"
                        placeholder="Eg. 834003"
                        className=" w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.pinCode && (
                            <span className="text-red-400 ">{errors.pinCode?.message}</span>
                        )}
                    </p>
                </div>
            </div>

            {/* GSTIN NUMBER Input Starts */}

            {/* <div className="space-y-1 text-sm mt-2">
                <label className="block font-semibold text-gray-900">
                    GSTIN Number (If Applicable)
                </label>
                <input
                    type="Text"
                    name="Registerd Address"
                    {...register('GSTINNumber')}
                    id="Registerd Address"
                    placeholder="Eg. GSTIN 19482938298"
                    className=" lg:w-[514px] px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                />
            </div> */}

            {/* Upload supported documents Section Starts */}

            <div className="lg:flex mt-10 ">
                <div className="group inline-block  space-y-2 pr-10">
                    <label className="block font-semibold text-gray-900">
                        Upload Supported Documents
                    </label>
                    <select
                        onClick={(e) => {
                            setDomain(e.target.value);
                        }}
                        className="select lg:w-[150px] mt-1 max-w-xs font-semibold border 
                     border-gray-400 rounded-md "
                    >
                        <option>Id Type</option>
                        {domains.map((D, i) => (
                            <option key={i}>{D}</option>
                        ))}
                    </select>
                </div>
                {/* Dropzone Section starts */}
                <div>
                    <Dropzone
                        className="lg:w-[335px] lg:mt-0 h-[213px] mt-10 mx-auto"
                        onDrop={async (acceptedFiles) => {
                            setError('');
                            setFile(acceptedFiles);
                            // OnDrop on select file run function to get domain and set as property to file value
                            await createFileArray(acceptedFiles);
                            // render progressBar
                            // progressBar();
                        }}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section className="container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <section
                                        htmlFor="dropzone-file"
                                        className=" justify-center cursor-pointer lg:mt-0 mt-10  flex lg:w-[335px] h-[213px]  flex-col items-center rounded-xl  border-2 border-dashed border-blue-400 bg-[#eff6ff] text-center"
                                    >
                                        {!files?.[0]?.size ? (
                                            <>
                                                <img src={image} alt="" />

                                                <h2 className="mt-4  font-medium tracking-wide">
                                                    Drop your files here or
                                                    <span className="text-blue-600 font-medium ml-2">
                                                        Browse
                                                    </span>
                                                </h2>
                                                <span className="text-xs font-medium">
                                                    Maximum size: 50MB
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <img src={image} alt="" />

                                                <h2 className="mt-4  font-medium tracking-wide">
                                                    Drop your files here or
                                                    <span className="text-blue-600 font-medium ml-2">
                                                        Browse
                                                    </span>
                                                </h2>
                                                <span className="text-xs font-medium">
                                                    Maximum size: 50MB
                                                </span>
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
                                                <p className="text-sm lg:w-[627px]">
                                                    {Object.keys(f)[0]}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    className="bg-teal-500 text-white rounded-full"
                                                >
                                                    <TiTick className="text-md " />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(f)}
                                                    type="button"
                                                >
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

            {/* Founders Details Section Starts */}

            <h1 className="text-3xl font-semibold mt-10">
                Founder <span className=""> Details</span>
            </h1>
            <p className="border-[#e5e5e5] bg-[#BCBCBC] border w-2/4 mt-2" />

            <div className="lg:w-[520px]  mt-10">
                <div className="mt-2">
                    <label className="text-sm font-medium" htmlFor="MyName">
                        Founder Full Name
                    </label>
                    <input
                        {...register('FounderFullName', {
                            required: 'Founder FullName is Required',
                        })}
                        id="MyName"
                        type="text"
                        placeholder=" Founder Full Name"
                        className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md   border-[#e5e5e5]  "
                    />
                    <p className="pt-2 ">
                        <span className="text-red-400 ">
                            {errors.FounderFullName && (
                                <span>{errors?.FounderFullName?.message}</span>
                            )}
                        </span>
                    </p>
                </div>
                <div className="mt-2">
                    <label className="text-sm font-medium " htmlFor="MyName">
                        LinkedIn URL
                    </label>
                    <input
                        {...register('LinkedInURL', {
                            required: '*Founder Linkedin Profile url is Required',
                            pattern: {
                                value: /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|company|in|profile)/,
                                message: '*Founder Linkedin Profile url is not valid',
                            },
                        })}
                        id="MyName"
                        type="text"
                        placeholder="https://www.linkedin.com/company/remo-start/"
                        className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md  border-[#e5e5e5]  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                    />{' '}
                    <p className="pt-2 ">
                        <span className="text-red-400 ">
                            {errors?.LinkedInURL && <span>{errors?.LinkedInURL?.message}</span>}
                        </span>
                    </p>
                </div>
                <div className="mt-2">
                    <label className="text-sm font-medium" htmlFor="MyName">
                        Address
                    </label>
                    <input
                        {...register('Address', {
                            required: 'Address is Required',
                            minLength: {
                                value: 3,
                                message: 'Min 3 characters required',
                            },
                        })}
                        id="Address"
                        type="text"
                        placeholder="Address"
                        className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md  border-[#e5e5e5] "
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
            {/* StartUp Form for Non-registered Start-up Ends */}
        </form>
    );
};

export default GeneralSettingsForNonRegistered;