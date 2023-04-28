import React from 'react';

function RangeInput({ requiredTalents, setRequiredTalents }) {
  function handleChange(event) {
    setRequiredTalents(event.target.value);
  }

  return (
    <>
      <div className="py-6 mx-auto flex justify-center pr-2.5">
        <p className="text-white py-1 px-2 rounded-full bg-[#13d1ff]">{requiredTalents}</p>
      </div>
      <div className="range-input-container !w-full">
        <input type="range" min="1" max="100" value={requiredTalents} onChange={handleChange} />
        <div className="range-input-indicators ">
          <div className="range-input-indicator range-input-indicator-0">
            <p className="top-14 font-semibold text-[#aedfff] text-2xl -left-0.5 absolute">1</p>
          </div>
          <div className="range-input-indicator range-input-indicator-25">
            <p className="top-14 font-semibold text-[#aedfff] text-2xl -left-2 absolute">25</p>
          </div>
          <div className="range-input-indicator range-input-indicator-50">
            <p className="top-14 font-semibold text-[#aedfff] text-2xl -left-2 absolute">50</p>
          </div>
          <div className="range-input-indicator range-input-indicator-75">
            <p className="top-14 font-semibold text-[#aedfff] text-2xl -left-2 absolute">75</p>
          </div>
          <div className="range-input-indicator range-input-indicator-100">
            <p className="top-14 font-semibold text-[#aedfff] text-2xl -left-2.5 absolute">100</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RangeInput;
