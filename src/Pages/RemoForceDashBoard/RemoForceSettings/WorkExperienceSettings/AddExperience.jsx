import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FiEdit } from 'react-icons/fi';
import { GoDiffAdded } from 'react-icons/go';
import { SiWorkplace } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RemoForceSettingsItems from '../../../../Routes/Roots/RemoforceSettingItems';

import AddExperienceForm from './AddExperienceForm';
import EditExperience from './EditExperience';

import AuthContext from '../../../../Context/AuthContext';

function AddExperience() {
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
  const [workExperienceLists, setWorkExperienceLists] = useState(
    remoProfile?.experienceDetails || []
  );
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  const editExperience = (experience) => {
    setEditMode(true);
    setEditData(experience);
  };

  // submit
  const handleSubmitDetails = async () => {
    setLoading(true);
    if (!workExperienceLists.length) {
      toast.error('Minimum 1 work experience required, Please add one or more');
      return;
    }

    const bodyData = {
      experienceDetails: workExperienceLists,
      email: user?.user?.email || serviceUser?.email,
    };

    await axios
      .put(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-settings-experience`,
        bodyData
      )
      .then((res) => {
        if (res.data.modifiedCount || res.data.upsertedCount) {
          toast.success('Experience data updated successfully');
          setLoading(false);
          navigate('/remoforce-dashboard/add-project');
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <RemoForceSettingsItems>
      <section className="w-full mt-4 ">
        {/* Experience section  starts */}
        <div className="bg-[#F0F9FFBF] w-[70%] mt-8 flex flex-col p-[0.5rem] rounded-md">
          <div className="w-[14rem] p-2 mb-4">
            <h1 className="text-black font-sans font-semibold text-2xl w-[89%]">Experience</h1>
          </div>
          {/* Experience List Display starts */}
          <div className="mt-4 flex flex-col w-full">
            {/* edit experience */}

            {/* edit experience end */}

            {/* Experience List Display Card */}
            {workExperienceLists.length ? (
              workExperienceLists?.map((item) => (
                <div
                  className="border-b-2 flex justify-start items-center p-[1rem]"
                  key={Math.random()}
                >
                  <SiWorkplace className="text-xl mr-4" />
                  <div className="w-5/6 ">
                    <div className="  flex  gap-5 items-center">
                      <div className="flex  justify-between items-center ">
                        <h1 className="font-semibold text-md ">{item.companyName}</h1>
                        <p className="  bg-hr text-center bg-[#eef2f5] text-[#999999] px-1.5 py-1 rounded-md ml-[.5rem] text-xs">
                          {item.type}
                        </p>
                      </div>

                      <div className="relative ">
                        <input
                          type="button"
                          className="ml-2 w-[2rem] cursor-pointer bg-slate-300 absolute opacity-0"
                          name={item._id}
                          onClick={() => editExperience(item)}
                        />
                        <FiEdit className="text-[#999999] text-xl ml-2" />
                      </div>
                    </div>
                    <div className="w-full flex gap-2.5 items-center mt-3">
                      <p className="text-[#999999]  no-wrap text-sm">{item.position}</p>
                      <span className="text-[#999999]">∙</span>
                      <p className="text-[#999999]  text-sm">{item.startingDate?.slice(0, 10)}</p>
                      <span className="text-[#999999] font-semibold ">∙</span>
                      <p className="text-[#999999]  text-sm">
                        {item?.endingDate?.slice(0, 10) || item?.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No work Experience added</p>
            )}
          </div>
        </div>

        <hr className="w-full bg-hr my-3" />

        {editMode && (
          <EditExperience
            setEditMode={setEditMode}
            setWorkExperienceLists={setWorkExperienceLists}
            workExperienceLists={workExperienceLists}
            editData={editData}
          />
        )}

        {/* Add Experience section  starts */}
        <div className="bg-[#F0F9FFBF] w-full flex flex-col p-[0.5rem]">
          <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[14rem] p-2 mb-4">
            <h1 className="text-headers text-start font-sans font-semibold text-xl w-[89%]">
              Work Experience
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
            <AddExperienceForm
              setBool={setBool}
              workExperienceLists={workExperienceLists}
              setWorkExperienceLists={setWorkExperienceLists}
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

export default AddExperience;
