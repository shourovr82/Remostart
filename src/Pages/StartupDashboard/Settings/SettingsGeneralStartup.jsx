/* eslint-disable consistent-return */
import React from 'react';

import SettingsItems from '../../../Routes/Roots/SettingsItems';

import GeneralSettingsPersonal from './SettingsGeneral/GeneralSettingsPersonal';
import GeneralSettingsVerification from './SettingsGeneral/GeneralSettingsVerification';
import GeneralSettingsPassword from './SettingsGeneral/Password';

const SettingsGeneral = () => {
    console.log('hello');

    return (
        <SettingsItems>
            {/* <Test /> */}

            <GeneralSettingsPersonal />

            <GeneralSettingsPassword />

            <GeneralSettingsVerification />

            {/* <h1 className="text-3xl font-semibold mt-10">
            Startup <span className="text-[#65DC7F]">Verification</span>
        </h1> */}
            <p className="border-[#BCBCBC] bg-[#BCBCBC] border mt-2" />
            {/* <form onSubmit={handleSubmit(Verification)}>
            <div className="flex gap-4 items-center mt-10">
                <p>Is your StartUp Registered?</p>
                <label
                    htmlFor="Toggle1"
                    className="inline-flex items-center space-x-4 cursor-pointer text-gray-900"
                >
                    <span>No</span>
                    <span className="relative">
                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                        <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-blue-400" />
                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800" />
                    </span>
                    <span>Yes</span>
                </label>
            </div>

            <div className="mt-[33px] lg:w-[10rm] ">
                <div className="lg:flex items-center justify-between">
                    <div>
                        <div className="space-y-1 text-sm">
                            <label className="block font-semibold text-gray-900">
                                Startup Name
                            </label>
                            <input
                                type="Text"
                                name="startupName"
                                {...register('startupName', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 30,
                                })}
                                id="startupName"
                                placeholder="Eg. remostarts"
                                className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                            />
                            <p className="pt-2">
                                {errors.startupName && (
                                    <span className="text-red-400 ">
                                        {errors.startupName.type === 'required' &&
                                            'Please provide your name'}
                                        {errors.startupName.type === 'minLength' &&
                                            'Please provide your full name'}
                                        {errors.startupName.type === 'maxLength' &&
                                            'Finish writing your name in thirty characters'}
                                    </span>
                                )}
                            </p>
                        </div>

                        <div className="space-y-1 text-sm">
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
                            <p className="pt-2">
                                {errors.RegisteredName && (
                                    <span className="text-red-400 ">
                                        {errors.startupName?.type === 'required' &&
                                            'Please provide your name'}
                                    </span>
                                )}
                            </p>
                        </div>

                        <div className="space-y-1 text-sm">
                            <label className="block font-semibold text-gray-900">
                                Comany CIN Number
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
                            <p className="pt-2">
                                {errors.ComanyCINNumber && (
                                    <span className="text-red-400 ">
                                        {errors.ComanyCINNumber?.type === 'required' &&
                                            'Please provide your name'}
                                    </span>
                                )}
                            </p>
                        </div>

                        <div className="space-y-1 text-sm">
                            <label className="block font-semibold text-gray-900">
                                Registration Date
                            </label>
                            <div className="lg:w-[362px] w-full px-4 py-3 rounded-md border border-[#BCBCBC] flex items-center text-gray-900">
                                <div>
                                    <BsCalendarRange />
                                </div>
                                <input
                                    type="date"
                                    name="SelectDate"
                                    {...register('SelectDate', {
                                        required: true,
                                    })}
                                    id="SelectDate"
                                    placeholder="Select date"
                                    className=" w-full outline-none  px-4 rounded-md focus:border-opacity-0  text-gray-900 "
                                />
                            </div>
                            <p className="pt-2">
                                {errors.SelectDate && (
                                    <span className="text-red-400 ">
                                        {errors.SelectDate?.type === 'required' &&
                                            'Select date please'}
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold">
                            Not registered?
                            <Link to="/" className="text-green-500">
                                {' '}
                                Create{' '}
                            </Link>{' '}
                            my startup !
                        </p>
                        <p className="mt-2">Registered Region</p>

                        <select
                            {...register('Country', {
                                required: true,
                            })}
                            className="select lg:w-[116px] mt-2 max-w-xs font-semibold border border-gray-400 rounded-md "
                        >
                            <option hidden>Country</option>

                            {Countris.map((country, i) => (
                                <option key={i}>{country} </option>
                            ))}
                        </select>
                        <p className="pt-2">
                            {errors.SelectDate && (
                                <span className="text-red-400 ">
                                    {errors.Country?.type === 'required' && 'Select a country'}
                                </span>
                            )}
                        </p>
                    </div>
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block font-semibold text-gray-900">
                        Registerd Address
                    </label>
                    <input
                        type="Text"
                        name="Registerd Address"
                        {...register('RegisterdAddress', {
                            required: true,
                            minLength: 3,
                            maxLength: 30,
                        })}
                        id="Registerd Address"
                        placeholder="Plot./ Flat. / Area./ etc..."
                        className=" w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.RegisterdAddress && (
                            <span className="text-red-400 ">
                                {errors.RegisterdAddress?.type === 'required' &&
                                    'Please provide your adress'}
                            </span>
                        )}
                    </p>
                </div>
            </div>
            <div className="lg:flex justify-between items-center">
                <div>
                    <label className="block font-semibold text-sm text-gray-900">Country</label>
                    <select
                        {...register('aboutCountry', {
                            required: true,
                        })}
                        className="select lg:w-[116px] mt-1 max-w-xs font-semibold border border-gray-400 rounded-md "
                    >
                        <option hidden>Country</option>
                        {Countris.map((country, i) => (
                            <option key={i}>{country} </option>
                        ))}
                    </select>
                    <p className="pt-2">
                        {errors.aboutCountry && (
                            <span className="text-red-400 ">
                                {errors.aboutCountry?.type === 'required' &&
                                    'Select date please'}
                            </span>
                        )}
                    </p>
                </div>
                <div>
                    <label className="block font-semibold text-sm text-gray-900">State</label>
                    <select
                        {...register('State', {
                            required: true,
                        })}
                        className="select lg:w-[116px] mt-1 max-w-xs font-semibold border border-gray-400 rounded-md "
                    >
                        <option hidden>State</option>
                        {States.map((state, i) => (
                            <option key={i}>{state} </option>
                        ))}
                    </select>
                    <p className="pt-2">
                        {errors.SelectDate && (
                            <span className="text-red-400 ">
                                {errors.State?.type === 'required' && 'Select date please'}
                            </span>
                        )}
                    </p>
                </div>
                <div>
                    <label className="block font-semibold text-sm text-gray-900">City</label>
                    <select
                        {...register('City', {
                            required: true,
                        })}
                        className="select lg:w-[116px] mt-1 max-w-xs font-semibold border border-gray-400 rounded-md "
                    >
                        <option hidden>City</option>
                        {Citys.map((city, i) => (
                            <option key={i}>{city} </option>
                        ))}
                    </select>
                    <p className="pt-2">
                        {errors.City && (
                            <span className="text-red-400 ">
                                {errors.City?.type === 'required' && 'Select date please'}
                            </span>
                        )}
                    </p>
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block font-semibold text-gray-900">PIN CODE</label>
                    <input
                        type="Text"
                        name="PIN CODE"
                        {...register('PINCODE', {
                            required: true,
                            minLength: 3,
                            maxLength: 30,
                        })}
                        id="Registerd Address"
                        placeholder="Eg. 834003"
                        className=" w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.PINCODE && (
                            <span className="text-red-400 ">
                                {errors.PINCODE?.type === 'required' &&
                                    'Please provide your name'}
                            </span>
                        )}
                    </p>
                </div>
            </div>
            <div className="space-y-1 text-sm mt-2">
                <label className="block font-semibold text-gray-900">
                    GSTIN Nu mber (If Applicable)
                </label>
                <input
                    type="Text"
                    name="Registerd Address"
                    {...register('GSTINNumber')}
                    id="Registerd Address"
                    placeholder="Eg. GSTIN 19482938298"
                    className=" lg:w-[514px] px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                />
            </div>

            <div className="lg:w-[773px]">
                <h1 className="mb-4 mt-6">Upload Supported Documents</h1>
                <div className="flex gap-10 items-start">
                    <div>
                        <select
                            {...register('DocumentTypes', {
                                required: true,
                            })}
                            className="select lg:w-[180px] mt-1 max-w-xs font-semibold border border-gray-400 rounded-md "
                        >
                            <option hidden>Document Types</option>

                            {Documents.map((document, i) => (
                                <option key={i}>{document}</option>
                            ))}
                        </select>
                        <p className="pt-2">
                            {errors.DocumentTypes && (
                                <span className="text-red-400 ">
                                    {errors.DocumentTypes?.type === 'required' &&
                                        'Select date please'}
                                </span>
                            )}
                        </p>
                    </div>
                    <div>
                        <Dropzone
                            className="lg:w-[335px] lg:mt-0 h-[213px] mt-10 mx-auto"
                            onDrop={(acceptedFiles) => (setError(''), setFile2(acceptedFiles))}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section className="container">
                                    <div {...getRootProps({ className: 'dropzone' })}>
                                        <input {...getInputProps()} />
                                        <section
                                            htmlFor="dropzone-file"
                                            className="mx-auto justify-center cursor-pointer lg:mt-0 mt-10  flex lg:w-[335px] h-[213px]  flex-col items-center rounded-xl  border-2 border-dashed border-blue-400 bg-white text-center"
                                        >
                                            {!file2?.[0]?.size ? (
                                                <>
                                                    <img src={image} alt="" />

                                                    <h2 className="mt-4  font-medium tracking-wide">
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
                                                    <p className="text-2xl w-[300px] overflow-hidden text-blue-500">
                                                        {' '}
                                                        {file2?.[0]?.path}
                                                    </p>
                                                    <p>size: {file2?.[0]?.size}</p>
                                                </div>
                                            )}
                                        </section>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        {error && (
                            <span className="text-red-400 ">Please Provide a Picture</span>
                        )}
                    </div>
                </div>
            </div>

            <br />

           

            <h1 className="text-3xl font-semibold mt-10">
                Founder <span className="text-[#65DC7F]"> Details</span>
            </h1>
            <p className="border-[#BCBCBC] bg-[#BCBCBC] border w-5/6 mt-2" />

            <div className="w-[520px] mt-10">
                <div className="mt-2">
                    <label className="text-sm font-medium" htmlFor="MyName">
                        Founder Full Name
                    </label>
                    <input
                        {...register('FounderFullName', {
                            required: true,
                        })}
                        id="MyName"
                        type="text"
                        placeholder="Sample Input"
                        className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md   border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                    />
                    <p className="pt-2 ">
                        <span className="text-red-400 ">
                            {errors.FounderFullName && <span>Invalid your name</span>}
                        </span>
                    </p>
                </div>
                <div className="mt-2">
                    <label className="text-sm font-medium " htmlFor="MyName">
                        LinkedIn URL
                    </label>
                    <input
                        {...register('LinkedInURL', {
                            required: true,
                        })}
                        id="MyName"
                        type="text"
                        placeholder="Your name"
                        className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md   border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>
                <div className="mt-2">
                    <label className="text-sm font-medium" htmlFor="MyName">
                        Address
                    </label>
                    <input
                        {...register('Address', {
                            required: true,
                        })}
                        id="MyName"
                        type="text"
                        placeholder="Sample Input"
                        className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border  rounded-md   border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                    />
                    <p className="pt-2 ">
                        <span className="text-red-400 ">
                            {errors.Address && <span>Input your address</span>}
                        </span>
                    </p>
                </div>
            </div>

            <div className="flex gap-4 mt-14 justify-center">
                <button className="px-11 py-5 bg-[#65DC7F] rounded-lg text-white" type="submit">
                    Submit For Verification
                </button>
            </div>
        </form>   */}
        </SettingsItems>
    );
};

export default SettingsGeneral;
