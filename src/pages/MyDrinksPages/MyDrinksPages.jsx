import MyDrinksContainer from '../../components/MyDrinksContainer/MyDrinksContainer';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSelectedRoute } from '../../redux/route/routeSlice';
const MyDrinksPages = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);
  return <MyDrinksContainer />;
};

export default MyDrinksPages;
