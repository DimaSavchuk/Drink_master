import React from 'react';
import { Container } from './AddDrinkPages.styled';
import AddDrinkForm from '../../components/AddDrinkForm';

const AddDrinkPages = () => {
  return (
    <Container>
      <h2>Add drink</h2>
      <AddDrinkForm />
    </Container>
  );
};

export default AddDrinkPages;
