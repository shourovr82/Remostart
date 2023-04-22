import React from 'react';
import RangeInput from './RangeInput';

const TalentProcessNoOfTalents = ({ requiredTalents, setRequiredTalents }) => (
  <div className="lg:ml-20">
    <div>
      <h1 className="font-bold text-3xl">No. of Talents </h1>
      <p
        className="mt-5 
                    text-lg"
      >
        Please choose the amount of people you need in the list, the list s created by the match %
        with your request.
      </p>
    </div>
    {/* select option */}
    <div className="lg:mx-auto mt-1 lg:w-[50%]">
      <RangeInput setRequiredTalents={setRequiredTalents} requiredTalents={requiredTalents} />
    </div>
  </div>
);

export default TalentProcessNoOfTalents;
