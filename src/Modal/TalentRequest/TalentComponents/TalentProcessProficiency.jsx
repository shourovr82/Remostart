import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import { RxCross2 } from 'react-icons/rx';

const TalentProcessProficiency = ({ selectedProficiency, setSelectedProficiency }) => {
  const [profValue, setProfValue] = useState('');
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setProfValue(selectedValue);
    const checkValue = selectedProficiency?.filter((sel) => sel === selectedValue);
    if (checkValue?.length) {
      toast.error(`Already Selected  ${selectedValue}`);
    } else if (!checkValue?.length) {
      if (selectedProficiency?.length >= 2) {
        toast.error('You cant select more than 2 ');
      } else if (selectedProficiency?.length < 2) {
        setSelectedProficiency([...selectedProficiency, selectedValue]);
      }
    }
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
            <div>
              <div className="group border-2 max-md:w-full  rounded-md px-3 py-2 inline-block border-dashed border-[#0ea5e9] ">
                <select
                  onChange={handleChange}
                  className="select  lg:w-[280px] focus:ring-0 border-[#e5e7eb]  mt-1 w-full font-semibold border 
                                              rounded-md "
                >
                  <option value="" hidden>
                    {profValue || ' Select Proficiency Level'}
                  </option>
                  {proficiencyLists?.map((item) => (
                    <option value={item} key={Math.random()}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2 flex justify-end">
                <p className="text-sm text-[#999999]">*Please choose only up-to 2 levels.</p>
              </div>
            </div>

            {selectedProficiency?.length ? (
              <div className="flex flex-wrap border-dashed  rounded-md border-[#0ea5e9] px-2 py-4 gap-3 lg:w-[630px] w-full border-2 lg:h-[70px] bg-[#F0F9FF]">
                {selectedProficiency?.map((value) => (
                  <div key={Math.random()}>
                    <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                      <p>{value}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProficiency(
                            selectedProficiency?.filter((val) => val !== value)
                          );
                        }}
                      >
                        <RxCross2 className="font-bold text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center px-2 py-4 gap-3  rounded-md lg:w-[630px] w-full border-2 border-[#0ea5e9] border-dashed lg:h-[70px] bg-[#F0F9FF]">
                <div className="font-semibold ">No Proficiency level added yet...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentProcessProficiency;
