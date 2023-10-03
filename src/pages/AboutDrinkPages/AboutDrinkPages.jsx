import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import motivSecond from '../../assets/motivation/motivation2.png';
import motivSecond2x from '../../assets/motivation/motivation2@2x.png';

import {
  Box,
  Title,
  DivTitle,
  TitleImage,
  TitleAlcohol,
  TitleDescription,
  ButtonAddFavorite,
  IngredientsTitle,
  RecipeTitle,
  RecipeInfo,
  RecipeDiv,
  ImageDiv,
} from './AboutDrinkPages.styled';
import IngredientsCards from '../../components/AboutDrinkPages/IngridientsCards';
import Image from '../../components/AboutDrinkPages/Image';
import { useFetchDrinkId } from '../../Hooks/useFetchDrinkId';
import {
  addDrinkToFavorite,
  deleteDrinkFromFavorite,
} from '../../services/axiosConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRoute } from '../../redux/route/routeSlice';
import { Loading } from '../../components/Loading/Loading';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LittleLoading } from '../../components/Loading/LittleLoading';
import {
  fetchingFirstFavoriteError,
  fetchingFirstFavoriteSuccess,
} from '../../redux/motivation/motivationSlice';
import { selectFirstFavorite } from '../../redux/motivation/motivationSelects';
import { Motivation } from '../../components/Motivation/Motivation';
import { CSSTransition } from 'react-transition-group';
import '../../components/MobileMenu/TransitionStyles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const images = [motivSecond, motivSecond2x];

const AboutDrinkPages = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const firstFavorite = useSelector(selectFirstFavorite);
  const [hasFirstFavorite, setHasFirstFavorite] = useState(false);
  console.log(
    'Компонент мотивации должен рендерится в AboutDrinkPages',
    hasFirstFavorite,
  );
  useEffect(() => {
    if (firstFavorite) {
      setHasFirstFavorite(true);
    }
  }, [firstFavorite]);

  useEffect(() => {
    const wasMotivationFirstFavoriteShown = localStorage.getItem(
      'wasMotivationFirstFavoriteShown',
    );
    if (wasMotivationFirstFavoriteShown === 'true') {
      setHasFirstFavorite(false);
    } else {
      setHasFirstFavorite(true);
    }
  }, []);

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);

  const handleCloseMotivationModal = () => {
    setHasFirstFavorite(false);
    localStorage.setItem('wasMotivationFirstFavoriteShown', 'true');
  };
  const { drinkInfo, userId, isLoading, error, isfavorite, setIsFavorite } =
    useFetchDrinkId();
  const { drinkId } = useParams();

  function isFavoriteTrue(data) {
    setIsFavorite(data?.favorites?.includes(userId));
  }

  async function addFavorite() {
    try {
      const res = await addDrinkToFavorite(drinkId);
      if (res.data) Notify.success('Added to favorites');
      isFavoriteTrue(res.data);
      if (res.firstFavorite) {
        dispatch(fetchingFirstFavoriteSuccess(res.firstFavorite));
      } else {
        return;
      }
    } catch (error) {
      dispatch(fetchingFirstFavoriteError(error.message));
    }
  }
  async function deleteFavorite() {
    const res = await deleteDrinkFromFavorite(drinkId);
    if (res) toast.success('Deleted from favorites');
    isFavoriteTrue(res);
  }
  return (
    <>
      <CSSTransition
        in={hasFirstFavorite}
        timeout={500}
        classNames="motivation"
        unmountOnExit
        mountOnEnter
      >
        <Motivation
          text={'Wow! You have added the first recipe to your favorites!'}
          image={images}
          onClose={handleCloseMotivationModal}
          isShown={hasFirstFavorite}
        />
      </CSSTransition>
      <Box>
        {error && <h1>Error!!!</h1>}

        {isLoading && (
          <Loading bgc={'var(--loader-background-color-without-opacity)'} />
        )}
        {drinkInfo && (
          <>
            <DivTitle>
              <div>
                <Title>{drinkInfo.drink}</Title>
                <TitleAlcohol>
                  {drinkInfo.glass} / {drinkInfo.alcoholic}
                </TitleAlcohol>
                <TitleDescription>{drinkInfo.description}</TitleDescription>
                {isfavorite ? (
                  <ButtonAddFavorite type="button" onClick={deleteFavorite}>
                    Remove from favorites
                  </ButtonAddFavorite>
                ) : (
                  <ButtonAddFavorite type="button" onClick={addFavorite}>
                    Add to favorite drinks
                  </ButtonAddFavorite>
                )}
              </div>
              <TitleImage>
                <img
                  src={drinkInfo.drinkThumb}
                  alt={drinkInfo.drink}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </TitleImage>
            </DivTitle>
            <IngredientsTitle>Ingredients</IngredientsTitle>
            <IngredientsCards data={drinkInfo.ingredients} />
            <RecipeTitle>Recipe Preparation</RecipeTitle>
            <RecipeDiv>
              <RecipeInfo>{drinkInfo.instructions}</RecipeInfo>
              <ImageDiv>
                <Image></Image>
              </ImageDiv>
            </RecipeDiv>
          </>
        )}
      </Box>
    </>
  );
};

export default AboutDrinkPages;
