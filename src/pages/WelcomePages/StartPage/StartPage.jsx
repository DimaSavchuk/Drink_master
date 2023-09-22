// import React from 'react';
import {
  StartPageStyled,
  Container,
  Title,
  Text,
  Wrapper,
  StyledLink,
} from './StartPage.styled';

const StartPage = () => {
     
  
  return (
    <StartPageStyled>
      <Container>
        <Title>Welcome to the app!</Title>
        <Text>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Text>
        <Wrapper>
          <StyledLink to="/registration">Sign Up</StyledLink>
          <StyledLink to="/login"> Sign In</StyledLink>
        </Wrapper>
      </Container>
    </StartPageStyled>
  );
};

export default StartPage;
