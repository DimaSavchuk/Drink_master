import React from 'react';
import { useParams } from 'react-router-dom';
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
import { addDrinkToFavorite } from '../../services/axiosConfig';
import { Loader } from '../../components/Loader/Loader';


const AboutDrinkPages = () => {
  const { drinkInfo, isLoading, error } = useFetchDrinkId();

  const { drinkId } = useParams();

  function handleClick() {
    addDrinkToFavorite(drinkId);
  }
  return (
    <Box>
      {error && <h1>Error!!!</h1>}
      {isLoading && <Loader />}
      {drinkInfo && (
        <>
          <DivTitle>
            <div>
              <Title>{drinkInfo.drink}</Title>
              <TitleAlcohol>
                {drinkInfo.glass} / {drinkInfo.alcoholic}
              </TitleAlcohol>
              <TitleDescription>{drinkInfo.description}</TitleDescription>
              <ButtonAddFavorite type="button" onClick={handleClick}>
                Add to favorite drinks
              </ButtonAddFavorite>
            </div>
            <TitleImage>
              <img
                src={drinkInfo.drinkThumb}
                alt={drinkInfo.drink}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </TitleImage>
          </DivTitle>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsCards data={drinkInfo.ingredients} />
          <RecipeTitle>Recipe Preparation</RecipeTitle>
          <RecipeDiv>
            <RecipeInfo>{drinkInfo.instructionsUK}</RecipeInfo>
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
