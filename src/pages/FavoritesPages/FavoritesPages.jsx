

import { useDispatch} from 'react-redux';

// import { CommonContainer } from '../../components/GlobalStyles/CommonContainer.styled';

import FavoritesContainer from '../../components/FavoritesContainer/FavoritesContainer';

const FavoritesPages = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);


  return <FavoritesContainer />;
};

export default FavoritesPages;
