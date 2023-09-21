import { Formik, Form, FieldArray, Field } from 'formik';
import { useState } from 'react';

const initialValues = {
  drinkIngridients: [{ name: '', volume: '1cl' }],
};

const AddDrinkIngridients = () => {
  const defaultValue = { name: '', volume: '1cl' };
  const [ingridientsArray, setIngridientsArray] = useState([defaultValue]);

  const [ingridientsCounter, setIngridientsCounter] = useState(1);

  const addIngridient = () => {
    setIngridientsCounter(ingridientsCounter + 1);
    setIngridientsArray([...ingridientsArray, defaultValue]);
  };

  const removeIngridient = () => {
    if (ingridientsCounter >= 1) {
      setIngridientsCounter(ingridientsCounter - 1);
      setIngridientsArray(
        ingridientsArray.filter(
          (item, index) => index + 1 !== ingridientsCounter,
        ),
      );
    }
  };

  return (
    <div>
      <h3>Ingredients</h3>
      <div>
        <button type="button" onClick={removeIngridient}>
          -
        </button>
        <span>{ingridientsCounter}</span>
        <button type="button" onClick={addIngridient}>
          +
        </button>
      </div>

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
                    <Field as="select" />
                    <Field value="1cl" />
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
