import { useState, useEffect } from 'react';
import { fetchGlasses } from '../services/axiosConfig';

export const useFetchGlasses = () => {
  const [drinkGlasses, setDrinkGlasses] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataGlasses = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGlasses('', controller);
        console.log(response);
        setDrinkGlasses(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchDataGlasses();
  }, []);

  return { drinkGlasses, isLoading, error };
};
