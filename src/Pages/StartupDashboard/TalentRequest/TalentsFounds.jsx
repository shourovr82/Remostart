import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi2';
import { RiUserFollowLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import libraryBookIcon from '../../../Assets/RemoForceDashboard/dashboard/librarybook.svg';
import TalentsFoundTable from './TalentsFoundTable';

const TalentsFounds = () => {
  const tier = 'tierFree';
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { data: myRequests, refetch } = useQuery(['myRequests'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/talent/my-requests?email=${user?.user.email}&tier=${tier}`
      )
      .then((res) => res.data)
  );
  const handleMyRequest = () => {
    navigate('/talent-request-history', { state: { data: myRequests?.myRequests } });
  };

  return (
    <section className="mt-20 max-md:p-2 ">
      {/* total talents found heading card */}

      <div className="lg:grid grid-cols-3 gap-3">
        <div className="col-span-2 lg:bg-white flex lg:flex-row flex-col gap-10  max-md:gap-3  items-center rounded-3xl shadow-xl shadow-[#f4f8fc]">
          <div className="flex max-lg:bg-white w-full  py-5 2xl:gap-10 max-lg:rounded-2xl max-lg:shadow-xl max-lg:shadow-[#f5f8fd] justify-evenly lg:justify-center items-center">
            <div>
              <p className="p-4 2xl:p-6 rounded-full bg-[#dcffec]">
                <HiOutlineUsers className="text-2xl 2xl:text-3xl text-[#00ac4f]" />
              </p>
            </div>
            <div className="space-y-1.5">
              <h5 className="text-sm text-[#acacac]">Talent Requests</h5>
              <h2 className="text-2xl 2xl:text-3xl font-bold text-[#333333]">
                {myRequests?.myRequests?.searchHistory?.length || 0} /2
                <span className="text-base"> Searches</span>
              </h2>
              <p className="font-semibold  text-xs 2xl:text-sm">
                <span className=" font-bold text-[#00ac4f]">First 2 Searches Free !! </span>
              </p>
            </div>
          </div>
          {/* <div className="lg:h-[100px] hidden border-4   lg:block 2xl:p-5 p-2 border-l border-[#ececec] " /> */}
          <div className="flex  max-lg:bg-white w-full  py-5  lg:border-l-2 2xl:gap-10 max-lg:rounded-2xl max-lg:shadow-xl max-lg:shadow-[#f5f8fd] justify-evenly lg:justify-center items-center">
            <div>
              <p className="p-4 2xl:p-6 rounded-full bg-[#dcffec]">
                <RiUserFollowLine className="text-3xl 2xl:text-3xl text-[#00ac4f]" />
              </p>
            </div>
            <div className="space-y-1.5">
              <h5 className="text-sm text-[#acacac]">Skills Matched</h5>
              <h2 className="text-2xl 2xl:text-3xl font-bold text-[#333333]">
                {myRequests?.totalMatch}+
              </h2>
              <p className="font-semibold text-sm">Overall</p>
            </div>
          </div>
        </div>

        {/* my request */}
        <button type="button" className="w-full " onClick={handleMyRequest}>
          <div className="col-span-1 flex justify-evenly items-center  py-8 2xl:py-10 max-lg:px-10 max-lg:mt-5 rounded-3xl bg-[#d3ffe7] shadow-xl max-md:gap-3 gap-2 shadow-[#f4f8fc]">
            <div className=" p-4 2xl:p-6 rounded-full bg-white">
              <img src={libraryBookIcon} alt="" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl 2xl:text-2xl font-bold text-[#333333]">My Request</h2>
              <p className="font-semibold text-[#acacac]  text-xs 2xl:text-base">
                Your Searches & <br /> History
              </p>
            </div>
          </div>
        </button>
      </div>
      {/* talents found table */}
      <div>
        <TalentsFoundTable />
      </div>
    </section>
  );
};

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
