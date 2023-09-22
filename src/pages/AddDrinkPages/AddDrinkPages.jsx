import React from 'react';
import { Container } from './AddDrinkPages.styled';
import AddDrinkForm from '../../components/AddDrinkForm';
import PopularDrinks from '../../components/PopularDrinks';

const AddDrinkPages = () => {
  return (
    <Container>
      <h2>Add drink</h2>
      <AddDrinkForm />
      {/* Follow Us */}
      <PopularDrinks />
    </Container>
  );
};

export default AddDrinkPages;
