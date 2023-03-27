import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


function AddProjectForm() {
 // Initialize use form hook
 const {
  register,
  handleSubmit,

  formState: { errors },
 } = useForm({
  mode: 'onChange',
 })

 const [padding, setPadding] = useState(false)

 const httpAddEducationExperience = (data) => {
  console.log(data)
 }

 return (
  <form className='space-y-3 w-full' onSubmit={handleSubmit(httpAddEducationExperience)}>
   <p className='w-full text-hr text-sm font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus</p>
   {/* Add Experience Beginnings */}
   <div className='w-full lg:w-[70%] space-y-3'>
    {/* Project Name  Beginnings */}
    <div className="'w-full lg:w-[70%] space-y-1">
     <label htmlFor="age" className="text-sm font-medium">
      Project Name
     </label>
     <input
      id="full_name"
      {...register('projectName', {
       required: true,
      })}
      type="text"
      placeholder="Sample Name"
      className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
     />
     <p className="pt-1">
      <span className="text-red-400 ">
       {errors.projectName && (
        <span>Project Name is Needed!</span>
       )}
      </span>
     </p>
    </div>
    {/*   Project Link Beginnings */}
    <div className="'w-full lg:w-[70%]   space-y-1">
     <label htmlFor="age" className="text-sm font-medium">
      Project Link
     </label>
     <input
      id="full_name"
      {...register('projectLink', {
       required: true,
      })}
      type="text"
      placeholder="Manager, C.T.O, assistant Engineer"
      className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
     />
     <p className="pt-1">
      <span className="text-red-400 ">
       {errors.projectLink && (
        <span>Project Link is Needed!</span>
       )}
      </span>
     </p>
    </div>
    {/*   Project Description Beginnings */}
    <div className="'w-full lg:w-[70%]   space-y-1">
     <label htmlFor="age" className="text-sm font-medium">
      Project Description
     </label>
     <input
      id="full_name"
      {...register('description', {
       required: true,
      })}
      type="text"
      placeholder="Manager, C.T.O, assistant Engineer"
      className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
     />
     <p className="pt-1">
      <span className="text-red-400 ">
       {errors.description && (
        <span>Project Description is Needed!</span>
       )}
      </span>
     </p>
    </div>
    {/* Dates Beginnings */}
    <div className={` w-full lg:w-[90%] gap-2 lg:gap-0 flex justify-between items-center ${padding && "pb-[18rem]"}`}>
     {/* Start Date Beginnings */}
     <div className="w-full lg:w-[40%] flex flex-col space-y-1">
      <label htmlFor="birthDate" className="text-sm font-medium">
       Starting Date
      </label>
      <input type="date" name="date" id="date" {...register('startingDate', {
       required: true,
      })} className='p-[0.65rem] w-full focus:ring  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90' onClick={() => setPadding(!padding)} onChange={() => setPadding(!padding)} />
      <p className="pt-1">
       <span className="text-red-400 ">
        {errors.startingDate && (
         <span>Starting Date is Needed!</span>
        )}
       </span>
      </p>
     </div>
     {/* End Date Beginnings */}
     <div className="w-full lg:w-[40%] flex flex-col space-y-1">
      <label htmlFor="birthDate" className="text-sm font-medium">
       Ending Date
      </label>
      <input type="date" name="date" id="date" {...register('endingDate', {
       required: true,
      })} className='p-[0.65rem] w-full focus:ring  rounded-md border focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-90' onClick={() => setPadding(!padding)} onChange={() => setPadding(!padding)} />
      <p className="pt-1">
       <span className="text-red-400 ">
        {errors.endingDate && (
         <span>Ending Date is Needed!</span>
        )}
       </span>
      </p>
     </div>
    </div>

   </div>
   <button className='my-4 bg-[#A5DBFF] py-3 px-6 font-sans text-center ml-[1rem] border-[2px] border-[#4DB9FF] rounded-md text-black' type='submit'>ADD</button>
  </form>
 )
}

export default AddProjectForm