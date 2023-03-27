import React from 'react';
import comingsoonBg from '../../Assets/Dashboard/startupProfile.svg';

const TalentRequest = () => (
    <div className="flex justify-center items-center text-center lg:h-[100vh]">
        <div>
            <img src={comingsoonBg} className="w-full" alt="" />
            <div className="mt-5">
                <p className="text-xl md:text-2xl ">Talent Requests will be updated soon.</p>
            </div>
        </div>
    </div>
);

export default TalentRequest;
