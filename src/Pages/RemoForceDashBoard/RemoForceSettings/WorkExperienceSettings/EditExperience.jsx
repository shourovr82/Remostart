import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function EditExperience({ editData, setEditMode, setWorkExperienceLists, workExperienceLists }) {
  const [padding, setPadding] = useState(false);
  // get values
  const { companyName, endingDate, position, startingDate, type } = editData || {};

  // Initialize use form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  // typeLists
  const typeLists = [
    { name: 'Internship' },
    { name: 'Full Time' },
    { name: 'Contract' },
    { name: 'Remote' },
  ];

  const handleUpdate = (data) => {
    const getWorkExperience = workExperienceLists.filter(
      (singleWorkExperience) => singleWorkExperience.id !== editData.id
    );
    const updatedData = {
      id: editData?.id,
      ...data,
    };
    const updatedArr = [...getWorkExperience, updatedData];
    setWorkExperienceLists(updatedArr);
    setEditMode(false);
  };

  return (
    <section className="w-full bg-[#f4fbff] mt-4 ">
      {/* Add Experience section  starts */}
      <div className="bg-lightblue w-full flex flex-col p-[0.5rem]">
        <div className="flex flex-nowrap justify-between items-center border-b-headers  p-2 mb-4">
          <h1 className="text-[#19A5FF] text-start font-sans  border-b-2 border-[#19A5FF] font-semibold text-2xl ">
            Edit Work Experience
          </h1>
        </div>

        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-3 w-full">
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
                defaultValue={companyName}
                type="text"
                placeholder="Sample Name"
                className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200"
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
                defaultValue={position}
                type="text"
                placeholder="Manager, C.T.O, assistant Engineer"
                className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200"
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
                defaultValue={type}
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
                <span className="text-red-400 ">{errors.type && <span>Type is Needed!</span>}</span>
              </p>
            </div>
            {/* Dates Beginnings */}
            <div
              className={` w-[90%] flex justify-between items-center ${padding && 'pb-[18rem]'}`}
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
                  className="p-[0.65rem] w-full focus:ring  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90"
                  defaultValue={startingDate?.slice(0, 10)}
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
                  className="p-[0.65rem] w-full focus:ring  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90"
                  defaultValue={endingDate?.slice(0, 10)}
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
          <div className="flex">
            <button
              className="my-4 bg-[#A5DBFF] py-3 px-6 font-sans text-center ml-[1rem] border-[2px] border-[#4DB9FF] rounded-md text-black"
              type="submit"
            >
              UPDATE
            </button>
            <button
              className="my-4 bg-black py-3 px-6 font-sans text-center ml-[1rem]  rounded-md text-white"
              type="button"
              onClick={() => setEditMode(false)}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditExperience;
