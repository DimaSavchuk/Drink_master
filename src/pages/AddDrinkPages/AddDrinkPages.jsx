import { Container, ContentBlock } from './AddDrinkPages.styled';
import AddDrinkForm from '../../components/AddDrinkForm';
import PopularDrinks from '../../components/PopularDrinks';
import FollowUs from '../../components/FollowUs/FollowUs';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSelectedRoute } from '../../redux/route/routeSlice';

const AddDrinkPages = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);

  return (
    <Container>
      <AddDrinkForm />

      <ContentBlock>
        <FollowUs />
        <PopularDrinks />
      </ContentBlock>
    </Container>
  );
};

export default AddDrinkPages;
