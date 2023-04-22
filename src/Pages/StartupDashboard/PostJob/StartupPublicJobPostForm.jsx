import React from 'react';
import { useForm } from 'react-hook-form';
import { BiChevronLeft, BiPlus } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const StartupPublicJobPostForm = () => {
  const NumberOfYears = [1, 2, 3, 4, 5];
  const Years = [2010, 2020, 2030];
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const PostData = (data) => {};
  return (
    <div>
      <div className="flex gap-4 items-center">
        <Link to="/">
          {' '}
          <BiChevronLeft className="border p-1 text-4xl rounded border-black" />
        </Link>
        <p className="text-2xl font-semibold">Public Job</p>
      </div>
      <p className="border-[#BCBCBC] bg-[#BCBCBC] border mt-2" />
      <p className="text-gray-400 mt-6 lg:mt-1">Description</p>

      {/* Start Form  */}

      <form onSubmit={handleSubmit(PostData)}>
        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Job Title</label>
          <input
            type="Text"
            name="ApplyBefore"
            {...register('JobTitle', {
              required: true,
            })}
            id="ApplyBefore"
            placeholder="Eg. remostarts"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.JobTitle && (
              <span className="text-red-400 ">
                {errors.JobTitle?.type === 'required' && 'Please provide your Job Title'}
              </span>
            )}
          </p>
        </div>

        {/* Input Job Description  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Job Description</label>
          <textarea
            type="Text"
            name="JobDescription"
            {...register('JobDescription', {
              required: true,
            })}
            id="JobDescription"
            placeholder="Description"
            className="lg:w-3/4 h-16 w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.JobDescription && (
              <span className="text-red-400 ">
                {errors.JobDescription?.type === 'required' &&
                  'Please provide your Job Description'}
              </span>
            )}
          </p>
        </div>

        {/* Section Of Skills Required */}

        <div className="mt-5">
          <label className="block font-semibold text-gray-900">Skills Required</label>
          <p className="border-[#BCBCBC] lg:w-9/12 bg-[#BCBCBC] border mt-2" />
        </div>

        <div className="mt-5 lg:flex items-start justify-between">
          <div className="">
            <label htmlFor="">Years</label>
            <select
              {...register('NumberOfYears', {
                required: true,
              })}
              className="select lg:w-[67px]  mt-1 w-full block font-semibold border 
                     border-gray-400 rounded-md "
            >
              <option hidden>0</option>
              {NumberOfYears.map((D, i) => (
                <option key={Math.random()}>{D}</option>
              ))}
            </select>
            <p className="pt-2">
              {errors.NumberOfYears && (
                <span className="text-red-400 ">
                  {errors.NumberOfYears?.type === 'required' &&
                    'Please provide your Number Of Years'}
                </span>
              )}
            </p>
          </div>

          {/* Experience Year Input Field */}

          <div>
            <label className="block font-semibold text-gray-900">Experience (Optional)</label>
            <select
              {...register('Experience', {})}
              className="select lg:w-[100px] block  mt-1 w-full font-semibold border 
                     border-gray-400 rounded-md "
            >
              <option hidden>Years</option>
              {Years.map((D, i) => (
                <option key={Math.random()}>{D}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="space-y-1 text-sm w-[300px]">
              <label className="block font-semibold text-gray-900">Skills Required</label>
              <div className=" lg:w-[50rm]  pr-2 rounded-md border border-[#BCBCBC]  text-gray-900 justify-between flex items-center">
                <input
                  type="Text"
                  name="Skills"
                  {...register('Skills', {
                    required: true,
                  })}
                  id="Skills"
                  placeholder="Eg. remostarts"
                  className="px-4 py-3 focus:outline-none"
                />
                <button type="button">
                  <BiPlus className="border p-1 text-xl" />{' '}
                </button>
              </div>
              <div className="grid grid-cols-2 px-2 py-4 gap-3 mt-8  w-full border h-auto bg-[#F0F9FF]">
                <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                  <p>MERN Stack</p>
                  <button type="button">
                    <RxCross2 className="font-bold text-sm" />
                  </button>
                </div>
                <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center   ">
                  <p>Front-End</p>
                  <button type="button">
                    <RxCross2 className="font-bold text-sm" />
                  </button>
                </div>
                <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                  <p>Blockchain</p>
                  <button type="button">
                    <RxCross2 className="font-bold text-sm" />
                  </button>
                </div>
              </div>
              <p className="pt-2">
                {errors.Skills && (
                  <span className="text-red-400 ">
                    {errors.Skills?.type === 'required' && 'Please provide your Skills'}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        <p className="border bg-gray-500 mt-6" />

        {/* Input Location  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Location</label>
          <input
            type="Text"
            name="Location"
            {...register('Location', {
              required: true,
            })}
            id="Location"
            placeholder="Eg. remostarts"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.Location && (
              <span className="text-red-400 ">
                {errors.Location?.type === 'required' && 'Please provide your Location'}
              </span>
            )}
          </p>
        </div>

        {/* Input Salary  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Salary</label>
          <input
            type="number"
            name="Salary"
            {...register('Salary', {
              required: true,
            })}
            id="Salary"
            placeholder="Eg. remostarts"
            className="lg:w-[520px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.Salary && (
              <span className="text-red-400 ">
                {errors.Salary?.type === 'required' && 'Please provide  Salary'}
              </span>
            )}
          </p>
        </div>

        {/* Input Apply Before  */}

        <div className="space-y-1 mt-5 text-sm">
          <label className="block font-semibold text-gray-900">Apply Before</label>
          <input
            type="date"
            name="ApplyBefore"
            {...register('ApplyBefore', {
              required: true,
            })}
            id="ApplyBefore"
            placeholder="Eg. remostarts"
            className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
          />
          <p className="pt-2">
            {errors.ApplyBefore && (
              <span className="text-red-400 ">
                {errors.ApplyBefore?.type === 'required' && 'Please provide your Apply Before'}
              </span>
            )}
          </p>
        </div>

        {/* Submit Button  */}

        <button
          type="submit"
          className="px-6 py-3 mt-10 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
        >
          Post Public Job
        </button>
      </form>
    </div>
  );
};

export default StartupPublicJobPostForm;
