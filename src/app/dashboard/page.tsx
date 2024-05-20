import React from 'react';
import { IoBagHandleSharp } from 'react-icons/io5';
import { PiArrowDownLeft, PiArrowUpRightLight } from 'react-icons/pi';
import { RiTruckLine } from 'react-icons/ri';

const cardData = [
  {
    icon: <IoBagHandleSharp className="text-[#0679FF] text-2xl" />,
    value: '5,342',
    label: 'Label One',
    percentage: '+20%',
    arrowIcon: (
      <PiArrowUpRightLight className="text-[#01B148] relative ml-[45px] bottom-5" />
    ),
  },
  {
    icon: <IoBagHandleSharp className="text-[#0679FF] text-2xl" />,
    value: '867',
    label: 'Label Two',
    percentage: '-5%',
    arrowIcon: (
      <PiArrowDownLeft className="text-[#FF4500] relative ml-[45px] bottom-5" />
    ),
  },
  {
    icon: <RiTruckLine className="text-gray-600 text-2xl" />,
    value: '10',
    label: 'Label Three',
    percentage: '-17%',
    arrowIcon: (
      <PiArrowDownLeft className="text-[#FF4500] relative ml-[45px] bottom-5" />
    ),
  },
  {
    icon: <RiTruckLine className="text-gray-600 text-2xl" />,
    value: '10',
    label: 'Label Four',
    percentage: '-17%',
    arrowIcon: (
      <PiArrowDownLeft className="text-[#FF4500] relative ml-[45px] bottom-5" />
    ),
  },
];

const Page = () => {
  return (
    <React.Fragment>
      <div className="text-2xl font-semibold ml-16 py-8 text-black">
        Dashboard
      </div>
      <div className="flex flex-wrap ml-16 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-[275px] h-[75px] border-2 rounded-md p-4"
          >
            <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center">
              {card.icon}
            </div>
            <p className="font-bold text-base ml-12 relative bottom-[45px]">
              {card.value}
            </p>
            <p className="relative ml-12 bottom-[48px] text-[#494949]">
              {card.label}
            </p>
            <p className="relative ml-[180px] bottom-[75px] text-[#494949]">
              {card.percentage}
              <p className="relative right-1">{card.arrowIcon}</p>
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Page;
