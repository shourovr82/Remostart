/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BsCalendarMinus } from 'react-icons/bs';
import { IoGolfOutline } from 'react-icons/io5';
import { Carousel } from 'react-responsive-carousel';
import cardLogo1 from '../../Assets/Startup/domainsWeWork/card1.png';
import cardLogo2 from '../../Assets/Startup/domainsWeWork/card2.png';
import cardLogo3 from '../../Assets/Startup/domainsWeWork/card3.png';
import cardLogo4 from '../../Assets/Startup/domainsWeWork/card4.png';
import cardLogo5 from '../../Assets/Startup/domainsWeWork/card5.png';
import section3logo from '../../Assets/Startup/StartUpHome/section3Logo.png';

const StartupSection3 = () => {
    const items = [
        {
            id: 1,
            logo: cardLogo1,
            heading: 'Tech',
        },
        {
            id: 2,
            logo: cardLogo2,
            heading: 'Non-Tech',
        },
        {
            id: 3,
            logo: cardLogo3,
            heading: 'Operations',
        },
        {
            id: 4,
            logo: cardLogo4,
            heading: 'Social',
        },
        {
            id: 5,
            logo: cardLogo5,
            heading: 'Others',
        }
    ]
    return (
        <>
            <section className='flex flex-col-reverse md:grid md:grid-cols-2 gap-y-6 md:gap-y-0 w-full mt-10 border-b-2 pb-10'>

                <section className='w-full md:w-2/3 mx-auto'>
                    <img src={section3logo} className='w-full' alt="LandingPageLogo" />
                </section>

                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold text-2xl md:text-3xl lg:text-5xl text-center md:text-left'>
                        Lets’ Micro-manage<br className='hidden xl:block' />
                        Your Projects For You
                    </h1>
                    <div className='flex flex-col justify-start items-center md:justify-start md:items-start space-y-2 mt-3 pl-4'>
                        <div className='flex py-2 items-center'>
                            <span className='inline-block mr-5 text-2xl'>
                                <BsCalendarMinus />
                            </span>
                            <span className='text-base md:text-base lg:text-base xl:text-xl'>
                                Give us your projects and lets get the right team to execute for you
                            </span>
                        </div>
                        <div className='flex py-2 items-center'>
                            <span className='inline-block mr-5 text-2xl'>
                                <IoGolfOutline />
                            </span>
                            <span className='text-base md:text-base lg:text-base xl:text-xl'>
                                Remo-start manages your project and team all you need to do is to relax all the way
                            </span>
                        </div>
                        <div>
                            <button type='button' className='px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Everything you will ever need at your remote doorway */}

            <section className='flex flex-col px-0 md:px-10 py-10 border-b-2 pb-10'>
                <span className='text-2xl md:text-3xl lg:text-[32px] font-bold mb-3'>
                    Everything you will ever need at your remote doorway !!
                </span>
                <p className='text-base mt-1 md:mt-4 lg:text-xl text-[#999999] xl:text-base font-base'>
                    Start your startup with us in less than 5 minutes or less
                </p>
            </section>


            {/** *********************  Statistics Starts here ****************************** */}
            <div className='border-b-2 pb-20'>
                <section className='flex flex-col'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl text-center font-bold mt-10'>
                        Domains We Work On
                    </h1>
                </section>
                <section className='hidden lg:grid md:grid-cols-5 lg:gap-4 xl:gap-[68px] place-items-center h-full px-2 py-2 md:py-0 mt-10 w-full  '>
                    {
                        items.map(item =>
                            <div key={item.id} className="flex flex-col justify-center items-center text-center p-2 md:py-2  lg:h-[160px] h-full w-full  rounded-lg border cardShadow">
                                    <div className='w-10 h-10 pb-2'>
                                        <img src={item.logo} className='mb-3 ' alt="logo" />
                                    </div>
                                    <div className='md:my-3'>
                                        <span className='text-2xl font-xs '>{item.heading}</span>

                                    </div>
                                </div>
                        )
                    }
                </section>
                {/* for mobile device */}

               < Carousel className='lg:hidden w-full h-80 flex justify-center items-center' showThumbs={false} showArrows={true} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} >
                    {
                        items.map(item =>
                            <div key={item.id} className="flex flex-col mx-8 space-y-3 md:space-y-0 h-60 justify-center items-center border rounded-lg">
                                    <div>
                                        <img src={item.logo} alt="logo" />
                                    </div>
                                    <div>
                                        <span className='text-2xl font-semibold'>{item.heading}</span>
                                        <p className='text-2xl'>{item.pTag}</p>
                                    </div>
                                </div>
                        )
                    }
                </Carousel>
            </div>



        </>
    );
};

export default StartupSection3;
