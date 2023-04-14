import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { RxCross2 } from 'react-icons/rx';
import Select from 'react-select';

const customStyles = {
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#d6edf7' : 'white',
    color: state.isSelected ? 'white' : 'black',
    outline: 'none !important',
    boxShadow: 'rgba(192, 37, 37, 0.24) 0px 3px 8px;',
    ':hover': {
      backgroundColor: 'lightblue',
      borderColor: '#cccccc',
    },
  }),
  control: (base, state) => ({
    ...base,
    outline: 'none !important',
    border: '1px solid #e5e7eb !important',
    ':hover': {
      outline: 'none !important',
      border: 'none',
    },
  }),
};
// main function-
const TalentProcessSkills = ({ selectedSkills, setSelectedSkills }) => {
  const [skillValue, setSkillValue] = useState('');
  const [jData, setJData] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState();
  const [level, setLevel] = useState(false);

  const domainLists = ['Beginner', 'Intermediate', 'Advance', 'Professional'];
  // handle change skill
  const handleSelectChange = (selectedOptions) => {
    setSelectedOption(selectedOptions);
    const skillSelected = selectedOptions?.value;
    const arr = selectedSkills?.filter((ar) => skillSelected === ar?.skillName);
    if (arr?.length) {
      toast.error(`Already added ${skillSelected} !!`);
    } else if (!arr.length) {
      setSkillValue(skillSelected);
      setLevel(true);
    }
  };

  // skill level
  const currentSkillLevel = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  // -------------------handleSelect skill
  const AddSkill = () => {
    const arr = selectedSkills?.filter((ar) => skillValue === ar?.skillName);
    if (arr?.length) {
      toast.error(`Already added ${skillValue} !!`);
    } else if (!arr.length) {
      setSelectedSkills([...selectedSkills, { skillName: skillValue, level: value }]);
      setLevel(false);
    }
  };
  // fetch data from json file
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setJData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div className="lg:ml-20">
      <div>
        <h1 className="font-bold text-3xl">Skills</h1>
        <p
          className="mt-5 cl
                    text-lg"
        >
          Please Select the skills you want to have in your talents !
        </p>
      </div>
      {/* select option */}
      <div className=" mt-5 lg:mt-5">
        <div>
          <div className="flex max-md:flex-col max-md:gap-3  gap-10  justify-center ">
            <div className="group border-2  max-md:w-full  rounded-md px-3 py-2 inline-block border-dashed border-[#0ea5e9] ">
              <div className=" mt-2">
                <Select
                  options={jData?.talentSkills}
                  styles={customStyles}
                  value={selectedOption}
                  onChange={handleSelectChange}
                  placeholder="Choose "
                  className=" w-full "
                  classNamePrefix="select2-selection"
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />
              </div>
              {/* Skill level dropdown */}
              <div className="flex flex-col mt-2 pr-4">
                <label htmlFor="skills" className="mb-[1rem] font-medium text-sm">
                  Choose level
                </label>
                <div>
                  <div className="flex flex-col xl:flex-row  w-full items-center   gap-5">
                    <div>
                      <select
                        name="selectedSkill"
                        id="selectedSkill"
                        className="select select-bordered focus:outline-none lg:w-[180px]  "
                        onChange={currentSkillLevel}
                        value={value}
                        required
                      >
                        <option value="" className="hidden">
                          Level
                        </option>
                        {level !== false ? (
                          domainLists.map((item) => (
                            <option className="text-[18px]" value={item} key={Math.random()}>
                              {item}
                            </option>
                          ))
                        ) : (
                          <option value="" className=" text-[18px] ">
                            Please select a skill first
                          </option>
                        )}
                      </select>
                    </div>

                    <div className="">
                      <button
                        type="button"
                        className=" h-[3rem]   w-full px-4 p-2 rounded-md text-center text-white bg-[#19A5FF]"
                        onClick={AddSkill}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {selectedSkills?.length ? (
              <div className="flex flex-wrap border-dashed  rounded-md border-[#0ea5e9] px-2 py-4 gap-3 lg:w-[630px] w-full border-2 h-auto bg-[#F0F9FF]">
                {selectedSkills?.map((skill) => (
                  <div key={Math.random()}>
                    <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                      <p>{skill?.skillName}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSkills(selectedSkills.filter((val) => val !== skill));
                        }}
                      >
                        <RxCross2 className="font-bold text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex rounded-md justify-center px-2 py-4 gap-3  lg:w-[630px] w-full border-2 border-[#0ea5e9] border-dashed  h-auto bg-[#F0F9FF]">
                <div className="font-semibold ">No Skills added yet...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentProcessSkills;
