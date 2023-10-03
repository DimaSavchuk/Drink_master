import { Container, ContentBlock } from './AddDrinkPages.styled';
import FormMain from '../../components/AddDrinkForm/FormMain';
import PopularDrinks from '../../components/PopularDrinks';
import FollowUs from '../../components/FollowUs/FollowUs';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setSelectedRoute } from '../../redux/route/routeSlice';
import { selectFirstRecipe } from '../../redux/motivation/motivationSelects';
import { Motivation } from '../../components/Motivation/Motivation';
import { CSSTransition } from 'react-transition-group';
import '../../components/MobileMenu/TransitionStyles.css';
import motiv from '../../assets/motivation/motivation.png';
import motiv2x from '../../assets/motivation/motivation@2x.png';

const images = [motiv, motiv2x];

const AddDrinkPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const firstRecipe = useSelector(selectFirstRecipe);
  const [hasFirstRecipe, setHasFirstRecipe] = useState(false);

  useEffect(() => {
    if (firstRecipe) {
      setHasFirstRecipe(true);
    }
  }, [firstRecipe]);
  useEffect(() => {
    const wasMotivationFirstDrinkShown = localStorage.getItem(
      'wasMotivationFirstDrinkShown',
    );
    if (wasMotivationFirstDrinkShown === 'true') {
      setHasFirstRecipe(false);
    } else {
      setHasFirstRecipe(true);
    }
  }, []);
  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);

  const handleCloseMotivationModal = () => {
    setHasFirstRecipe(false);
    localStorage.setItem('wasMotivationFirstDrinkShown', 'true');
  };

  return (
    <Container>
      <FormMain />

      <ContentBlock>
        <FollowUs />
        <PopularDrinks />
      </ContentBlock>
      <CSSTransition
        in={hasFirstRecipe}
        timeout={500}
        classNames="motivation"
        unmountOnExit
        mountOnEnter
      >
        <Motivation
          isShown={hasFirstRecipe}
          onClose={handleCloseMotivationModal}
          image={images}
        />
      </CSSTransition>
    </Container>
  );
};

export default AddDrinkPage;
