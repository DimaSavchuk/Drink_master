import { FieldArray, ErrorMessage, useField } from 'formik';
import {
  CloseButton,
  FieldCounter,
  FieldMeasure,
  FieldsWrapper,
  IngridientsWrapper,
  TitleWrapper,
  FieldMeasureWrapper,
  ErrorTextMeasure,
} from './IngredientsBlock.styled';
import IngredientsMenu from '../IngredientsMenu';
import { ErrorText } from '../RecipePreparation/RecipePreparation.styled';
import { TfiClose, TfiPlus, TfiMinus } from 'react-icons/tfi';

const IngredientsBlock = ({ items, title }) => {
  const initialValue = { title: '', measure: '' };

  const [, { touched, error }] = useField('ingredients');

  return (
    <FieldArray
      name="ingredients"
      render={({
        form: {
          values: { ingredients },
        },
        push,
        remove,
      }) => (
        <IngridientsWrapper>
          <TitleWrapper>
            <h3>Ingredients</h3>
            <FieldCounter>
              <button type="button" onClick={() => remove()}>
                <TfiMinus size={16} />
              </button>
              <span>{ingredients.length ? ingredients.length : '0'}</span>
              <button type="button" onClick={() => push(initialValue)}>
                <TfiPlus size={16} />
              </button>
            </FieldCounter>
          </TitleWrapper>
          <div>
            {ingredients.length > 0 &&
              ingredients.map((ingredient, index) => {
                return (
                  <FieldsWrapper
                    key={index}
                    role="ingredientsSelect"
                    aria-labelledby="ingridientsSelect-group"
                  >
                    <IngredientsMenu
                      items={items}
                      title={title}
                      ingredient={ingredient}
                      index={index}
                    />

                    <FieldMeasureWrapper>
                      <FieldMeasure
                        name={`ingredients.${index}.measure`}
                        placeholder={'1 cl'}
                      />
                      <ErrorMessage name={`ingredients.${index}.measure`}>
                        {(msg) => <ErrorTextMeasure>{msg}</ErrorTextMeasure>}
                      </ErrorMessage>
                    </FieldMeasureWrapper>

                    <CloseButton type="button" onClick={() => remove(index)}>
                      <TfiClose size={18} />
                    </CloseButton>
                  </FieldsWrapper>
                );
              })}
          </div>
          {touched && typeof error === 'string' ? (
            <ErrorText>{error}</ErrorText>
          ) : null}
        </IngridientsWrapper>
      )}
    ></FieldArray>
  );
};

export default IngredientsBlock;
