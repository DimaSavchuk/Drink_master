import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkId } from '../services/axiosConfig';

export const useFetchDrinkId = () => {
  const [drinkInfo, setDrinkInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { drinkId } = useParams();
  // console.log(id);

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataDrink = async () => {
      try {
        setIsLoading(true);

        const fetchedDrink = await getDrinkId(drinkId, controller);
        setDrinkInfo(fetchedDrink);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchDataDrink();
  }, [drinkId]);

  return { drinkInfo, isLoading, error };
};
