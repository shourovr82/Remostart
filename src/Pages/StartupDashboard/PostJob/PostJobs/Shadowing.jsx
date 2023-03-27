import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiChevronLeft, BiPlus } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import currencyIcon from '../../../../Assets/Dashboard/currency.png';

const Shadowing = () => {
    // handle skill input
    const [tag, setTag] = useState('');
    const [skills, setSkills] = useState([]);

    // State Of Disable Domains
    const [disableOption, setDisable] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);

    // localStorage data
    const storedJob = [{}];

    // Domain Function start

    const domainData = [
        {
            value: 'WebDevelopment',
            label: 'WebDevelopment',
        },
        {
            value: 'BlockChain',
            label: 'BlockChain',
        },
        {
            value: 'Content Writing',
            label: 'Content Writing',
        },
    ];

    const handleChange = (e) => {
        const selectedOptions = e.target.selectedOptions[0].innerHTML;
        setSelectedValues([...selectedValues, selectedOptions]);
    };

    // Disable  Domains
    const handleClick = () => {
        setDisable(true);
    };
    // Cross  Button Domains
    const buttonHandle = () => {
        setDisable(false);
    };

    // domains function end

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log('shadowing');
        console.log(data, skills);
    };

    // handle skill input button

    const changeHandler = (e) => {
        setTag(e.target.value);
    };
    const handleTags = () => {
        setSkills([...skills, tag]);
        setTag('');
    };

    return (
        <div>
            <div className="flex gap-4 items-center">
                <Link to="/">
                    <BiChevronLeft className="border p-1 text-4xl rounded border-black" />
                </Link>
                <p className="text-2xl font-semibold">Shadowing</p>
            </div>
            <p className="border-[#BCBCBC] bg-[#BCBCBC] border mt-2" />
            <p className="text-gray-400 mt-6 lg:mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
            </p>

            {/* Start Form  */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">Job Title</label>
                    <input
                        type="Text"
                        name="JobTitle"
                        {...register('JobTitle', {
                            required: true,
                        })}
                        id="JobTitle"
                        placeholder={storedJob?.JobTitle || 'Job Title'}
                        className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.JobTitle && (
                            <span className="text-red-400 ">
                                {errors.JobTitle?.type === 'required' &&
                                    'Please provide your Job Title'}
                            </span>
                        )}
                    </p>
                </div>

                {/* Input Job Description  */}

                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">Job Description</label>
                    <textarea
                        type="Text"
                        name="description"
                        {...register('description', {
                            required: true,
                        })}
                        id="description"
                        placeholder={
                            storedJob?.description ||
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                        }
                        className="lg:w-3/4 h-16 w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.description && (
                            <span className="text-red-400 ">
                                {errors.description?.type === 'required' &&
                                    'Please provide your Job Description'}
                            </span>
                        )}
                    </p>
                </div>

                {/* Section Of Skills Required */}

                <div className="mt-5">
                    <label className="block font-semibold text-gray-900">
                        Shadowing Requirement
                    </label>
                    <p className="border-[#BCBCBC] lg:w-9/12 bg-[#BCBCBC] border mt-2" />
                </div>

                {/* Skill Section  */}
                <div className="mt-5 lg:flex items-start justify-between">
                    <div className="space-y-1 text-sm w-[300px]">
                        <label className="block font-semibold text-gray-900">Skills Required</label>
                        <div className=" lg:w-[50rm]  pr-2 rounded-md border border-[#BCBCBC]  text-gray-900 justify-between flex items-center">
                            <input
                                type="text"
                                name="inputSkill"
                                value={tag}
                                onChange={changeHandler}
                                placeholder="Eg. remostarts"
                                className="px-4 py-3 focus:outline-none outline-none w-full focus:bg-transparent"
                            />
                            <button onClick={handleTags} type="button">
                                <BiPlus className="border p-1 text-xl" />
                            </button>
                        </div>

                        {skills.length ? (
                            <div className="grid grid-cols-2 px-2 py-4 gap-3 mt-8 w-[300px] border h-auto bg-[#F0F9FF]">
                                {skills.map((value, index) => (
                                    <div key={Math.random()}>
                                        <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                                            <p>{value}</p>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setSkills(
                                                        skills.filter((val) => val !== value)
                                                    );
                                                }}
                                            >
                                                <RxCross2 className="font-bold text-sm" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No skills selected</p>
                        )}

                        <p className="pt-2">
                            {errors.Skills && (
                                <span className="text-red-400 ">
                                    {errors.Skills?.type === 'required' &&
                                        'Please provide your Skills'}
                                </span>
                            )}
                        </p>
                    </div>
                </div>

                {/* Select Domains  */}

                <div className="lg:flex flex-col justify-center ">
                    <div className="group w-full inline-block mt-6  lg:pr-10">
                        <label htmlFor="bio" className="text-sm block font-medium">
                            Domain
                        </label>
                        <select
                            onChange={handleChange}
                            className="p-2 lg:w-[120px]  mt-1 w-full font-semibold border border-gray-400 rounded-md "
                        >
                            <option value="Domains" hidden className="px-2">
                                Choose
                            </option>
                            {domainData.map((D, i) => (
                                <option
                                    onClick={handleClick}
                                    disabled={disableOption}
                                    value={D.label}
                                    key={Math.random()}
                                >
                                    {D.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedValues.length ? (
                        <div className="grid grid-cols-2 px-2 py-4 gap-3 mt-2 lg:w-2/4 w-full border h-auto bg-[#F0F9FF]">
                            {selectedValues.map((value, index) => (
                                <div key={Math.random()}>
                                    <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                                        <p>{value}</p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedValues(
                                                    selectedValues.filter((val) => val !== value)
                                                );
                                                buttonHandle();
                                            }}
                                        >
                                            <RxCross2 className="font-bold text-sm" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                {/* Curriculum */}

                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">
                        Curriculum{' '}
                        <span className="font-normal text-gray-500">(Minimum 100 words)</span>
                    </label>
                    <textarea
                        type="Text"
                        name="curriculum"
                        {...register('curriculum', {
                            required: true,
                        })}
                        id="curriculum"
                        placeholder={
                            storedJob?.curriculum ||
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
                        }
                        className="lg:w-3/4 h-16 w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.curriculum && (
                            <span className="text-red-400 ">
                                {errors.curriculum?.type === 'required' &&
                                    'Please provide your curriculum'}
                            </span>
                        )}
                    </p>
                </div>

                {/* Compensation  */}

                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">Compensation</label>
                    <div className="flex justify-between items-center w-full md:w-1/2  rounded-md border border-[#BCBCBC focus:outline-none] px-4 py-3">
                        <input
                            type="number"
                            name="Salary"
                            {...register('Salary', {
                                required: true,
                            })}
                            id="Salary"
                            placeholder={storedJob?.Salary || 'Compensation Range'}
                            className="w-full text-gray-900 focus:outline-none"
                        />
                        <img src={currencyIcon} alt="" />
                    </div>
                    <p className="pt-2">
                        {errors.Salary && (
                            <span className="text-red-400 ">
                                {errors.Salary?.type === 'required' && 'Please provide  Salary'}
                            </span>
                        )}
                    </p>
                </div>

                <h1 className="font-bold my-2">Shadowing Duration</h1>
                {/* Date Section  */}

                <div className="flex justify-between ">
                    <div className="space-y-1 mt-5 text-sm">
                        <label className="block font-semibold text-gray-900">Starting Date</label>
                        <input
                            type="date"
                            name="StartingDate"
                            {...register('StartingDate', {
                                required: true,
                            })}
                            id="StartingDate"
                            defaultValue={storedJob && storedJob.StartingDate}
                            className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                        />
                        <p className="pt-2">
                            {errors.StartingDate && (
                                <span className="text-red-400 ">
                                    {errors.StartingDate?.type === 'required' &&
                                        'Please provide your Starting Date'}
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="space-y-1 mt-5 text-sm">
                        <label className="block font-semibold text-gray-900">Ending Date</label>
                        <input
                            type="date"
                            name="EndingDate"
                            {...register('EndingDate', {
                                required: true,
                            })}
                            defaultValue={storedJob && storedJob.EndingDate}
                            id="ApplyBefore"
                            className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                        />
                        <p className="pt-2">
                            {errors.EndingDate && (
                                <span className="text-red-400 ">
                                    {errors.EndingDate?.type === 'required' &&
                                        'Please provide your Ending Date'}
                                </span>
                            )}
                        </p>
                    </div>
                </div>

                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">Apply Before</label>
                    <input
                        type="date"
                        name="ApplyBefore"
                        {...register('ApplyBefore', {
                            required: true,
                        })}
                        defaultValue={storedJob && storedJob.ApplyBefore}
                        id="ApplyBefore"
                        className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.ApplyBefore && (
                            <span className="text-red-400 ">
                                {errors.ApplyBefore?.type === 'required' &&
                                    'Please provide your Apply Before'}
                            </span>
                        )}
                    </p>
                </div>
                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">Location </label>
                    <input
                        type="Text"
                        name="ApplyBefore"
                        {...register('Location', {
                            required: true,
                        })}
                        id="ApplyBefore"
                        placeholder={storedJob?.Location || 'Remote'}
                        className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.Location && (
                            <span className="text-red-400 ">
                                {errors.Location?.type === 'required' &&
                                    'Please provide your Job Title'}
                            </span>
                        )}
                    </p>
                </div>
                <p className="text-2xl">Add Mentor</p>
                <p className="border bg-gray-700 border-gray-500 w-1/3" />

                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">Mentor Name</label>
                    <input
                        type="Text"
                        name="MentorName"
                        {...register('MentorName', {
                            required: true,
                        })}
                        placeholder={storedJob?.MentorName || 'Sample input'}
                        id="MentorName"
                        className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.MentorName && (
                            <span className="text-red-400 ">
                                {errors.MentorName?.type === 'required' &&
                                    'Please provide your mentor name'}
                            </span>
                        )}
                    </p>
                </div>

                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">Add Mentor Bio</label>
                    <input
                        type="Text"
                        name="AddMentorBio"
                        {...register('AddMentorBio', {
                            required: true,
                        })}
                        id="AddMentorBio"
                        placeholder={storedJob?.AddMentorBio || 'Sample input'}
                        className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.AddMentorBio && (
                            <span className="text-red-400 ">
                                {errors.AddMentorBio?.type === 'required' &&
                                    'Please provide your Add Mentor Bio'}
                            </span>
                        )}
                    </p>
                </div>
                <div className="space-y-1 mt-5 text-sm">
                    <label className="block font-semibold text-gray-900">LinkedIn URL</label>
                    <input
                        type="Text"
                        name="LinkedInURL"
                        {...register('LinkedInURL', {
                            required: true,
                            pattern:
                                /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/,
                        })}
                        id="LinkedInURL"
                        placeholder={storedJob?.LinkedInURL || 'Sample input'}
                        className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
                    />
                    <p className="pt-2">
                        {errors.LinkedInURL && (
                            <span className="text-red-400 ">
                                {errors.LinkedInURL?.type === 'required' &&
                                    'Please provide a valid Linkedin URL'}
                            </span>
                        )}
                    </p>
                </div>
                {/* Submit Button  */}

                <button
                    type="submit"
                    className="px-6 py-3 mt-10 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
                >
                    Post Shadowing
                </button>
            </form>
        </div>
    );
};

export default Shadowing;
