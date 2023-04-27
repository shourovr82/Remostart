import React from 'react';
import { useForm } from 'react-hook-form';
// import RemoForceSettingsItems from '../../../../Layout/RemoForceSettingsItems';

function EditEducation({
  setEditEducationMode,
  allEducationLists,
  editEducationItem,
  setAllEducationLists,
}) {
  const { id, fieldOfStudy, school, startingDate, endingDate } = editEducationItem || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const httpAddEducationExperience = (data) => {
    const getEducation = allEducationLists.filter(
      (singleEducation) => singleEducation.id !== editEducationItem.id
    );
    const updatedData = {
      id: editEducationItem?.id,
      ...data,
    };
    const updatedArr = [...getEducation, updatedData];
    setAllEducationLists(updatedArr);
    setEditEducationMode(false);
  };
  return (
    <section className="w-full bg-[#f4fbff] rounded-md mt-4 ">
      {/* Experience section  starts */}
      <hr className="w-full bg-hr my-3" />
      <div className="bg-lightblue lg:w-[70%] flex flex-col p-[0.5rem] rounded-md">
        {/* Add Experience section  starts */}
        <div className="bg-lightblue w-full flex flex-col p-[0.5rem]">
          <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[14rem] p-2 mb-4">
            <h1 className="text-headers text-start font-sans font-semibold text-xl w-[89%]">
              Edit Education
            </h1>
          </div>
          <form className="space-y-3 w-full" onSubmit={handleSubmit(httpAddEducationExperience)}>
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
                  defaultValue={school}
                  placeholder="Sample Name"
                  className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200 "
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
                  defaultValue={fieldOfStudy}
                  type="text"
                  placeholder="Manager, C.T.O, assistant Engineer"
                  className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200 "
                />
                <p className="pt-1">
                  <span className="text-red-400 ">
                    {errors.fieldOfStudy && <span>Field of Study is Needed!</span>}
                  </span>
                </p>
              </div>
              {/* Dates Beginnings */}
              <div
                className={` w-full lg:w-[90%] gap-2 lg:gap-0 lg:flex justify-between items-center`}
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
                    defaultValue={startingDate?.slice(0, 10)}
                    {...register('startingDate', {
                      required: true,
                    })}
                    className="p-[0.65rem] w-full focus:ring  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 border-gray-200 "
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
                    defaultValue={endingDate?.slice(0, 10)}
                    className="p-[0.65rem] w-full focus:ring  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 border-gray-200 "
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
              Edit
            </button>
            <button
              onClick={() => setEditEducationMode(false)}
              className="my-4 bg-black text-white py-3 px-6 font-sans text-center ml-[1rem] border-[2px]  rounded-md "
              type="button"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default EditEducation;
