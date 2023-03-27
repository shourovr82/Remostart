import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import TextTransition, { presets } from 'react-text-transition';
import LandingPageLogo from '../../Assets/Images/landingHomeBanner.svg';

const TEXTS = ['inclusively', 'underrepresented'];
const Banner = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((i) => i + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <header className="flex flex-col-reverse md:flex-row justify-between w-full">
                <section className="flex flex-col w-full  justify-center mt-4 md:mt-0">
                    <h1 className="font-sans inline  font-bold text-2xl md:text-3xl lg:text-[38px] xl:text-[44px]  text-left md:text-left lg:leading-tight">
                        <span className="flex gap-x-3 h-8 md:h-12 lg:h-16 xl:h-14">
                            Hire
                            <TextTransition
                                className="text-[#ff9900] h-[5px] "
                                direction="down"
                                springConfig={presets.wobbly}
                            >
                                {TEXTS[index % TEXTS.length]}
                            </TextTransition>
                        </span>
                        talents remotely to <br className="max-md:hidden" /> work{' '}
                        <br className="lg:hidden" />
                        <span className="text-[#ff9900] ">
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Contract Job', 'Internship', 'Full Time', 'Part Time']}
                                loop={Infinity}
                                cursor
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        for <br /> your projects.
                    </h1>
                    <div className="grid grid-cols-2 gap-5 my-4 lg:my-10 pr-6 lg:w-3/4 text-center">
                        <Link
                            to="/startup"
                            className="px-6 py-3 lg:px-10 lg:py-3 text-sm bg-[#0B132A] text-white  border-2 font-semibold rounded-md border-black"
                        >
                            Startup
                        </Link>

                        <Link
                            to="/remoforce"
                            type="button"
                            className="px-6 py-3 lg:px-10 lg:py-3 text-sm font-semibold rounded-md border-2 border-black"
                        >
                            Remoforce
                        </Link>
                    </div>
                </section>

                <section className="w-full">
                    <img className="w-full" src={LandingPageLogo} alt="LandingPageLogo" />
                </section>
            </header>
            <div className="flex  justify-center mt-20 md:mt-10">
                <a href="#getStart" className="flex items-center flex-col gap-3">
                    <span className="font-semibold text-sm md:text-base">Get Started!</span>
                    <IoIosArrowDropdown className="text-lg md:text-xl mx-auto" />
                </a>
            </div>
        </>
    );
};

export default Banner;
