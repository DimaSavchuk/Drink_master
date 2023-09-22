const PopularDrinks = () => {
  const initialArray = [
    {
      img: null,
      title: 'Gin Lemon',
      descr:
        'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
    },
    {
      img: null,
      title: 'Gin Lemon',
      descr:
        'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
    },
    {
      img: null,
      title: 'Gin Lemon',
      descr:
        'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
    },
    {
      img: null,
      title: 'Gin Lemon',
      descr:
        'A gin and tonic is a highball cocktail made with gin and tonic water poured over a large amount of ice. The ratio of gin to tonic varies according to taste, strength of the gin, other drink mixers being added, etc., with most recipes calling for a ratio between 1:1 and 1:3.',
    },
  ];

  return (
    <div>
      <h3>Popular drinks</h3>
      <div>
        {initialArray.map(({ title, descr }, index) => (
          <div key={index}>
            <strong>{title}</strong>
            <p>{descr}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDrinks;
