import { useState, useEffect } from 'react';
import { fetchPopularDrinks } from '../services/axiosConfig';

export const useFetchPopularDrinks = () => {
  const [drinksPopular, setDrinksPopular] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchPopularDrinks('', controller);
        console.log(response.data);
        setDrinksPopular(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchData();
  }, []);

  return { drinksPopular, isLoading, error };
};
