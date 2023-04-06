import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import headingIcon from '../../../Assets/Dashboard/talentRequest/headingIcon.svg';
import TalentRequestModal from '../../../Modal/TalentRequest/TalentRequestModal';
import TalentCards from './TalentCards';
import TalentRequestBanner from './TalentRequestBanner';
import TalentsFounds from './TalentsFounds';

const TalentRequest = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
        {/* Try Free or view plan option */}
        <div className="flex items-center mt-5 justify-between pr-5 rounded-md bg-[#f0f9ff]">
          <div className="flex gap-2 px-2 py-3">
            <span className="mt-1">
              <BsStarFill />
            </span>
            <div>
              <h4 className="font-semibold">Try for free</h4>
              <p className="  text-[#999999] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate{' '}
                <br className="lg:block 2xl:hidden max-md:hidden" /> libero et velit interdum, ac{' '}
                <br className="hidden 2xl:block" /> aliquet odio mattis.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white hover:bg-[#00c42b] duration-300 ease-in bg-[#65dc7f] px-10 py-2 border  border-[#00c42b] rounded-lg"
                type="button"
              >
                Try Now!
              </button>

              <button
                className="text-[#13d1ff] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in  px-10 py-2 border border-[#13d1ff] rounded-lg"
                type="button"
              >
                View Plan
              </button>
            </div>
          </div>
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
      {/* talent Modal */}
      <TalentRequestModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default TalentRequest;
