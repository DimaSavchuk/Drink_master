import { Link } from 'react-router-dom';
import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';
import {
  FooterStyled,
  SocialLink,
  SocialList,
  ContentWrapper,
  NavList,
  NavLink,
  Text,
  Form,
  Input,
  Button,
  PolicyContainer,
  PolicyText,
  RightsContainer,
  CommonWrapper,
  FormContainer,
} from './Footer.styled';
import sprite from '../../assets/sprite.svg';
import { IconWrapper, StyledLink } from '../Header/Header.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <CommonContainer>
        <div>
          <CommonWrapper>
            <ContentWrapper>
              <div>
                <StyledLink to="/">
                  <IconWrapper size={'22px'} size768={'28px'} size1440={'28px'}>
                    <use href={`${sprite}#icon-logo`} />
                  </IconWrapper>
                  Drink Master
                </StyledLink>
                <SocialList>
                  <li>
                    <SocialLink
                      target="_blank"
                      href="https://www.youtube.com/c/GoIT"
                    >
                      <IconWrapper size={'22px'} size768={'28px'}>
                        <use href={`${sprite}#icon-facebook`} />
                      </IconWrapper>
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink
                      target="_blank"
                      href="https://www.youtube.com/c/GoIT"
                    >
                      <IconWrapper size={'22px'} size768={'28px'}>
                        <use href={`${sprite}#icon-instagram`} />
                      </IconWrapper>
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink
                      target="_blank"
                      href="https://www.youtube.com/c/GoIT"
                    >
                      <IconWrapper size={'22px'} size768={'28px'}>
                        <use href={`${sprite}#icon-youtube`} />
                      </IconWrapper>
                    </SocialLink>
                  </li>
                </SocialList>
              </div>
              <NavList>
                <li>
                  <NavLink>Drinks</NavLink>
                </li>
                <li>
                  <NavLink>Add drink</NavLink>
                </li>
                <li>
                  <NavLink>My drinks</NavLink>
                </li>
                <li>
                  <NavLink>Favorites drinks</NavLink>
                </li>
              </NavList>
            </ContentWrapper>

            <FormContainer>
              <Text>
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
              </Text>
              <Form>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter the email"
                ></Input>
                <Button type="submit">Subscribe</Button>
              </Form>
            </FormContainer>
          </CommonWrapper>

          <RightsContainer>
            <PolicyText>©2023 Drink Master. All rights reserved.</PolicyText>
            <PolicyContainer>
              <PolicyText>Privacy Policy</PolicyText>
              <PolicyText>Terms of Service</PolicyText>
            </PolicyContainer>
          </RightsContainer>
        </div>
      </CommonContainer>
    </FooterStyled>
  );
};
