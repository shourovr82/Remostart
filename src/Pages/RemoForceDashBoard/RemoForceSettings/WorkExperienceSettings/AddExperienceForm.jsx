import React from 'react';
import { useForm } from 'react-hook-form';

function AddExperienceForm({ setWorkExperienceLists, setBool, workExperienceLists }) {
    // Initialize use form hook
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    // typeLists
    const typeLists = [
        { name: 'Internship' },
        { name: 'Full Time' },
        { name: 'Contract' },
        { name: 'Remote' },
    ];
    const httpAddWorkExperience = (data) => {
        if (data) {
            const experienceData = {
                ...data,
                id: Math.random(),
            };
            setWorkExperienceLists([...workExperienceLists, experienceData]);
            reset();
            setBool(false);
        }
    };

    return (
        <form className="space-y-3 w-full" onSubmit={handleSubmit(httpAddWorkExperience)}>
          
            {/* Add Experience Beginnings */}
            <div className=" w-[70%] space-y-8 pt-4">
                {/* Company Name Beginnings */}
                <div className="w-[75%] space-y-1">
                    <label htmlFor="age" className="text-sm font-medium">
                        Company Name
                    </label>
                    <input
                        id="full_name"
                        {...register('companyName', {
                            required: true,
                        })}
                        type="text"
                        placeholder="Sample Name"
                        className="w-full border p-3 border-gray-200 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                    <p className="pt-1">
                        <span className="text-red-400 ">
                            {errors.companyName && <span>Company Name is Needed!</span>}
                        </span>
                    </p>
                </div>
                {/* Position Beginnings */}
                <div className="w-[75%]   space-y-1">
                    <label htmlFor="age" className="text-sm font-medium">
                        Position
                    </label>
                    <input
                        id="full_name"
                        {...register('position', {
                            required: true,
                        })}
                        type="text"
                        placeholder="Manager, C.T.O, assistant Engineer"
                        className="w-full border p-3 border-gray-200 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                    />
                    <p className="pt-1">
                        <span className="text-red-400 ">
                            {errors.position && <span>Position is Needed!</span>}
                        </span>
                    </p>
                </div>
                {/* Type Beginnings */}
                <div className="w-[45%]   space-y-1">
                    <label htmlFor="Type" className="text-sm font-medium">
                        Type
                    </label>
                    <select
                        name=""
                        id=""
                        className="select w-full mt-3"
                        {...register('type', { required: true })}
                    >
                        <option value="Choose" className="hidden">
                            Choose
                        </option>
                        {typeLists.map((item) => (
                            <option
                                value={item.name.toLowerCase()}
                                key={Math.random()}
                                className="text-[18px]"
                            >
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <p className="pt-1">
                        <span className="text-red-400 ">
                            {errors.type && <span>Type is Needed!</span>}
                        </span>
                    </p>
                </div>
                {/* Dates Beginnings */}
                <div className={` w-[90%] flex justify-between items-center `}>
                    {/* Start Date Beginnings */}
                    <div className="w-full lg:w-[40%] flex flex-col space-y-1">
                        <label htmlFor="birthDate" className="text-sm font-medium">
                            Starting Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            {...register('startingDate', {
                                required: true,
                            })}
                            className="p-[0.65rem] border-gray-200 w-full focus:ring  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 "
                        />
                        <p className="pt-1">
                            <span className="text-red-400 ">
                                {errors.startingDate && <span>Starting Date is Needed!</span>}
                            </span>
                        </p>
                    </div>
                    {/* End Date Beginnings */}
                    <div className="w-full lg:w-[40%] flex flex-col space-y-1">
                        <label htmlFor="birthDate" className="text-sm font-medium">
                            Ending Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            {...register('endingDate', {
                                required: true,
                            })}
                            className="p-[0.65rem] border-gray-200 w-full focus:ring  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 "
                        />
                        <p className="pt-1">
                            <span className="text-red-400 ">
                                {errors.endingDate && <span>Ending Date is Needed!</span>}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <button
                className="my-4 bg-[#A5DBFF] py-3 px-6 font-sans text-center ml-[1rem] border-[2px] border-[#4DB9FF] rounded-md text-black"
                type="submit"
            >
                ADD
            </button>
        </form>
    );
}

export default AddExperienceForm;
