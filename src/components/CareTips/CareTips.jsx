import React from 'react';
import SectionBody from '../../wrappers/SectionBody';
import AllTips from './AllTips';

const CareTips = ({ tips }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-accent p-5 my-5">
        <h1 className="text-secondary-content text-3xl font-bold">
          Tips to keep your plants thriving! 🌿
        </h1>
      </div>
      <AllTips tips={tips} />
    </div>
  );
};

export default CareTips;
