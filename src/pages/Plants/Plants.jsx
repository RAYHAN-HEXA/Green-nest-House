import React, { useContext } from 'react';
import SectionBody from '../../wrappers/SectionBody';
import PlantsContainer from '../../components/PlantsContainer/PlantsContainer';
import { DataContext } from '../../context/DataContext/DataContext';

const Plants = () => {
  const { treesData } = useContext(DataContext);
  // console.log(treesData);

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-accent p-5 my-5">
        <h1 className="text-secondary-content text-3xl font-bold">
          All our Amazing plants 🌿
        </h1>
      </div>
      <PlantsContainer trees={treesData} />
    </div>
  );
};

export default Plants;
