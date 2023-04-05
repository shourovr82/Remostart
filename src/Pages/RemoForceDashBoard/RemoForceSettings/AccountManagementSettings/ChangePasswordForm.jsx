import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import AccountUpdatePassForm from './AccountUpdatePassForm';

function ChangePasswordForm() {
  const [currentPass, setCurrentPass] = useState(false);
  const [error, setError] = useState('');
  // Initialize use form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const { user } = useSelector((state) => state.auth);

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

  const oldPass = 'oldPassword';

  const onSubmit = (data) => {
    const bodyData = { email: user?.user.email, password: data.currentPass };

    mutate(bodyData);
  };
  return (
    <div className="bg-lightblue w-full flex flex-col p-[0.5rem]">
      <div className="flex flex-nowrap justify-between items-center border-b-2 border-b-[#19a5ff] w-[14rem] pt-2 mb-4">
        <h1 className="text-[#19a5ff] text-start font-sans font-semibold text-xl w-[89%]">
          Change Password
        </h1>
      </div>
      {/* Change Password form  Beginnings */}

      <form
        className="w-full flex items-start flex-nowrap space-x-10 "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Change Password Div  Beginnings */}
        <div className="w-full  lg:w-[60%] space-y-1">
          <label htmlFor="currentPass" className="text-sm font-medium">
            Current Password
          </label>
          <input
            id="currentPass"
            type="password"
            {...register('currentPass', {
              required: true,
            })}
            placeholder="*******"
            className="w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-200"
          />
          <p className="pt-1">
            <span className="text-red-400 "> {error && error}</span>
          </p>
        </div>
        {!currentPass && (
          <button
            className=" bg-black py-3.5  px-8 mt-7 font-sans text-center rounded-md text-white lg:w-[15%]"
            type="submit"
          >
            Verify
          </button>
        )}
      </form>

      {/* update password  */}
      {currentPass && <AccountUpdatePassForm />}
    </div>
  );
}

export default ChangePasswordForm;
