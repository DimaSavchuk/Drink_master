import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

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
import { useDispatch } from 'react-redux';
import { setSelectedRoute } from '../../redux/route/routeSlice';
import { Loading } from '../../components/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AboutDrinkPages = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedRoute(location.pathname));
  }, [dispatch]);

  const { drinkInfo, userId, isLoading, error, isfavorite, setIsFavorite } =
    useFetchDrinkId();
  const { drinkId } = useParams();

  function isFavoriteTrue(data) {
    setIsFavorite(data?.favorites?.includes(userId));
  }

  async function addFavorite() {
    const res = await addDrinkToFavorite(drinkId);
    if (res) toast.success('Added to favorites');
    isFavoriteTrue(res);
  }
  async function deleteFavorite() {
    const res = await deleteDrinkFromFavorite(drinkId);
    if (res) toast.success('Deleted from favorites');
    isFavoriteTrue(res);
  }
  return (
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
  );
};

export default AboutDrinkPages;
