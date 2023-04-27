import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { MdOutlineClear } from 'react-icons/md';

const TalentCards = () => {
  const talentsCardsItems = [
    {
      itemType: 'STARTER',
      price: 10,
      itemColor: '#19a5ff',
      borderColor: 'border-[#30d7ff]',
      description: {
        searches: '7 Searches',
        fullDescription: `is counted as number
        of independent search you can make`,
      },
      featuresLists: [
        {
          availability: true,
          name: 'Basic filtering options based on location, skill set, and experience level',
        },
        {
          availability: true,
          name: 'Access to all your search histories and results',
        },
        {
          availability: true,
          name: 'Send interview requests to matched talents, manage interviews in one place',
        },
        {
          availability: false,
          name: 'Access to only  a pool of pre-vetted and highly skilled talents',
        },
        {
          availability: false,
          name: 'Customized matching algorithms that take into account company culture and preferences',
        },
      ],
    },
    {
      itemType: 'TEAM',
      price: 29,
      itemColor: '#ff9900',
      borderColor: 'border-[#fcbc5c]',
      description: {
        searches: '50 Searches',
        fullDescription: `is counted as number
        of independent search you can make`,
      },
      featuresLists: [
        {
          availability: true,
          name: 'Basic filtering options based on location, skill set, and experience level',
        },
        {
          availability: true,
          name: 'Access to all your search histories and results',
        },
        {
          availability: true,
          name: 'Send interview requests to matched talents, manage interviews in one place',
        },
        {
          availability: true,
          name: 'Access to only  a pool of pre-vetted and highly skilled talents',
        },
        {
          availability: false,
          name: 'Customized matching algorithms that take into account company culture and preferences',
        },
      ],
    },
    {
      itemType: 'BUSINESS',
      itemColor: '#ff1830',
      borderColor: 'border-[#ff1830]',
      price: 39,
      description: {
        searches: '100 Searches',
        fullDescription: `is counted as number
        of independent search you can make`,
      },
      featuresLists: [
        {
          availability: true,
          name: 'Basic filtering options based on location, skill set, and experience level',
        },
        {
          availability: true,
          name: 'Access to all your search histories and results',
        },
        {
          availability: true,
          name: 'Send interview requests to matched talents, manage interviews in one place',
        },
        {
          availability: true,
          name: 'Access to only  a pool of pre-vetted and highly skilled talents',
        },
        {
          availability: true,
          name: 'Customized matching algorithms that take into account company culture and preferences',
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col  lg:grid lg:grid-cols-4 2xl:grid-cols-6  mt-10 2xl:mt-5 gap-6 2xl:gap-10 max-md:px-3">
      {talentsCardsItems?.map((item) => (
        <div
          className={`border col-span-2 py-6 shadow-sm duration-300 ease-in-out hover:shadow-2xl hover:shadow-[${item?.itemColor}] shadow-[${item?.itemColor}] px-5 rounded-lg ${item?.borderColor}`}
        >
          {/* heading  */}
          <div>
            <h1 className={`text-[${item?.itemColor}] font-bold`}>{item?.itemType}</h1>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-end gap-2">
              <h2 className="text-3xl font-bold">${item?.price} </h2>
              <span className={`text-[${item?.itemColor}]`}>user/validity</span>
            </div>
            <div>
              <button
                className={`${
                  item?.itemType === 'STARTER' &&
                  `bg-[${item?.itemColor}] hover:bg-white hover:text-[#19a5ff] hover:border-[#19a5ff] border border-transparent text-white`
                }      ${
                  item?.itemType === 'TEAM' &&
                  `hover:bg-white bg-[#ff9900] text-white hover:border-[#ffc46b] border border-transparent hover:text-[#ff9900]`
                }
                                    ${
                                      item?.itemType === 'BUSINESS' &&
                                      `hover:bg-white bg-[#ff3449] text-white hover:border-[#ff3449] border border-transparent hover:text-[#ff3449]`
                                    }
                                rounded-lg py-1.5 2xl:px-8 px-5 duration-300 ease-in-out `}
                type="button"
              >
                Buy
              </button>
            </div>
          </div>
          {/* description */}
          <div className="mt-3">
            <p>
              {' '}
              <span className="text-xl font-semibold">{item?.description?.searches}</span>{' '}
              {item?.description?.fullDescription}
            </p>
          </div>
          {/* border */}
          <div className="my-5">
            <hr className={`border ${item?.borderColor} `} />
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              {item?.featuresLists?.map((feature) => (
                <li className="flex gap-2  2xl:gap-3 items-start">
                  <span
                    className={`border p-0.5 2xl:p-1 mt-1 rounded-full ${
                      feature?.availability === true
                        ? 'border-[#31be00] text-[#31be00]'
                        : 'border-[#181818] text-[#181818]'
                    }`}
                  >
                    {feature?.availability === true ? <BsCheckLg /> : <MdOutlineClear />}
                  </span>
                  <p className={`text-sm `}>{feature?.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TalentCards;
