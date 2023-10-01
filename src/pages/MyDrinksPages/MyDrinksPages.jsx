import { useEffect } from 'react';
import MyDrinksContainer from '../../components/MyDrinksContainer/MyDrinksContainer';
import { setSelectedRoute } from '../../redux/route/routeSlice';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const MyDrinksPages = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);

  return <MyDrinksContainer />;
};

export default MyDrinksPages;
