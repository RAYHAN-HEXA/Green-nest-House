import React, { useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import axios from 'axios';

const DataProvider = ({ children }) => {
  const [treesData, setTreesData] = useState([]);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axios.get('/plants.json');
        setTreesData(response.data);
      } catch (error) {
        console.error('Failed to fetch plants.json:', error);
      }
    };

    fetchTrees();
  }, []);

  return (
    <DataContext.Provider value={{ treesData, setTreesData }}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
