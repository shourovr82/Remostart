import React from 'react';
import GetVerifyBanner from './GetVerifyBanner';
import GetVerifyBlueBadge from './GetVerifyBlueBadge';
import GetVerifyDiamondBadge from './GetVerifyDiamondBadge';
import GetVerifyGoldenBadge from './GetVerifyGoldenBadge';

const RemoForceVerifyHome = () => {
  console.log('');
  return (
    <section>
      <GetVerifyBanner />
      <GetVerifyBlueBadge />
      <GetVerifyGoldenBadge />
      <GetVerifyDiamondBadge />
    </section>
  );
};

export default RemoForceVerifyHome;
