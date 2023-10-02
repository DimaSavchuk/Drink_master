import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkId } from '../services/axiosConfig';

export const useFetchDrinkId = () => {
  const [drinkInfo, setDrinkInfo] = useState(null);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isfavorite, setIsFavorite] = useState(null);

  const { drinkId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataDrink = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { data, idCurrentUser } = await getDrinkId(drinkId, controller);

        setUserId(idCurrentUser);
        setDrinkInfo(...data);

        setIsFavorite(data[0].favorites.includes(idCurrentUser));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchDataDrink();
  }, [drinkId]);

  return { drinkInfo, userId, isLoading, error, isfavorite, setIsFavorite };
};
