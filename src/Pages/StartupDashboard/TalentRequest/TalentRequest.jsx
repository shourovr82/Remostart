import React from 'react';
import headingIcon from '../../../Assets/Dashboard/talentRequest/headingIcon.svg';
import TalentRequestBanner from './TalentRequestBanner';

const TalentRequest = () => {
    console.log('object');
    return (
        <section>
            {/* section title */}
            <div className="flex gap-3 border-b border-[#A5DBFF] ">
                <img src={headingIcon} alt="" />
                <h1 className="text-3xl font-semibold">
                    {' '}
                    <span className="text-[#13D1FF]">Talent</span> Request
                </h1>
            </div>

            {/* heading */}

            <div>
                <TalentRequestBanner />
            </div>
        </section>
    );
};

export default TalentRequest;
