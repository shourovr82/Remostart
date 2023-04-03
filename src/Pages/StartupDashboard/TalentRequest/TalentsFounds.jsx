import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { RiUserFollowLine } from 'react-icons/ri';
import TalentsFoundTable from './TalentsFoundTable';

const TalentsFounds = () => {
    console.log('');
    return (
        <section className="mt-20 max-md:p-2 ">
            {/* total talents found heading card */}
            <div className="flex max-md:divide-y lg:ml-14  lg:flex-row flex-col  lg:w-3/4 2xl:w-4/6  py-6 px-5 justify-between rounded-2xl   bg-white shadow-xl shadow-[#e2edf8] gap-4">
                <div className="flex  w-full gap-3  items-center">
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

            {/* talents found table */}
            <div>
                <TalentsFoundTable />
            </div>
        </section>
    );
};

export default TalentsFounds;
