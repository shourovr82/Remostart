import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiChevronLeft } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const StartupInternshipJobPost = () => {
  //! !!!! All Functional is ok . You now work with only onSubmit function

  const NumberOfYears = [1, 2, 3, 4, 5];
  const Years = [2010, 2020, 2030];

  // Data for skills
  const data = [
    {
      value: 'Mern Stack',
      label: 'Mern Stack',
    },
    {
      value: 'Tailwind CSS',
      label: 'Tailwind CSS',
    },
    {
      value: 'Javascript',
      label: 'Javascript',
    },
    {
      value: 'Node JS',
      label: 'Node JS',
    },
  ];
  // State Of Disable Domains
  const [disableOption, setDisable] = useState(false);

  // ? Domain Function start

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedValues([...selectedValues, selectedOptions]);
  };
  //! Domain function is ended
  const buttonHandle = () => {
    setDisable(false);
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const PostData = (d) => {};

  return (
    <div>
      <div className="flex gap-4 items-center">
        <Link to="/">
          {' '}
          <BiChevronLeft className="border p-1 text-4xl rounded border-black" />
        </Link>
        <p className="text-2xl font-semibold">Internship</p>
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
            placeholder="Eg. Remostarts"
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
              {NumberOfYears.map((D) => (
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
              {Years.map((D) => (
                <option key={Math.random()}>{D}</option>
              ))}
            </select>
          </div>

          {/* Skill Section  */}

          <div>
            <div className="space-y-1 text-sm w-[300px]">
              <label className="block font-semibold text-gray-900">Skills Required</label>
              <div className=" lg:w-[50rm]  pr-2 rounded-md  text-gray-900 justify-between flex items-center">
                <select
                  onChange={handleChange}
                  className="select lg:w-[300px]  mt-1 w-full font-semibold border 
                     border-gray-400 rounded-md "
                >
                  <option value="Domains" hidden>
                    Domains
                  </option>
                  {data.map((D, i) => (
                    <option
                      onClick={handleChange}
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
                <div className="grid grid-cols-2 px-2 py-4 gap-3 mt-8  w-full border h-auto bg-[#F0F9FF]">
                  {selectedValues.map((value, index) => (
                    <div key={Math.random()}>
                      <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                        <p>{value}</p>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedValues(selectedValues.filter((val) => val !== value));
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
            placeholder="500"
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
              className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
            />
            <p className="pt-2">
              {errors.StartingDate && (
                <span className="text-red-400 ">
                  {errors.StartingDate?.type === 'required' && 'Please provide your Starting Date'}
                </span>
              )}
            </p>
          </div>
          <div className="space-y-1 mt-5 text-sm">
            <label className="block font-semibold text-gray-900">Ending Date </label>
            <input
              type="date"
              name="EndingDate"
              {...register('EndingDate', {
                required: true,
              })}
              id="ApplyBefore"
              className="lg:w-[330px] w-full px-4 py-3 rounded-md border border-[#BCBCBC]  text-gray-900 "
            />
            <p className="pt-2">
              {errors.EndingDate && (
                <span className="text-red-400 ">
                  {errors.EndingDate?.type === 'required' && 'Please provide your Ending Date'}
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
            id="ApplyBefore"
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
          Post Private Job
        </button>
      </form>
    </div>
  );
};

export default StartupInternshipJobPost;
