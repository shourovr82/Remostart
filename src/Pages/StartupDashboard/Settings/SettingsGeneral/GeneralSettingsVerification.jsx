import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { BsCheck, BsUpload } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../../../../Context/AuthContext';

const GeneralSettingsVerification = () => {
  const { user } = useSelector((state) => state.auth);
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: startupData } = useQuery(['startupData'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/startup/startup-preview/${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );
  const handleSubmit = async () => {
    const bodyData = {
      verificationRequest: true,
      verificationStatus: false,
      email: user?.user?.email || serviceUser?.email,
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL_STARTUP}/api/startup/verification-request`,
        bodyData
      );

      if (response.status === 200) {
        toast.success('Your request for verification is submitted successfully');
        navigate('/dashboard/profile');
      }
    } catch (e) {
      console.error(e);
    }
  };
  const handleView = (singleFile) => {
    const url = Object.values(singleFile);
    window.open(url[0]);
  };

  return (
    <div>
      {/* heading */}
      <div>
        <h1 className="font-semibold text-3xl">
          Startup <span className="text-[#65DC7F]">Verification</span>
        </h1>
        <hr className="w-[85%] text-[#BCBCBC] mt-1" />
      </div>
      {/* details */}

      {
        // if registered

        startupData.registered ? (
          <div className="lg:space-y-5 space-y-3 mt-7">
            <h2 className=" lg:text-2xl text-lg font-semibold">
              Startup Name :<span className="font-normal">{startupData.startupName}</span>
            </h2>
            <h2 className=" lg:text-2xl text-lg font-semibold">
              Registered Name : <span className="font-normal">{startupData.registeredName}</span>
            </h2>
            <h2 className=" lg:text-2xl text-lg font-semibold">
              Company CIN Number : <span className="font-normal">{startupData.startupCIN}</span>
            </h2>
            <div className="flex flex-col lg:gap-8 gap-[10px]  lg:flex-row">
              {/* <h2 className=" lg:text-2xl text-lg font-semibold">
                                Registration Date :{' '}
                                <span className="font-normal">{startupData.registrationDate}</span>
                            </h2> */}
              <h2 className=" lg:text-2xl text-lg font-semibold">
                Registered Region :{' '}
                <span className="font-normal">{startupData.companyAddress.country}</span>
              </h2>
            </div>
            <div>
              <h2 className=" lg:text-2xl text-lg font-semibold">Registered Address: </h2>
              <span className="font-normal flex flex-wrap">
                {startupData.companyAddress.place},&nbsp;
                {startupData.companyAddress.city},&nbsp;
                {startupData.companyAddress.state},&nbsp;
                {startupData.companyAddress.country}
              </span>
            </div>
          </div>
        ) : (
          // if not registered

          <div className="space-y-5 mt-7">
            <h2 className="text-2xl font-semibold">
              Startup Name : <span className="font-normal">{startupData.startupName}</span>
            </h2>
            <h2 className="text-2xl font-semibold">
              Start Date :{' '}
              <span className="font-normal">
                {startupData?.companyAddress?.registrationDate?.substring(0, 10)}
              </span>
            </h2>
            <div className="flex space-x-8">
              <h2 className="text-2xl font-semibold">
                Registered Region :{' '}
                <span className="font-normal">{startupData?.companyAddress?.country}</span>
              </h2>
              <h2 className="text-2xl font-semibold">
                Incubated at :{' '}
                <span className="font-normal">{startupData?.companyAddress?.incubatedAt}</span>
              </h2>
            </div>
            <h2 className="text-2xl font-semibold">
              Registered Address:{' '}
              <span className="font-normal">
                {startupData.companyAddress.place},&nbsp;
                {startupData.companyAddress.city},&nbsp;
                {startupData.companyAddress.state},&nbsp;
                {startupData.companyAddress.country}
              </span>
            </h2>
          </div>
        )
      }

      {/* start of file review section ------------*/}
      <div className="mt-8">
        <div className="lg:w-[773px] ">
          {/* section title */}
          <h1 className="text-[#475569] font-medium text-[15px]">Upload Supported Documents</h1>

          {startupData.companyDocs &&
            startupData.companyDocs.map((singleFile) => (
              <div key={Math.random()} className="border  rounded-md lg:w-11/12 mt-3">
                <div className="p-5">
                  <div className="flex justify-between  items-center">
                    <div className="flex text-[#6B7280] gap-4 items-center">
                      <BsUpload className="text-sm" />
                      <p className="font-medium ">{Object.keys(singleFile)[0]}</p>
                    </div>
                    <div className="flex items-center gap-3 font-medium">
                      <button
                        type="button"
                        onClick={() => handleView(singleFile)}
                        className="text-[#999999]"
                      >
                        View
                      </button>
                      <button type="button" className="bg-teal-500 text-white rounded-full">
                        <BsCheck className="text-md " />
                      </button>
                    </div>
                  </div>
                  <p className="w-full mt-3 h-[6px] rounded-md bg-[#3B82F6]" />
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* end of file review section */}

      {/* start of Founder Details section */}
      <section className="py-1 pt-8  bg-blueGray-50">
        <div className="lg:w-1/2">
          <div className="relative flex flex-col  ">
            {/* section title */}
            <div className="mb-6">
              <h1 className="text-2xl font-medium">Founder Details</h1>
            </div>
            <div className="block w-full border rounded-md overflow-x-auto">
              <table className="items-center  w-full border-collapse ">
                <thead>
                  <tr className="border-b bg-[#F9FAFB] ">
                    <th className="text-start px-2 lg:px-4 uppercase text-base py-3 font-normal text-[#6B7280]">
                      Name
                    </th>
                    <th className="text-start px-2 lg:px-4 uppercase text-base py-3 font-normal text-[#6B7280]">
                      Linkedin
                    </th>
                    <th className="text-start px-3 lg:px-4 uppercase text-base py-3 font-normal text-[#6B7280]">
                      Address
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr key={Math.random()} className="border-b">
                    <td className="text-[#1F2937] py-3 text-start px-2 lg:px-4 font-medium text-sm">
                      {startupData.foundersDetail?.fullName}
                    </td>
                    <td className="text-[#19A5FF] py-3 text-start px-2 lg:px-4 font-medium text-sm">
                      <a
                        className="hover:underline underline-offset-2 cursor-pointer uppercase "
                        href={startupData.foundersDetail?.linkedin}
                        title={startupData.foundersDetail?.linkedin}
                      >
                        URL
                      </a>
                    </td>
                    <td className="text-[#1F2937] py-3 text-start px-2 lg:px-4 font-medium text-sm">
                      {startupData.foundersDetail?.address}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* end of Founder Details section */}

      {/* start of submit and edit button */}

      <div className=" flex justify-center items-center lg:gap-5 gap-3 mt-14">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[#65DC7F] hover:bg-[#49c263] duration-300 ease-in-out border py-5 lg:px-11 px-5 text-base font-semibold text-white rounded-md"
        >
          Submit For Verification
        </button>
        <Link to="/dashboard/settings/general">
          <button
            type="button"
            className="border py-5 px-11 rounded-md border-black text-black hover:bg-black hover:text-white font-semibold duration-300 ease-in-out"
          >
            Edit
          </button>
        </Link>
      </div>
      {/* end of submit and edit button */}
    </div>
  );
};

export default GeneralSettingsVerification;
