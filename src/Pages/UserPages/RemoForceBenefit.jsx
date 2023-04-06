/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Carousel } from 'react-responsive-carousel';
import one from '../../Assets/Images/RemoForceHome/Benefit1.png';
import three from '../../Assets/Images/RemoForceHome/Benefit3.png';
import two from '../../Assets/Images/RemoForceHome/Benfit2.png';

const RemoForceBenefit = () => {
    const benefitsItems = [
        {
            id: 1,
            heading: 'Flexible and dynamic work experience',
            paraText:
                'This is the beauty of remote work, you are not tied to a box, its flexible, you work at your own pace, more so, you work where you want and how, nothing beats that.',
            Logo: one,
        },
        {
            id: 2,
            heading: 'Dont Worry about the hassles of payments',
            paraText:
                'We understand the hassle of payments, especially if you are from underrepresented demographics , we got you covered, our flexible pay system, works wherever you are.',
            Logo: two,
        },
        {
            id: 3,
            heading: 'Work on projects that excites you',
            paraText:
                'Most of our projects are as revolutionary as you are, you have the opportunity to be at the instance of something new and amazing, and work on projects with similar ideals like you',
            Logo: three,
        },
    ];
    return (
        <section className="w-full md:w-full lg:h-[420px] h-full flex flex-col rounded-xl items-center mt-4 lg:mt-5 mx-auto ">
            <div className="hidden lg:flex justify-between w-full">
                <div className="grid grid-cols-1 md:grid-cols-3  mt-6 md:mt-12 gap-24 w-full">
                    {benefitsItems?.map((items, i) => (
                        <div key={Math.random()}>
                            <div className="flex flex-col items-start gap-4 text-left py-4">
                                <figure>
                                    <img src={items.Logo} className="pr-4 w-20" alt="logo" />
                                </figure>
                                <div className="w-full space-y-4">
                                    <h2 className="text-base md:text-lg xl:text-2xl font-semibold">
                                        {items.heading}
                                    </h2>
                                    <p className="text-base font-semibold text-[#999999]">
                                        {items?.paraText}
                                    </p>
                                    <div className="text-center md:text-left mt-8">
                                        <button
                                            type="button"
                                            className="text-[#B18CFF] py-3 pr-12 pl-1 font-medium text-base"
                                        >
                                            Know More{' '}
                                            <HiArrowLongRight className="inline-block text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* carousel for mobile device */}

            <Carousel
                className="mt-4 md:mt-10 block lg:hidden w-full"
                showThumbs={false}
                showArrows={false}
                swipeable={true}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
            >
                {benefitsItems?.map((item, i) => (
                    <div key={Math.random()}>
                        <div className="flex flex-col text-center space-y-2 px-5 my-8 py-2 border">
                            <div>
                                <img src={item.Logo} className="!w-10" alt="" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    {item.heading}
                                </h3>
                                <p className="text-sm md:text-base font-semibold">
                                    {item.paraText}
                                </p>
                            </div>
                            <div className="">
                                <button
                                    type="button"
                                    className="text-[#B18CFF] py-3 pr-0 lg:pr-12 font-medium text-xs"
                                >
                                    Know More <HiArrowLongRight className="inline-block text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default RemoForceBenefit;
