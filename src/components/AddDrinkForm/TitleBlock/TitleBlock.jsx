import AddImage from '../AddImageInput';
import CustomSelectMenu from '../CustomSelectMenu';
import {
  FieldStyled,
  FieldWrapper,
  LabelStyled,
  FieldRadio,
  FieldRadioLabel,
  RadioButtonsWrapper,
  Wrapper,
  ContentWrapper,
  ErrorText,
} from './TitleBlock.styled';

const TitleBlock = ({ categoriesList, glassesList, setValue, errors }) => {
  return (
    <Wrapper>
      <AddImage setValue={setValue} />

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

        <CustomSelectMenu
          items={categoriesList}
          title={'Category'}
          error={errors.category}
        />

        <CustomSelectMenu
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

export default TitleBlock;
