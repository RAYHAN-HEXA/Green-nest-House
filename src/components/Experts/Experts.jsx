import React from 'react';
import SectionBody from '../../wrappers/SectionBody';
import AllExperts from './AllExperts';

const Experts = ({ experts }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-accent p-5 my-5">
        <h1 className="text-secondary-content text-3xl font-bold">Meet Our Green Experts 🌱</h1>
      </div>
      <div>
        <p className="text-secondary-content text-lg mb-3 text-center max-w-xl mx-auto">
          Learn from the best! Our plant care experts bring years of experience and passion to help
          your garden thrive.
        </p>
        <AllExperts experts={experts} />
      </div>
    </div>
  );
};

export default Experts;
