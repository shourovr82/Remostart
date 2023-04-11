import React, { useEffect, useState } from 'react';

const TalentProcessProficiency = ({ selectedProficiency, setSelectedProficiency }) => {
  const [disableOption, setDisable] = useState(false);
  const handleChange = (e) => {
    setSelectedProficiency(e.target.value);
  };

  const handleClick = () => {
    setDisable(true);
  };

  const proficiencyLists = ['Beginner', 'Intermediate', 'Advance', 'Professional'];


  return (
    <div className="lg:ml-20">
      <div>
        <h1 className="font-bold text-3xl">Proficiency </h1>
        <p
          className="mt-5 cl
                    text-lg"
        >
          Please Select the level of Proficiency you want to have in your talents !
        </p>
      </div>
      {/* select option */}
      <div className="mt-5 lg:mt-10">
        <div>
          <div className="flex max-md:flex-col   gap-3 lg:gap-10  justify-center ">
            <div className="group border-2 max-md:w-full  rounded-md px-3 py-2 inline-block border-dashed border-[#0ea5e9] ">
              <select
                onChange={handleChange}
                className="select  lg:w-[280px] focus:ring-0 border-[#e5e7eb]  mt-1 w-full font-semibold border 
                                              rounded-md "
              >
                <option value="" hidden>
                  {selectedProficiency || 'Select  Proficiency Level'}
                </option>
                {proficiencyLists?.map((item) => (
                  <option
                    onClick={handleClick}
                    disabled={disableOption}
                    value={item}
                    key={Math.random()}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentProcessProficiency;
