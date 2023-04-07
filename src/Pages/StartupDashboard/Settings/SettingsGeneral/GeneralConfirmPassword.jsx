import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import AuthContext from '../../../../Context/AuthContext';

const GeneralConfirmPassword = () => {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
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
      }

      if (res.data.status === 410) {
        toast.error(`${res.data.message}`);
      }

      // navigate(from, { replace: true });
    },
    onError: () => toast.error('There is an error'),
  });

  const handleResetPass = (data) => {
    if (data.Createnewpassword !== data.Confirmnewpassword) {
      toast.error('Password should Match ');
      return;
    }

    const bodyData = { email: user?.user?.email || serviceUser?.email, password: data.Confirmnewpassword };

    mutate(bodyData);
  };

  return (
    <form onSubmit={handleSubmit(handleResetPass)}>
      <div className=" lg:w-1/2">
        <label className="text-sm font-medium" htmlFor="Createnewpassword">
          Create new password
        </label>
        <input
          {...register('Createnewpassword', {
            required: 'New password is required',
            minLength: {
              value: 6,
              message: 'Your password must be greater than 6 characters',
            },
          })}
          id="Createnewpassword"
          type="password"
          placeholder="********"
          className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        />
        <p className="pt-2 ">
          <span className="text-red-400 ">
            {errors.Createnewpassword && <span>{errors?.Createnewpassword?.message}</span>}
          </span>
        </p>
      </div>
      <div className=" lg:w-1/2">
        <label className="text-sm font-medium" htmlFor="MyName">
          Confirm new password
        </label>
        <input
          {...register('Confirmnewpassword', {
            required: true,
          })}
          id="MyName"
          type="password"
          placeholder="********"
          className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        />
        <p className="pt-2 ">
          <span className="text-red-400 ">
            {errors.Confirmnewpassword && <span>Input a confurm passward</span>}
          </span>
        </p>
      </div>

      <div className=" mt-10 ">
        <button
          type="submit"
          className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
        >
          Update Password
        </button>
      </div>
    </form>
  );
};

export default GeneralConfirmPassword;
