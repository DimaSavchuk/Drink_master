import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkId } from '../services/axiosConfig';

export const useFetchDrinkId = () => {
  const [drinkInfo, setDrinkInfo] = useState(null);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isfavorite, setIsFavorite] = useState(null);

  const { drinkId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataDrink = async () => {
      try {
        setIsLoading(true);

        const { data, idCurrentUser } = await getDrinkId(drinkId, controller);

        setUserId(idCurrentUser);
        setIsFavorite(data[0].favorites.includes(userId));

        setDrinkInfo(...data);
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
