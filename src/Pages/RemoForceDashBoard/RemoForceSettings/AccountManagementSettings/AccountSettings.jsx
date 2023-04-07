import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../../Context/AuthContext';
import RemoForceSettingsItems from '../../../../Routes/Roots/RemoforceSettingItems';
import ChangePasswordForm from './ChangePasswordForm';

function AccountSettings() {
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { data: remoProfile, refetch } = useQuery(['remoProfile'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-profile/${user?.user?.email || serviceUser?.email}`
      )
      .then((res) => res.data)
  );

  // Initialize use form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const httpAccountSettings = async (data) => {
    setLoading(true);
    if (data.alternativeEmail === remoProfile.personalDetails.alternativeEmail) {
      toast.error('Its already updated');
      return;
    }

    const bodyData = {
      alternativeEmail: data.alternativeEmail,
      email: user?.user?.email || serviceUser?.email,
    };

    await axios
      .put(
        `${process.env.REACT_APP_URL_STARTUP}/api/remoforce/remoforce-settings-account`,
        bodyData
      )
      .then((res) => {
        if (res.data.modifiedCount || res.data.upsertedCount) {
          toast.success('Account settings updated successfully');
          setLoading(false);
          // navigate('/remoforce-dashboard/profile');
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const accountPass = 'password';

  return (
    <RemoForceSettingsItems>
      <div className="bg-[#F0F9FFBF] w-full mt-8 flex flex-col p-[0.5rem]">
        <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-headers w-[14rem] pt-2 mb-4">
          <h1 className="text-headers text-start font-sans font-semibold text-xl w-[89%]">
            Account Settings
          </h1>
        </div>
        <form className="space-y-4 w-full " onSubmit={handleSubmit(httpAccountSettings)}>
          {/* Add Experience Beginnings */}
          <div className="w-full lg:w-[70%] space-y-3">
            {/* Permanent Email  Beginnings */}
            <div className="'w-full lg:w-[70%] space-y-1">
              <label htmlFor="age" className="text-sm font-medium">
                Permanent Email
              </label>
              <input
                id="alternativeEmail"
                type="email"
                defaultValue={user?.user?.email || serviceUser?.email}
                disabled
                className="w-full border p-3 text-[#bfbfbf] cursor-not-allowed rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200"
              />
              <p className="pt-1">
                <span className="text-red-400 ">
                  {errors.email && <span>Permanent Email is Needed!</span>}
                </span>
              </p>
            </div>
            {/*   Alternative Email Beginnings */}
            <div className="'w-full lg:w-[70%]   space-y-1">
              <label htmlFor="alternativeEmail" className="text-sm font-medium">
                Alternative Email
              </label>
              <input
                id="alternativeEmail"
                type="email"
                defaultValue={remoProfile?.personalDetails?.alternativeEmail}
                {...register('alternativeEmail')}
                placeholder="Enter your alternative email"
                className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200"
              />
            </div>
            <div className="mt-10">
              <button
                className=" bg-black py-3 px-12 font-sans text-center  rounded-md text-white"
                type="submit"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
      <hr className="w-full bg-hr my-3" />

      {/* Change Password */}
      {user?.user?.email && <ChangePasswordForm />}
    </RemoForceSettingsItems>
  );
}

export default AccountSettings;
