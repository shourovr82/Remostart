import React, { useState } from 'react';
import avatar from '../../../Assets/Dashboard/tech_crunch.png';
import RemoForceMyJobApplied from './RemoForceMyJobApplied';
import RemoForceMyJobInterview from './RemoForceMyJobInterview';
import RemoForceMyJobRejected from './RemoForceMyJobRejected';
import RemoForceMyJobRequest from './RemoForceMyJobRequest';

const RemoForceMyJobTables = () => {
  const [tabActive, setTabActive] = useState(4);
  const fullList = [
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Applied',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Applied',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Interview',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Interview',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Rejected',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Rejected',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Rejected',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Applied',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Interview',
      // link: <FiLink />,
    },
    {
      icon: avatar,
      StartUp: 'RemoStart',
      Applied: 'November. 20 .2004',
      Title: 'ui/ux designer',
      status: 'Applied',
      // link: <FiLink />,
    },
  ];
  return (
    <div>
      {/* states buttons section starts */}
      <div className="flex justify-between pr-3 items-center">
        <div className="my-6 flex  ">
          <button
            className={`border-b-[3px] pb-1.5 px-2.5 text-[#00c42b] font-medium ${
              tabActive === 1 && 'border-[#00c42b] '
            }`}
            onClick={() => setTabActive(1)}
            type="button"
            name="applied"
          >
            Applied
          </button>
          <button
            className={`border-b-[3px] pb-1.5 px-2.5 text-[#3b82f6] font-medium ${
              tabActive === 2 && 'border-[#3b82f6] '
            }`}
            onClick={() => setTabActive(2)}
            type="button"
            name="interview"
          >
            Interview Scheduled
          </button>
          <button
            className={`border-b-[3px] text-[#ff1830] pb-1.5 px-2.5 font-medium ${
              tabActive === 3 && 'border-[#ff1830] ] '
            }`}
            onClick={() => setTabActive(3)}
            type="button"
            name="rejected"
          >
            Rejected
          </button>
        </div>

        <div>
          <button
            className={`border-b-[3px] pb-1.5 px-2.5 text-[#ff9900] font-medium ${
              tabActive === 4 && 'border-[#ff9900] '
            }`}
            onClick={() => setTabActive(4)}
            type="button"
            name="applied"
          >
            Job Request
          </button>
        </div>
      </div>
      {/*  table for tab */}
      <div>
        {tabActive === 1 && <RemoForceMyJobApplied />}

        {tabActive === 2 && <RemoForceMyJobInterview />}

        {tabActive === 3 && <RemoForceMyJobRejected />}

        {tabActive === 4 && <RemoForceMyJobRequest />}
      </div>
    </div>
  );
};

export default RemoForceMyJobTables;
