import React from 'react';
import SectionBody from '../../wrappers/SectionBody';

const AllExperts = ({ experts }) => {
  const ExpertCard = ({ expert }) => {
    const { name, image, specialization, bio } = expert;

    return (
      <div className="flex flex-col justify-start items-center bg-white rounded-3xl shadow-lg p-6 md:p-8 hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 border-4 border-primary"
        />
        <h2 className="text-2xl font-semibold text-accent mb-1">{name}</h2>
        <p className="text-primary font-medium mb-2 underline underline-offset-4">{specialization}</p>
        <p className="text-center text-base-content text-sm">{bio}</p>
      </div>
    );
  };

  return (
    <SectionBody>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </SectionBody>
  );
};

export default AllExperts;
