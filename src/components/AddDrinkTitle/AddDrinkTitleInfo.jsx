import { TitleInfo } from './AddDrinkTitleInfo.styled';
import { Field } from 'formik';

const AddDrinkTitleInfo = () => {
  const initialList = {
    category: [
      'Ordinary Drink',
      'Cocktail',
      'Shake',
      'Other/Unknown',
      'Cocoa',
      'Shot',
      'Coffee/Tea',
      'Homemade Liqueur',
      'Punch/Party Drink',
      'Beer',
      'Soft Drink',
    ],
    glass: [
      'Highball glass',
      'Cocktail glass',
      'Old-fashioned glass',
      'Whiskey Glass',
      'Collins glass',
      'Pousse cafe glass',
      'Champagne flute',
      'Whiskey sour glass',
      'Cordial glass',
      'Brandy snifter',
      'White wine glass',
      'Nick and Nora Glass',
      'Hurricane glass',
      'Coffee mug',
      'Shot glass',
      'Jar',
      'Irish coffee cup',
      'Punch bowl',
      'Pitcher',
      'Pint glass',
      'Copper Mug',
      'Wine Glass',
      'Beer mug',
      'Margarita/Coupette glass',
      'Beer pilsner',
      'Beer Glass',
      'Parfait glass',
      'Mason jar',
      'Margarita glass',
      'Martini Glass',
      'Balloon Glass',
      'Coupe Glass',
    ],
  };

  return (
    <TitleInfo>
      <label htmlFor="title">Enter item title</label>
      <Field name={'title'} placeholder="Enter item title" />

      <label htmlFor="recipe">Enter about recipe</label>
      <Field name={'recipe'} placeholder="Enter about recipe" />

      <label htmlFor="category">Category</label>
      <Field as="select" name="category" placeholder="Category">
        {initialList.category.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </Field>

      <label htmlFor="glass">Glass</label>
      <Field as="select" name="glass" placeholder="Glass">
        {initialList.glass.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </Field>

      <div role="cocktailTypeSelect" aria-labelledby="cocktailTypeSelect-group">
        <label>
          <Field type="radio" name="alcoholicType" value={true} />
          Alcoholic
        </label>
        <label>
          <Field type="radio" name="alcoholicType" value={false} />
          Non-alcoholic
        </label>
      </div>
    </TitleInfo>
  );
};

export default AddDrinkTitleInfo;
