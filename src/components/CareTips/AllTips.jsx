import React from 'react';
import SectionBody from '../../wrappers/SectionBody';

const AllTips = ({ tips }) => {
  const TipCard = ({ theTip }) => {
    const { id, tipCategory, tip } = theTip;

    return (
      <div className="flex flex-col justify-between items-center bg-linear-to-br to-primary via-emerald-800 from-primary p-5 md:p-10 h-40 md:h-60 rounded-4xl hover:scale-105 duration-300 shadow-[inset_2px_2px_10px_rgba(256,256,256,0.5)] hover:shadow-[inset_2px_2px_7px_rgba(256,256,256,0.5)] ease-in-out">
        <p className="text-white">{id}</p>
        <h1 className="text-4xl font-semibold text-accent">{tipCategory}</h1>
        <p className="text-center text-xl text-base-300">{tip}</p>
      </div>
    );
  };

  return (
    <SectionBody>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {tips.map((tip, index) => {
          return <TipCard key={index} theTip={tip} />;
        })}
      </div>
    </SectionBody>
  );
};

export default AllTips;
