import React from 'react';
import { FaCircle, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import redLabel from '../../assets/images/red-label.png';

const PlantsCard = ({ tree }) => {
  const { image, plantName, careLevel, rating, plantId, availableStock } = tree;
  return (
    <div className="relative flex flex-col bg-base-200 hover:bg-base-300 transition-all duration-300 p-3 rounded-box shadow-md hover:shadow-lg space-y-3 hover:[&_img]:scale-105 hover:[&_div.absolute]:opacity-0">
      {availableStock < 10 && (
        <div className="absolute -top-3 -left-3 h-25 w-25 duration-300 z-10">
          <img className="w-full h-full -rotate-12" src={redLabel} alt="Low stock label" />
          <p className="absolute inset-0 text-accent flex items-center justify-center -rotate-12 font-bold">
            only {availableStock} left!
          </p>
        </div>
      )}

      <div className="w-full aspect-square overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover transform transition-transform duration-300"
          src={image}
          alt={`${plantName}`}
        />
      </div>
      <h2 className="text-lg font-semibold text-primary">{tree.plantName}</h2>

      <div className="flex items-center justify-between space-x-1">
        <div className="flex items-center text-accent">
          <span>{rating}</span>
          <FaStar />
        </div>

        <div className="flex justify-center items-center space-x-1">
          <small>Ease:</small>
          <FaCircle
            className={`${
              careLevel.toLowerCase() === 'easy'
                ? 'text-green-400'
                : careLevel.toLowerCase() === 'medium'
                ? 'text-yellow-400'
                : 'text-red-400'
            }`}
          />
        </div>
      </div>
      <Link className="btn btn-primary text-primary-content" to={`/plants/${plantId}`}>
        See Details
      </Link>
    </div>
  );
};

export default PlantsCard;
