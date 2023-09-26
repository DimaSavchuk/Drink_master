import { Formik, Form, FieldArray, Field } from 'formik';
import { useState } from 'react';
import {
  FieldCounter,
  FieldSelect,
  FieldsWrapper,
  IngridientsWrapper,
  TitleWrapper,
} from './AddDrinkIngridients.styled';
import { TfiClose, TfiPlus, TfiMinus } from 'react-icons/tfi';
import { FiChevronDown } from 'react-icons/fi';
import { SelectList } from '../SelectList/SelectList';

const AddDrinkIngridients = () => {
  const ingridientsList = [
    { name: 'Lem' },
    { name: 'Passoa' },
    { name: 'Prosecco' },
  ];
  const initialValue = { name: ingridientsList[0].name, volume: '' };

  return (
    <FieldArray
      name="ingridients"
      render={({
        form: {
          values: { ingridients },
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
                <span>{ingridients.length}</span>
                <button type="button" onClick={() => push(initialValue)}>
                  <TfiPlus size={16} />
                </button>
              </FieldCounter>
            </TitleWrapper>
            <div>
              {ingridients.length > 0 &&
                ingridients.map((ingridient, index) => (
                  <FieldsWrapper
                    key={index}
                    role="ingridientsSelect"
                    aria-labelledby="ingridientsSelect-group"
                  >
                    <FieldSelect>
                      <Field name={`ingridients.${index}.name`} as="select">
                        {ingridientsList.map(({ name }, index) => (
                          <option key={index} value={name}>
                            {name}
                          </option>
                        ))}
                      </Field>
                      <span style={{ color: '#fff' }}>
                        {<FiChevronDown size={18} />}
                      </span>
                    </FieldSelect>
                    <Field name={`ingridients.${index}.volume`}>{}</Field>
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

export default AddDrinkIngridients;
