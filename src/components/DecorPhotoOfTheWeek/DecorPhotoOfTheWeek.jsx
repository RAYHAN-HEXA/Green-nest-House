import React from 'react';
import SectionBody from '../../wrappers/SectionBody';
import indoorDecorImage from '../../assets/images/interior-decor.jpeg';

const DecorPhotoOfTheWeek = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col justify-center items-center bg-accent p-5 my-5">
          <h1 className="text-secondary-content text-3xl font-bold">
            Our Indoor Decor image of the week! 📸
          </h1>
        </div>
        <SectionBody className="space-y-2">
          <div className="w-full">
            <img src={indoorDecorImage} alt="Plant of the Week" className="w-full" />
          </div>

          <p className="text-center text-lg text-gray-700">
            "A cozy indoor corner with a lush GreenNest plant making the space lively!" - Nathan
            Lyle
          </p>

          <button className="btn btn-accent px-6 py-2 text-lg font-semibold hover:scale-105 duration-300">
            Submit Your Image Too!
          </button>
        </SectionBody>
      </div>
    </div>
  );
};

export default DecorPhotoOfTheWeek;
