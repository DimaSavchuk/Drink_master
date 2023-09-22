import { Formik, Form, FieldArray, Field } from 'formik';
import { useState } from 'react';
import { TitleWrapper } from './AddDrinkIngridients.styled';

const AddDrinkIngridients = () => {
  const ingridientsList = [
    { name: 'Lem' },
    { name: 'Passoa' },
    { name: 'Prosecco' },
  ];
  const initialValue = { name: ingridientsList[0].name, volume: '1cl' };

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
          <div>
            <TitleWrapper>
              <h3>Ingredients</h3>
              <div>
                <button type="button" onClick={() => remove()}>
                  -
                </button>
                <span>{ingridients.length}</span>
                <button type="button" onClick={() => push(initialValue)}>
                  +
                </button>
              </div>
            </TitleWrapper>
            <div>
              {ingridients.length > 0 &&
                ingridients.map((ingridient, index) => (
                  <div
                    key={index}
                    role="ingridientsSelect"
                    aria-labelledby="ingridientsSelect-group"
                  >
                    <Field name={`ingridients.${index}.name`} as="select">
                      {ingridientsList.map(({ name }, index) => (
                        <option key={index} value={name}>
                          {name}
                        </option>
                      ))}
                    </Field>
                    <Field name={`ingridients.${index}.volume`}>{}</Field>
                    <button type="button" onClick={() => remove(index)}>
                      X
                    </button>
                  </div>
                ))}
            </div>
          </div>
        );
      }}
    ></FieldArray>
  );
};

export default AddDrinkIngridients;
