import React from 'react';
import headingIcon from '../../../Assets/Dashboard/talentRequest/headingIcon.svg';
import TalentCards from './TalentCards';
import TalentRequestBanner from './TalentRequestBanner';
import TalentsFounds from './TalentsFounds';

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

            {/* banner */}
            <div>
                <TalentRequestBanner />
            </div>
            {/* card */}
            <div>
                <TalentCards />
            </div>
            {/* Talent founds */}
            <div>
                <TalentsFounds />
            </div>
        </section>
    );
};

export default TalentRequest;
