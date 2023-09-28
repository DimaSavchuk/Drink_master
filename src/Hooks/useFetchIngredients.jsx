import { useState, useEffect } from 'react';
import { fetchIngredients } from '../services/axiosConfig';

export const useFetchIngredients = () => {
  const [drinkIngredients, setDrinkIngredients] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataIngredients = async () => {
      try {
        setIsLoading(true);
        const response = await fetchIngredients('', controller);
        console.log(response);
        setDrinkIngredients(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchDataIngredients();
  }, []);

  return { drinkIngredients, isLoading, error };
};
