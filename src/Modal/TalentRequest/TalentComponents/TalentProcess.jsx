import React, { useState } from 'react';
import { BsEmojiWink } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';
import { HiLanguage } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';
import { RiUser6Line } from 'react-icons/ri';
import { TbEditCircle } from 'react-icons/tb';
import tabBlue from '../../../Assets/Dashboard/talentRequest/tabBlue.svg';
import tabGreen from '../../../Assets/Dashboard/talentRequest/tabGreen.svg';
import TalentProcessLanguage from './TalentProcessLanguage';
import TalentProcessLocation from './TalentProcessLocation';
import TalentProcessNoOfTalents from './TalentProcessNoOfTalents';
import TalentProcessPersonality from './TalentProcessPersonality';
import TalentProcessProficiency from './TalentProcessProficiency';
import TalentProcessSkills from './TalentProcessSkills';

const TalentProcess = () => {
  const [tabActive, setTabActive] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedProficiency, setSelectedProficiency] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedPersonalities, setSelectedPersonalities] = useState([]);
  const [totalTalentsValue, setTotalTalentsValue] = useState(50);

  const handleSubmit = () => {
    const allData = {
      selectedSkills,
      selectedProficiency,
      selectedLocations,
      selectedLanguages,
      selectedPersonalities,
      totalTalentsValue,
    };
    console.log(allData);
  };
  return (
    <div className="h-[100%] flex  justify-around flex-col">
      <div className="flex items-center  gap-1 lg:gap-3">
        <div>
          <img src={tabGreen} alt="" />
        </div>
        <div>
          <button
            onClick={() => setTabActive(1)}
            type="button"
            className="p-2 lg:p-3 rounded-full bg-[#65dc7f] border-4 border-white shadow-xl shadow-[#5e59e64b]"
          >
            <TbEditCircle className="text-white text-2xl lg:text-3xl" />
          </button>
        </div>

        {/* tab two */}

        <div>{tabActive >= 2 ? <img src={tabGreen} alt="" /> : <img src={tabBlue} alt="" />}</div>
        <div>
          <button
            onClick={() => setTabActive(2)}
            type="button"
            className={`p-2 lg:p-3 rounded-full border-4 border-white duration-300 ease-in shadow-xl shadow-[#5e59e64b] ${
              tabActive >= 2 ? 'bg-[#65dc7f]' : 'bg-white'
            }`}
          >
            <FiEdit3
              className={`${
                tabActive >= 2 ? 'text-white' : 'to-black'
              } duration-300 ease-in text-2xl lg:text-3xl`}
            />
          </button>
        </div>
        <div>{tabActive >= 3 ? <img src={tabGreen} alt="" /> : <img src={tabBlue} alt="" />}</div>
        <div>
          <button
            onClick={() => setTabActive(3)}
            type="button"
            className={`p-2 lg:p-3 rounded-full duration-300 ease-in border-4 border-white shadow-xl shadow-[#5e59e64b] ${
              tabActive >= 3 ? 'bg-[#65dc7f]' : 'bg-white'
            }`}
          >
            <IoLocationOutline
              className={`${
                tabActive >= 3 ? 'text-white' : 'to-black'
              } duration-300 ease-in text-2xl lg:text-3xl`}
            />
          </button>
        </div>
        <div>{tabActive >= 4 ? <img src={tabGreen} alt="" /> : <img src={tabBlue} alt="" />}</div>
        <div>
          <button
            onClick={() => setTabActive(4)}
            type="button"
            className={`p-2 lg:p-3 rounded-full duration-300 ease-in border-4 border-white shadow-xl shadow-[#5e59e64b] ${
              tabActive >= 4 ? 'bg-[#65dc7f]' : 'bg-white'
            }`}
          >
            <HiLanguage
              className={`${
                tabActive >= 4 ? 'text-white' : 'to-black'
              } duration-300 ease-in text-2xl lg:text-3xl`}
            />
          </button>
        </div>
        <div>{tabActive >= 5 ? <img src={tabGreen} alt="" /> : <img src={tabBlue} alt="" />}</div>

        <div>
          <button
            onClick={() => setTabActive(5)}
            type="button"
            className={`p-2 lg:p-3 rounded-full duration-300 ease-in border-4 border-white shadow-xl shadow-[#5e59e64b] ${
              tabActive >= 5 ? 'bg-[#65dc7f]' : 'bg-white'
            }`}
          >
            <BsEmojiWink
              className={`${
                tabActive >= 5 ? 'text-white' : 'to-black'
              } duration-300 ease-in text-2xl lg:text-3xl`}
            />
          </button>
        </div>
        <div>{tabActive >= 6 ? <img src={tabGreen} alt="" /> : <img src={tabBlue} alt="" />}</div>

        <div>
          <button
            onClick={() => setTabActive(6)}
            type="button"
            className={`p-2 lg:p-3 rounded-full duration-300 ease-in border-4 border-white shadow-xl shadow-[#5e59e64b] ${
              tabActive >= 6 ? 'bg-[#65dc7f]' : 'bg-white'
            }`}
          >
            <RiUser6Line
              className={`${
                tabActive >= 6 ? 'text-white' : 'to-black'
              } duration-300 ease-in text-2xl lg:text-3xl`}
            />
          </button>
        </div>
      </div>

      {/* tab content */}

      {tabActive === 1 && (
        <TalentProcessSkills
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />
      )}
      {tabActive === 2 && (
        <TalentProcessProficiency
          selectedProficiency={selectedProficiency}
          setSelectedProficiency={setSelectedProficiency}
        />
      )}
      {tabActive === 3 && (
        <TalentProcessLocation
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
        />
      )}
      {tabActive === 4 && (
        <TalentProcessLanguage
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
        />
      )}
      {tabActive === 5 && (
        <TalentProcessPersonality
          selectedPersonalities={selectedPersonalities}
          setSelectedPersonalities={setSelectedPersonalities}
        />
      )}
      {tabActive === 6 && (
        <TalentProcessNoOfTalents
          totalTalentsValue={totalTalentsValue}
          setTotalTalentsValue={setTotalTalentsValue}
        />
      )}

      <div className={`flex ${tabActive === 1 ? 'justify-end' : 'justify-between'}  lg:px-16`}>
        {tabActive !== 1 && (
          <button
            onClick={() => setTabActive(tabActive - 1)}
            className="bg-[#f8f1ff] shadow-inner  px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
            type="button"
          >
            Prev{' '}
          </button>
        )}
        {tabActive <= 5 && (
          <button
            onClick={() => setTabActive(tabActive + 1)}
            className="bg-[#f8f1ff] shadow-inner px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
            type="button"
          >
            Next{' '}
          </button>
        )}
        {tabActive >= 6 && (
          <button
            onClick={handleSubmit}
            className="bg-[#f8f1ff] shadow-inner px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
            type="button"
          >
            Find{' '}
          </button>
        )}
      </div>
    </div>
  );
};

export default TalentProcess;
