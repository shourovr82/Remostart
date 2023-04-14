import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiOutlineInbox } from 'react-icons/ai';
import { BsBoundingBox } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaBriefcase, FaDeaf, FaFileContract } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi2';
import { RiTodoLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RemoForceSettingsItems from '../../../Routes/Roots/RemoforceSettingItems';

import AuthContext from '../../../Context/AuthContext';

function SkillAndPreferenceSettings() {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data: remoProfile, refetch } = useQuery(['remoProfile'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-profile/${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState(null);
  const [language, setLanguage] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState(
    (remoProfile?.selectedSkills?.length && remoProfile?.selectedSkills) || []
  );
  const [selectedSkill, setSelectedSkill] = useState('');
  const [preferredJobType, setPreferredType] = useState(remoProfile?.jobPreference?.jobType || '');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState(remoProfile?.selectedLanguages || []);
  const [selectedIndustryName, setSelectedIndustryName] = useState(
    remoProfile?.jobPreference?.jobIndustry || []
  );
  const [openOtherMenu, setOpenOtherMenu] = useState(false);

  // set level to value state
  const [value, setValue] = useState(remoProfile?.jobPreference?.jobLevel || []);
  const [languageValue, setLanguageValue] = useState();

  const [jData, setJData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setJData(jsonData);
    }
    fetchData();
  }, []);

  // Initialize use form hook
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  // skill list

  const domainLists = ['Beginner', 'Intermediate', 'Advance', 'Professional'];
  const workingPreferences = ['Remote', 'Hybrid', 'Full Time'];
  // const languages = ['English', 'Hindi', ' German'];
  const languageLevel = ['Native Language', 'Advance', 'Intermediate'];

  // disable level if skill isn't selected

  const getSkill = (e) => {
    setSelectedSkill(e.target.value);
    setLevel(true);
  };
  const [softSkills, setSoftSkills] = useState(remoProfile?.softSkills || []);
  const [softSkillValue, setSoftSkillValue] = useState('');

  const handleGetSoftSkill = (e) => {
    setSoftSkillValue(e.target.value);
    if (softSkills.includes(e.target.value)) {
      toast.error(`Your have already added ${e.target.value}`);
    } else if (!softSkills.includes(e.target.value)) {
      setSoftSkills([...softSkills, e.target.value]);
    }
  };

  // get language
  const getLanguage = (e) => {
    setSelectedLanguage(e.target.value);
    setLanguage(true);
  };

  // language level
  const getLanguageLevel = (e) => {
    setLanguageValue(e.target.value);
  };

  // add language
  const addLanguage = () => {
    if (!selectedLanguage && !languageValue) {
      toast.error('Language is required');
    } else {
      setSelectedLanguages([
        ...selectedLanguages,
        { language: selectedLanguage, languageLevel: languageValue },
      ]);
      setSelectedLanguage('');
      setLanguageValue('');
    }
  };

  //
  const currentSkillLevel = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  // onClick Add Button

  const AddSkill = () => {
    setSelectedSkills([...selectedSkills, { skillName: selectedSkill, level: value }]);
  };

  // list of button Name Icons and Style
  const buttons = [
    {
      icon: <HiOutlineUsers className="text-lg " />,
      name: 'Shadowing',
      color: 'text-black',
    },
    {
      icon: <FaBriefcase className="text-lg " />,
      name: 'Public Job',
      color: 'text-black',
    },
    {
      icon: <RiTodoLine className="text-md " />,
      name: 'Private Jos',
      color: 'text-black',
    },
    {
      icon: <AiOutlineInbox className="text-lg " />,
      name: 'Internship',
      color: 'text-black',
    },
    {
      icon: <BsBoundingBox className="text-lg " />,
      name: 'Gigs',
      color: 'text-black',
    },
    {
      icon: <FaFileContract className="text-lg " />,
      name: 'Contract',
      color: 'text-black',
    },
  ];

  // submit data And Make API request

  const selectRefTo = useRef(null);
  const handleIndustryChange = (e) => {
    if (e.target.value === 'Other') {
      setOpenOtherMenu(true);
      setSelectedIndustryName(e.target.value);
      setTimeout(() => {
        if (selectRefTo.current) {
          selectRefTo.current.focus();
        }
      }, 0);
    } else {
      setOpenOtherMenu(false);
      setSelectedIndustryName(e.target.value);
    }
  };
  const handleOtherMenu = (e) => {
    setSelectedIndustryName(e.target.value);
  };

  const Submit = async (data) => {
    if (selectedIndustryName === 'Other') {
      toast.error('Please write your other domain name !!');
      return;
    }
    if (preferredJobType === '') {
      toast.error('preferredType is required');
      return;
    }
    if (!selectedLanguages.length) {
      toast.error('Language is required');

      return;
    }

    const { workPreference, industry, domain } = data;

    const bodyData = {
      jobPreference: {
        jobType: preferredJobType,
        locationPreference: workPreference,
        jobIndustry: selectedIndustryName,
        jobLevel: domain,
      },
      selectedSkills,
      selectedLanguages,
      softSkills,

      email: user?.user?.email || serviceUser?.email,
    };

    await axios
      .put(`${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-settings-skills`, bodyData)
      .then((res) => {
        if (res.data.modifiedCount || res.data.upsertedCount) {
          toast.success('Skills data updated successfully');
          setLoading(false);
          navigate('/remoforce-dashboard/add-education');
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <RemoForceSettingsItems>
      <section className="w-full lg:mt-4 h-full  bg-white">
        <form
          className="flex flex-col  w-full items-center  py-4 gap-5"
          onSubmit={handleSubmit(Submit)}
        >
          {/* Skills section  starts */}
          <div className=" w-full flex bg-[#F0F9FFBF]  rounded-lg flex-col p-2 lg:p-5">
            {/* Skill Header  starts */}
            <div className="flex flex-nowrap justify-between items-center border-b border-b-headers lg:w-[14rem]  mb-5 ">
              <span>
                <FaDeaf className="text-[#19A5FF]" />
              </span>
              <h1 className="text-headers  font-sans font-semibold text-xl w-[89%]">Skills</h1>
            </div>
            {/* Skill body */}
            <div>
              <div className="flex w-full max-md:flex-col  items-start py-[2rem]">
                <div className="lg:w-[45%] flex justify-between gap-3 ">
                  {/* Skills dropdown */}
                  <div className="flex flex-col">
                    <label htmlFor="skills" className="mb-[1rem] font-medium text-sm">
                      Choose Skill
                    </label>
                    <select
                      name=""
                      id=""
                      className="select w-full select-bordered focus:outline-none lg:w-[120px]"
                      onChange={getSkill}
                      value={selectedSkill}
                      required
                    >
                      <option value="" className="hidden">
                        Skills
                      </option>
                      {jData?.skills?.map((item) => (
                        <option className="text-[18px]" value={item} key={Math.random()}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Skill level dropdown */}
                  <div className="flex flex-col  pr-4">
                    <label htmlFor="skills" className="mb-[1rem] font-medium text-sm">
                      Choose level
                    </label>
                    <div>
                      <div className="flex flex-col xl:flex-row  w-full items-center   gap-5">
                        <div>
                          <select
                            name="selectedSkill"
                            id=""
                            className="select select-bordered focus:outline-none w-full lg:w-[120px] "
                            onChange={currentSkillLevel}
                            value={value}
                            required
                          >
                            <option value="" className="hidden">
                              Level
                            </option>
                            {level !== null ? (
                              domainLists.map((item) => (
                                <option className="text-[18px]" value={item} key={Math.random()}>
                                  {item}
                                </option>
                              ))
                            ) : (
                              <option className="text-red-600 text-[18px] ">
                                Please select a skill first
                              </option>
                            )}
                          </select>
                        </div>

                        <div className="max-lg:w-full">
                          <button
                            type="button"
                            className=" h-[3rem]  max-lg:w-full px-4 p-2 rounded-md text-center text-white bg-[#19A5FF]"
                            onClick={AddSkill}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Selected skill display box */}
                <div className="lg:w-[45%] w-full ">
                  <label htmlFor="selected skill">Selected Skill</label>
                  <div className="w-90%  h-auto rounded-md bg-white mt-[1rem] flex flex-wrap gap-2 lg:gap-3 items-start   p-2 lg:p-[.5rem]">
                    {selectedSkills?.length
                      ? selectedSkills.map((item) => (
                          <button
                            type="button"
                            key={Math.random()}
                            name={item.skillName}
                            className="lg:w-[30%] px-1.5 text-sm py-0.5 2xl:py-1.5  flex rounded-full justify-evenly
                                                     items-center bg-[#19A5FF] text-white"
                            onClick={() => {
                              const unremoved = selectedSkills.filter(
                                (val) => val.skillName !== item.skillName
                              );
                              setSelectedSkills(unremoved);
                            }}
                          >
                            {item.skillName}
                            <CgClose className=" text-xl font-semibold text-white" />
                          </button>
                        ))
                      : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* soft skills -------------------------- */}
          <div className=" w-full flex bg-[#F0F9FFBF]  rounded-lg flex-col p-2 lg:p-5">
            {/* Skill Header  starts */}
            <div className="flex flex-nowrap justify-between items-center border-b border-b-headers lg:w-[14rem]  mb-5 ">
              <span>
                <FaDeaf className="text-[#19A5FF]" />
              </span>
              <h1 className="text-headers  font-sans font-semibold text-xl w-[89%]">Soft Skills</h1>
            </div>
            {/* Skill body */}
            <div>
              <div className="flex w-full max-md:flex-col  items-start py-[2rem]">
                <div className="lg:w-[45%] flex justify-between gap-3 ">
                  {/* Skills dropdown */}
                  <div className="flex flex-col">
                    <label htmlFor="skills" className="mb-[1rem] font-medium text-sm">
                      Choose Soft Skill
                    </label>
                    <select
                      name=""
                      id=""
                      className="select w-full select-bordered focus:outline-none "
                      onChange={handleGetSoftSkill}
                      required
                      value={softSkillValue && softSkillValue}
                    >
                      <option value="" className="hidden">
                        Skills
                      </option>
                      {jData?.softSkills?.map((item) => (
                        <option className="text-[18px]" value={item} key={Math.random()}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Selected skill display box */}
                <div className="lg:w-[45%] w-full ">
                  <label htmlFor="selected  skill">Selected Soft Skills</label>
                  <div className="w-90%  h-auto rounded-md bg-white mt-[1rem] grid grid-cols-2 gap-2 lg:gap-3 items-start   p-2 lg:p-[.5rem]">
                    {softSkills?.length
                      ? softSkills.map((item) => (
                          <button
                            type="button"
                            key={Math.random()}
                            name={item}
                            className=" col-span-1 px-2 text-center text-xs lg:text-sm py-0.5 2xl:py-1.5  flex rounded-full 
                                                     items-center justify-between bg-[#19A5FF] text-white"
                            onClick={() => {
                              const unremoved = softSkills.filter((val) => val !== item);
                              setSoftSkills(unremoved);
                            }}
                          >
                            {item}
                            <span className="">
                              <CgClose className=" text-xl font-semibold text-white" />
                            </span>
                          </button>
                        ))
                      : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* soft skills end -------------------------- */}

          {/* -----------------Language--------------------------- */}
          {/* language section  starts */}
          <div className=" w-full flex bg-[#F0F9FFBF]  rounded-lg flex-col p-2 lg:p-5">
            {/* Skill Header  starts */}
            <div className="flex flex-nowrap justify-between items-center border-b border-b-[#19a5ff] lg:w-[14rem]  mb-5 ">
              <span>
                <FaDeaf className="text-[#19A5FF]" />
              </span>
              <h1 className="text-[#19a5ff]  font-sans font-semibold text-xl w-[89%]">Languages</h1>
            </div>
            {/* Skill body */}
            <div>
              <div className="flex w-full max-md:flex-col  items-start py-[2rem]">
                <div className="lg:w-[45%] flex justify-between gap-3 ">
                  {/* Skills dropdown */}
                  <div className="flex flex-col">
                    <label htmlFor="skills" className="mb-[1rem] font-medium text-sm">
                      Choose Language
                    </label>
                    <select
                      name=""
                      id=""
                      className="select w-full select-bordered focus:outline-none lg:w-[120px]"
                      onChange={getLanguage}
                      value={selectedLanguage}
                    >
                      <option value="" className="hidden">
                        Languages
                      </option>
                      {jData?.languages?.map((item) => (
                        <option className="text-[18px]" value={item} key={Math.random()}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Skill level dropdown */}
                  <div className="flex flex-col  pr-4">
                    <label htmlFor="skills" className="mb-[1rem] font-medium text-sm">
                      Choose level
                    </label>
                    <div>
                      <div className="flex flex-col xl:flex-row  w-full items-center   gap-5">
                        <div>
                          <select
                            name="selectedSkill"
                            id=""
                            className="select select-bordered focus:outline-none w-full lg:w-[120px] "
                            onChange={getLanguageLevel}
                            value={languageValue}
                          >
                            <option value="" className="hidden">
                              Level
                            </option>
                            {language !== null ? (
                              languageLevel.map((item) => (
                                <option className="text-[18px]" value={item} key={Math.random()}>
                                  {item}
                                </option>
                              ))
                            ) : (
                              <option className="text-red-600 text-[18px] ">
                                Please select a skill first
                              </option>
                            )}
                          </select>
                        </div>

                        <div className="max-lg:w-full">
                          <button
                            type="button"
                            className=" h-[3rem]  max-lg:w-full px-4 p-2 rounded-md text-center text-white bg-[#19A5FF]"
                            onClick={addLanguage}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Selected skill display box */}
                <div className="lg:w-[45%] w-full ">
                  <label htmlFor="selected skill">Selected Languages</label>
                  <div className="w-90%  h-auto rounded-md bg-white mt-[1rem] flex flex-wrap gap-2 lg:gap-3 items-start   p-2 lg:p-[.5rem]">
                    {selectedLanguages &&
                      selectedLanguages.map((item) => (
                        <button
                          type="button"
                          key={Math.random()}
                          name={item.language}
                          className="lg:w-[30%] px-1.5 text-sm py-0.5 2xl:py-1.5  flex rounded-full justify-evenly
                                                     items-center bg-[#19A5FF] text-white"
                          onClick={() => {
                            const unremoved = selectedLanguages.filter(
                              (val) => val.language !== item.language
                            );
                            setSelectedLanguages(unremoved);
                          }}
                        >
                          {item.language}
                          <CgClose className=" text-xl font-semibold text-white" />
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Preference section  starts */}

          <div className="bg-[#F0F9FFBF] w-full flex rounded-lg flex-col p-2 lg:p-5">
            <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers lg:w-[14rem] p-2 mb-4">
              <h1 className="text-headers font-sans font-semibold text-xl lg:w-[89%]">
                Job Preference
              </h1>
            </div>
            <div className="w-full">
              <div className="mt-[2rem] lg:w-[90%] ">
                <h1 className="font-semibold pl-3 w-full text-sm ">Preferred Job Type</h1>
                <div className="flex flex-wrap gap-2 xl:gap-0">
                  {buttons.map((item) => (
                    <button
                      onClick={() => setPreferredType(item.name)}
                      type="button"
                      key={Math.random()}
                      className={`flex border hover:shadow-lg hover:shadow-[#4e00b41c] rounded-md gap-2  justify-center items-center lg:text-base font-medium ${
                        item.color
                      } ${
                        preferredJobType === item.name && 'bg-[#19a5ff] text-white'
                      }  lg:m-[1rem] p-2  lg:w-[20%]`}
                    >
                      <span className={`mr-1  ${preferredJobType === item.name && ' text-white '}`}>
                        {item.icon}
                      </span>
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* select industry */}
              <div className="flex flex-col md:flex-row items-start mt-10">
                <div className="lg:w-[43%] w-full flex flex-col">
                  <label htmlFor="industry" className="text-base font-medium">
                    Select Domain
                  </label>
                  <select
                    name="industry"
                    id="industry"
                    onChange={handleIndustryChange}
                    className="select select-bordered focus:outline-none w-full lg:w-[80%] mt-3"
                  >
                    <option value="" className="hidden" hidden>
                      {selectedIndustryName || ' Choose'}
                    </option>
                    {jData?.domains?.map((item) => (
                      <option value={item} key={Math.random()} className="text-[18px]">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="lg:w-[43%] w-full flex flex-col">
                  <label htmlFor="Domain" className="text-base font-medium">
                    Select Level
                  </label>
                  <select
                    name="domain"
                    id="domain"
                    className="select w-full  select-bordered focus:outline-none   lg:w-[80%]   mt-3"
                    {...register('domain', { required: true })}
                    required
                  >
                    <option value="" className="hidden" hidden>
                      {value || ' Choose'}
                    </option>
                    {domainLists?.map((item) => (
                      <option value={item} key={Math.random()} className="text-[18px]">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full lg:w-[43%] flex flex-col">
                  <label htmlFor="workingPreference" className="text-base font-medium">
                    Working Preference
                  </label>
                  <select
                    name="workPreference"
                    defaultValue={remoProfile?.jobPreference?.locationPreference}
                    id="workPreference"
                    className="select select-bordered focus:outline-none lg:w-[80%]  mt-3 "
                    {...register('workPreference', { required: true })}
                    required
                  >
                    <option value="" className="hidden">
                      {remoProfile?.jobPreference?.locationPreference || 'Choose'}
                    </option>
                    {workingPreferences?.map((item) => (
                      <option value={item} key={Math.random()} className="text-[18px]">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {openOtherMenu && (
                <>
                  <label htmlFor="industryName" className="text-base font-medium">
                    Write your other domain
                  </label>
                  <input
                    id="industryName"
                    ref={selectRefTo}
                    className=" rounded-md py-2.5 border-[#d6d6d6]  focus:outline-none w-full lg:w-[27%] mt-2"
                    onBlur={() => setOpenOtherMenu(false)}
                    type="text"
                    placeholder="Other Domain..."
                    onChange={handleOtherMenu}
                    required
                  />
                </>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="px-8 py-4 bg-black rounded-lg text-white flex items-center gap-2"
          >
            Update Skills & Preference
            {loading && (
              <span className="w-7 h-7 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
            )}
          </button>
        </form>
      </section>
    </RemoForceSettingsItems>
  );
}

export default SkillAndPreferenceSettings;
