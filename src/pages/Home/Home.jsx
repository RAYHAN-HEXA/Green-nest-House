import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import TopRatedPlants from '../../components/TopRatedPlants/TopRatedPlants';
import CareTips from '../../components/CareTips/CareTips';
import { useLoaderData } from 'react-router';
import Experts from '../../components/Experts/Experts';
import DecorPhotoOfTheWeek from '../../components/DecorPhotoOfTheWeek/DecorPhotoOfTheWeek';

const Home = () => {
  const { tips, experts } = useLoaderData();

  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden">
      <HeroSection />
      <TopRatedPlants />
      <CareTips tips={tips} />
      <Experts experts={experts} />
      <DecorPhotoOfTheWeek />
    </div>
  );
};

export default Home;
