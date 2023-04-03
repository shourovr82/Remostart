import React from 'react';
import { RiUser3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SettingsHome = () => (
    <section className="flex flex-col mt-10 w-full">
        <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col pr-4">
                <span className="text-base font-medium my-4">Startup Icon</span>
                <div className="flex justify-start items-center space-x-4">
                    <span className="p-4 rounded-full border inline-block bg-[#6B7280]">
                        <RiUser3Line className="text-4xl text-white" />
                    </span>
                    <Link
                        to="/signup"
                        className="px-10 py-4 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
                    >
                        Upload Picture
                    </Link>
                    <span className="text-sm font-medium">No file chosen</span>
                </div>
                <div className="grid grid-cols-6 mt-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-5 space-y-1">
                        <label htmlFor="username" className="text-sm font-medium">
                            Startup Name
                        </label>
                        <input
                            id="Company name"
                            type="text"
                            placeholder="Company name"
                            className="w-full border p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                        />
                    </div>

                    <div className="col-span-full space-y-1">
                        <label htmlFor="bio" className="text-sm font-medium">
                            Startup Description
                        </label>
                        <textarea
                            id="Description"
                            placeholder="Description"
                            className="w-full h-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                        />
                    </div>
                </div>

                {/* Industires Work In */}
                <div className="flex flex-col mt-10">
                    <div className="gap-2 grid">
                        <span className="text-base font-medium my-4">Industires Work In</span>
                        {/* <p className="text-xs font-medium">....</p> */}
                    </div>

                    <div className="flex justify-center ">
                        <div className="group inline-block mt-6 space-y-2 pr-10">
                            <span className="text-sm font-medium">Choose Domains</span>
                            <button
                                type="button"
                                className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                            >
                                <span className="pr-1 font-semibold flex-1">Domains</span>
                                <span>
                                    <svg
                                        className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </button>
                            <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                                    Programming
                                </li>
                                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
                                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
                            </ul>
                        </div>
                        <div className="flex-1 mt-8 w-full border py-20 bg-[#F0F9FF]" />
                    </div>

                    <div className="flex mt-10">
                        <div className="group inline-block mt-6 space-y-2 pr-10">
                            <span className="text-sm font-medium">Social Links</span>
                            <button
                                type="button"
                                className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                            >
                                <span className="pr-1 font-semibold flex-1">Links</span>
                                <span>
                                    <svg
                                        className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </button>
                            <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                                    Programming
                                </li>
                                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
                                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
                            </ul>
                        </div>
                        <div className="mt-5">
                            <form className="m-4 flex w-full">
                                <input
                                    className="rounded-l-lg w-full p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                                    defaultValue="https://"
                                />
                                <button
                                    type="button"
                                    className="px-4 rounded-r-lg bg-[#0B132A] text-white font-bold p-2 uppercase border-yellow-500 border-t border-b border-r"
                                >
                                    Upload
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <section
                htmlFor="dropzone-file"
                className="mx-auto justify-center cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl h-2/5 border-2 border-dashed border-blue-400 bg-white p-6 text-center"
            >
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

                <input id="dropzone-file" type="file" className="hidden" />
            </section>
        </div>
    </section>
);

export default SettingsHome;
