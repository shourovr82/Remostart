/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { IoIosArrowForward } from 'react-icons/io';
import loginLogo from '../../Assets/Images/LoginBanner.svg';

const LoginPage = () => {
  const [type, setType] = useState(false);

  const active = 'bg-[#FFC46B] text-xs py-1 px-6';
  const notActive = 'text-xs py-1 px-6';

  // React hook form variable

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  // redirection
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const queryClient = useQueryClient();

  const muteFunc = async (data) =>
    axios.post(`${process.env.REACT_APP_URL_STARTUP}/api/auth/login`, data);

  const { mutate } = useMutation(muteFunc, {
    onSuccess: (res) => {
      if (res) {
        if (res.data.status === 400) {
          toast.error(res.data.message);
        }
        if (res.data.status === 401) {
          toast.error(res.data.message);
        }
        // if (res.data.status === 200) {
        //     toast.success(res.data.message);
        // }

        Cookies.set('token', res.data.token);
        Cookies.set('userRole', res.data.role);

        // navigate(from, { replace: true });

        if (!res.data.success) {
          Cookies.set('token', '');
          Cookies.set('userRole', '');
        }
        if (res.data.success) {
          toast.success(res.data.message);
          Cookies.set('token', res.data.token);
          Cookies.set('userRole', res.data.role);
          if (res.data.role === 'startup') {
            navigate('/dashboard');
          }
          if (res.data.role === 'admin') {
            navigate('/admin-dashboard');
          }
          if (res.data.role === 'remoforce') {
            navigate('/remoforce-dashboard/dashboard');
          }
        }

        // navigate(from, { replace: true });

        queryClient.invalidateQueries('myDataQuery');
      }
    },
    onError: () => toast.error('There is an error'),
    onSettled: () => {
      queryClient.refetchQueries('myDataQuery');
    },
  });

  // Submit Handler

  const onSubmit = (data) => {
    mutate(data);

    // axios
    //     .post(`${process.env.REACT_APP_URL_STARTUP}/api/auth/login`, data)
    //     .then((res) => {
    //         toast.success(res.data.message);
    //
    //         Cookies.set('token', res.data.token);

    //         navigate(from, { replace: true });
    //     })
    //     // .then(() => refetch())
    //     .catch((e) => {
    //
    //     });
  };
  // handle google sign in

  const handleGoogleSignIn = async () => {
    try {
      window.open(`${process.env.REACT_APP_URL_STARTUP}/auth/google`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="my-10">
      <div className="flex ">
        <div className="flex  items-center justify-start w-full lg:w-3/4 lg:pr-10 ">
          <div className="w-full  mx-auto lg:mx-0  z-0">
            <div className="flex flex-col ">
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome Back !
              </h1>
              <span className="text-xs text-gray-400">
                Everyday is a new day we are glad to have you back !
              </span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              action="#"
              className="grid mt-5 grid-cols-6 gap-6"
            >
              {/* email field */}
              <div className="col-span-6 space-y-2 mt-5">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 "
                  {...register('email', {
                    required: '*Email Address is required',
                  })}
                />
                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
              </div>
              {/* password field */}
              <div className="col-span-6 space-y-2">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="flex justify-between rounded-md border items-center ">
                  <input
                    type={type !== true ? 'password' : 'text'}
                    id="Password"
                    name="password"
                    className=" w-full p-4 rounded-md border-transparent bg-white text-sm text-gray-700 "
                    {...register('password', {
                      required: '*Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be 6 characters or longer',
                      },
                    })}
                  />
                  <button
                    type="button"
                    className="bg-transparent pl-2"
                    onClick={() => setType(!type)}
                  >
                    {' '}
                    {type === true ? (
                      <AiFillEye className="cursor-pointer text-2xl mr-2" />
                    ) : (
                      <AiFillEyeInvisible className="cursor-pointer  text-2xl mr-2" />
                    )}
                  </button>
                </div>

                {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white "
                  />
                  <div className="flex justify-between w-full">
                    <span className="text-sm text-gray-700">Stay logged in</span>

                    <span className="text-sm text-gray-700">Forgot password?</span>
                  </div>
                </label>
              </div>

              <div className="col-span-6 sm:flex    sm:items-center flex-col sm:gap-4 justify-center items-center">
                <button
                  type="submit"
                  className=" shrink-0 mx-auto self-center flex rounded-md border border-black px-4 text-2xl py-3 font-medium"
                >
                  <IoIosArrowForward />
                </button>

                {/* --=------------------------- */}

                <div className="flex items-center pt-4 4 space-x-1">
                  <div className="flex-1 h-px lg:w-40 bg-[#999999]" />
                  <p className="px-3 text-sm text-[#999999]">Continue With</p>
                  <div className="flex-1 h-px lg:w-40 bg-[#999999]" />
                </div>

                {/* google & facebook authentications */}
                <div>
                  <div className=" flex items-center  justify-center mt-3 gap-3">
                    {/* google */}
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="border border-[#999999]  rounded-full px-12 py-2"
                    >
                      <FcGoogle className="text-3xl" />
                    </button>

                    {/* facebook */}
                    <button
                      type="button"
                      className="border border-[#999999] rounded-full px-12 py-2"
                    >
                      <BsFacebook className="text-3xl text-[#059BE5]" />
                    </button>
                  </div>
                </div>

                <p className="mt-4 text-sm text-center font-semibold sm:mt-0">
                  First time here?
                  <Link to="/signup" className="text-green-600">
                    {' '}
                    Register now
                  </Link>
                  . .
                </p>
              </div>
            </form>
          </div>
        </div>
        <section className="hidden lg:flex flex-col items-center w-full xl:col-span-6 justify-center">
          <img alt="Night" src={loginLogo} className="inset-0 h-full w-full" />
          {/* <div>
                        <div className="grid grid-cols-5 place-items-center space-x-3 mt-6">
                            <a
                                href="https://discord.gg/57ER8DXbGu"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={discord} alt="" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/remo-start/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={linkedin} alt="" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/remostart_/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={insta} alt="" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com/RemoStart?s=20&t=azfVLLaKPFY9uxYrLCUvaA"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={twitter} alt="" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://chat.whatsapp.com/HfwEMRxUVaSBhZJV3R9Tjg"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsWhatsapp alt="" className="text-2xl text-[#128c7e]" />
                            </a>
                        </div>
                    </div> */}
        </section>
      </div>
    </section>
  );
};

export default LoginPage;
