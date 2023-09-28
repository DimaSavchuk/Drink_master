import { Formik, Form, FieldArray, Field } from 'formik';
import { useState } from 'react';
import {
  FieldCounter,
  FieldSelect,
  FieldsWrapper,
  IngridientsWrapper,
  TitleWrapper,
} from './AddDrinkIngredients.styled';
import { TfiClose, TfiPlus, TfiMinus } from 'react-icons/tfi';
import { FiChevronDown } from 'react-icons/fi';
import { SelectList } from '../SelectList/SelectList';
import { useFetchIngredients } from '../../Hooks/useFetchIngredients';

const AddDrinkIngredients = () => {
  const ingridientsList = [
    { name: 'Lem' },
    { name: 'Passoa' },
    { name: 'Prosecco' },
  ];

  const { drinkIngredients, error, loading } = useFetchIngredients();
  console.log(drinkIngredients);
  const initialValue = { name: ingridientsList[0].name, volume: '' };
  return (
    <FieldArray
      name="ingredients"
      render={({
        form: {
          values: { ingredients },
        },
        push,
        insert,
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
                ingredients.map((ingredient, index) => (
                  <FieldsWrapper
                    key={index}
                    role="ingridientsSelect"
                    aria-labelledby="ingridientsSelect-group"
                  >
                    <FieldSelect>
                      <Field name={`ingridients.${index}.name`} as="select">
                        {drinkIngredients &&
                          drinkIngredients.map(({ title }, index) => (
                            <option key={index} value={title}>
                              {title}
                            </option>
                          ))}
                      </Field>
                      <span style={{ color: '#fff' }}>
                        {<FiChevronDown size={18} />}
                      </span>
                    </FieldSelect>
                    <Field
                      name={`ingridients.${index}.volume`}
                      placeholder={'1 cl'}
                    ></Field>
                    <button type="button" onClick={() => remove(index)}>
                      <TfiClose size={18} />
                    </button>
                  </FieldsWrapper>
                ))}
            </div>
          </IngridientsWrapper>
        );
      }}
    ></FieldArray>
  );
};

export default AddDrinkIngredients;
