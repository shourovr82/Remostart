import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import two from '../../Assets/LandingPage/Frame2.png';
import Three from '../../Assets/LandingPage/Frame3.png';
import one from '../../Assets/LandingPage/one.png';
// import benefit photos
import benefit1 from '../../Assets/Images/landingBenefit1.png';
import benefit2 from '../../Assets/Images/landingBenefit2.png';
import benefit3 from '../../Assets/Images/landingBenefit3.png';
import benefitBg from '../../Assets/Images/landingBenefitbg.png';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/order, import/no-extraneous-dependencies
import { Autoplay, Navigation, Pagination } from 'swiper';

const BenefitSection = () => {
    const benefitsItems = [
        {
            id: 1,
            heading: 'Vetted talents from underrepresented groups',
            paraText:
                'Remostart verifies skills, credentials, and work ability of all talents for confident hiring by startups. Our verification process gives guarantee and confidence to our recruiters.',
            Logo: one,
            backgroundImage: benefit1,
        },
        {
            id: 2,
            heading: 'A unique matchmaking algorithm',
            paraText:
                'Our unique match-making algorithm, is designed to bring you the best of talents but from an inclusive perspective. Talents that are not only skilled but match your startup mission.',
            Logo: two,
            backgroundImage: benefit2,
        },
        {
            id: 3,
            heading: 'Cost-Effective  Talent Hiring Platform ',
            paraText:
                'Want to hire the best at the most cost efficient way? This is what startups love about us. Our Underrepresented talents deliver the best of quality at the most cost efficient price points',
            Logo: Three,
            backgroundImage: benefit3,
        },
    ];
    return (
        <>
            {' '}
            <section
                id="getStart"
                className="w-full md:w-full  flex flex-col rounded-xl items-center  mt-4 lg:mt-20 mx-auto "
            >
                {/* section title */}
                <div className="flex relative">
                    <img src={benefitBg} alt="" className="absolute z-0 lg:-left-20 lg:-top-7" />
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-7 md:font-normal z-10">
                        Benefits
                    </h1>
                </div>
                <div className="hidden mt-5 lg:flex justify-between w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3  px-2 mt-6 md:mt-12  gap-20 w-full">
                        {benefitsItems.map((items, i) => (
                            <div key={Math.random()} className="relative ">
                                <img
                                    src={items.backgroundImage}
                                    alt=""
                                    className={`absolute z-0 ${
                                        i === 1 ? 'bottom-0' : 'right-0 bottom-0 top-0 '
                                    }`}
                                />
                                <div className="flex z-10 flex-col relative items-start gap-4 text-left py-4">
                                    <figure>
                                        <img src={items.Logo} className="pr-4 w-20" alt="logo" />
                                    </figure>
                                    <div className="w-full  space-y-3">
                                        <h2 className="text-base md:text-lg xl:text-2xl font-semibold">
                                            {items.heading}
                                        </h2>
                                        <p className="text-md   font-semibold text-[#999999]">
                                            {items.paraText}
                                        </p>
                                        <div className="text-center md:text-left  ">
                                            <Link
                                                to="/startup"
                                                type="button"
                                                className="text-[#B18CFF] "
                                            >
                                                Know More{' '}
                                                <HiArrowLongRight className="inline-block text-xl" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* carousel for mobile device */}
            <div className="lg:hidden border rounded-md border-[#e4e1e16e] mt-10">
                <Swiper
                    pagination
                    autoplay
                    navigation
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {benefitsItems.map((item, i) => (
                        <SwiperSlide key={Math.random()}>
                            <div>
                                <div className="flex flex-col text-center space-y-2  py-2 justify-center items-center">
                                    <div className="pl-2">
                                        <img src={item.Logo} className="!w-10" alt="" />
                                    </div>
                                    <div className="space-y-2 pl-2 ">
                                        <h3 className="text-xl md:text-2xl font-semibold">
                                            {item.heading}
                                        </h3>
                                        <p className="text-sm md:text-base text-[#999999] ">
                                            {item.paraText}
                                        </p>
                                    </div>
                                    <div className="pl-2">
                                        <Link
                                            to="/startup"
                                            type="button"
                                            className="text-[#B18CFF] pr-0 lg:pr-12 font-medium text-xs"
                                        >
                                            Know More{' '}
                                            <HiArrowLongRight className="inline-block text-xl" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default BenefitSection;
