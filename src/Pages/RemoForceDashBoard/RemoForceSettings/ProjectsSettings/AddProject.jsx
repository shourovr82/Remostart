import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { GoDiffAdded } from 'react-icons/go';
import { SiWorkplace } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RemoForceSettingsItems from '../../../../Routes/Roots/RemoforceSettingItems';
import { convertProjectDate, getProjectDuration } from '../../../../Utilities/projectDateFormater';
import AddProjectForm from './AddProjectForm';
import EditProject from './EditProject';

import AuthContext from '../../../../Context/AuthContext';

function AddProject() {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: remoProfile, refetch } = useQuery(['remoProfile'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-profile/${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );
  const [loading, setLoading] = useState(false);
  const [bool, setBool] = useState(false);
  const [projectsLists, setProjectsLists] = useState(remoProfile?.projectDetails || []);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  const editProject = (experience) => {
    setEditMode(true);
    setEditData(experience);
  };

  // submit
  const handleSubmitDetails = async () => {
    setLoading(true);
    if (!projectsLists.length) {
      toast.error('Minimum 1 work experience required, Please add one or more');
      return;
    }

    const bodyData = {
      projectDetails: projectsLists,
      email: user?.user?.email,
    };

    await axios
      .put(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-settings-projects`,
        bodyData
      )
      .then((res) => {
        if (res.data.modifiedCount || res.data.upsertedCount) {
          toast.success('Projects data updated successfully');
          setLoading(false);
          navigate('/remoforce-dashboard/account-settings');
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <RemoForceSettingsItems>
      <section className="w-full mt-8 ">
        {/* Experience section  starts */}
        <div className="bg-[#F0F9FFBF] lg:w-[70%]  flex flex-col p-[0.5rem] rounded-md">
          <div className="w-[14rem] p-2 mb-4">
            <h1 className="text-black font-sans font-semibold text-2xl w-[89%]">Projects</h1>
          </div>
          {/* Experience List Display starts */}
          <div className="mt-4 flex   flex-col w-full">
            {/* edit experience */}

            {/* edit experience end */}

            {/* Experience List Display Card */}
            {projectsLists.length ? (
              projectsLists?.map((item) => (
                <div
                  className="border-b-2 flex justify-start items-start lg:p-[1rem] p-[.6rem] "
                  key={Math.random()}
                >
                  <SiWorkplace className="text-xl max-md:hidden mr-4" />
                  <div className=" ">
                    <div className=" flex  gap-5 items-center">
                      <div className="flex  justify-between items-center ">
                        <h1 className="font-semibold text-md ">{item.projectName}</h1>
                        <p className="  bg-hr text-center bg-[#eef2f5] text-[#999999] px-1.5 py-1 rounded-md ml-[.5rem] text-xs">
                          {item.projectType}
                        </p>
                      </div>

                      <div className="relative ">
                        <input
                          type="button"
                          className="ml-2 w-[2rem] cursor-pointer bg-slate-300 absolute opacity-0"
                          name={item._id}
                          onClick={() => editProject(item)}
                        />
                        <FiEdit className="text-[#999999] text-xl ml-2" />
                      </div>
                    </div>

                    <div className="w-full  flex gap-2.5 items-center mt-3">
                      <p className=" text-[#999999]  no-wrap text-sm">{item.projectLink}</p>
                      <span className="text-[#999999]">∙</span>
                      <p className="text-[#999999]  text-sm">
                        {getProjectDuration(item?.startingDate, item?.endingDate)}
                      </p>
                      <span className="text-[#999999]">∙</span>
                      <p className="text-[#999999]  text-sm">
                        {convertProjectDate(item?.startingDate)}
                      </p>
                      <span className="text-[#999999] font-semibold ">-</span>
                      <p className="text-[#999999]  text-sm">
                        {convertProjectDate(item?.endingDate)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#b0b1b2] font-semibold">{item?.projectDescription}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No Project added</p>
            )}
          </div>
        </div>

        <hr className="w-full bg-hr my-3" />

        {editMode && (
          <EditProject
            setEditMode={setEditMode}
            setProjectsLists={setProjectsLists}
            projectsLists={projectsLists}
            editData={editData}
          />
        )}

        {/* Add Experience section  starts */}
        <div className="bg-[#F0F9FFBF]  rounded-md w-full flex flex-col p-[0.5rem]">
          <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-[#19a5ff] w-[14rem] p-2 mb-4">
            <h1 className="text-[#19a5ff] text-start font-sans font-semibold text-xl w-[89%]">
              Project Work
            </h1>
          </div>

          {bool === false ? (
            <div className="space-y-3 w-full">
              <button
                type="button"
                className="my-4 bg-[#A5DBFF] py-3 px-6 font-sans text-center ml-[1rem] border-[2px] border-[#4DB9FF] rounded-md text-black flex items-center"
                onClick={() => {
                  setBool(true);
                }}
              >
                <span className="px-2">
                  <GoDiffAdded className="text-black" />
                </span>
                ADD
              </button>
            </div>
          ) : (
            <AddProjectForm
              setBool={setBool}
              projectsLists={projectsLists}
              setProjectsLists={setProjectsLists}
            />
          )}
        </div>
        <div className="flex mt-10 justify-center">
          <button
            type="button"
            className="border px-5 rounded-md py-2.5 bg-[#0b132a] text-white flex items-center gap-2"
            onClick={handleSubmitDetails}
          >
            Submit Details
            {loading && (
              <span className="w-7 h-7 font-bold border-4 border-dashed rounded-full animate-spin border-white" />
            )}
          </button>
        </div>
      </section>
    </RemoForceSettingsItems>
  );
}

export default AddProject;
