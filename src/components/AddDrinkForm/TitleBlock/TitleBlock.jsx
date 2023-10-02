import { Field } from 'formik';
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

const TitleBlock = ({
  categoriesList,
  glassesList,
  setValue,
  touched,
  errors,
}) => {
  return (
    <Wrapper>
      <AddImage
        setValue={setValue}
        // touched={touched.AddImage}
        // errors={errors.AddImage}
      />

      <ContentWrapper>
        <FieldWrapper>
          <LabelStyled htmlFor="title">Enter item title</LabelStyled>
          <FieldStyled name={'title'} placeholder="Enter item title" />
          {touched.title && errors.title ? (
            <ErrorText>{errors.title}</ErrorText>
          ) : null}
        </FieldWrapper>

        <FieldWrapper>
          <LabelStyled htmlFor="recipe">Enter about recipe</LabelStyled>
          <FieldStyled name={'recipe'} placeholder="Enter about recipe" />
          {touched.recipe && errors.recipe ? (
            <ErrorText>{errors.recipe}</ErrorText>
          ) : null}
        </FieldWrapper>

        <CustomSelectMenu
          items={categoriesList}
          title={'Category'}
          touched={touched.category}
          error={errors.category}
        />

        <CustomSelectMenu
          items={glassesList}
          title={'Glass'}
          touched={touched.glass}
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
