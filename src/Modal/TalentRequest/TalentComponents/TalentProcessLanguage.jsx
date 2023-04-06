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

const TalentProcessLanguage = ({ selectedLanguages, setSelectedLanguages }) => {
  const [jData, setJData] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelectChange = (selectedOptions) => {
    setSelectedOption(selectedOptions);
    const selectedLanguage = selectedOptions?.value;
    const arr = selectedLanguages?.filter((ar) => selectedLanguage === ar);
    if (arr?.length) {
      toast.error(`Already added ${selectedLanguage} !!`);
    } else if (!arr.length) {
      setSelectedLanguages([...selectedLanguages, selectedLanguage]);
    }
  };

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
        <h1 className="font-bold text-3xl">Language</h1>
        <p
          className="mt-5 cl
                    text-lg"
        >
          Please Select the language you want to have in your talents !
        </p>
      </div>
      {/* select option */}
      <div className="mt-5 lg:mt-10">
        <div>
          <div className="flex max-md:flex-col gap-3  lg:gap-10  justify-center ">
            <div className="group border-2 max-md:w-full  relative rounded-md px-3 py-2 inline-block border-dashed border-[#0ea5e9] lg:pr-10">
              <div className=" mt-2">
                <Select
                  options={jData?.talentLanguages}
                  styles={customStyles}
                  value={selectedOption}
                  onChange={handleSelectChange}
                  placeholder="Choose"
                  className=" w-full lg:w-[250px] "
                  classNamePrefix="select2-selection"
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />
              </div>
            </div>
            {selectedLanguages?.length ? (
              <div className="flex flex-wrap border-dashed  rounded-md border-[#0ea5e9] px-2 py-4 gap-3 lg:w-[630px] w-full border-2 h-auto bg-[#F0F9FF]">
                {selectedLanguages?.map((value) => (
                  <div key={Math.random()}>
                    <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                      <p>{value}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLanguages(selectedLanguages?.filter((val) => val !== value));
                        }}
                      >
                        <RxCross2 className="font-bold text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center px-2 py-4 gap-3  lg:w-[630px] w-full border-2 border-[#0ea5e9] border-dashed  h-auto bg-[#F0F9FF]">
                <div className="font-semibold ">No Language added yet...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentProcessLanguage;
