import { Container, ContentBlock } from './AddDrinkPages.styled';
import AddDrinkForm from '../../components/AddDrinkForm';
import PopularDrinks from '../../components/PopularDrinks';
import FollowUs from '../../components/FollowUs/FollowUs';

const AddDrinkPages = () => {
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
