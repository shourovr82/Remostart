import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const StartupSignUp = () => {
  const [agree, setAgree] = useState(false);
  const [personalPhone, setPersonalPhone] = useState();
  const [officePhone, setOfficePhone] = useState();
  const [type, setType] = useState('password');
  const [type2, setType2] = useState('password');
  const { user } = useAuth();
  const navigate = useNavigate();

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
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const { password, email } = getValues();

  const muteFunc = async (userinfo) =>
    axios.post(`${process.env.REACT_APP_URL_STARTUP}/api/auth/register`, userinfo);

  const { mutate } = useMutation(muteFunc, {
    onSuccess: (res) => {
      const data = { password, email };

      // Swal.fire('Submission Successful', 'Thank you so much', 'success');
      if (res.data.success) {
        axios
          .post(`${process.env.REACT_APP_URL_STARTUP}/api/auth/login`, data)
          .then((response) => {
            Cookies.set('token', response.data.token);
            // window.location.reload()
            navigate('/dashboard');
          })
          // .then(() => refetch())
          .catch((e) => {});

        Swal.fire(
          'Submission Successful',
          ` remoforce ${res.data.user.userName} is created `,
          'success'
        );
        // navigate('/login');
      }
      if (!res.data.success) {
        // toast.error(res.data.message);
        Swal.fire('Submission Failed', `${res.data.message}`, 'error');
      }
    },

    onError: () => Swal.fire('Sorry', 'Here is some error', 'error'),
  });

  const onSubmit = (data) => {
    if (user?.user?.role === 'remoforce') {
      toast.error('you logged in as a remoforce. please logout and try again');
      return;
    }

    const userInfo = {
      ...data,
      personalPhone,
      officePhone,
      role: 'startup',
      talentRequestPaymentDetails: { tier: 'Free', transactionId: null },
    };

    mutate(userInfo);

    reset();
  };

  return (
    <div>
      <div className="pb-5">
        <div className="mb-14">
          <h1 className="font-semibold text-3xl">About You</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row lg:w-[1132px] mx-auto justify-center">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h1 className="font-semibold text-[24px]">Personal Info</h1>
              <p className="font-semibold text-[12px] text-[#999999]">
                Please provide your personal information.
              </p>
              <p
                className="bg-[#13D1FF] mt-[7px]"
                style={{
                  border: '1.5px solid #13D1FF',
                  width: '274px',
                  height: '0px',
                  left: '394px',
                  top: ' 370px',
                }}
              />
            </div>
            <div className="mb-6 lg:mb-0 lg:w-[520px] lg:pr-5">
              <div className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="flex gap-4 w-full">
                  <div className="space-y-1 text-sm w-full">
                    <label htmlFor="firstName" className="block font-semibold text-gray-900">
                      First Name
                    </label>
                    <input
                      type="Text"
                      name="firstName"
                      {...register('firstName', {
                        required: true,
                        minLength: 3,
                        maxLength: 30,
                      })}
                      id="firstName"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] text-gray-900 "
                    />
                    <p className="pt-2">
                      {errors.firstName && (
                        <span className="text-red-400 ">
                          {errors.firstName.type === 'required' && 'Please provide your name'}
                          {errors.firstName.type === 'minLength' && 'Please provide your full name'}
                          {errors.firstName.type === 'maxLength' &&
                            'Finish writing your name in thirty characters'}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="space-y-1 text-sm w-full">
                    <label className="block font-semibold text-gray-900">Last Name</label>
                    <input
                      type="Text"
                      name="lastName"
                      {...register('lastName', {
                        required: true,
                        minLength: 3,
                        maxLength: 30,
                      })}
                      id="lastName"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-md border  border-[#E5E5E5] text-gray-900 "
                    />
                    <p className="pt-2">
                      {errors.lastName && (
                        <span className="text-red-400 ">
                          {errors.lastName.type === 'required' && 'Please provide your name'}
                          {errors.lastName.type === 'minLength' && 'Please provide your full name'}
                          {errors.lastName.type === 'maxLength' &&
                            'Finish writing your name in thirty characters'}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block font-semibold text-gray-900">Email Id</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: true,
                      // pattern: /^(?=.*\d)[\s\S]{6,}$/,
                    })}
                    placeholder="Enter Your Email Address"
                    className="w-full px-4 py-3 rounded-md border  border-[#E5E5E5]  text-gray-900 "
                  />
                  {/* <p className="pt-2">
                                        <span className="text-red-400 ">
                                            {errors.email && <span>Invalid email address</span>}
                                        </span>
                                    </p> */}
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="personalPhone" className="block font-semibold text-gray-900">
                    Phone Number
                  </label>
                  <PhoneInput
                    className="w-full px-4 py-3 rounded-md ring-0  outline-none border"
                    placeholder="+91 9897 6357 52"
                    value={personalPhone}
                    id="personalPhone"
                    name="personalPhone"
                    onChange={setPersonalPhone}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:w-[1132px] mx-auto mt-[111px] justify-center">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h1 className="font-semibold text-[24px]">Professional Details</h1>
              <p className="font-semibold text-[12px] text-[#999999]">
                Please provide your basic professional informations.
              </p>
              <p
                className="bg-[#13D1FF] mt-[7px]"
                style={{
                  border: '1.5px solid #13D1FF',
                  lineHeight: '16.34px',
                  width: '274px',
                  height: '0px',
                  left: '394px',
                  top: ' 370px',
                }}
              />
            </div>
            <div className="mb-6 lg:mb-0 lg:w-[520px] lg:pr-5">
              <div className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                  <label className="block font-semibold text-gray-900">Company ID</label>
                  <input
                    {...register('companyId', {
                      required: 'Please Input Your Company Id',
                    })}
                    type="number"
                    placeholder="Company Identification Number"
                    className="w-full px-4 py-3 rounded-md border  border-[#E5E5E5]  text-gray-900 "
                  />
                  <p className="pt-2">
                    {errors.companyId && (
                      <span className="text-red-400 ">{errors.companyId.message}</span>
                    )}
                  </p>
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block font-semibold text-gray-900">Designation</label>
                  <input
                    type="text"
                    {...register('designation', {
                      required: 'Please input your designation',
                    })}
                    placeholder="Enter Your Designation"
                    className="w-full px-4 py-3 rounded-md border  border-[#E5E5E5]  text-gray-900 "
                  />
                  <p className="pt-2">
                    {errors.designation && (
                      <span className="text-red-400 ">{errors.designation.message}</span>
                    )}
                  </p>
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block font-semibold text-gray-900">Office Phone Number</label>

                  <PhoneInput
                    className="w-full px-4 py-3 rounded-md  border  border-[#E5E5E5] outline-none "
                    placeholder="Enter Company Phone Number"
                    value={officePhone}
                    id="officePhone"
                    onChange={setOfficePhone}
                  />
                </div>
                <div className="space-y-1 text-sm ">
                  <label className="block font-semibold text-gray-900">Linkedin</label>
                  <div className="">
                    <input
                      {...register('linkedIn', {
                        required: true,
                        pattern:
                          /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/,
                      })}
                      type="text"
                      placeholder="https://"
                      className="w-full rounded-md px-4 py-3 border  border-[#E5E5E5]  "
                    />
                  </div>
                  <p className="pt-2 text-red-400">{errors.linkedIn && 'Invalid your linkedIn'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:w-[1132px] mx-auto mt-[111px] justify-center">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h1 className="font-semibold text-[24px]">Account Credentials</h1>
              <p className="font-semibold text-[12px] text-[#999999]">
                Please provide a strong password for your account..
              </p>
              <p
                className="bg-[#13D1FF] mt-[7px]"
                style={{
                  border: '1.5px solid #13D1FF',
                  lineHeight: '16.34px',
                  width: '274px',
                  height: '0px',
                  left: '394px',
                  top: ' 370px',
                }}
              />
            </div>
            <div className="mb-6 lg:mb-0 lg:w-[520px] lg:pr-5">
              <div className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                  <label className="block font-semibold text-gray-900">Company Email ID</label>
                  <input
                    type="email"
                    {...register('companyEmail', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    placeholder="Sample Input"
                    className="w-full px-4 py-3 rounded-md border  border-[#E5E5E5] text-gray-900 "
                  />
                  <p className="pt-2">
                    {errors.companyEmail && (
                      <span className="text-red-400 ">{errors.companyEmail.message}</span>
                    )}
                  </p>
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block font-semibold text-gray-900">Enter Password</label>
                  <div className="border flex justify-between items-center  mt-1  rounded-md  ">
                    <input
                      type={type}
                      {...register('password', {
                        required: true,
                        minLength: 6,
                      })}
                      placeholder="**********"
                      className="w-full  rounded-md px-4 py-3 border-transparent   "
                    />
                    <button type="button" className="bg-transparent" onClick={handleTogglePassword}>
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
                <div className="space-y-1 text-sm ">
                  <label className="block font-semibold text-gray-900">Confirm Password</label>
                  <div className=" flex justify-between items-center  mt-1  rounded-md  ">
                    <input
                      type={type2}
                      {...register('confirmPassword', {
                        validate: (val) => password === val || 'Passwords should match!',
                      })}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="**********"
                      className="w-full rounded-md px-4 py-3  border-[#E5E5E5]  "
                    />
                    <button
                      type="button"
                      className="bg-transparent"
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

                <div className="flex gap-1 items-center">
                  {agree ? (
                    <MdCheckBox
                      onClick={() => setAgree(false)}
                      className="text-2xl cursor-pointer"
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      onClick={() => setAgree(true)}
                      className="text-2xl cursor-pointer"
                    />
                  )}
                  <p className="text-sm">
                    I’ve read and agree with the Privacy Policy & Terms and Conditions.
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={!agree}
                  className="block py-[21px] px-[46px] text-center  bg-gray-900 text-white rounded-[5px]"
                >
                  Save & Signup
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartupSignUp;
