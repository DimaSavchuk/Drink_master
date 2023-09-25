import axios from 'axios';
import * as Yup from 'yup';
// import { Notify } from 'notiflix';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  ErrorMessage,
} from './Footer.styled';
import sprite from '../../assets/sprite.svg';
import { IconWrapper, StyledLink } from '../Header/Header.styled';
import { useState } from 'react';
import { useFormik } from 'formik';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required(),
});

export const Footer = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { email } = values;
      try {
        await axios.post('/users/subscribe', { email });
        toast.success('Email was successfully send.');
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong. Try again later.', {
          theme: 'dark',
        });
      }
      resetForm();
    },
  });
  const isDisable = formik.values.email === '';

  const isInvalid =
    formik.touched.email && formik.values.email && formik.errors.email;
  const isValid = formik.touched.email && !formik.errors.email;

  return (
    <FooterStyled>
      <ToastContainer theme="dark" />
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
                      href="https://www.facebook.com/goITclub/"
                    >
                      <IconWrapper
                        size={'22px'}
                        size768={'28px'}
                        fill={'#f3f3f3'}
                      >
                        <use href={`${sprite}#icon-facebook`} />
                      </IconWrapper>
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink
                      target="_blank"
                      href="https://www.instagram.com/goitclub/"
                    >
                      <IconWrapper
                        size={'22px'}
                        size768={'28px'}
                        fill={'#f3f3f3'}
                      >
                        <use href={`${sprite}#icon-instagram`} />
                      </IconWrapper>
                    </SocialLink>
                  </li>
                  <li>
                    <SocialLink
                      target="_blank"
                      href="https://www.youtube.com/c/GoIT"
                    >
                      <IconWrapper
                        size={'22px'}
                        size768={'28px'}
                        fill={'#f3f3f3'}
                      >
                        <use href={`${sprite}#icon-youtube`} />
                      </IconWrapper>
                    </SocialLink>
                  </li>
                </SocialList>
              </div>
              <NavList>
                <li>
                  <NavLink to="/drinks">Drinks</NavLink>
                </li>
                <li>
                  <NavLink to="/adddrink">Add drink</NavLink>
                </li>
                <li>
                  <NavLink to="/mydrinks">My drinks</NavLink>
                </li>
                <li>
                  <NavLink to="/favorites">Favorites drinks</NavLink>
                </li>
              </NavList>
            </ContentWrapper>

            <FormContainer>
              <Text>
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
              </Text>
              <Form onSubmit={formik.handleSubmit}>
                <div style={{ position: 'relative' }}>
                  <Input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter the email"
                    isInvalid={isInvalid}
                    isValid={isValid}
                  ></Input>
                  {isInvalid ? (
                    <IconWrapper
                      size={'20px'}
                      size1440={'20px'}
                      style={{ position: 'absolute', top: 16, right: 24 }}
                    >
                      <use href={`${sprite}#icon-error-sign`}></use>
                    </IconWrapper>
                  ) : isValid ? (
                    <IconWrapper
                      size={'20px'}
                      size1440={'20px'}
                      style={{ position: 'absolute', top: 16, right: 24 }}
                    >
                      <use href={`${sprite}#icon-sucess-sign`}></use>
                    </IconWrapper>
                  ) : null}
                </div>
                {isInvalid ? (
                  <ErrorMessage
                    style={{
                      color: '#DA1414',
                    }}
                  >
                    This is an ERROR email
                  </ErrorMessage>
                ) : isValid ? (
                  <ErrorMessage
                    style={{
                      color: '#3CBC81',
                    }}
                  >
                    This is an CORRECT email
                  </ErrorMessage>
                ) : null}
                <Button type="submit" disabled={isDisable}>
                  Subscribe
                </Button>
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
