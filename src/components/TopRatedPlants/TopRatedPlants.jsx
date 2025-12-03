import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext/DataContext';
import SectionBody from '../../wrappers/SectionBody';
import PlantsContainer from '../PlantsContainer/PlantsContainer';
import { Link } from 'react-router';

const TopRatedPlants = () => {
  const { treesData } = useContext(DataContext);
  const topPicks = treesData.filter((tree) => tree.rating > 4.75);

  return (
    <div className="flex flex-col">
      {/* Full-width accent banner */}
      <div className="w-full flex flex-col justify-center items-center bg-accent py-6 md:py-10">
        <h1 className="text-secondary-content text-2xl md:text-4xl font-bold text-center leading-snug">
          Here are Our Best Picks for You! 🌿
        </h1>
      </div>

      {/* Centered intro text */}
      <p className="text-secondary-content text-base md:text-lg mb-5 text-center max-w-md md:max-w-2xl mx-auto px-4 md:px-20 mt-5">
        Discover the most vibrant, healthy, and stunning plants we’ve handpicked for your home.
        Each one is ready to bring life, freshness, and a touch of nature’s calm into your space.
      </p>

      {/* Responsive plant grid */}
      <PlantsContainer trees={topPicks} />

      {/* Centered CTA */}
      <SectionBody>
        <div className="flex justify-center mt-5">
          <Link
            to="/plants"
            className="btn btn-accent text-sm md:text-base px-4 md:px-8"
          >
            See all Plants
          </Link>
        </div>
      </SectionBody>
    </div>
  );
};

export default TopRatedPlants;
