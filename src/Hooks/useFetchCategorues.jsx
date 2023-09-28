import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategories } from '../services/axiosConfig';

export const useFetchDrinkId = () => {
  const [drinkCategories, setDrinkCategories] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const { drinkId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataCategories = async () => {
      try {
        setIsLoading(true);

        const response = await fetchCategories('', controller);

        setDrinkCategories(...response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchDataDrink();
  }, [drinkCategories]);

  return { drinkCategories, isLoading, error };
};
