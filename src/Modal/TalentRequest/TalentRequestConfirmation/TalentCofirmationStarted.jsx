import React from 'react';

const TalentConfirmationStarted = ({ selectedTalent }) => (
  <div className=" h-[40vh] flex flex-col justify-between  pl-10">
    <div>
      <h1 className="text-3xl font-bold">
        You have currently selected {selectedTalent?.length}{' '}
        {selectedTalent?.length >= 2 ? 'Talent’s' : 'Talent'} for <br /> interview ! Are you sure
        you want to <br />
        interview Talents?
      </h1>
    </div>
    <div className="flex justify-center">
      {/* <p className="text-[#999999] text-2xl font-semibold">You have found some searches</p> */}
    </div>
  </div>
);

export default TalentConfirmationStarted;
