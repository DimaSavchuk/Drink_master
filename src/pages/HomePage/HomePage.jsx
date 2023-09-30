import { useState } from 'react';
import { Hero } from './Hero/Hero';
import { useEffect } from 'react';
import cocktails from './testData.json';
import { PreviewDrinks } from '../../components/PreviewDrinks/PreviewDrinks';
import { Motivation } from '../../components/Motivation/Motivation.styled';

export const HomePage = () => {
  const [numbCocktailsToShow, setNumbCocktailsToShow] = useState(1);

  const updCocktailsNumb = () => {
    if (window.innerWidth >= 1440) {
      setNumbCocktailsToShow(3);
    } else if (window.innerWidth >= 768) {
      setNumbCocktailsToShow(2);
    } else {
      setNumbCocktailsToShow(1);
    }
  };

  useEffect(() => {
    updCocktailsNumb();
    window.addEventListener('resize', updCocktailsNumb);

    return () => {
      window.removeEventListener('resize', updCocktailsNumb);
    };
  }, []);

  return (
    <>
      <Hero />
      <PreviewDrinks
        items={cocktails}
        numbCocktailsToShow={numbCocktailsToShow}
      />
    </>
  );
};
