import React, { useEffect, useState } from 'react';
import { BsEmojiWink } from 'react-icons/bs';
import { FiEdit3, FiMapPin } from 'react-icons/fi';
import { HiLanguage } from 'react-icons/hi2';
import { RiUser6Line } from 'react-icons/ri';
import { TbEditCircle } from 'react-icons/tb';
import tabBlue from '../../../Assets/Dashboard/talentRequest/tabBlue.svg';
import tabGreen from '../../../Assets/Dashboard/talentRequest/tabGreen.svg';
import TalentProcessProficiency from './TalentProcessProficiency';
import TalentProcessSkills from './TalentProcessSkills';

const TalentProcess = () => {
    const [talentProcessTabs, setTalentProcessTabs] = useState({});
    const [jData, setJData] = useState({});
    const [tabActive, setTabActive] = useState(1);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedProficiency, setSelectedProficiency] = useState([]);

    useEffect(() => {
        setTalentProcessTabs({
            skills: true,
            proficiency: false,
            location: false,
            language: false,
            personality: false,
            noOfTalents: false,
        });
    }, []);

    return (
        <div className="h-[100%] flex  justify-around flex-col">
            <div className="flex items-center gap-3">
                <div>
                    <img src={tabGreen} alt="" />
                </div>
                <div>
                    <button
                        type="button"
                        className="p-3 rounded-full bg-[#65dc7f] border-4 border-white shadow-xl shadow-[#5e59e64b]"
                    >
                        <TbEditCircle className="text-white text-3xl" />
                    </button>
                </div>

                {/* tab two */}

                <div>
                    {tabActive >= 2 ? <img src={tabGreen} alt="" /> : <img src={tabBlue} alt="" />}
                </div>
                <div>
                    {tabActive >= 2 ? (
                        <button
                            type="button"
                            className="p-3 rounded-full bg-[#65dc7f] border-4 border-white shadow-xl shadow-[#5e59e64b]"
                        >
                            <FiEdit3 className="text-white text-3xl" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="p-3 rounded-full bg-[#fff] border-4 border-white shadow-xl shadow-[#5e59e64b]"
                        >
                            <FiEdit3 className="text-black text-3xl" />
                        </button>
                    )}
                </div>
                <div>
                    <img src={tabBlue} alt="" />
                </div>
                <div>
                    <button
                        type="button"
                        className="p-3 rounded-full bg-[#65dc7f] border-4 border-white shadow-xl shadow-[#5e59e64b]"
                    >
                        <FiMapPin className="text-white text-3xl" />
                    </button>
                </div>
                <div>
                    <img src={tabBlue} alt="" />
                </div>
                <div>
                    <button
                        type="button"
                        className="p-3 rounded-full bg-[#65dc7f] border-4 border-white shadow-xl shadow-[#5e59e64b]"
                    >
                        <HiLanguage className="text-white text-3xl" />
                    </button>
                </div>
                <div>
                    <img src={tabBlue} alt="" />
                </div>
                <div>
                    <button
                        type="button"
                        className="p-3 rounded-full bg-[#65dc7f] border-4 border-white shadow-xl shadow-[#5e59e64b]"
                    >
                        <BsEmojiWink className="text-white text-3xl" />
                    </button>
                </div>
                <div>
                    <img src={tabBlue} alt="" />
                </div>
                <div>
                    <button
                        type="button"
                        className="p-3 rounded-full bg-[#fff] border-4 border-white shadow-xl shadow-[#5e59e64b]"
                    >
                        <RiUser6Line className="text-black text-3xl" />
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

            <div className={`flex ${tabActive === 1 ? 'justify-end' : 'justify-between'}  px-16`}>
                {tabActive !== 1 && (
                    <button
                        onClick={() => setTabActive(tabActive - 1)}
                        className="bg-[#f8f1ff] shadow-inner  px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
                        type="button"
                    >
                        Prev{' '}
                    </button>
                )}
                <button
                    onClick={() => setTabActive(tabActive + 1)}
                    className="bg-[#f8f1ff] shadow-inner px-5 py-2.5 hover:shadow-lg hover:shadow-[#d7d4f4] hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
                    type="button"
                >
                    Next{' '}
                </button>
            </div>
        </div>
    );
};

export default TalentProcess;
