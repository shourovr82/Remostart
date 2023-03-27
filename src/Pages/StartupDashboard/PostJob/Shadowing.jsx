import React from 'react';
import { RiUser3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Shadowing = () => {

    return (
        <>
            <section className='flex flex-col w-full'>
                <h1 className='text-4xl font-semibold'>
                    Post Job
                </h1>
                <div className='h-[2px] w-full bg-slate-500 mt-4'></div>
                <div className='flex flex-col w-1/2'>
                    <span className='text-base font-medium my-4'>Project Icon</span>
                    <div className='flex justify-start items-center space-x-4'>
                        <span className='p-4 rounded-full border inline-block bg-[#6B7280]'><RiUser3Line className='text-4xl text-white' /></span>
                        <Link to='/signup' className='px-10 py-4 bg-[#0B132A] text-white text-xs font-semibold rounded-md'>
                            Upload Picture
                        </Link>
                        <span className='text-sm font-medium'>No file chosen</span>
                    </div>
                    <div className="grid grid-cols-6 mt-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-5 space-y-1">
                            <label for="username" className="text-sm font-medium">Job Title</label>
                            <input id="Company name" type="text" placeholder="Company name" className="w-full border p-4 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
                        </div>

                        <div className="col-span-full space-y-1">
                            <label for="bio" className="text-sm font-medium">Job Description</label>
                            <textarea id="Description" placeholder="Description" className="w-full h-full p-4 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 "></textarea>
                        </div>
                    </div>

                    {/* Job Requirement*/}
                    <div className='flex flex-col mt-10'>
                        <div className='gap-2 grid'>
                            <span className='text-base font-medium my-4'>Job Requirement</span>
                        </div>
                        <div className='flex justify-center '>
                            <div className="group inline-block mt-6 space-y-2 pr-10">
                                <span className='text-sm font-medium'>Experience (Optional)</span>
                                <button type='button'  className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <span className="pr-1 font-semibold flex-1">Years</span>
                                    <span>
                                        <svg
                                            className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <ul
                                    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
                                >
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
                                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
                                </ul>
                            </div>
                            <div className='flex-1 mt-8 space-y-2'>
                                <div className="flex w-full">
                                    <input className="rounded-l-lg w-full p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder='Add Skill' />
                                    <button type='button'  className="px-4 rounded-r-lg font-bold p-2 uppercase border-t border-b border-r">+</button>
                                </div>
                                <textarea type='text' className='w-full p-2 border h-60 bg-[#F0F9FF]' />
                            </div>

                        </div>

                        <div className='flex mt-10'>
                            <div className='mt-5 flex flex-col space-y-2 w-full'>
                                <label className='pl-1 text-sm font-medium'>Salary</label>
                                <div className="flex w-2/3">
                                    <input className="rounded-lg border w-full p-2 text-gray-800 border-gray-200 bg-white" placeholder='Salary Range' />
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-4'>
                            <div className='mt-5 flex flex-col space-y-2 w-full'>
                                <label className='pl-1 text-sm font-medium'>Apply Before</label>
                                <div className="flex w-2/3">
                                    <input type="date" id="start" className="rounded-lg border w-full p-2 text-gray-800 border-gray-200 bg-white" placeholder='Select date' min='10/12/2022' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}

export default Shadowing