/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import RemoLearning1 from './RemoLearning1';
import RemoShadowingBanner from './RemoShadowingBanner';
import RemoShadowingBenefit from './RemoShadowingBenefit';
import ShadowingFaqs from './ShadowingFaqs';
import ShadowingProccess from './ShadowingProccess';

const RemoForceShadowing = () => {
  return (
    <>
      
      <RemoShadowingBanner />
      <RemoShadowingBenefit />
      <RemoLearning1 />
      <ShadowingProccess />
      <ShadowingFaqs />
    </>
  );
};

export default RemoForceShadowing;