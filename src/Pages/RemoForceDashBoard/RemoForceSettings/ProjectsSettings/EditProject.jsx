import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from "react-router-dom";
import { FiEdit } from 'react-icons/fi'
import { GoDiffAdded } from 'react-icons/go'
import { MdOutlineWork } from 'react-icons/md'

import RemoForceSettingsItems from '../../../../Layout/RemoForceSettingsItems'
function EditProject() {
   const [data, setData] = useState([])
   const [list, setList] = useState([])
     // Initialize use form hook
     const [padding, setPadding] = useState(false)
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm({
    })

   const id = useParams()
    const project_experience_list = [{ _id: "1", projectName: 'Alt school Ltd', projectLink: 'Cyber Security B.Sc', startingDate: "Oct 2021", endDate: 'Dec 2022', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.' }, { _id: "2", projectName: 'Alx School of Engineering', projectLink: 'Full Java Spring Framework', startingDate: "Oct 2019", endDate: 'Dec 2022', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.' }, { _id: "3", projectName: 'RemoStart', projectLink: 'Software Engineering', startingDate: "Oct 2021", endDate: 'Dec 2022', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.' } ]

   useEffect(() => {
   const newList = project_experience_list.filter(item => item._id !== id.id.split("=")[1] )
   setList(newList)
   // console.log(newList)
   const obj = project_experience_list.filter(item => item._id === id.id.split("=")[1] )
   setData(obj)
  }, [])

  const httpAddEducationExperience = (data) => {
  console.log(data)
  window.location.href = `${origin}`+ "/user_dashboard/project"

 }
  return (
      <RemoForceSettingsItems>
      <section className='w-full mt-4 '>
        {/* Experience section  starts */}
        <div className='bg-lightblue w-[70%] flex flex-col p-[0.5rem] rounded-md'>
          <div className='w-[14rem] p-2 mb-4'>
            <h1 className="text-black font-sans font-semibold text-xl w-[89%]">Project</h1>
          </div>
          {/* Experience List Display starts */}
          <div className='mt-4 flex flex-col w-full'>
            {/* Experience List Display Card */}
            {list.map((item, idx) => {
              return (
                <div className='border-b-2 flex justify-start items-start p-[1rem]' key={idx}>
                  <MdOutlineWork className='text-xl mr-4' />

                  <div className='w-5/6'>
                    <div className='w-full flex justify-start items-center'>
                      <h1 className='font-semibold text-md w-[50%]'>{item.projectName}</h1>
                      <div className="relative">
                      <input type="button" className='ml-2 w-[2rem] bg-slate-300 absolute opacity-0' name={item._id}  />
                        <FiEdit className='text-[#999999] ml-2' />
                      </div>
                    </div>
                    <div className='w-full flex justify-between items-center mt-3'>
                      <p className='text-[#999999] w-[40%] no-wrap text-sm'>{item.projectLink}</p>
                      <span className='text-[#999999]'>.</span>
                      <p className='text-[#999999] w-[20%] text-sm'>{item.startingDate}</p>
                      <span className='text-[#999999]'>.</span>
                      <p className='text-[#999999] w-[20%] text-sm'>{item.endDate}</p>
                    </div>
                    <div className='w-full flex justify-start items-center mt-2'>
                      <p className='text-[#999999] no-wrap text-sm'>{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <hr className='w-full bg-hr my-3' />
        {/*Add Experience section  starts */}
        <div className='bg-lightblue w-full flex flex-col p-[0.5rem]'>
          <div className='flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[14rem] p-2 mb-4'>
            <h1 className="text-headers text-start font-sans font-semibold text-xl w-[89%]">Project Work</h1>
          </div> 
            {
            data.map((item,idx)=>{
             return(

              <form className='space-y-3 w-full' onSubmit={handleSubmit(httpAddEducationExperience)}  key={idx}> 
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
                     defaultValue={item.projectName}
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
                   defaultValue={item.projectLink}
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
                {/* Project Description Beginnings */}
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
                     defaultValue={item.description}
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
                  <input type="date" name="date" id="date"
                  defaultValue={item.startingDate}
                   {...register('startingDate', {
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
                  <input type="date" name="date"
                  defaultValue={item.startingDate}
                  id="date" {...register('endingDate', {
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
            })
              }
 
        </div>
      </section>
    </RemoForceSettingsItems>
  )
}

export default EditProject