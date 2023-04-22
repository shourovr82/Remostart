import React from 'react';

const TalentGetStarted = ({ setGetStartedOpen }) => (
  <div className="h-[100%] flex justify-center items-center ">
    {/* content */}
    <div className="flex gap-y-10 flex-col justify-center text-center">
      {/* section title  */}
      <div>
        <h2 className="text-2xl lg:text-4xl font-bold">
          Acquire the Verified talents across the world in just 5 minutes !
        </h2>
      </div>
      {/* section  */}
      <div>
        <p className="text-[#9e9f9f] font-semibold lg:text-2xl">
          In less than 5 minuted get the best, vetted and most inclusive talents for whichever role
        </p>
      </div>
      {/* get Started Button */}
      <div>
        <button
          onClick={() => setGetStartedOpen(false)}
          className="bg-[#f8f1ff] hover:shadow-lg hover:shadow-[#d4cef2] hover:text-white duration-500 ease-in hover:bg-[#61c1ff] px-7 py-3 rounded-xl shadow-inner text-[#61c1ff] text-3xl"
          type="button"
        >
          Get Started Now !
        </button>
      </div>
    </div>
  </div>
);

export default TalentGetStarted;
