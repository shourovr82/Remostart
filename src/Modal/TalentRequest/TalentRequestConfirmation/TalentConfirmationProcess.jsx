import React, { useState } from 'react';
import TalentConfirmationStarted from './TalentCofirmationStarted';
import TalentConfirmationDate from './TalentConfirmationDate';

const TalentConfirmationProcess = ({ setIsOpen, selectedTalent }) => {
  const [tabActive, setTabActive] = useState(1);
  const [selectedDate, setSelectedDate] = useState([]);

  const handleBack = () => {
    if (tabActive === 1) {
      setIsOpen(false);
    } else if (tabActive === 2) {
      setTabActive(1);
    } else if (tabActive === 3) {
      setTabActive(2);
    }
  };
  const handleSubmitData = () => {};
  return (
    <div className="h-[100%] flex  justify-around flex-col">
      <div>
        {tabActive === 1 && <TalentConfirmationStarted selectedTalent={selectedTalent} />}

        {tabActive === 2 && (
          <TalentConfirmationDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        )}
      </div>

      {/*  */}
      <div className="flex  justify-between  lg:px-16">
        <button
          onClick={handleBack}
          className="bg-[#f8f1ff] shadow-inner  px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
          type="button"
        >
          Back{' '}
        </button>
        {tabActive <= 2 && (
          <button
            onClick={() => setTabActive(tabActive + 1)}
            className="bg-[#f8f1ff] shadow-inner px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
            type="button"
          >
            Select Date & Time Slots
          </button>
        )}
        {tabActive === 3 && (
          <button
            onClick={handleSubmitData}
            className="bg-[#f8f1ff] shadow-inner px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
            type="button"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default TalentConfirmationProcess;
