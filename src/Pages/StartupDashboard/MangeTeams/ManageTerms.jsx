/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import img1 from '../../../Assets/Dashboard/ManageTerms/grid-01.png';
import img2 from '../../../Assets/Dashboard/ManageTerms/Vector.png';

const ManageTerms = () => (
    <section className="flex flex-col w-full">
        <h1 className="text-4xl font-semibold">Manage Terms</h1>
        <div className="h-[2px] w-full bg-slate-500 mt-4" />

        {/* OverView */}

        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mt-10 ">Overview</h1>
            <div className="flex w-full h-[433px] jobPostCard justify-center items-center mt-4">
                <div className="flex flex-col justify-center items-center w-1/3 space-y-4">
                    <img src={img1} alt="" />

                    <span className="font-semibold text-base">Active Projects</span>

                    <span className="py-2 px-3 bg-[#999999] text-white text-sm font-medium rounded-full">
                        {' '}
                        18
                    </span>
                </div>

                <div className="bg-gray-700 w-1 h-5/6" />

                <div className="flex flex-col justify-center items-center w-1/3 space-y-4">
                    <img src={img2} alt="" />

                    <span className="font-semibold text-base">Finished Projects</span>

                    <span className="py-2 px-3 bg-[#999999] text-white text-sm font-medium rounded-full">
                        {' '}
                        18
                    </span>
                </div>

                <div className="bg-gray-700 w-1 h-5/6" />

                <div className="flex flex-col justify-center items-center w-1/3">
                    <div className="col-md-3 col-sm-6">
                        <div className="progress yellow">
                            <span className="progress-left">
                                <span className="progress-bar" />
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar" />
                            </span>
                            <div className="progress-value absolute">
                                <div className="flex justify-center items-center flex-col space-y-14 mt-14">
                                    <span className="font-bold text-xl">70%</span>
                                    <span className="inline-block text-sm absolute">
                                        Finished Project
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Team */}
        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mt-10">Team</h1>
            <div className="mt-4">
                <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            <th className="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                Emploee
                            </th>
                            <th className="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                Date
                            </th>
                            <th className="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                Project
                            </th>
                            <th className="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                Status
                            </th>
                            <th className="p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
                                Jamal Rios
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    User Name
                                </span>
                                jrios1
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Email Address
                                </span>
                                jrios@icloud.com
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Mobile
                                </span>
                                582-3X2-6233
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Actions
                                </span>
                                <div className="flex space-x-3">
                                    <button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
                                Erwin Campbell
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    User Name
                                </span>
                                ecampbell088
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Email Address
                                </span>
                                ecampbell088@hotmail.com
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Mobile
                                </span>
                                318-685-X414
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Actions
                                </span>
                                <div className="flex space-x-3">
                                    <button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
                                Lillie Clark
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    User Name
                                </span>
                                lillie
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Email Address
                                </span>
                                lillie.clark@gmail.com
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Mobile
                                </span>
                                505-644-84X4
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Actions
                                </span>
                                <div className="flex space-x-3">
                                    <button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
                                Maribel Koch
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    User Name
                                </span>
                                maribelkoch
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Email Address
                                </span>
                                mkoch@yahoo.com
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Mobile
                                </span>
                                582-400-3X36
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">
                                    Actions
                                </span>
                                <div className="flex space-x-3">
                                    <button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {/* <div id="last-users">
                <h1 className="font-bold py-4 uppercase">Last 24h users</h1>
                <div className="overflow-x-scroll">
                    <table className="w-full whitespace-nowrap">
                        <thead className="bg-black/60">
                            <th className="text-left py-3 px-2 rounded-l-lg">Name</th>
                            <th className="text-left py-3 px-2">Email</th>
                            <th className="text-left py-3 px-2">Group</th>
                            <th className="text-left py-3 px-2">Status</th>
                            <th className="text-left py-3 px-2 rounded-r-lg">Actions</th>
                        </thead>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-2 font-bold">
                                <div className="inline-flex space-x-3 items-center">
                                    <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                                    <span>Thai Mei</span>
                                </div>
                            </td>
                            <td className="py-3 px-2">thai.mei@abc.com</td>
                            <td className="py-3 px-2">User</td>
                            <td className="py-3 px-2">Approved</td>
                            <td className="py-3 px-2">
                                <div className="inline-flex items-center space-x-3">
                                    <a href="" title="Edit" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    </a>
                                    <a href="" title="Edit password" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    </a>
                                    <a href="" title="Suspend user" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-2 font-bold">
                                <div className="inline-flex space-x-3 items-center">
                                    <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                                    <span>Thai Mei</span>
                                </div>
                            </td>
                            <td className="py-3 px-2">thai.mei@abc.com</td>
                            <td className="py-3 px-2">User</td>
                            <td className="py-3 px-2">Approved</td>
                            <td className="py-3 px-2">
                                <div className="inline-flex items-center space-x-3">
                                    <a href="" title="Edit" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    </a>
                                    <a href="" title="Edit password" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    </a>
                                    <a href="" title="Suspend user" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-2 font-bold">
                                <div className="inline-flex space-x-3 items-center">
                                    <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
                                    <span>Thai Mei</span>
                                </div>
                            </td>
                            <td className="py-3 px-2">thai.mei@abc.com</td>
                            <td className="py-3 px-2">User</td>
                            <td className="py-3 px-2">Approved</td>
                            <td className="py-3 px-2">
                                <div className="inline-flex items-center space-x-3">
                                    <a href="" title="Edit" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    </a>
                                    <a href="" title="Edit password" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    </a>
                                    <a href="" title="Suspend user" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-2 font-bold">
                                <div className="inline-flex space-x-3 items-center">
                                    <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/niCVbIBAm4hahzwS83HoEtcVEIactkKohOzgXWYY4lM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTk4ODczLmpwZw.jpg" alt="" /></span>
                                    <span>Marquez Spineli</span>
                                </div>
                            </td>
                            <td className="py-3 px-2">marquez.spineli@cba.com</td>
                            <td className="py-3 px-2">User</td>
                            <td className="py-3 px-2">Approved</td>
                            <td className="py-3 px-2">
                                <div className="inline-flex items-center space-x-3">
                                    <a href="" title="Edit" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    </a>
                                    <a href="" title="Edit password" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    </a>
                                    <a href="" title="Suspend user" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <td className="py-3 px-2 font-bold">
                                <div className="inline-flex space-x-3 items-center">
                                    <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/f_xU7q780YXiKG7IwKVV05eU6Sj2nIodEkN1S8GyM2M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk2MTc4LmpwZw.jpg" alt="" /></span>
                                    <span>Mark Spike</span>
                                </div>
                            </td>
                            <td className="py-3 px-2">mark.spike@abc.com</td>
                            <td className="py-3 px-2">Administrator</td>
                            <td className="py-3 px-2">Approved</td>
                            <td className="py-3 px-2">
                                <div className="inline-flex items-center space-x-3">
                                    <a href="" title="Edit" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    </a>
                                    <a href="" title="Edit password" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    </a>
                                    <a href="" title="Suspend user" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>


                    </table>
                </div>
            </div> */}
        {/* pagination */}
        <div className="flex justify-center mt-10">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                    <li className="page-item disabled">
                        <a
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                            href="#"
                            tabIndex="-1"
                            aria-disabled="true"
                        >
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            1
                        </a>
                    </li>
                    <li className="page-item active">
                        <a
                            className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                            href="#"
                        >
                            2 <span className="visually-hidden" />
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
);

export default ManageTerms;
