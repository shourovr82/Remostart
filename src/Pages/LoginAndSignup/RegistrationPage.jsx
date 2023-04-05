/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { IoIosArrowForward } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link, useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import registerLogo from '../../Assets/Images/RegistrationBanner.svg';
import ToastMessage from '../../Modal/ToastMessage';

const RegistrationPage = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [refresh, setRefresh] = useState(false);

  const [type, setType] = useState('password');
  const [type2, setType2] = useState('password');
  const [error, setError] = useState('');

  // password visibility toggle

  const handleTogglePassword = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const handleTogglePasswordConfirm = () => {
    if (type2 === 'password') {
      setType2('text');
    } else {
      setType2('password');
    }
  };
  // form data handling
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { password } = getValues();
  const navigate = useNavigate();

  // Data posting

  const muteFunc = async (data) =>
    axios.post(`${process.env.REACT_APP_URL_STARTUP}/api/auth/register`, data);
  const { mutate } = useMutation(muteFunc, {
    onSuccess: (res) => {
      if (res.data.success) {
        toast.success(` remoforce ${res.data.user.userName} is created `);
        navigate('/login');
      }
      if (!res.data.success) {
        toast.error(res.data.message);
      }
    },
    onError: () => toast.error('There is an error'),
  });


  // submit handler

  const onSubmit = (data) => {
    const registerData = { ...data, personalPhone: value, role: 'remoforce' };
    mutate(registerData);
  };

  const compo = (
    <div className="mt-4 bg-white leading-relaxed mb-8 border md:flex justify-around items-center border-[#FF9900] rounded-md p-2">
      <div className="mr-2">
        <RiErrorWarningLine className="text-[#FF9900] text-3xl" />
      </div>
      <div className="flex-1">
        <span className="text-[#FF9900] font-semibold">Warning</span>
        <p className="text-xs">
          Hey there new user! We just wanted to inform you that we use cookies to ensure you have
          the best browsing experience on our website. Please read our terms and conditions.
        </p>
      </div>
    </div>
  );
  window.addEventListener('load', () => {
    const token = Cookies.get('token');
    const userRole = Cookies.get('userRole');
  });
  // useEffect(() => {
  //     dispatch(fetchUser());
  // }, [dispatch, refresh]);

  // handle google signup
  // const handleGoogleSignUp = async () => {
  //     try {
  //         const response = await window.open(
  //             `${process.env.REACT_APP_URL_STARTUP}/api/auth/google`
  //         );

  //     } catch (err) {
  //         console.error(err);
  //     }
  // };
  const handleGoogleSignUp = async () => {
    try {
      window.open(`${process.env.REACT_APP_URL_STARTUP}/auth/google`, '_self');
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };
  const handleLinkedinSignUp = async () => {
    try {
      window.open(`${process.env.REACT_APP_URL_STARTUP}/auth/linkedin`, '_self');
      setRefresh(!refresh);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="bg-white my-4 lg:my-10">
      <div className="flex flex-col lg:flex-row">
        <section className="flex flex-col items-center lg:h-[533px] xl:col-span-6 justify-center lg:w-1/2 lg:mt-20">
          <img
            alt="Night"
            src={registerLogo}
            className="inset-0 h-full w-full mt-20 md:mt-0 hidden lg:block object-contain absolute md:static"
          />
          {/* <div className="hidden lg:grid grid-cols-5 place-items-center space-x-3">
                        <a href="https://discord.gg/57ER8DXbGu" target="_blank" rel="noreferrer">
                            <img src={discord} alt="" className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/remo-start/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={linkedin} alt="" className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/remostart_/">
                            <img src={insta} alt="" className="w-6 h-6" target="_blank" />
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
                    </div> */}
        </section>

        <div className="flex items-center w-full lg:w-1/2 justify-center lg:justify-end px-0">
          <div className="w-full md:w-4/5">
            <div className="lg:mt-0 block">
              {/** ***************** popup ***************************** */}
              <ToastMessage message={compo} duration={10000} />

              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Create Account</h1>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              action="#"
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  {...register('firstName', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="mt-1 w-full placeholder:font-medium placeholder:text-gray-400 p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                />
                {errors?.firstName?.type === 'pattern' && (
                  <p className="text-red-500">*Alphabetical characters only</p>
                )}
                {errors?.firstName?.type === 'maxLength' && (
                  <p className="text-red-500">*First name cannot exceed 20 characters</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  {...register('lastName', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  id="lastName"
                  name="lastName"
                  placeholder=" Last Name"
                  className="mt-1 w-full p-3 placeholder:font-medium placeholder:text-gray-400 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                />
                {errors?.lastName?.type === 'pattern' && (
                  <p className="text-red-500">*Alphabetical characters only</p>
                )}
                {errors?.lastName?.type === 'maxLength' && (
                  <p className="text-red-500">*Last name cannot exceed 20 characters</p>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  {...register('email', { required: true })}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="mt-1 w-full p-3 rounded-md placeholder:font-medium placeholder:text-gray-400 border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="border flex justify-between items-center rounded-md mt-1 shadow-md">
                  <input
                    {...register('password', {
                      required: true,
                      minLength: 6,
                    })}
                    type={type}
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="border-transparent  placeholder:text-gray-400 rounded-md  outline-none p-3 w-full"
                  />

                  <button
                    type="button"
                    className="bg-transparent pl-2"
                    onClick={handleTogglePassword}
                  >
                    {' '}
                    {type === 'password' ? (
                      <AiFillEye className="text-2xl mr-2" />
                    ) : (
                      <AiFillEyeInvisible className="text-2xl mr-2" />
                    )}
                  </button>
                </div>
                {errors?.password?.type === 'minLength' && (
                  <p className="text-red-500">*Minimum 6 Character Required</p>
                )}
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <div className="border flex justify-between items-center rounded-md mt-1 shadow-md">
                  <input
                    type={type2}
                    {...register('confirmPassword', {
                      validate: (val) => password === val || 'Passwords should match!',
                    })}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border-transparent  placeholder:text-gray-400 rounded-md outline-none p-3 w-full"
                  />
                  <button
                    type="button"
                    className="bg-transparent pl-2"
                    onClick={handleTogglePasswordConfirm}
                  >
                    {type2 === 'password' ? (
                      <AiFillEye className="text-2xl mr-2" />
                    ) : (
                      <AiFillEyeInvisible className="text-2xl mr-2" />
                    )}
                  </button>
                </div>
                {errors?.confirmPassword && (
                  <p className="text-red-500">{errors?.confirmPassword?.message}</p>
                )}
              </div>

              <div className="col-span-6 rounded-md">
                <PhoneInput
                  className="mt-1 w-full p-3 rounded-md focus:outline-none focus:border-white bg-white text-sm text-gray-700 shadow-md "
                  placeholder="123-45-678"
                  value={value}
                  onChange={setValue}
                />
              </div>
              {error && <h2 className="text-xl text-rose-600 font-bold my-10">* error</h2>}

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-3">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I’ve read and agree with the
                    <Link to="/terms" className="text-red-500">
                      Terms and Conditions.
                    </Link>
                  </span>
                </label>
              </div>

              <div className="col-span-6 flex flex-col sm:gap-3 justify-center items-center">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-black px-4 text-2xl py-3 font-medium text-black transition hover:bg-transparent  focus:outline-none focus:ring active:text-blue-500 active:border-transparent"
                >
                  <IoIosArrowForward />
                </button>

                {/* ====================== */}
                <div className="flex items-center pt-2 space-x-1">
                  <div className="flex-1 h-px lg:w-40 bg-[#999999]" />
                  <p className="px-3 text-sm text-[#999999]">Continue With</p>
                  <div className="flex-1 h-px lg:w-40 bg-[#999999]" />
                </div>

                {/* google & facebook authentications */}
                <div className="mt-1">
                  <div className=" flex items-center  gap-3">
                    {/* google */}
                    <button
                      onClick={handleGoogleSignUp}
                      type="button"
                      className="border border-[#999999] rounded-full px-8 lg:px-12 py-2"
                    >
                      <FcGoogle className="text-3xl" />
                    </button>

                    {/* facebook */}
                    <button
                      type="button"
                      onClick={handleLinkedinSignUp}
                      className="border border-[#999999] rounded-full px-8 lg:px-12 py-2"
                    >
                      <BsLinkedin className="text-3xl text-black]" />
                    </button>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold sm:mt-0">
                  Already Registered?&nbsp;
                  <Link to="/login" className="text-red-500">
                    Login Here !
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
