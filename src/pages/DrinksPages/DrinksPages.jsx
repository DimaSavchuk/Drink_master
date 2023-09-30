import { AllDrinksContainer } from '../../components/AllDrinksContainer/AllDrinksContainer';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSelectedRoute } from '../../redux/route/routeSlice';
const DrinksPages = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);
  return <AllDrinksContainer />;
};

export default DrinksPages;
