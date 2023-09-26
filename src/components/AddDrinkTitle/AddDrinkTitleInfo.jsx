import AddDrinkDropdownMenu from '../AddDrinkSelectMenu';
import {
  // FieldSelectStyled,
  FieldStyled,
  FieldWrapper,
  LabelStyled,
  FieldRadio,
  FieldRadioLabel,
  RadioButtonsWrapper,
  TitleInfo,
} from './AddDrinkTitleInfo.styled';

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

      <AddDrinkDropdownMenu items={initialList.category} title={'Category'} />

      <AddDrinkDropdownMenu items={initialList.glass} title={'Glass'} />

      {/* <FieldWrapper>
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
      </FieldWrapper> */}

      <RadioButtonsWrapper
        role="cocktailTypeSelect"
        aria-labelledby="cocktailTypeSelect-group"
      >
        <div>
          <FieldRadio
            type="radio"
            name="alcoholicType"
            id="radioAlco"
            value={'Alcoholic'}
          />
          <FieldRadioLabel htmlFor="radioAlco">Alcoholic</FieldRadioLabel>
        </div>

        <div>
          <FieldRadio
            type="radio"
            name="alcoholicType"
            id="radioNonAlco"
            value={'Non-alcoholic'}
          />
          <FieldRadioLabel htmlFor="radioNonAlco">
            Non-alcoholic
          </FieldRadioLabel>
        </div>
      </RadioButtonsWrapper>
    </TitleInfo>
  );
};

export default AddDrinkTitleInfo;
