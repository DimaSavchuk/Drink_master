import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/axiosConfig';

export const useFetchCategories = () => {
  const [drinkCategories, setDrinkCategories] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCategories('', controller);
        setDrinkCategories(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchDataCategories();
  }, []);

  return { drinkCategories, isLoading, error };
};
