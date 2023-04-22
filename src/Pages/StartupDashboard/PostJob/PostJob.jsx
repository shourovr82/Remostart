import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const PostJob = () => {
  const { data: categories } = useQuery(['categories'], () =>
    axios.get(`${process.env.REACT_APP_URL_STARTUP}/api/job/categories`).then((res) => res.data)
  );

  return (
    <section className="flex flex-col w-full">
      <h1 className="text-4xl font-semibold">Post Job</h1>
      <div className="h-[2px] w-full bg-slate-500 mt-4" />
      <p className=" font-semibold text-[#999999] mt-4">
        We have diffferent kind of jobs that you may want to post, this is where you get the jobs
        posted and it will automatically be sent to the matching talents, dont forget to put the
        qualifieers so only the right talent will apply.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-10 mt-10 px-10 md:px-0">
        {categories?.data.map((item) => (
          <div
            key={item._id}
            className="flex flex-col justify-between  border   rounded-[10px]  items-center py-16 space-y-3 px-4 md:px-0 jobPostCardShaddow"
          >
            <div>
              <img src={item.categoryImage} className="w-full" alt="" />
            </div>
            <div className="flex flex-col items-center text-center space-y-5 px-4">
              <span className="text-2xl font-bold">{item.categoryName}</span>
              <p className="text-xs text-[#999999] font-bold">{item.description}</p>
              {item.comingSoon === 'false' && (
                <Link
                  className="border py-1 text-sm font-bold px-6 rounded-3xl border-black  "
                  to={`/dashboard/post-job/${item.categoryName.replace(/ /g, '-').toLowerCase()}`}
                >
                  Create
                </Link>
              )}
              {item.comingSoon === 'true' && (
                <Link
                  className=""
                  to={`/dashboard/post-job/${item.categoryName.replace(/ /g, '-').toLowerCase()}`}
                >
                  <button
                    disabled
                    type="button"
                    className="border-2 py-1 text-sm font-bold px-6 rounded-3xl disabled:text-gray-400 "
                  >
                    Coming Soon
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostJob;
