import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RemoForceDashBoardItems from '../../../../Routes/Roots/RemoForceDashBoardItems';
import NoJob from '../../../StartupDashboard/DashboardPages/NoJob';
import JobCard from './JobCardComponent/JobCard';

const RemoforceContracts = () => {
  const { data: contracts } = useQuery(['contracts'], () =>
    axios
      .get(`${process.env.REACT_APP_URL_STARTUP}/api/job/remoforce/contracts`)
      .then((res) => res.data)
  );

  const navigate = useNavigate();

  const handleApplyNow = (item) => {
    navigate(`/remoforce-dashboard/category-jobs/${item._id}`, { state: { data: item } });
  };

  return (
    <RemoForceDashBoardItems>
      <section>
        {/* card section */}
        {contracts.length ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto gap-3  ">
            {contracts.map((item) => (
              <JobCard key={Math.random()} items={item} applyNowBtn={handleApplyNow} />
            ))}
          </section>
        ) : (
          <NoJob />
        )}
      </section>
    </RemoForceDashBoardItems>
  );
};

export default RemoforceContracts;
