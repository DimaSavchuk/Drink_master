import React from 'react';
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

const response = {
  drink: 'Queen Charlotte',
  drinkAlternate: 'Sorry, not specified',
  tags: 'Sorry, not specified',
  video: 'Sorry, not specified',
  category: 'Ordinary Drink',
  IBA: 'Sorry, not specified',
  alcoholic: 'Alcoholic',
  glass: 'Collins glass',
  description:
    'Queen Charlotte is a regal and elegant cocktail that combines the flavors of gin, Lillet Blanc (a French aperitif wine), and lemon juice. This sophisticated drink offers a perfect balance of herbal and citrus notes, making it a delightful choice for those who appreciate refined flavors. Sip on a Queen Charlotte cocktail and let its elegance transport you to a royal affair.',
  instructions:
    'Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.',
  instructionsUK:
    'Налийте червоне вино та гренадин у келих Collins поверх кубиків льоду. Заправте лимонно-лаймовою содовою, перемішайте та подавайте.',
  drinkThumb:
    'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167160/cocktails-v1/drinks/Queen_Charlotte.jpg',
  ingredients: [
    {
      title: 'Red wine',
      measure: '2 oz ',
      ingredientId: {
        $oid: '64aebb7f82d96cc69e0eb4ca',
      },
    },
    {
      title: 'Grenadine',
      measure: '1 oz ',
      ingredientId: {
        $oid: '64aebb7f82d96cc69e0eb4c7',
      },
    },
    {
      title: 'Lemon-lime soda',
      ingredientId: {
        $oid: '64f1d5cb69d8333cf130fc07',
      },
    },
  ],
  shortDescription:
    'A regal and elegant cocktail with the flavors of gin, Lillet Blanc, and lemon juice.',
};

const ingridient = {
  title: 'Strawberries',
  ingredientThumb:
    'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Strawberries.png',
  thumbMedium:
    'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Strawberries-Medium.png',
  thumbSmall:
    'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Strawberries-Small.png',
  abv: '0',
  alcohol: 'No',
  description:
    'The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries. It is cultivated worldwide for its fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavourings and aromas are also widely used in many products like lip gloss, candy, hand sanitizers, perfume, and many others.\r\n\r\nThe garden strawberry was first bred in Brittany, France, in the 1750s via a cross of Fragaria virginiana from eastern North America and Fragaria chiloensis, which was brought from Chile by Amédée-François Frézier in 1714. Cultivars of Fragaria × ananassa have replaced, in commercial production, the woodland strawberry (Fragaria vesca), which was the first strawberry species cultivated in the early 17th century.\r\n\r\nThe strawberry is not, from a botanical point of view, a berry. Technically, it is an aggregate accessory fruit, meaning that the fleshy part is derived not from the plant\'s ovaries but from the receptacle that holds the ovaries.Each apparent "seed" (achene) on the outside of the fruit is actually one of the ovaries of the flower, with a seed inside it.',
  type: 'Fruit',
  flavour: 'strawberry',
  country: 'United States',
};

const AboutDrinkPages = () => {
  const { drinkInfo, isLoading, error } = useFetchDrinkId();
  console.log(drinkInfo);
  return (
    <Box>
      {error && <div>Error!!!</div>}
      {drinkInfo && (
        <>
          <DivTitle>
            <div>
              <Title>{response.drink}</Title>
              <TitleAlcohol>
                {response.glass} / {response.alcoholic}
              </TitleAlcohol>
              <TitleDescription>{response.description}</TitleDescription>
              <ButtonAddFavorite type="button">
                Add to favorite drinks
              </ButtonAddFavorite>
            </div>
            <TitleImage>
              <img
                src={response.drinkThumb}
                alt={response.drink}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </TitleImage>
          </DivTitle>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsCards data={response.ingredients} />
          <RecipeTitle>Recipe Preparation</RecipeTitle>
          <RecipeDiv>
            <RecipeInfo>{response.instructionsUK}</RecipeInfo>
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
