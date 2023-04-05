import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { MdOutlineClear } from 'react-icons/md';

const TalentCards = () => {
  const talentsCardsItems = [
    {
      itemType: 'STARTER',
      price: 19,
      itemColor: '#19a5ff',
      borderColor: 'border-[#30d7ff]',
      description: {
        searches: '5 Searches',
        fullDescription: `sloe posuere enim id nec. Molestie neque, sed fusce faucibus.`,
      },
      featuresLists: [
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: false,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: false,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
      ],
    },
    {
      itemType: 'TEAM',
      price: 29,
      itemColor: '#ff9900',
      borderColor: 'border-[#fcbc5c]',
      description: {
        searches: '25 Searches',
        fullDescription: `sloe posuere enim id nec. Molestie neque, sed fusce faucibus.`,
      },
      featuresLists: [
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: false,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
      ],
    },
    {
      itemType: 'BUSINESS',
      itemColor: '#ff1830',
      borderColor: 'border-[#fee719]',
      price: 39,
      description: {
        searches: '50 Searches',
        fullDescription: `sloe posuere enim id nec. Molestie neque, sed fusce faucibus.`,
      },
      featuresLists: [
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
        {
          availability: true,
          name: 'Is a sales copy really omnipotent? Is there a universal formula for writing copy that will definitely lead to a sale?',
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col  lg:grid lg:grid-cols-6 mt-10 2xl:mt-5 gap-6 2xl:gap-10 max-md:px-3">
      {talentsCardsItems?.map((item) => (
        <div
          className={`border col-span-2 py-6 shadow-sm duration-300 ease-in-out hover:shadow-2xl hover:shadow-[#dfdcdc] shadow-[#f7f7f7] px-5 rounded-lg ${item?.borderColor}`}
        >
          {/* heading  */}
          <div>
            <h1 className={`text-[${item?.itemColor}] font-bold`}>{item?.itemType}</h1>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-end gap-2">
              <h2 className="text-3xl font-bold">${item?.price} </h2>
              <span className={`text-[${item?.itemColor}]`}>user/month</span>
            </div>
            <div>
              <button
                className={`${
                  item?.itemType === 'STARTER' &&
                  `bg-[${item?.itemColor}] hover:bg-white hover:text-[#19a5ff] hover:border-[#19a5ff] border border-transparent text-white`
                }      ${
                  item?.itemType === 'TEAM' &&
                  `hover:bg-[#ff9900] bg-white text-[#ff9900] border-[#ffc46b] border hover:border-transparent hover:text-white`
                }
                                    ${
                                      item?.itemType === 'BUSINESS' &&
                                      `hover:bg-[#ff3449] bg-white text-[#ff3449] border-[#ff3449] border hover:border-transparent hover:text-white`
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
            <hr className="border border-[#bcbcbc71] " />
          </div>
          <div>
            <ul className="flex flex-col gap-4">
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
                  <p className="text-sm">{feature?.name}</p>
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
