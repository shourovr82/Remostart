/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { RiUser3Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import image from '../../../Assets/Verification/Image.png';
import SettingsItems from '../../../Routes/Roots/SettingsItems';
import './Input.CSS';

const SettingsProfile = () => {
    const { user } = useSelector((state) => state.auth);
    const [newArr, setNewArr] = useState([]);
    const [loading, setLoading] = useState(false);
    const [jData, setJData] = useState({});
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/data.json');
            const jsonData = await response.json();
            setJData(jsonData);
        }
        fetchData();
    }, []);
    console.log(jData.Domains);
    

    // const domainData = [
    //     {
    //         value: 'Mern Stack',
    //         label: 'Mern Stack',
    //     },
    //     {
    //         value: 'Tailwind CSS',
    //         label: 'Tailwind CSS',
    //     },
    //     {
    //         value: 'Javascript',
    //         label: 'Javascript',
    //     },
    //     {
    //         value: 'Node JS',
    //         label: 'Node JS',
    //     },
    // ];

    //! !!!! All Functional is ok . You now work with only onSubmit function

    // File State
    const [file, setFile] = useState();

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

    // State Of Disable Domains
    const [disableOption, setDisable] = useState(false);

    // ?Domain Function start

    const [selectedValues, setSelectedValues] = useState([]);
    const [domainError, setDomainError] = useState('');
    const handleChange = (e) => {
        setDomainError('');
        const selectedOptions = e.target.selectedOptions[0].innerHTML;
        console.log(selectedOptions);
        const arr = selectedValues.filter((ar) => selectedOptions === ar);

        if (arr.length) {
            console.log(selectedOptions);
            setDomainError(`Already added ${selectedOptions} !!`);
            // toast.error('Already added');
        } else if (!arr.length) {
            setDomainError('');
            setSelectedValues([...selectedValues, selectedOptions]);
        }
    };
    //! Domain function is ended

    // input Link State
    const [url, setUrl] = useState('');
    const [selectUrl, setSelectUrl] = useState(['Github']);
    const [displayUrl, setDisplayUrl] = useState([]);

    const [socialMedia, setSocialMedia] = useState();
    const [socialLinks, setSocialLinks] = useState({});
    const navigate = useNavigate();

    // console.log(displayUrl);
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
        const checkUrl = displayUrl.find((disUrl) => disUrl.name === selectUrl?.[0]);
        if (checkUrl) {
            toast.error('Url is already added');
        } else {
            const srv = url.includes(selectUrl?.[0].toLowerCase());
            if (srv) {
                setSocialLinks({ ...socialLinks, [socialMedia]: url });
                setDisplayUrl([...displayUrl, allData]);
                setUrl('');
                document.getElementById('upload').value = '';
            } else {
                toast.error(`Url is not valid for ${selectUrl?.[0]}`);
            }
        }
    };

    // Form submit handler

    const onSubmit = async (data) => {
        setLoading(true);
        const image = data.startupIcon[0] || (file && file[0]);
        if (!image) {
            toast.error('select a startup icon first');
            setLoading(false);
            return;
        }
        if (!newArr.length) {
            toast.error('select Homepage Image  first');
            setLoading(false);
            return;
        }
        const { startupName, startupDescription, worksIn, startupSlogan } = data;

        const formData = new FormData();

        const obj = {
            email: user?.user.email,
            startupName,
            startupDescription,
            worksIn,
            domains: selectedValues,
            socialLinks,
            startupSlogan,
        };
        // console.log(file[0]);

        formData.append('obj', JSON.stringify(obj));

        formData.append('startupIcon', image);
        for (let i = 0; i < newArr.length; i++) {
            formData.append('homePageImages', newArr[i]);
        }
        console.log(...formData);

        await axios
            .put(`${process.env.REACT_APP_URL_STARTUP}/api/startup/settings-profile`, formData)
            .then((res) => {
                if (res.data.modifiedCount) {
                    res.data.modifiedCount && toast.success('profile data updated successfully');
                    setLoading(false);
                    navigate('/dashboard/settings/general');
                }

                console.log(res);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };
    // console.log(file[0]);
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
                                    {...register('startupIcon', { required: true })}
                                    type="file"
                                    name="startupIcon"
                                    className="choose pt-3 lg:pt-0 block"
                                />
                                <p className="pt-2">
                                    <span className="text-red-400 ">
                                        {errors.startupIcon && (
                                            <span>Please Input Your startupIcon</span>
                                        )}
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
                                        maxLength: {
                                            value: 100,
                                            message: 'Maximum 100 characters',
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Minimum 3 characters',
                                        },
                                        required: 'Startup Name is required',
                                    })}
                                    type="text"
                                    placeholder="Company name"
                                    className="w-full border p-4 rounded-md focus:border-transparent focus:ring focus:ring-opacity-75 focus:ring-blue-500 border-[#E5E5E5]"
                                />
                                <p className="pt-1">
                                    <span className="text-red-400 ">
                                        {errors.startupName && (
                                            <span>{errors?.startupName?.message}</span>
                                        )}
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
                                        required: 'Startup Slogan is Required',
                                        maxLength: {
                                            value: 300,
                                            message: 'max 300 characters allowed',
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Minimum 3 characters required',
                                        },
                                    })}
                                    type="text"
                                    placeholder="Startup Slogan"
                                    className="w-full border p-4 rounded-md focus:border-transparent focus:ring focus:ring-opacity-75 focus:ring-blue-500 border-[#E5E5E5]"
                                />
                                <p className="pt-1">
                                    <span className="text-red-400 ">
                                        {errors?.startupSlogan && (
                                            <span>{errors?.startupSlogan?.message}</span>
                                        )}
                                    </span>
                                </p>
                            </div>

                            <div className="col-span-full space-y-1">
                                <label htmlFor="startupDescription" className="text-sm font-medium">
                                    Startup Description
                                </label>
                                <textarea
                                    {...register('startupDescription', {
                                        required: 'Startup Description is Required',
                                        maxLength: {
                                            value: 1000,
                                            message: 'Maximum 1000 characters allowed',
                                        },
                                        minLength: {
                                            value: 3,
                                            message:
                                                'Minimum 3 characters required for you description',
                                        },
                                    })}
                                    id="startupDescription"
                                    placeholder="Description"
                                    className="w-full border p-4 rounded-md focus:border-transparent focus:ring focus:ring-opacity-75 focus:ring-blue-500 border-[#E5E5E5]"
                                />
                                <p className="pt-1">
                                    <span className="text-red-400  ">
                                        {errors.startupDescription && (
                                            <span>{errors?.startupDescription?.message}</span>
                                        )}
                                    </span>
                                </p>
                            </div>
                            <div className="col-span-full mt-12 space-y-1">
                                <label htmlFor="bio" className="text-sm font-medium">
                                    Industries Work In
                                </label>
                                <textarea
                                    {...register('worksIn', {
                                        required: '  Industries Work In Details is Required',
                                        maxLength: {
                                            value: 600,
                                            message: 'max 600 characters allowed ',
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'minimum 3 characters required ',
                                        },
                                    })}
                                    id="worksIn"
                                    placeholder="worksIn"
                                    className="w-full border p-4 rounded-md focus:border-transparent focus:ring focus:ring-opacity-75 focus:ring-blue-500 border-[#E5E5E5]"
                                />
                                <p className="pt-1">
                                    <span className="text-red-400 ">
                                        {errors.worksIn && <span>{errors?.worksIn?.message}</span>}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Select Domains */}
                        <div className="flex flex-col mt-12">
                            <div>
                                <div className="lg:flex justify-center ">
                                    <div className="group w-full inline-block mt-6  lg:pr-10">
                                        <label htmlFor="bio" className="text-sm block font-medium">
                                            Select Domains
                                        </label>
                                        <select
                                            onChange={handleChange}
                                            className="select lg:w-[140px]  mt-1 w-full font-semibold border 
                                             border-gray-400 rounded-md "
                                        >
                                            <option value="Domains" hidden>
                                                Domains
                                            </option>
                                            {jData?.domains?.map((D, i) => (
                                                <option
                                                    onClick={handleClick}
                                                    disabled={disableOption}
                                                    value={D}
                                                    key={i}
                                                >
                                                    {D}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {selectedValues.length ? (
                                        <div className="grid grid-cols-2 px-2 py-4 gap-3 mt-8 lg:w-[630px] w-full border h-auto bg-[#F0F9FF]">
                                            {selectedValues.map((value, index) => (
                                                <div key={index}>
                                                    <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                                                        <p>{value}</p>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedValues(
                                                                    selectedValues.filter(
                                                                        (val) => val !== value
                                                                    )
                                                                );
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
                                {domainError && (
                                    <p className="text-red-700 font-semibold ">{domainError}</p>
                                )}
                            </div>

                            <div className="lg:flex items-start mt-10">
                                <div className="group w-full inline-block lg:space-y-2 pr-0 lg:pr-10">
                                    <select
                                        onChange={handleLink}
                                        className="select lg:w-[120px]  mt-1 w-full font-semibold border 
                                          border-gray-200 rounded-md "
                                    >
                                        {link.map((D, i) => (
                                            <option onClick={handleClick} value={D.name} key={i}>
                                                {D.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-2 lg:mt-0">
                                    <div className="flex mt-1 gap-4">
                                        <input
                                            onChange={(e) => setUrl(e.target.value)}
                                            type="text"
                                            id="upload"
                                            placeholder="https://"
                                            className=" border-gray-200 border py-2.5 px-4 rounded-md !w-[320px]   "
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
                                    {displayUrl.length ? (
                                        <div className="w-auto border  mt-4 p-4 rounded flex gap-2 ">
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
                                                            setDisplayUrl(
                                                                displayUrl.filter(
                                                                    (val) => val !== d
                                                                )
                                                            );
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

                    {/* <Dropzone
                        className="lg:w-[515px] lg:mt-0 mt-10 mx-auto"
                        onDrop={(acceptedFiles) => setFile(acceptedFiles)}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section className="container">
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <section
                                        htmlFor="dropzone-file"
                                        className="mx-auto justify-center cursor-pointer lg:mt-0 mt-10  flex lg:w-[515px]  flex-col items-center rounded-xl h-[329px] border-2 border-dashed border-blue-400 bg-white text-center"
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
                                                    <span className="text-blue-600 font-medium">
                                                        Browse
                                                    </span>
                                                </h2>
                                                <span className="text-xs font-medium">
                                                    Maximum size: 50MB
                                                </span>
                                            </>
                                        ) : (
                                            <div>
                                                <p className="text-2xl text-blue-500">
                                                    {file?.[0]?.path}
                                                </p>
                                                <p>size: {file?.[0]?.size}</p>
                                            </div>
                                        )}
                                    </section>
                                </div>
                            </section>
                        )}
                    </Dropzone> */}
                    <div>
                        <h1 className="text-xl ml-5 font-semibold ">Homepage Images</h1>
                        <Dropzone
                            className="lg:w-[550px]  lg:mt-5 h-[213px] mt-10 mx-auto"
                            onDrop={(acceptedFiles) => {
                                console.log('accepted file ', ...acceptedFiles);
                                // set error to empty strings if files are accepted
                                // setError('');

                                // setFile2(...acceptedFiles);
                                setNewArr([...newArr, ...acceptedFiles]);
                                // display dropdown
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
                                                        <span className="text-blue-600 font-medium">
                                                            Browse
                                                        </span>
                                                    </h2>
                                                    <span className="text-xs font-medium">
                                                        Maximum size: 1MB
                                                    </span>
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
                                                                    size:{' '}
                                                                    {Math.trunc(
                                                                        parseInt(
                                                                            newAr?.size,
                                                                            10
                                                                        ).toFixed(2) / 1024
                                                                    )}{' '}
                                                                    Kb
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
                        className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md flex items-center gap-2"
                    >
                        Update Profile Page{' '}
                        {loading && (
                            <span className="w-7 h-7 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
                        )}
                    </button>
                </div>
            </form>
        </SettingsItems>
    );
};

export default SettingsProfile;
