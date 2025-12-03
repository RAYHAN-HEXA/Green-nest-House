import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext/DataContext';
import { toast } from 'react-toastify';
import SectionBody from '../../wrappers/SectionBody';
import { FaStar } from 'react-icons/fa';

const PlantDetails = () => {
  const { id } = useParams();
  const { treesData } = useContext(DataContext);

  const [plant, setPlant] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true); // ✅ separate loading state

  useEffect(() => {
    if (treesData?.length) {
      const foundPlant = treesData.find((p) => p.plantId === parseInt(id));
      setPlant(foundPlant || null);
      setLoading(false);
    }
  }, [id, treesData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Consultation booked successfully!');
    setFormData({ name: '', email: '' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="loading loading-spinner loading-xl text-primary"></span>
      </div>
    );
  }

  if (!plant) {
    return (
      <SectionBody>
        <h1 className="text-3xl font-bold text-error">Plant Not Found</h1>
        <p className="text-gray-500">
          The plant you’re looking for doesn’t exist or may have been removed.
        </p>
        <Link to="/plants" className="btn btn-primary mt-3">
          Back to All Plants
        </Link>
      </SectionBody>
    );
  }

  return (
    <SectionBody>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-primary">{plant.plantName}</h1>
          <p className="text-gray-500">{plant.description}</p>
          <p>
            <strong>Price:</strong> ${plant.price}
          </p>
          <p className="flex items-center space-x-1">
            <strong>Rating:</strong> {plant.rating} <FaStar />
          </p>
          <p>
            <strong>Stock:</strong> {plant.availableStock}
          </p>
          <p>
            <strong>Care Level:</strong> {plant.careLevel}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Provided by:</strong> {plant.providerName}
          </p>
        </div>
      </div>

      <div className="bg-base-100 p-6 rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Book Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Book Now
          </button>
        </form>
      </div>
    </SectionBody>
  );
};

export default PlantDetails;
