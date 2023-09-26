import React from 'react';
import { Container } from './AddDrinkPages.styled';
import AddDrinkForm from '../../components/AddDrinkForm';
import PopularDrinks from '../../components/PopularDrinks';
import SocialLinks from '../../components/SocialLinks';

const AddDrinkPages = () => {
  return (
    <Container>
      <div>
        <h2>Add drink</h2>
        <AddDrinkForm />
      </div>
      <div>
        <h3>Follow us</h3>
        <SocialLinks />
      </div>
      <div>
        <PopularDrinks />
      </div>
    </Container>
  );
};

export default AddDrinkPages;
