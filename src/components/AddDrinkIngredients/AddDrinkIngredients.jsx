import { FieldArray, Field } from 'formik';
import {
  FieldCounter,
  FieldSelect,
  FieldsWrapper,
  IngridientsWrapper,
  TitleWrapper,
} from './AddDrinkIngredients.styled';
import { TfiClose, TfiPlus, TfiMinus } from 'react-icons/tfi';
import { FiChevronDown } from 'react-icons/fi';

const AddDrinkIngredients = ({ ingredientsList }) => {
  const initialValue = { title: '', measure: '' };

  return (
    <FieldArray
      name="ingredients"
      render={({
        form: {
          values: { ingredients },
        },
        push,
        remove,
      }) => {
        return (
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
                      <FieldSelect>
                        <Field name={`ingredients.${index}.title`} as="select">
                          {ingredientsList &&
                            ingredientsList.map((ingredient) => {
                              const { title, _id } = ingredient;
                              return (
                                <option
                                  key={ingredient._id}
                                  value={JSON.stringify({ title, _id })}
                                >
                                  {ingredient.title}
                                </option>
                              );
                            })}
                        </Field>
                        <span>{<FiChevronDown size={18} />}</span>
                      </FieldSelect>
                      <Field
                        name={`ingredients.${index}.measure`}
                        placeholder={'1 cl'}
                      ></Field>

                      <button type="button" onClick={() => remove(index)}>
                        <TfiClose size={18} />
                      </button>
                    </FieldsWrapper>
                  );
                })}
            </div>
          </IngridientsWrapper>
        );
      }}
    ></FieldArray>
  );
};

export default AddDrinkIngredients;
