import React from 'react';
import img2 from '../../../Assets/Dashboard/ManageTerms/Vector.png';
import img1 from '../../../Assets/Dashboard/ManageTerms/grid-01.png';

const ManageTeams = () => {
  const teams = [
    {
      name: 'Lihov Sergey',
      startingDate: 'November .14 .2022',
      project: 'Accounting',
      status: 'Active',
    },
    {
      name: 'Lihov Sergey',
      startingDate: 'November .14 .2022',
      project: 'Mobile App',
      status: 'Active',
    },
    {
      name: 'Lihov Sergey',
      startingDate: 'November .14 .2022',
      project: 'Virtual Device',
      status: 'Active',
    },
    {
      name: 'Lihov Sergey',
      startingDate: 'November .14 .2022',
      project: 'Kikstart Code',
      status: 'Inactive',
    },
  ];

  return (
    <section className="flex flex-col w-full">
      <h1 className="text-4xl font-semibold">Manage Teams</h1>
      <div className="h-[2px] w-full bg-slate-500 mt-4" />

      {/* OverView */}

      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold mt-10 ">Overview</h1>
        <div className="flex flex-col md:flex-row w-full h-full md:h-[300px] xl:h-[433px] jobPostCard justify-center items-center mt-4 space-y-4 md:space-y-0 py-4 md:py-0">
          <div className="flex flex-col justify-center items-center w-1/3 space-y-4">
            <img src={img1} alt="" />

            <span className="font-semibold text-base text-center">Active Projects</span>

            <span className="py-2 px-3 bg-[#999999] text-white text-sm font-medium rounded-full">
              {' '}
              0
            </span>
          </div>

          <div className="bg-gray-700 hidden md:block w-1 h-5/6" />
          <div className="bg-gray-700 block md:hidden w-5/6 h-1" />

          <div className="flex flex-col justify-center items-center w-1/3 space-y-4">
            <img src={img2} alt="" />

            <span className="font-semibold text-base text-center">Finished Projects</span>

            <span className="py-2 px-3 bg-[#999999] text-white text-sm font-medium rounded-full">
              {' '}
              0
            </span>
          </div>

          <div className="bg-gray-700 hidden md:block w-1 h-5/6" />
          <div className="bg-gray-700 block md:hidden w-5/6 h-1" />

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
                    <span className="font-bold text-xl">0%</span>
                    <span className="inline-block text-sm absolute">Finished Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-semibold mt-10">Team</h1>

        {/* team table starts */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {/* Manage Team Table Starts */}
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-lg  font-semibold text-gray-900  px-6 py-4 ">
                        Employee
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Starting Date
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Project
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody>
                                        {teams &&
                                            teams.map((team, index) => (
                                                <tr
                                                    key={Math.random()}
                                                    className={`${
                                                        index % 2 === 0
                                                            ? 'bg-[#f8f8f8]'
                                                            : 'bg-white'
                                                    } border-b`}
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex gap-12 items-center">
                                                        <div className="flex items-center">
                                                            <input
                                                                id="checkbox-table-search-1"
                                                                type="checkbox"
                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="checkbox-table-search-1"
                                                                className="sr-only"
                                                            >
                                                                checkbox
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <img
                                                                src={user}
                                                                className="w-10 rounded-full"
                                                                alt=""
                                                            />
                                                            <span className="text-base font-medium">
                                                                {team?.name}
                                                            </span>
                                                        </div>
                                                    </td>

                                                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {team?.startingDate}
                                                    </td>
                                                    <td className="text-base text-[#7B7B7B] font-light px-6 py-4 whitespace-nowrap">
                                                        {team?.project}
                                                    </td>
                                                    <td className="text-base  font-light px-6 py-4 whitespace-nowrap">
                                                        <select
                                                            className={`text-[#31BE00] w-4/5 mx-auto border-none outline-none focus:outline-none bg-transparent  font-medium ${
                                                                team.status === 'Inactive' &&
                                                                'text-red-600'
                                                            }`}
                                                            defaultValue={team.status}
                                                        >
                                                            <option>Active</option>
                                                            <option className="text-red-800">
                                                                Inactive
                                                            </option>
                                                        </select>
                                                    </td>
                                                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <span>
                                                            <TbBrush className="text-base" />
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))} 
                                    </tbody> */}
                </table>

                {/* Table Ends */}
              </div>
            </div>
          </div>
        </div>
        {/* team table ends */}
      </div>

      {/* pagination if needed */}
      {/* <div className="flex justify-center mt-10">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item disabled"><a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
              href="/" tabindex="-1" aria-disabled="true">Previous</a></li>
            <li className="page-item"><a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="/">1</a></li>
            <li className="page-item active"><a
              className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
              href="/">2 <span className="visually-hidden"></span></a></li>
            <li className="page-item"><a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="/">3</a></li>
            <li className="page-item"><a
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="/">Next</a></li>
          </ul>
        </nav>
      </div> */}
    </section>
  );
};

export default ManageTeams;
