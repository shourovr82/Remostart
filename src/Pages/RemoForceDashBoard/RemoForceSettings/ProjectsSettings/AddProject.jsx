import React, { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { GoDiffAdded } from 'react-icons/go'
import { MdOutlineWork } from 'react-icons/md'

import RemoForceSettingsItems from '../../../../Layout/RemoForceSettingsItems'
import AddProjectForm from './AddProjectForm'

function AddProject() {
  const [bool, setBool] = useState(false)
  const project_experience_list = [{ _id: "1", projectName: 'Alt school Ltd', projectLink: 'Cyber Security B.Sc', startingDate: "Oct 2021", endDate: 'Dec 2022', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.' }, { _id: "2", projectName: 'Alx School of Engineering', projectLink: 'Full Java Spring Framework', startingDate: "Oct 2019", endDate: 'Dec 2022', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.' }, { _id: "3", projectName: 'RemoStart', projectLink: 'Software Engineering', startingDate: "Oct 2021", endDate: 'Dec 2022', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.' },]

   const editProject = (e) => {
    const { name } = e.target
    console.log(name)
    window.location.href = `${window.location.origin}/user_dashboard/project/id=${name}`
  }

  useEffect(() => {
    setBool(false)
  }, [])

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
            {project_experience_list.map((item, idx) => {
              return (
                <div className='border-b-2 flex justify-start items-start p-[1rem]' key={idx}>
                  <MdOutlineWork className='text-xl mr-4' />

                  <div className='w-5/6'>
                    <div className='w-full flex justify-start items-center'>
                      <h1 className='font-semibold text-md w-[50%]'>{item.projectName}</h1>
                      <div className="relative">
                      <input type="button" className='ml-2 w-[2rem] bg-slate-300 absolute opacity-0' name={item._id} onClick={editProject} />
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
            bool === false ?
              <div className='space-y-3 w-full'>
                <p className='w-full text-hr text-sm font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus</p>
                <button className='my-4 bg-[#A5DBFF] py-3 px-6 font-sans text-center ml-[1rem] border-[2px] border-[#4DB9FF] rounded-md text-black flex items-center' onClick={() => { setBool(true) }}><span className='px-2'><GoDiffAdded className='text-black' /></span>ADD</button>
              </div> :
              <AddProjectForm />
          }
        </div>
      </section>
    </RemoForceSettingsItems>
  )
}

export default AddProject