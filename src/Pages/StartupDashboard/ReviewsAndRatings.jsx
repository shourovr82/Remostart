import React from 'react';
import comingsoonBg from '../../Assets/Dashboard/startupProfile.svg';

const ReviewsAndRatings = () => (
  <div className="flex justify-center items-center text-center lg:h-[100vh]">
    <div>
      <img src={comingsoonBg} className="w-full" alt="" />
      <div className="mt-5">
        <p className="text-xl md:text-2xl ">
          Based on your DEI score reviews and rating will be updated soon.
        </p>
      </div>
    </div>
  </div>
);

export default ReviewsAndRatings;
