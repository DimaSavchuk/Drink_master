import React from 'react';
import { Container, ContentBlock } from './AddDrinkPages.styled';
import AddDrinkForm from '../../components/AddDrinkForm';
import PopularDrinks from '../../components/PopularDrinks';
import FollowUs from '../../components/FollowUs/FollowUs';
import { fetchPopularDrinks } from '../../services/axiosConfig';
import { useState } from 'react';

const AddDrinkPages = () => {
  // const [popDrinks, setPopDrinks] = useState();

  // fetchPopularDrinks().then((r) => {
  //   setPopDrinks(r.data);
  //   console.log('response', r);
  // });

  return (
    <Container>
      <AddDrinkForm />

      <ContentBlock>
        <FollowUs />
        <PopularDrinks />
      </ContentBlock>
    </Container>
  );
};

export default AddDrinkPages;
