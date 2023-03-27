import React from 'react';
import commentIcon from '../../Assets/Images/Comment.png';

const ReviewSection = () => (
    <div className="w-full md:w-full lg:h-[353px] h-full bg-[#F8F1FF] text-black rounded-2xl flex flex-col justify-center items-center py-10  px-4 md:px-0">
        <img src={commentIcon} alt="" />
        <div className="md:px-10 w-full  lg:px-24 px-0 text-center">
            <p className="font-normal text-base md:text-xl lg:text-[22px] mt-10">
                As a startup founder and solopreneur I think I would have missed it if not for
                Remostart, instead of spending thousands of dollars on building my idea, Remostart
                enabled me to cut the expenses, through their free consultation service I knew
                exactly the MVP I should start with and got the right talents for it.
            </p>
        </div>
        <div className="flex mt-11">
            {/* <img src={me} className='w-14 rounded-full' alt="" /> */}
            <div className="flex flex-col px-2 space-y-2 text-center">
                <span className="text-base font-medium">Speef</span>
                <span className="font-normal text-xs text-gray-600">Solopreneur</span>
            </div>
        </div>
    </div>
);

export default ReviewSection;
