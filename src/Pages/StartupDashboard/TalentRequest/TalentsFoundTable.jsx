import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';
import { HiChevronUpDown } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';
import TalentRequestConfirmationModal from '../../../Modal/TalentRequest/TalentRequestConfirmation/TalentRequestConfirmationModal';

const TalentsFoundTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { searchResults, results } = useContext(AuthContext);

  const { user } = useSelector((state) => state.auth);

  const [selectedTalent, setSelectedTalent] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleSelectTalent = (data) => {
    if (data?.isSelected === true) {
      setSelectedTalent([...selectedTalent, data]);
    }
    if (data?.isSelected === false) {
      const datas = selectedTalent.filter((sel) => sel.id !== data.id);

      setSelectedTalent(datas);
    }
  };

  const handleSelectAllTalent = (data) => {
    if (data === true) {
      setSelectedTalent(results?.lastSearchResult?.requiredTalentsInHistory);
      setIsAllSelected(true);
    }
    if (data === false) {
      setSelectedTalent([]);
      setIsAllSelected(false);
    }
  };

  //
  const handleRequestTalent = () => {
    if (selectedTalent?.length) {
      setIsOpen(true);
    } else {
      toast.error('You must select at least 1 Talent');
    }
  };
  return (
    <>
      {results?.lastSearchResult?.requiredTalentsInHistory?.length && (
        <section className="mt-10">
          <div className="container  bg-white shadow-lg shadow-slate-300 rounded-3xl mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className=" sm:flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold leading-tight">Talents Found</h2>
                  <p className="font-medium text-[#16c098]">Best Match</p>
                </div>
                <div className="lg:flex items-center gap-5 ">
                  <div className="my-2 flex sm:flex-row flex-col">
                    <div className="flex  flex-row mb-1 sm:mb-0">
                      <form className="flex bg-[#f9fbff] items-center">
                        <label htmlFor="voice-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative w-full">
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <span>
                              <FiSearch className="text-[#7e7e7e] text-2xl" />
                            </span>
                          </div>
                          <input
                            type="text"
                            id="voice-search"
                            className="bg-[#f9fbff] border  border-transparent text-gray-900 text-sm rounded-lg focus:ring-[#e3d5ff]  focus:ring-2 block w-full pl-12 p-2.5  "
                            placeholder="Search"
                            required
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex  focus:ring-blue-500 focus:ring  group-hover:border-[3px] group-hover:border-[#e3d5ff] border-transparent border-[3px]   rounded-lg bg-[#f9fbff] px-2 gap-2 relative items-center justify-center w-[220px] ">
                      <label htmlFor="sort" className="text-sm ">
                        Sort by :
                      </label>
                      <select
                        id="sort"
                        className="font-bold cursor-pointer border border-transparent bg-transparent text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-transparent block  py-2.5 "
                      >
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                        <option value="Most">Most</option>
                        <option value="Lowest">Lowest</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* tables started ========================================================= */}

              <div className=" py-4 overflow-x-auto">
                <div className="inline-block min-w-full  rounded-lg overflow-hidden">
                  <table className="min-w-full  leading-normal">
                    <thead>
                      <tr>
                        <th className=" py-3 border-b-2 border-gray-200 items-center  text-left text-sm font-semibold   tracking-wider">
                          <p className="flex gap-2 text-[#b5b7c0]">
                            Talent’s Name{' '}
                            <span>
                              <HiChevronUpDown className="text-xl" />
                            </span>
                          </p>
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-600  tracking-wider">
                          <p className="flex gap-2 text-[#b5b7c0]">
                            Skill Level{' '}
                            <span>
                              <HiChevronUpDown className="text-xl" />
                            </span>
                          </p>
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-600  tracking-wider">
                          <div className="form-control flex gap-3 flex-row items-center">
                            <input
                              onChange={(e) => handleSelectAllTalent(e.target.checked)}
                              id="select"
                              type="checkbox"
                              className="checkbox focus:ring-0"
                            />
                            <label htmlFor="select" className="text-[#b5b7c0]">
                              Select
                            </label>
                          </div>
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-600  tracking-wider">
                          <p className="flex gap-2 text-[#b5b7c0]">
                            Country{' '}
                            <span>
                              <HiChevronUpDown className="text-xl" />
                            </span>
                          </p>
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-600  tracking-wider">
                          <p className="flex gap-2 text-[#b5b7c0]">
                            Match %{' '}
                            <span>
                              <HiChevronUpDown className="text-xl" />
                            </span>
                          </p>{' '}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {results?.lastSearchResult?.requiredTalentsInHistory?.length &&
                        results?.lastSearchResult?.requiredTalentsInHistory?.map((result) => (
                          <tr className="hover:bg-[#e3d5ff]">
                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                              <div className="">
                                <Link
                                  to={`/remoforce/profile/${result.email}`}
                                  className="text-gray-900 font-semibold whitespace-no-wrap"
                                >
                                  {result?.fullName}
                                </Link>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                              <p className="text-gray-900 font-semibold whitespace-no-wrap">
                                {result?.skillLevel}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                              {isAllSelected ? (
                                <input
                                  onChange={(e) =>
                                    handleSelectTalent({
                                      result,
                                      isSelected: e.target.checked,
                                      id: result?._id,
                                    })
                                  }
                                  id="select"
                                  type="checkbox"
                                  checked
                                  disabled={isAllSelected}
                                  className="checkbox  focus:ring-0"
                                />
                              ) : (
                                <input
                                  onChange={(e) =>
                                    handleSelectTalent({
                                      result,
                                      isSelected: e.target.checked,
                                      id: result?._id,
                                    })
                                  }
                                  id="select"
                                  type="checkbox"
                                  disabled={isAllSelected}
                                  className="checkbox  focus:ring-0"
                                />
                              )}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                              <p className="text-gray-900 font-semibold whitespace-no-wrap">
                                {result?.country}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                              <svg className="progress-ring" viewBox="0 0 120 120">
                                <circle className="progress-ring__circle" cx="60" cy="60" r="50" />
                                <circle
                                  className="progress-ring__circle--progress"
                                  stroke={
                                    (result?.scorePercentage >= 80 &&
                                      result?.scorePercentage <= 100 &&
                                      '#00c42b') ||
                                    (result?.scorePercentage >= 40 &&
                                      result?.scorePercentage <= 75 &&
                                      '#19a5ff') ||
                                    (result?.scorePercentage >= 20 &&
                                      result?.scorePercentage <= 39 &&
                                      '#ff9900') ||
                                    (result?.scorePercentage >= 0 &&
                                      result?.scorePercentage <= 19 &&
                                      '#13d1ff')
                                  }
                                  cx="60"
                                  cy="60"
                                  r="50"
                                  style={{ '--value': result?.scorePercentage }}
                                />
                                <text
                                  className="text-3xl font-bold"
                                  x="55%"
                                  y="60%"
                                  textAnchor="middle"
                                >
                                  {result?.scorePercentage}%
                                </text>
                              </svg>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {/* <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 4 of 50 Entries
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        type="button"
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                                    >
                                        Prev
                                    </button>
                                    <button
                                        type="button"
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* request talent button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleRequestTalent}
              type="button"
              className="text-[#61c0fe] font-semibold text-2xl shadow-inner rounded-lg py-2 px-7 hover:shadow duration-300 ease-in bg-[#f7f1fe]"
            >
              Request Talent
            </button>
          </div>
        </section>
      )}
      {/* modal */}
      {isOpen && selectedTalent?.length ? (
        <TalentRequestConfirmationModal
          selectedTalent={selectedTalent}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default TalentsFoundTable;
