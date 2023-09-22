import { Formik, Form, FieldArray, Field } from 'formik';
import { useState } from 'react';
import { TitleWrapper } from './AddDrinkIngridients.styled';

const initialValues = {
  drinkIngridients: [{ name: '', volume: '1cl' }],
};

const AddDrinkIngridients = () => {
  const defaultValue = { name: '', volume: '1cl' };
  const [ingridientsArray, setIngridientsArray] = useState([defaultValue]);

  const addIngridient = () => {
    setIngridientsArray([...ingridientsArray, defaultValue]);
  };

  const removeIngridient = () => {
    if (ingridientsArray.length < 1) return;
    setIngridientsArray(
      ingridientsArray.filter(
        (item, index) => index + 1 !== ingridientsArray.length,
      ),
    );
  };

  return (
    <div>
      <TitleWrapper>
        <h3>Ingredients</h3>
        <div>
          <button type="button" onClick={removeIngridient}>
            -
          </button>
          <span>{ingridientsArray.length}</span>
          <button type="button" onClick={addIngridient}>
            +
          </button>
        </div>
      </TitleWrapper>

      <Formik
        initialValues={initialValues}
        onChange={() => console.log({ data, action })}
      >
        <FieldArray name="ingridients">
          {() => (
            <div>
              {ingridientsArray.length > 0 &&
                ingridientsArray.map((ingridient, index) => (
                  <div key={index}>
                    <Field name="ingridientName" as="select">
                      {}
                    </Field>
                    <Field name="ingridientVolume" value="1cl" />
                    <button type="button" onClick={removeIngridient}>
                      X
                    </button>
                  </div>
                ))}
            </div>
          )}
        </FieldArray>
      </Formik>
    </div>
  );
};

export default AddDrinkIngridients;
