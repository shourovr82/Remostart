import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiLineChart } from 'react-icons/bi';
import { HiOutlinePresentationChartLine } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Startup/StartUpHome/section1Logo.svg';

const StartUpSection1 = () => (
  <section className="flex flex-col mt-4 md:mt-10 border-b-2 pb-10">
    <div className="mt-10 lg:grid grid-cols-7 px-10 py-8 mb-10  rounded-2xl getDmeShadowCard">
      <div className="col-span-5 space-y-5">
        <h1 className="text-[#ff9900] text-3xl font-medium">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing?
        </h1>
        <p className="text-[#999999] font-medium text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
          <br />
          interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
          conubia <br /> nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="col-span-2 max-lg:mt-10 flex justify-center items-center  lg:border-l-2 lg:border-[#ffeed4]">
        <button
          className="px-5 py-4 rounded-full font-semibold  text-[#FF9900] getDmeShadow"
          type="button"
        >
          Get My DEI Score
        </button>
      </div>
    </div>

    {/* Section two */}
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 m-4 md:mt-14 justify-center items-center">
      <div className="flex w-full md:w-11/12 mt-10 md:mt-0">
        <img src={logo} className="w-full" alt="" />
      </div>

      <div className="flex flex-col justify-center w-full">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl text-center md:text-left">
          Global Talents Ready to
          <br className="hidden lg:block" /> work with you
        </h1>
        <p className="text-base md:text-base lg:text-base xl:text-xl font-semibold text-[#999999] mt-2 md:mt-6 text-center md:text-left">
          Irrespective of age, class, race or region our <br className="hidden lg:block" />
          mission cares less about this. To us this is an <br className="hidden lg:block" />{' '}
          advantage for building global solutions
        </p>
        <div className="flex flex-col space-y-6 mt-3 pl-4">
          <div className="flex py-2 items-center">
            <span className="inline-block mr-5 text-4xl">
              <HiOutlinePresentationChartLine />
            </span>
            <span className="inline-block text-sm font-semibold md:font-normal lg:text-base">
              We have a dichotomy of talents from all around the world
            </span>
          </div>
          <div className="flex py-2 items-center">
            <span className="inline-block mr-5 text-4xl">
              <BiLineChart />
            </span>
            <span className="inline-block text-sm font-semibold md:font-normal lg:text-base">
              With these talents comes different perspectives which helps you scale
            </span>
          </div>

          <div className="flex py-2 items-center">
            <span className="inline-block mr-5 text-4xl">
              <AiOutlineShareAlt className="rotate-90" />
            </span>
            <span className="inline-block text-sm font-semibold md:font-normal lg:text-base">
              Diversity, equity and inclusion should not just be a phrase, its what we help you
              achieve
            </span>
          </div>
          <div className="mx-auto md:mx-0">
            <Link
              to="/remowelcome"
              className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
            >
              Create your profile for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default StartUpSection1;
