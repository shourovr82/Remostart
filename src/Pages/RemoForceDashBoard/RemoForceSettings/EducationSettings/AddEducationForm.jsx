import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddEducationForm({ allEducationLists, setAllEducationLists, setBool }) {
  // Initialize use form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const [padding, setPadding] = useState(false);

  const httpAddEducationExperience = (data) => {
    const newData = { ...data, id: Math.random() };
    setAllEducationLists([...allEducationLists, newData]);
    reset();
    setBool(false);
  };

  return (
    <form className="space-y-3  w-full" onSubmit={handleSubmit(httpAddEducationExperience)}>
      {/* Add Experience Beginnings */}
      <div className="w-full lg:w-[70%] space-y-3">
        {/*  School / University Beginnings */}
        <div className="'w-full lg:w-[70%] space-y-1">
          <label htmlFor="age" className="text-sm font-medium">
            School / University
          </label>
          <input
            id="full_name"
            {...register('school', {
              required: true,
            })}
            type="text"
            placeholder="Enter your School/University Name"
            className="w-full border p-3 rounded-md focus:ring  border-[#E5E5E5]  focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
          <p className="pt-1">
            <span className="text-red-400 ">
              {errors.school && <span>School / University is Needed!</span>}
            </span>
          </p>
        </div>
        {/*   Field of Study Beginnings */}
        <div className="'w-full lg:w-[70%]   space-y-1">
          <label htmlFor="age" className="text-sm font-medium">
            Field of Study
          </label>
          <input
            id="full_name"
            {...register('fieldOfStudy', {
              required: true,
            })}
            type="text"
            placeholder="Manager, C.T.O, assistant Engineer"
            className="w-full border p-3 rounded-md focus:ring  border-[#E5E5E5]  focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
          <p className="pt-1">
            <span className="text-red-400 ">
              {errors.fieldOfStudy && <span>Field of Study is Needed!</span>}
            </span>
          </p>
        </div>
        {/* Dates Beginnings */}
        <div
          className={` w-full lg:w-[90%] gap-2 lg:gap-0 lg:flex justify-between items-center pb-10`}
        >
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
              className="p-[0.65rem] w-full focus:ring border-[#E5E5E5]   rounded-md border focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90"
              onClick={() => setPadding(!padding)}
              onChange={() => setPadding(!padding)}
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
              className="p-[0.65rem] w-full focus:ring   border-[#E5E5E5]  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90"
              onClick={() => setPadding(!padding)}
              onChange={() => setPadding(!padding)}
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

export default AddEducationForm;
