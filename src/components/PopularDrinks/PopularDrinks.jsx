import { useFetchPopularDrinks } from '../../Hooks/useFetchPopularDrinks';
import tempImg from '../../assets/temp-popular-drink.png';
import { PopDrinksWrapper } from './PopularDrinks.styled';

const PopularDrinks = () => {
  // const initialArray = [
  //   {
  //     imgLink: tempImg,
  //     title: 'Gin Lemon',
  //     descr:
  //       'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
  //   },
  //   {
  //     imgLink: tempImg,
  //     title: 'Gin Lemon',
  //     descr:
  //       'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
  //   },
  //   {
  //     imgLink: tempImg,
  //     title: 'Gin Lemon',
  //     descr:
  //       'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
  //   },
  //   {
  //     imgLink: tempImg,
  //     title: 'Gin Lemon',
  //     descr:
  //       'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
  //   },
  // ];

  // const { drinksPopular, isLoading, error } = fetchPopularDrinks();
  // console.log(drinksPopular);

  const { drinksPopular, isLoading, error } = useFetchPopularDrinks();
  console.log(drinksPopular, isLoading, error);

  return (
    <PopDrinksWrapper>
      <h4>Popular drinks</h4>
      {isLoading && <div>Loading...</div>}
      {error && <div>error</div>}
      {drinksPopular && (
        <ul>
          {drinksPopular.map(({ drinkThumb, drink, description }, index) => {
            if (index <= 3)
              return (
                <li key={index}>
                  <img src={drinkThumb} width={90} height={90} />
                  <div>
                    <h6>{drink}</h6>
                    <p>{description}</p>
                  </div>
                </li>
              );
          })}
        </ul>
      )}
    </PopDrinksWrapper>
  );
};

export default PopularDrinks;
