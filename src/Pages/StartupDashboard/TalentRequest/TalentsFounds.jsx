import React from 'react';
import libraryBookIcon from '../../../Assets/RemoForceDashboard/dashboard/librarybook.svg';
import TalentsFoundTable from './TalentsFoundTable';

const TalentsFounds = () => (
  <section className="mt-20 max-md:p-2 ">
    {/* total talents found heading card */}
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2 bg-white shadow-xl shadow-black">s</div>

      {/* my request */}
      <div className="col-span-1 flex justify-evenly items-center  py-7 rounded-xl bg-[#d3ffe7] shadow-xl shadow-black">
        <div className=" p-5 rounded-full bg-white">
          <img src={libraryBookIcon} alt="" />
        </div>
        <div className="space-y-1.5">
          <h2 className="text-2xl 2xl:text-xl font-bold text-[#333333]">My Request</h2>
          <p className="font-semibold text-[#acacac]  text-xs 2xl:text-sm">
            Your Searches & History
          </p>
        </div>
      </div>
    </div>
    {/* talents found table */}
    <div>
      <TalentsFoundTable />
    </div>
  </section>
);

export default TalentsFounds;

/* <div className=" flex  items-center  w-full gap-3">
  <div className="flex w-full  lg:flex-row flex-col   py-6 px-12 justify-between rounded-2xl   bg-white shadow-xl shadow-[#e2edf8] gap-5">
    <div className="flex  w-full gap-3  justify-around items-center">
      <div>
        <p className="p-3 rounded-full bg-[#dcffec]">
          <HiOutlineUsers className="text-2xl 2xl:text-4xl text-[#00ac4f]" />
        </p>
      </div>
      <div className="space-y-1.5">
        <h5 className="text-sm text-[#acacac]">Total Talents Found</h5>
        <h2 className="text-2xl 2xl:text-3xl font-bold text-[#333333]">5,423</h2>
        <p className="font-semibold  text-xs 2xl:text-sm">
          <span className=" font-bold text-[#00ac4f]">16%</span> Accurate Match{' '}
        </p>
      </div>
    </div>
    <div className="lg:h-[100px] hidden  lg:block 2xl:p-5 p-2 border-l border-[#ececec] " />
    <div className="flex w-full max-md:pt-2  gap-3 items-center">
      <div>
        <p className="p-3 rounded-full bg-[#dcffec]">
          <RiUserFollowLine className="text-2xl 2xl:text-4xl text-[#00ac4f]" />
        </p>
      </div>
      <div className="space-y-1.5">
        <h5 className="text-sm text-[#acacac]">Skills Matched</h5>
        <h2 className="text-2xl 2xl:text-3xl font-bold text-[#333333]">17+</h2>
        <p className="font-semibold text-sm">Overall</p>
      </div>
    </div>
  </div>

  <div className="flex bg-[#d3ffe7] py-12 rounded-xl px-10   w-full gap-3  items-center">
    <div className="border p-5 rounded-full bg-white">
      <img src={libraryBookIcon} alt="" />
    </div>
    <div className="space-y-1.5">
      <h2 className="text-2xl 2xl:text-3xl font-bold text-[#333333]">My Request</h2>
      <p className="font-semibold text-[#acacac]  text-xs 2xl:text-sm">
        Your Searches & History
      </p>
    </div>
  </div>
</div> */
