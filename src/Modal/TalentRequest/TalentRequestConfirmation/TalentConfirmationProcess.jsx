import React, { useState } from 'react';
import TalentConfirmationStarted from './TalentCofirmationStarted';
import TalentConfirmationDate from './TalentConfirmationDate';

const TalentConfirmationProcess = () => {
  const [tabActive, setTabActive] = useState(1);
  const [selectedDate, setSelectedDate] = useState([]);
  console.log('object');

  return (
    <>
      <div>
        {tabActive === 1 && <TalentConfirmationStarted />}

        {tabActive === 2 && (
          <TalentConfirmationDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        )}
      </div>

      {/*  */}
      <div className="flex  justify-between  lg:px-16">
        <button
          className="bg-[#f8f1ff] shadow-inner  px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
          type="button"
        >
          Prev{' '}
        </button>
        <button
          className="bg-[#f8f1ff] shadow-inner px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
          type="button"
        >
          Next{' '}
        </button>
        {/* {tabActive === 6 && (
          <button
            onClick={handleSubmit}
            className="bg-[#f8f1ff] shadow-inner px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
            type="button"
          >
            Find{' '}
          </button>
        )} */}
      </div>
    </>
  );
};

export default TalentConfirmationProcess;
