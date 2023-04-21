/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';
import DashBoardItems from '../../../Routes/Roots/DashBoardItems';
import StartupJobCard from './JobCardStartup/StartupJobCard';
import NoJob from './NoJob';

const UsersAllShadowing = () => {
  const { serviceUser, loading: serviceLoading } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { data: shadowingJobs, refetch } = useQuery(['shadowingJobs'], () =>
    axios
      .get(
        `${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/shadowing/${
          user?.user?.email || serviceUser?.email
        }`
      )
      .then((res) => res.data)
  );
  const handleClose = async (id) => {
    await axios
      .put(`${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/close/${id}`)
      .then((response) => {
        refetch();
        toast.success(`${response.data.title} closed successfully`);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
    refetch();
  };

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL_STARTUP}/api/job/user-jobs/${id}`)
      .then((response) => {
        refetch();
        toast.success(`${response.data.title} deleted successfully`);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
    refetch();
  };

  // /dashboard/post-job/public-job/:id
  const viewHandler = (item) => {
    const path = item?.categoryName?.toLowerCase().replace(/\s+/g, '-');

    path === 'public-job' && navigate(`/dashboard/public/${item.jobId}`, { state: { data: item } });

    path === 'private-job' &&
      navigate(`/dashboard/private/${item.jobId}`, { state: { data: item } });
    path === 'internship' &&
      navigate(`/dashboard/internship/${item.jobId}`, { state: { data: item } });

    path === 'contracts' &&
      navigate(`/dashboard/contracts/${item.jobId}`, { state: { data: item } });
    path === 'shadowing' &&
      navigate(`/dashboard/shadowing/${item.jobId}`, { state: { data: item } });
    path === 'gigs' && navigate(`/dashboard/gigs/${item.jobId}`, { state: { data: item } });
  };

  return (
    <DashBoardItems>
      <section className="">
        {/* card section */}
        {shadowingJobs?.length ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 flex-1">
            {shadowingJobs?.map((item) => (
              <StartupJobCard
                jobInfo={item}
                handleDelete={handleDelete}
                handleClose={handleClose}
                viewHandler={viewHandler}
              />
            ))}
          </section>
        ) : (
          <div className="">
            <NoJob />
          </div>
        )}
      </section>
    </DashBoardItems>
  );
};

export default UsersAllShadowing;
