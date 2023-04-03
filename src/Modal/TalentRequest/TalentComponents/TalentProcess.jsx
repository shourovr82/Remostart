import React, { useEffect, useState } from 'react';
import { BsEmojiWink } from 'react-icons/bs';
import { FiEdit3, FiMapPin } from 'react-icons/fi';
import { HiLanguage } from 'react-icons/hi2';
import { RiUser6Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { TbEditCircle } from 'react-icons/tb';
import tabBlue from '../../../Assets/Dashboard/talentRequest/tabBlue.svg';
import tabGreen from '../../../Assets/Dashboard/talentRequest/tabGreen.svg';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const TalentProcess = () => {
    const [talentProcessTabs, setTalentProcessTabs] = useState({});
    const [jData, setJData] = useState({});
    const [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    });
    const [skillValue, setSkillValue] = useState('');
    const [domainError, setDomainError] = useState('');
    const [selectedValues, setSelectedValues] = useState([]);

    const handleChange = (e) => {
        setDomainError('');

        const selectedOptions = e.target.selectedOptions[0].innerHTML;
        const arr = selectedValues.filter((ar) => selectedOptions === ar);
        if (arr?.length) {
            setDomainError(`Already added ${selectedOptions} !!`);
            // toast.error('Already added');
        } else if (!arr.length) {
            setSkillValue(e.target.value);
            setDomainError('');
            setSelectedValues([...selectedValues, selectedOptions]);
        }
    };
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/data.json');
            const jsonData = await response.json();
            setJData(jsonData);
        }
        fetchData();
    }, []);
    const [disableOption, setDisable] = useState(false);

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
    const handleClick = () => {
        setDisable(true);
    };
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
                <div>
                    <img src={tabBlue} alt="" />
                </div>
                <div>
                    <button
                        type="button"
                        className="p-3 rounded-full bg-[#65dc7f] border-4 border-white shadow-xl shadow-[#5e59e64b]"
                    >
                        <FiEdit3 className="text-white text-3xl" />
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

            <div className="ml-20">
                <div>
                    <h1 className="font-bold text-3xl">Skills</h1>
                    <p
                        className="mt-5 cl
                    text-lg"
                    >
                        Please Select the skills you want to have in your talents !
                    </p>
                </div>
                {/* select option */}
                <div className="mt-10">
                    <div>
                        <div className="lg:flex  gap-10  justify-center ">
                            <div className="group border-2  rounded-md px-3 py-2 inline-block border-dashed border-[#0ea5e9] lg:pr-10">
                                <label htmlFor="bio" className="text-sm block font-medium">
                                    Select Domains
                                </label>
                                <select
                                    onChange={handleChange}
                                    className="select lg:w-[250px]  mt-1 w-full font-semibold border 
                                             border-gray-400 rounded-md "
                                >
                                    <option value="">{skillValue || 'Choose'}</option>
                                    {jData?.domains?.map((D) => (
                                        <option
                                            onClick={handleClick}
                                            disabled={disableOption}
                                            value={D}
                                            key={Math.random()}
                                        >
                                            {D}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {selectedValues?.length ? (
                                <div className="flex flex-wrap border-dashed border-[#0ea5e9] px-2 py-4 gap-3 lg:w-[630px] w-full border h-auto bg-[#F0F9FF]">
                                    {selectedValues?.map((value) => (
                                        <div key={Math.random()}>
                                            <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                                                <p>{value}</p>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedValues(
                                                            selectedValues.filter(
                                                                (val) => val !== value
                                                            )
                                                        );
                                                        // buttonHandle();
                                                    }}
                                                >
                                                    <RxCross2 className="font-bold text-sm" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center px-2 py-4 gap-3  lg:w-[630px] w-full border-2 border-[#0ea5e9] border-dashed h-auto bg-[#F0F9FF]">
                                    <div className="font-semibold ">No Skills added yet...</div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center mt-5">
                            {domainError && (
                                <p className="text-white px-5 text-sm py-1 rounded-full bg-red-700 font-semibold ">
                                    {domainError}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between px-16">
                <button
                    className="bg-[#f8f1ff] shadow-inner px-5 py-2 hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
                    type="button"
                >
                    Prev{' '}
                </button>
                <button
                    className="bg-[#f8f1ff] shadow-inner px-5 py-2 hover:bg-[#13d1ff] hover:text-white duration-300 ease-in rounded-lg text-[#61c1ff] text-lg"
                    type="button"
                >
                    Next{' '}
                </button>
            </div>
            {/* 
            <div className="w-full  px-2 py-16 sm:px-0">
                <Tab.Group>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts) => (
                            <Tab.Panel
                                key={Math.random()}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative rounded-md p-3 hover:bg-gray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>

                                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                <li>{post.date}</li>
                                                <li>&middot;</li>
                                                <li>{post.commentCount} comments</li>
                                                <li>&middot;</li>
                                                <li>{post.shareCount} shares</li>
                                            </ul>

                                            <a
                                                href="/"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                            >
                                                shafin
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                </Tab.Group>
            </div> */}
        </div>
    );
};

export default TalentProcess;
