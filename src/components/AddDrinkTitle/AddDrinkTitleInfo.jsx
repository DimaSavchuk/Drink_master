import {
  FieldSelectStyled,
  FieldStyled,
  FieldWrapper,
  LabelStyled,
  TitleInfo,
} from './AddDrinkTitleInfo.styled';
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
      <FieldWrapper>
        <LabelStyled htmlFor="title">Enter item title</LabelStyled>
        <FieldStyled name={'title'} placeholder="Enter item title" />
      </FieldWrapper>

      <FieldWrapper>
        <LabelStyled htmlFor="recipe">Enter about recipe</LabelStyled>
        <FieldStyled name={'recipe'} placeholder="Enter about recipe" />
      </FieldWrapper>

      <FieldWrapper>
        <LabelStyled htmlFor="category">Category</LabelStyled>
        <FieldSelectStyled as="select" name="category" placeholder="Category">
          {initialList.category.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </FieldSelectStyled>
      </FieldWrapper>

      <FieldWrapper>
        <LabelStyled htmlFor="glass">Glass</LabelStyled>
        <FieldSelectStyled as="select" name="glass" placeholder="Glass">
          {initialList.glass.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </FieldSelectStyled>
      </FieldWrapper>

      <div role="cocktailTypeSelect" aria-labelledby="cocktailTypeSelect-group">
        <LabelStyled>
          <Field type="radio" name="alcoholicType" value={true} />
          Alcoholic
        </LabelStyled>
        <LabelStyled>
          <Field type="radio" name="alcoholicType" value={false} />
          Non-alcoholic
        </LabelStyled>
      </div>
    </TitleInfo>
  );
};

export default AddDrinkTitleInfo;
