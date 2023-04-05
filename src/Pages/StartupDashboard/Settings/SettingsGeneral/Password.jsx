import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BiDownArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import GeneralConfirmPassword from './GeneralConfirmPassword';

const Password = () => {
  const [currentPass, setCurrentPass] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const muteFunc = async (data) =>
    axios.post(`${process.env.REACT_APP_URL_STARTUP}/api/startup/verifyPass`, data);

  const { mutate } = useMutation(muteFunc, {
    onSuccess: (res) => {
      if (res.data.success) {
        setCurrentPass(true);
      }
      if (!res.data.success) {
        toast.error('X wrong pass X insert a correct one');
      }

      // navigate(from, { replace: true });
    },
    onError: () => toast.error('There is an error'),
  });

  const onSubmit = (data) => {
  
    const bodyData = { email: user?.user.email, password: data.CurrentPassword };

    mutate(bodyData);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-semibold">
          <span className="text-[#13d1ff]">Update </span> Password?
        </h1>
        <BiDownArrow />
      </div>
      <p className="border bg-gray-500 border-gray-500 mt-1" />

      <div>
        <div className="grid gap-8 mt-5">
          {/* current password */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="text-sm font-medium" htmlFor="MyName">
              Current Password
            </label>
            <div className="lg:flex items-center lg:gap-12">
              <div className="lg:w-1/2">
                <div className="lg:flex w-full  lg:gap-10 items-center">
                  <input
                    {...register('CurrentPassword', {
                      required: true,
                    })}
                    id="MyName"
                    type="password"
                    placeholder="********"
                    className="block w-full px-4 py-4 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                  {/* error message for current password  for mobile */}
                  <p className="pt-2  md:hidden">
                    <span className="text-red-400 ">
                      {errors.CurrentPassword && <span>Input your Current Password</span>}
                    </span>
                  </p>
                </div>
              </div>
              {/* verify button */}
              <div className="max-lg:mt-5  max-md:flex justify-center">
                <button
                  type="submit"
                  className="px-14 py-2.5  lg:py-4 bg-[#0B132A] max-md:text-sm  text-white  font-semibold rounded-md"
                >
                  Verify
                </button>
              </div>
            </div>

            {/* error message for current password */}
            <p className="pt-2 max-md:hidden ">
              <span className="text-red-400 ">
                {errors.CurrentPassword && <span>Input your Current Password</span>}
              </span>
            </p>
          </form>

          {currentPass && <GeneralConfirmPassword />}
        </div>
      </div>
    </div>
  );
};

export default Password;
