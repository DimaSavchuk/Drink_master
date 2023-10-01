
import { useDispatch} from 'react-redux';
import FavoritesContainer from '../../components/FavoritesContainer/FavoritesContainer';
import { useEffect } from 'react';
import { setSelectedRoute } from '../../redux/route/routeSlice';
import { useLocation } from 'react-router-dom';

const FavoritesPages = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch, location.pathname]);

  return <FavoritesContainer />;
};

export default FavoritesPages;
