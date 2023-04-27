import React, { useState } from 'react';
import RemoForceMyJobApplied from './RemoForceMyJobApplied';
import RemoForceMyJobRequest from './RemoForceMyJobRequest';

const RemoForceMyJobTables = () => {
  const [tabActive, setTabActive] = useState(1);
  const jobLists = [
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'ui/ux designer',
    //   status: 'Applied',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'Content Writer...',
    //   status: 'Applied',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'WIndjob giver...',
    //   status: 'Interview',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'Circular moton..',
    //   status: 'Interview',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'ui/ux designer',
    //   status: 'Rejected',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'ui/ux designer',
    //   status: 'Rejected',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'ui/ux designer',
    //   status: 'Rejected',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'ui/ux designer',
    //   status: 'Applied',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'ui/ux designer',
    //   status: 'Interview',
    //   // link: <FiLink />,
    // },
    // {
    //   icon: avatar,
    //   StartUp: 'RemoStart',
    //   Applied: 'November . 20 . 2004',
    //   Title: 'ui/ux designer',
    //   status: 'Applied',
    //   // link: <FiLink />,
    // },
  ];
  const [fullList, setFullList] = useState(
    jobLists?.filter((singleJob) => singleJob?.status === 'Applied') || []
  );
  const handleChangeTabApplied = () => {
    const getApplied = jobLists?.filter((singleJob) => singleJob?.status === 'Applied');
    setFullList(getApplied);
    setTabActive(1);
  };
  const handleChangeTabInterview = () => {
    const getApplied = jobLists?.filter((singleJob) => singleJob?.status === 'Interview');
    setFullList(getApplied);
    setTabActive(2);
  };
  const handleChangeTabRejected = () => {
    const getApplied = jobLists?.filter((singleJob) => singleJob?.status === 'Rejected');
    setFullList(getApplied);
    setTabActive(3);
  };
  return (
    <div>
      {/* states buttons section starts */}
      <div className="flex my-6  justify-between pr-3 items-center">
        <div className="flex  ">
          <button
            className={`border-b-[3px] pb-1.5  px-1.5  lg:px-2.5 max-md:text-[13px]  text-[#00c42b] font-medium ${
              tabActive === 1 && 'border-[#00c42b] '
            }`}
            onClick={() => handleChangeTabApplied()}
            type="button"
            name="applied"
          >
            Applied
          </button>
          <button
            className={`border-b-[3px] pb-1.5 px-1.5  lg:px-2.5 max-md:text-[13px]  text-[#3b82f6] font-medium ${
              tabActive === 2 && 'border-[#3b82f6] '
            }`}
            onClick={() => handleChangeTabInterview()}
            type="button"
            name="interview"
          >
            Interview <span className="max-md:hidden">Scheduled</span>
          </button>
          <button
            className={`border-b-[3px] text-[#ff1830] pb-1.5 px-1.5  lg:px-2.5 max-md:text-[13px]  font-medium ${
              tabActive === 3 && 'border-[#ff1830] ] '
            }`}
            onClick={() => handleChangeTabRejected()}
            type="button"
            name="rejected"
          >
            Rejected
          </button>
        </div>

        <div className="">
          <button
            className={`border-b-[3px] pb-1 px-1.5  lg:px-2.5 max-md:text-[13px]  text-[#ff9900] font-medium ${
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
        {tabActive !== 4 && <RemoForceMyJobApplied fullList={fullList} />}

        {tabActive === 4 && <RemoForceMyJobRequest />}
      </div>
    </div>
  );
};

export default RemoForceMyJobTables;
