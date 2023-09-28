import { useFetchPopularDrinks } from '../../Hooks/useFetchPopularDrinks';
import tempImg from '../../assets/temp-popular-drink.png';
import { PopDrinksWrapper } from './PopularDrinks.styled';

const PopularDrinks = () => {
  const { drinksPopular, isLoading, error } = useFetchPopularDrinks();

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
