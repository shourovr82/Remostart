import React from 'react';
import StartupBanner from './StartupBanner';
import StartupContactUs from './StartupContactUs';
import StartUpSection1 from './StartUpSection1';
import StartupSection2 from './StartupSection2';
import StartupSection3 from './StartupSection3';

const StartupHome = () => (
    <>
        <StartupBanner />
        <StartUpSection1 />
        <StartupSection2 />
        <StartupSection3 />
        {/* <StartupTestimonial />
        <StartupFaq /> */}
        <StartupContactUs />
    </>
);

export default StartupHome;
