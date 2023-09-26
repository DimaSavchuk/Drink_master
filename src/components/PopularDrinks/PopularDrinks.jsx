import tempImg from '../../assets/temp-popular-drink.png';
import { PopDrinksWrapper } from './PopularDrinks.styled';

const PopularDrinks = () => {
  const initialArray = [
    {
      imgLink: tempImg,
      title: 'Gin Lemon',
      descr:
        'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
    },
    {
      imgLink: tempImg,
      title: 'Gin Lemon',
      descr:
        'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
    },
    {
      imgLink: tempImg,
      title: 'Gin Lemon',
      descr:
        'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
    },
    {
      imgLink: tempImg,
      title: 'Gin Lemon',
      descr:
        'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
    },
  ];

  return (
    <PopDrinksWrapper>
      <h3>Popular drinks</h3>
      <ul>
        {initialArray.map(({ imgLink, title, descr }, index) => (
          <li key={index}>
            <img src={imgLink} width={90} height={90} />
            <div>
              <h6>{title}</h6>
              <p>{descr}</p>
            </div>
          </li>
        ))}
      </ul>
    </PopDrinksWrapper>
  );
};

export default PopularDrinks;
