import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { deleteLocalStorage } from '../../Hooks/useLocalStorage';
import ConfirmationSuccessful from './ConfirmationSuccessful';

const FinalConfirmation = ({ setConfirmPost, storedJob, paths }) => {
  const [submitPost, setSubmitPost] = useState(false);
  const navigate = useNavigate();

  const muteFunc = async (data) =>
    axios.post(`${process.env.REACT_APP_URL_STARTUP}/api/job/${storedJob?.apiPath || paths}`, data);
  const { mutate } = useMutation(muteFunc, {
    onSuccess: (res) => {
      if (res.data.modifiedCount) {
        toast.success('job posted successfully');
        navigate('/dashboard');
      }
      if (!res.data.modifiedCount) {
        toast.error(res.data.message);
      }
    },
    onError: () => toast.error('There is an error'),
  });

  const handlePost = () => {
    mutate(storedJob);
    setConfirmPost(false);
    deleteLocalStorage(storedJob?.apiPath);
  };

  return (
    <div>
      {/* checkbox for open modal  */}
      <input type="checkbox" id="postConfirmation" className="modal-toggle" />
      {/*  */}
      <div className="modal">
        <div className="modal-box flex items-center  justify-center w-[600px] h-[300px] max-w-5xl">
          <div className="text-2xl">
            <h1>Are you sure you want to post this job?</h1>
            <div className="modal-action items-center gap-4 justify-center">
              <label
                htmlFor="postConfirmation"
                className="py-2 px-10 rounded-full text-[20px] border border-[#FF5A78] hover:bg-[#FF5A78] duration-100 ease-out hover:text-white cursor-pointer"
              >
                Cancel
              </label>
              <button type="submit" onClick={handlePost}>
                <label
                  htmlFor="ConfirmationSuccessful"
                  className=" bg-[#65DC7F] py-2 px-10 cursor-pointer hover:bg-[#33a04a] duration-100 ease-out rounded-full text-[20px] text-[#FFFFFF]"
                >
                  Post
                </label>
              </button>
            </div>
          </div>
        </div>
      </div>
      {submitPost && <ConfirmationSuccessful />}
    </div>
  );
};

export default FinalConfirmation;
