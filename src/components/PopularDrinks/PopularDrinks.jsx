import { useFetchPopularDrinks } from '../../Hooks/useFetchPopularDrinks';
import { PopDrinksWrapper, StyledNavLink } from './PopularDrinks.styled';

import { Loader } from '../Loader/Loader';
import { LittleLoading } from '../Loading/LittleLoading';

const PopularDrinks = () => {
  const { drinksPopular, isLoading, error } = useFetchPopularDrinks();

  const drinks = drinksPopular || [];
  const QUANTITY_INDEX = 3;

  return (
    <PopDrinksWrapper>
      <h4>Popular drinks</h4>
      {error && <div>error</div>}
      {isLoading ? (
        <LittleLoading />
      ) : (
        <ul>
          {drinks.map(({ drinkThumb, drink, description, _id }, index) => {
            if (index <= QUANTITY_INDEX)
              return (
                <li key={index}>
                  <StyledNavLink to={`/drinks/${_id}`}>
                    <img src={drinkThumb} width={90} height={90} />
                    <div>
                      <h6>{drink}</h6>
                      <p>{description}</p>
                    </div>
                  </StyledNavLink>
                </li>
              );
          })}
        </ul>
      )}
    </PopDrinksWrapper>
  );
};

export default PopularDrinks;
