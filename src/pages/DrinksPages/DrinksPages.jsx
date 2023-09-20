import React from 'react';
import { CocktailCard } from '../../components/CocktailCard/CocktailCard';

const data = {
  id: "639b6de9ff77d221f190c50f",
  drink: "Quentin",
  drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg"
};

const DrinksPages = () => {
  return (
    <CocktailCard data={data} />
  );
};

export default DrinksPages;
