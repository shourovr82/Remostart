import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditProject = ({ editData, setProjectsLists, projectsLists, setEditMode }) => {
  const [padding, setPadding] = useState(false);
  // get values
  const { projectName, endingDate, projectLink, projectDescription, startingDate, projectType } =
    editData || {};

  // Initialize use form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  // typeLists
  const typeLists = [
    { name: 'JAVA' },
    { name: 'Python' },
    { name: 'Web Development' },
    { name: 'Android' },
  ];

  const handleUpdate = (data) => {
    const getProject = projectsLists.filter((singleProject) => singleProject.id !== editData.id);
    const updatedData = {
      id: editData?.id,
      ...data,
    };
    const updatedArr = [...getProject, updatedData];
    setProjectsLists(updatedArr);
    setEditMode(false);
  };

  return (
    <section className="w-full bg-[#f4fbff] mt-4 ">
      {/* Add Project section  starts */}
      <div className="bg-lightblue w-full flex flex-col p-[0.5rem]">
        <div className="flex flex-nowrap justify-between items-center border-b-headers  p-2 mb-4">
          <h1 className="text-[#19A5FF] text-start font-sans  border-b-2 border-[#19A5FF] font-semibold text-2xl ">
            Edit Project
          </h1>
        </div>

        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-3 w-full">
          <p className="w-full text-[#b0b1b2] text-sm font-sans">Edit Project</p>
          {/* Add Project Beginnings */}
          <div className=" w-[70%] space-y-8 pt-4">
            {/* Project Name Beginnings */}
            <div className="w-[75%] space-y-1">
              <label htmlFor="age" className="text-sm font-medium">
                Project Name
              </label>
              <input
                id="full_name"
                {...register('projectName', {
                  required: 'Project Name is Required',
                })}
                defaultValue={projectName}
                type="text"
                placeholder="Sample Name"
                className="w-full border p-md rounded-md   border-gray-200"
              />
              <p className="pt-1">
                <span className="text-red-400 ">
                  {errors.projectName && errors?.projectName?.message}
                </span>
              </p>
            </div>
            {/* Project Link Beginnings */}
            <div className="w-[75%]   space-y-1">
              <label htmlFor="projectLink" className="text-sm font-medium">
                Project Link
              </label>
              <input
                id="projectLink"
                {...register('projectLink', {
                  required: 'Project Link is Required',
                  // pattern: {
                  //     value: /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/,
                  //     message: 'Url is not valid',
                  // },
                })}
                defaultValue={projectLink}
                type="text"
                placeholder="https://"
                className="w-full border p-3 border-gray-200 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#3b82f6] "
              />
              <p className="pt-1">
                <span className="text-red-400 ">
                  {errors.projectLink && <span>{errors?.projectLink?.message}</span>}
                </span>
              </p>
            </div>
            {/* Description Beginnings */}
            <div className="w-[75%]   space-y-1">
              <label htmlFor="age" className="text-sm font-medium">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                {...register('projectDescription', {
                  required: 'Project Description is Required',
                  minLength: {
                    value: 3,
                    message: 'Min 3 characters Required',
                  },
                })}
                defaultValue={projectDescription}
                type="text"
                placeholder="Your Project Description"
                className="w-full textarea border p-3 border-gray-200 rounded-md "
              />

              <p className="pt-1">
                <span className="text-red-400 ">
                  {errors.projectDescription && errors?.projectDescription?.message}
                </span>
              </p>
            </div>
            {/* Type Beginnings */}
            <div className="w-[45%]   space-y-1">
              <label htmlFor="projectType" className="text-sm font-medium">
                Type
              </label>
              <select
                name="projectType"
                id="projectType"
                className="select w-full mt-3"
                {...register('projectType', {
                  required: 'Project Type is Required',
                })}
                defaultValue={projectType}
              >
                <option defaultValue={projectType} className="hidden">
                  {projectType || 'Choose'}
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
                  {errors.projectType && errors?.projectType?.message}
                </span>
              </p>
            </div>
            {/* Dates Beginnings */}
            <div className="w-[90%] flex gap-2 justify-between items-center">
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
                  className="p-[0.65rem] w-full   rounded-md border border-[#e5e7eb]  "
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
                  className="p-[0.65rem] w-full   rounded-md border border-[#e5e7eb]  "
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
};

export default EditProject;
