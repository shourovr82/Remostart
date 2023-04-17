import React from 'react';
import { useForm } from 'react-hook-form';

const TalentProcessSkillsAndDescription = ({ selectedDetails, setSelectedDetails }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const handleSubmitDetails = (data) => {
    setSelectedDetails({ ...selectedDetails, ...data });
  };
  return (
    <div className="lg:ml-20">
      {/* title */}
      <form onChange={handleSubmit(handleSubmitDetails)}>
        <div>
          <div>
            <h1 className="font-bold text-3xl">Title</h1>
          </div>
          <div className="border-dashed border-[#0EA5E9] border-[2px] rounded-md my-2 lg:w-4/5">
            <input
              {...register('title')}
              type="text"
              defaultValue={selectedDetails?.title}
              className="w-full rounded-md border-transparent focus:ring-0  py-3   bg-transparent "
              placeholder="Please enter the title for your talent request!."
            />
          </div>
          {errors?.title?.message && (
            <p className="text-sm w-full md:w-3/12 lg:w-[10%] lg:text-center bg-red-600 text-white px-1 py-0.5 rounded-md">
              {errors?.title?.message}
            </p>
          )}
        </div>
        {/* description */}
        <div className="mt-5">
          <h1 className="font-bold text-3xl">Description</h1>
        </div>
        <div className="border-dashed border-[#0EA5E9] border-[2px] rounded-md my-2 lg:w-4/5">
          <textarea
            {...register('description')}
            defaultValue={selectedDetails?.description}
            type="textarea"
            className="w-full  rounded-md border-transparent focus:ring-0  py-4   bg-transparent "
            placeholder="Please enter the description for your talent request!."
          />
        </div>
        {errors?.description?.message && (
          <p className="text-sm w-full md:w-3/12 lg:w-[12%] lg:text-center bg-red-600 text-white px-1 py-0.5 rounded-md">
            {errors?.description?.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default TalentProcessSkillsAndDescription;
