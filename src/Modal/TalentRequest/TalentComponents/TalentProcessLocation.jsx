import React, { useState } from 'react';

const TalentProcessLocation = ({ locationPreference, setLocationPreference }) => {
  const [disableOption, setDisable] = useState(false);
  const locationsData = ['India', 'Germany', 'France'];
  const handleChange = (e) => {
    setLocationPreference(e.target.value);
  };
  const handleClick = () => {
    setDisable(true);
  };

  return (
    <div className="lg:ml-20">
      <div>
        <h1 className="font-bold text-3xl">Location</h1>
        <p
          className="mt-5 cl
                    text-lg"
        >
          Please Select the location from where you want to have your talents !
        </p>
      </div>
      {/* select option */}
      <div className="mt-10">
        <div>
          <div className="flex max-md:flex-col gap-3  lg:gap-10  justify-center ">
            <div className="group border-2  rounded-md px-3 py-2 inline-block border-dashed max-md:w-full border-[#0ea5e9] ">
              <select
                onChange={handleChange}
                className="select lg:w-[280px] focus:ring-0 border-[#e5e7eb]  mt-1 w-full font-semibold border 
                                              rounded-md "
              >
                <option value="" hidden>
                  {locationPreference || 'Choose'}
                </option>
                {locationsData?.map((D) => (
                  <option
                    onClick={handleClick}
                    disabled={disableOption}
                    value={D}
                    key={Math.random()}
                  >
                    {D}
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

export default TalentProcessLocation;
