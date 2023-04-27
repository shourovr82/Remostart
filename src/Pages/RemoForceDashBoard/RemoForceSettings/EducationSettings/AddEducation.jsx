import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FcOrgUnit } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
import { GoDiffAdded } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RemoForceSettingsItems from '../../../../Routes/Roots/RemoforceSettingItems';

import AddEducationForm from './AddEducationForm';
import EditEducation from './EditEducation';

import AuthContext from '../../../../Context/AuthContext';

function AddEducation() {
  const { user } = useSelector((state) => state?.auth);
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
  const [allEducationLists, setAllEducationLists] = useState(remoProfile?.educationDetails || []);
  const [editEducationItem, setEditEducationItem] = useState({});
  const [editEducationMode, setEditEducationMode] = useState(false);

  const editEducation = (id) => {
    const editItem = allEducationLists.find((education) => education.id === id);
    setEditEducationItem(editItem);
    setEditEducationMode(true);
    setBool(false);
  };

  // submit education
  const submitEducation = async () => {
    setLoading(true);
    if (!allEducationLists.length) {
      toast.error('Add Education First');
    }

    const bodyData = {
      educationDetails: allEducationLists,

      email: user?.user?.email || serviceUser?.email,
    };

    await axios
      .put(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-settings-education`,
        bodyData
      )
      .then((res) => {
        if (res.data.modifiedCount || res.data.upsertedCount) {
          toast.success('Education data updated successfully');
          setLoading(false);
          navigate('/remoforce-dashboard/add-work-experience');
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setBool(false);
  }, []);
  return (
    <RemoForceSettingsItems>
      <section className="w-full mt-8 ">
        {/* Experience section  starts */}
        <div className="bg-[#F0F9FFBF]  lg:w-[70%] flex flex-col p-[0.5rem] rounded-md">
          <div className="w-[14rem] p-2 mb-4">
            <h1 className="text-black font-sans font-semibold text-2xl w-[89%]">Education</h1>
          </div>
          {/* Experience List Display starts */}
          <div className="flex flex-col w-full">
            {/* Experience List Display Card */}
            {allEducationLists.length ? (
              allEducationLists?.map((item) => (
                <div className="border-b-2 w-full flex justify-start  p-[1rem]" key={Math.random()}>
                  <FcOrgUnit className="text-xl mt-1 mr-4" />
                  <div className="w-5/6">
                    <div className="w-full flex justify-start items-center">
                      <h1 className="font-semibold text-md ">{item.school}</h1>
                      <div className="relative">
                        <input
                          type="button"
                          className="ml-2 w-[2rem] bg-slate-300 absolute opacity-0"
                          name={item._id}
                          onClick={() => editEducation(item.id)}
                        />
                        <FiEdit className="text-[#999999] text-xl ml-2" />
                      </div>
                    </div>
                    <div className="w-full flex lg:flex-row flex-col   gap-2 lg:items-center  mt-3">
                      <div>
                        <p className="text-[#999999] no-wrap text-sm">{item.fieldOfStudy}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="text-[#999999]   max-lg:hidden font-extrabold ">∙</span>
                        <p className="text-[#999999] text-sm">{item?.startingDate?.slice(0, 10)}</p>
                        <span className="text-[#999999]">-</span>
                        <p className="text-[#999999]  text-sm">{item?.endingDate?.slice(0, 10)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-xl font-semibold">No Education Details Added</h1>
            )}
          </div>
        </div>

        {editEducationMode && (
          <EditEducation
            setEditEducationMode={setEditEducationMode}
            setEditEducationItem={setEditEducationItem}
            editEducationItem={editEducationItem}
            allEducationLists={allEducationLists}
            setAllEducationLists={setAllEducationLists}
          />
        )}

        <hr className="w-full bg-hr  my-3" />
        {/* Add Experience section  starts */}
        <div className="bg-[#F0F9FFBF] rounded-md w-full flex flex-col p-[0.5rem]">
          <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[14rem] p-2 mb-3 border-[#19A5FF]">
            <h1 className="text-headers text-[#19A5FF] text-start font-sans font-semibold text-xl w-[89%]">
              Education
            </h1>
          </div>

          {bool === false ? (
            <div className="space-y-3 pb-5 rounded-md w-full">
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
            <AddEducationForm
              setAllEducationLists={setAllEducationLists}
              allEducationLists={allEducationLists}
              setBool={setBool}
            />
          )}
        </div>
        {/* submit button */}
        <div className="flex justify-center">
          <button
            onClick={submitEducation}
            type="submit"
            className="bg-[#0B132A]  w-[90%] hover:shadow-xl duration-300 ease-in text-center rounded-md lg:w-[30%] text-white p-3 text-sm font-sans  my-6"
          >
            Submit Education
          </button>
        </div>
      </section>
    </RemoForceSettingsItems>
  );
}
export default AddEducation;
