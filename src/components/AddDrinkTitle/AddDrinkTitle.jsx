import AddDrinkAddImage from '../AddDrinkAddImage';
import AddDrinkDropdownMenu from '../AddDrinkSelectMenu';
import {
  // FieldSelectStyled,
  FieldStyled,
  FieldWrapper,
  LabelStyled,
  FieldRadio,
  FieldRadioLabel,
  RadioButtonsWrapper,
  Wrapper,
  ContentWrapper,
  ErrorText,
} from './AddDrinkTitle.styled';

const AddDrinkTitle = ({ categoriesList, glassesList, setValue, errors }) => {
  // const initialList = {
  //   category: [
  //     'Ordinary Drink',
  //     'Cocktail',
  //     'Shake',
  //     'Other/Unknown',
  //     'Cocoa',
  //     'Shot',
  //     'Coffee/Tea',
  //     'Homemade Liqueur',
  //     'Punch/Party Drink',
  //     'Beer',
  //     'Soft Drink',
  //   ],
  //   glass: [
  //     'Highball glass',
  //     'Cocktail glass',
  //     'Old-fashioned glass',
  //     'Whiskey Glass',
  //     'Collins glass',
  //     'Pousse cafe glass',
  //     'Champagne flute',
  //     'Whiskey sour glass',
  //     'Cordial glass',
  //     'Brandy snifter',
  //     'White wine glass',
  //     'Nick and Nora Glass',
  //     'Hurricane glass',
  //     'Coffee mug',
  //     'Shot glass',
  //     'Jar',
  //     'Irish coffee cup',
  //     'Punch bowl',
  //     'Pitcher',
  //     'Pint glass',
  //     'Copper Mug',
  //     'Wine Glass',
  //     'Beer mug',
  //     'Margarita/Coupette glass',
  //     'Beer pilsner',
  //     'Beer Glass',
  //     'Parfait glass',
  //     'Mason jar',
  //     'Margarita glass',
  //     'Martini Glass',
  //     'Balloon Glass',
  //     'Coupe Glass',
  //   ],
  // };
  const {} = errors;
  return (
    <Wrapper>
      <AddDrinkAddImage setValue={setValue} />

      <ContentWrapper>
        <FieldWrapper>
          <LabelStyled htmlFor="title">Enter item title</LabelStyled>
          <FieldStyled name={'title'} placeholder="Enter item title" />
          {errors.title ? <ErrorText>{errors.title}</ErrorText> : null}
        </FieldWrapper>

        <FieldWrapper>
          <LabelStyled htmlFor="recipe">Enter about recipe</LabelStyled>
          <FieldStyled name={'recipe'} placeholder="Enter about recipe" />
          {errors.recipe ? <ErrorText>{errors.recipe}</ErrorText> : null}
        </FieldWrapper>

        <AddDrinkDropdownMenu
          items={categoriesList}
          title={'Category'}
          error={errors.category}
        />

        <AddDrinkDropdownMenu
          items={glassesList}
          title={'Glass'}
          error={errors.glass}
        />

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
      </ContentWrapper>
    </Wrapper>
  );
};

export default AddDrinkTitle;
