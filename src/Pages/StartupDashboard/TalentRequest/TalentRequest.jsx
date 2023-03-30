import React from 'react';
import headingIcon from '../../../Assets/Dashboard/talentRequest/headingIcon.svg';

const TalentRequest = () => {
    console.log('object');
    return (
        <section>
            {/* heading */}
            <div className="flex gap-3 ">
                <img src={headingIcon} alt="" />
                <h1 className="text-3xl font-semibold">
                    {' '}
                    <span className="text-[#13D1FF]">Talent</span> Request
                </h1>
            </div>
        </section>
    );
};

export default TalentRequest;
