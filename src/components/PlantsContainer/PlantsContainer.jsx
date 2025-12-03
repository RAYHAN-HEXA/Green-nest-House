import React from 'react';
import PlantsCard from '../PlantsCard/PlantsCard';
import SectionBody from '../../wrappers/SectionBody';

const PlantsContainer = ({ trees }) => {
  return (
    <SectionBody>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 py-5">
        {trees.map((tree) => (
          <PlantsCard key={tree.plantId} tree={tree} />
        ))}
      </div>
    </SectionBody>
  );
};

export default PlantsContainer;
