import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../../Context/AuthContext';

const AccountUpdatePassForm = () => {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const muteFunc = async (data) =>
    axios.post(`${process.env.REACT_APP_URL_STARTUP}/api/startup/updatePass`, data);

  const { mutate } = useMutation(muteFunc, {
    onSuccess: (res) => {
      if (res.data.modifiedCount) {
        toast.success('password changed successfully');
        navigate('/remoforce-dashboard/profile');
      }

      if (res.data.status === 410) {
        toast.error(`${res.data.message}`);
      }

      // navigate(from, { replace: true });
    },
    onError: () => toast.error('There is an error'),
  });

  const handleResetPass = (data) => {
    if (data.newPass !== data.confirmNewPass) {
      toast.error('Password should Match ');
      return;
    }

    const bodyData = { email: user?.user?.email || serviceUser?.email, password: data.confirmNewPass };

    mutate(bodyData);
  };

  return (
    <div>
      <form className="w-full items-center  " onSubmit={handleSubmit(handleResetPass)}>
        {/* Change Password Div  Beginnings */}
        <div className="'w-full lg:w-[60%] space-y-1">
          <label htmlFor="newPass" className="text-sm font-medium">
            Change Password
          </label>
          <input
            id="newPass"
            type="password"
            {...register('newPass', {
              required: true,
            })}
            placeholder="*******"
            className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200"
          />
          <p className="pt-1">
            <span className="text-red-400 ">
              {errors.newPass && <span>New Password is Needed!</span>}
            </span>
          </p>
        </div>
        <div className="'w-full lg:w-[60%] space-y-1">
          <label htmlFor="age" className="text-sm font-medium">
            Change Password
          </label>
          <input
            id="confirmNewPass"
            type="password"
            {...register('confirmNewPass', {
              required: true,
            })}
            placeholder="*******"
            className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200"
          />
          <p className="pt-1">
            <span className="text-red-400 ">
              {errors.confirmNewPass && <span>Password is not matched!</span>}
            </span>
          </p>
        </div>
        <button
          className=" bg-black py-4 px-8 mt-4 font-sans text-center rounded-md text-white "
          type="submit"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default AccountUpdatePassForm;
